import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {

  }


}
