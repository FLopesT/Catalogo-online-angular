import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { Produto } from 'src/app/interfaces/store-types';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public produtos: Array<Produto> = [];
  
  constructor(public route: ActivatedRoute, public storeservice: StoreService) {
    
    let categoryId:any;
    this.route.params.subscribe(
      res=> categoryId = res['id']
    )
    
    this.produtos = this.storeservice.findCP(categoryId);

  }

  ngOnInit(): void {
  }

}
