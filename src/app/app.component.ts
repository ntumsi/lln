import { Component } from '@angular/core';

const d=new Date()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lln';
  year = d.getFullYear()
}
