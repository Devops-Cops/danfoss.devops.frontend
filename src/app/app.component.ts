import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sampleLogin';

  login(username: string) {
    alert('Welcome ' + username);
  }
}
