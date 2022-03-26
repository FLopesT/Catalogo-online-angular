import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { Produto } from 'src/app/interfaces/store-types';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public produtos: Array<Produto> = [];

  constructor(private route: ActivatedRoute, private storeservice: StoreService, private routes: Router) {

    let categoryId: any;
    this.route.params.subscribe({
      next: res => categoryId = res['id'],
      error: error => error
    })

    let found = this.storeservice.allCategorys().find(p => p == categoryId);

    if (found) {
      this.produtos = this.storeservice.findCP(categoryId);
    } else {
      this.routes.navigateByUrl('');
    }

    

  }

  ngOnInit(): void {
  }

}
