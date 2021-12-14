import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blogapp';
  public editorValue: string = '';

  checkValue() {
    console.log('this.editorValue', this.editorValue);
  }
}
