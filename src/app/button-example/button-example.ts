
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-example',
  imports: [MatButtonModule,MatDividerModule,MatIconModule],
  templateUrl: './button-example.html',
  styleUrl: './button-example.scss'
})
export class ButtonExample {

}


