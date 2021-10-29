import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgxScrollTopModule } from 'ngx-scrolltop';
@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.page.html',
  styleUrls: ['./myproducts.page.scss'],
})
export class MyproductsPage implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.orderObj()
      // put the code from `ngOnInit` here
     
    });
   }
  exit(){
    this.router.navigate(['/tabs'])
  }
  ngOnInit() {

    
  }
  productList:any = [];

  orderObj(){
    this.route.queryParams
      
      .subscribe(params => {
        this.productList = JSON.parse(params.order); 
        console.log(this.productList);
      }
      
      );
  }

}
