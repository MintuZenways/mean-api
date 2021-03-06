import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private product: ProductService) { }
  products:any = [];
  ngOnInit(): void {
    this.product.getAll().subscribe(res => {
      console.log(res);
      this.products = res;
    });
  }

  

}
