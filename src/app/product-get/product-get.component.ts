import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';  

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products: any[];
  constructor(private ps:ProductsService) { }

  ngOnInit() {  
    this.ps  
      .getProducts()  
      .subscribe((data: any[]) => {  
        this.products = data;  
    }); 
    console.log(this.products) 
  }  

  deleteProduct(productName) {  
    this.ps.deleteProduct(productName).subscribe(res => {  
      this.products.splice(productName, 1);  
    });  
} 
}
