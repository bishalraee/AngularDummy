import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface Task{
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-checkbox-example',
  imports: [MatCheckboxModule],
  templateUrl: './checkbox-example.html',
  styleUrl: './checkbox-example.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CheckboxExample {
  readonly task = signal<Task>({
    name: 'Parent task',
    completed: false,
    subtasks: [
      {name: 'child task 1', completed: false},
      {name: 'child task 2', completed: false},
      {name: 'child task 3', completed: false},
    ],
  });

  readonly partiallyComplete = computed(() => {
    const task = this.task();
    if(!task.subtasks){
      return false;
    }
    return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
  });

  update(completed:boolean, index?: number){
    this.task.update(task => {
      if(index === undefined){
        task.completed = completed;
        task.subtasks?.forEach(t => (t.completed = completed));
      }
      else{
        task.subtasks![index].completed = completed;
        task.completed = task.subtasks?.every(t => t.completed) ?? true;
      }
      return {...task};
    });
  }
}
