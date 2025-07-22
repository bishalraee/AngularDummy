import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-card-example',
  imports: [MatCardModule,MatButtonModule,MatGridListModule],
  templateUrl: './card-example.html',
  styleUrl: './card-example.scss'
})
export class CardExample {
  Cards = [
    {
      title: 'Shiba Inu',
      subtitle: 'Dog Breed',
      imageURL: "https://material.angular.dev/assets/img/examples/shiba2.jpg",
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },
    {
      title: 'Husky',
      subtitle: 'Dog Breed',
      imageURL: "https://material.angular.dev/assets/img/examples/shiba2.jpg",
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },
    {
      title: 'golden Retriever',
      subtitle: 'Dog Breed',
      imageURL: "https://material.angular.dev/assets/img/examples/shiba2.jpg",
      content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    }
  ]
  }
  

