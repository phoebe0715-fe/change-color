// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-section',
//   templateUrl: './section.component.html',
//   styleUrls: ['./section.component.css']
// })
// export class SectionComponent {

// }

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
    <div [style.border-color]="isSelected ? color : 'black'" class="section">
      <h2>{{ title }}</h2>
      <p>{{ body }}</p>
      <button [style.background-color]="color" (click)="onClick()">{{ color | uppercase }}</button>
    </div>
  `,
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() title!: string;
  @Input() body!: string;
  @Input() color!: string;
  @Input() isSelected: boolean = false;

  @Output() colorChange = new EventEmitter<string>();

  onClick() {
    this.colorChange.emit(this.color);
  }
}
