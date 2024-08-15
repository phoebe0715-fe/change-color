import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  appTitle = 'Complete Angular Tutorials for Beginners';

  sections = [
    {
      title: 'Directives',
      body: 'The Angular directive helps us to manipulate the DOM. You can change the appearance, behavior, or layout of a DOM element using the directives...',
      color: 'red',
    },
    {
      title: 'Pipes',
      body: 'The Angular pipes are used to Transform the Data. For example, the Date pipe formats the date according to locale rules...',
      color: 'green',
    },
    {
      title: 'Component Life Cycle Hook',
      body: 'The life cycle hooks are the methods that angular invokes on directives and components...',
      color: 'blue',
    },
    {
      title: 'HTTP',
      body: 'The newly designed HttpClient Module allows us to query the Remote API source to get data into our Application...',
      color: 'orange',
    },
  ];

  selectedColor: string = 'black';

  changeColor(newColor: string) {
    this.selectedColor = newColor;
  }
}
