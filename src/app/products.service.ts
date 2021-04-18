import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:8080/products/';
  constructor(private http: HttpClient) { }
  addProduct(ProductName, ProductDescription, ProductPrice) {
    let obj = {
      'productName': ProductName,
      'productDescription': ProductDescription,
      'productPrice': ProductPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}save`, obj)
      .subscribe(res => {
        if (res != null) {
          alert('saved')
        } else {
          alert('not saved')
        }
      });
  }

  getProducts() {
    return this
      .http
      .get(`${this.uri}get`);
  }

  editProduct(id) {
    return this
      .http
      .get(`${this.uri}edit/${id}`);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      'productName':ProductName,
      'productDescription':ProductDescription,
      'productPrice':ProductPrice
    };
    this
      .http
      .put(`${this.uri}update`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteProduct(produdtName) {  
    return this  
              .http  
              .get(`${this.uri}delete/${produdtName}`);  
  }  

}
