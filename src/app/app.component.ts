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

  login() {
/*     $( 'loginForm' ).on( 'submit', function( event ) {
      event.preventDefault();
      alert( $( this ).serialize() );
    }); */
    const username = document.getElementById('exampleInputEmail1').textContent;
    alert(username.toString());
  }
}
