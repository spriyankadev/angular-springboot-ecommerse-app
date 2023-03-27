import { Product } from './../../model/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  currentCategoryId: number = 1;
  searchMode: boolean = false;

  //ActivatedRoute - The current active route that loaded the component , Useful for accessing route parameters.
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.listProducts();

    });
  }

  listProducts() {
    this.searchMode = this.activatedRoute.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.searchProducts();
    } else {
      this.getProductsList();
    }
  }

  getProductsList() {
    //check if id param is available
    const hasCategoryId: boolean = this.activatedRoute.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      //get the "id" param staring. convert staring to a number using the "+" symbol
      //"!" symbol is the non null assertion operator, tells copiler that the object is not null.
      this.currentCategoryId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    } else {
      //category id not available, default to category id 1
      this.currentCategoryId = 1;
    }

    //now get the product for the given category id
    this.productService.getProductList(this.currentCategoryId)
      .subscribe(data => {
        this.productList = data
        console.log("productList {} : ", this.productList);

      });
  }

  searchProducts() {
    const searchKeyword: string = this.activatedRoute.snapshot.paramMap.get('keyword')!;
    //now search for the products using keyword
    this.productService.searchProductList(searchKeyword).subscribe(data => {
      console.log(`filtered product list : ${data}`);
      this.productList = data;
    });
  }
}
