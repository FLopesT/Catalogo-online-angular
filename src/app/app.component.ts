import { Component } from '@angular/core';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <div class="container">
  <router-outlet></router-outlet>
  </div>
  <app-footer></app-footer>`
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
    

  }

}
