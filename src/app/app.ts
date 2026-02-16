import { Component, signal } from '@angular/core';
import { MainComponent } from "./components/main/main.component";
import { Main2Component } from "./components/main2/main2.component";
import { Main3Component } from "./components/main3/main3.component";
import { Main4Component } from "./components/main4/main4.component";
import { Main5Component } from "./components/main5/main5.component";

@Component({
  selector: 'app-root',
  imports: [MainComponent, Main2Component, Main3Component, Main4Component, Main5Component],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('MaterialApp2');
}
