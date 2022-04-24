
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css', './styles/estilos.css']
})
export class ProductComponent implements OnInit {

  public produto: any = {};

  constructor(private route: ActivatedRoute, private storeservice: StoreService, private routes: Router) {
    let productId: any;

    productId = this.route.snapshot.params['id'];

    // this.route.params.subscribe(
    //   {
    //     next: res => productId = res['id'],
    //     error: error => error
    //   }

    // )

    let found = this.storeservice.allProducts(false).find(p => p == productId);
    if (found) {
      this.produto = this.storeservice.getProduct(productId)
    } else {
      this.routes.navigateByUrl('');
    }

  }

  ngOnInit(): void { }

}
