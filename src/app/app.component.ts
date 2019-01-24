import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isChecked: boolean;
  title = 'FotoQuest';

  onSlideToggle(value) {
    console.log('This is the event ===>' + value);
   this.isChecked = value;
  }
}
