import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public produtos:any = [];

  constructor(private storeservice: StoreService) { 
    this.produtos = this.storeservice.allProducts(true);
  }

  ngOnInit(): void {

  }

}

