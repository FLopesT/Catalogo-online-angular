
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css', './styles/estilos.css']
})
export class ProductComponent implements OnInit {

  public produto: any = {};

  constructor(public route: ActivatedRoute, public storeservice: StoreService) {
    let productId: any;
    this.route.params.subscribe(
      res => productId = res['id']
    )
    this.produto = this.storeservice.getProduct(productId)

  }

  ngOnInit(): void { }

}
