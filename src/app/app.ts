import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ButtonExample } from "./button-example/button-example";
import { CardExample } from "./card-example/card-example";
import { CheckboxExample } from "./checkbox-example/checkbox-example";
import { InputExample } from "./input-example/input-example";
import { AutocompleteExample } from "./autocomplete-example/autocomplete-example";


@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule,
    ButtonExample,
    CardExample,
    CheckboxExample,
    InputExample, AutocompleteExample],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'material-app';
}
