// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-title',
//   templateUrl: './title.component.html',
//   styleUrls: ['./title.component.css']
// })
// export class TitleComponent {

// }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<h1 [style.color]="color">{{ title }}</h1>`,
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() title!: string;
  @Input() color!: string;
}
