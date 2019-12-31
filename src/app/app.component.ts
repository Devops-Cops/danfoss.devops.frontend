import { Component } from '@angular/core';

declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DevOps Application';
  headerValue = 'Login';

  login(username: string) {
    alert('Hello ' + username);
  }
}
