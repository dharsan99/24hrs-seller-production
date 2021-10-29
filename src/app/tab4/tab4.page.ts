import { Component } from '@angular/core';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor( private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.isvisible = false;
      this.cardVisible =true;
      this.getCategoryList()
      this.getProductList()
      // put the code from `ngOnInit` here
     
    });

  }

  ngOnInit() {
    
   
  }
  categoryList:any;
  productList:any;
  cardVisible:any = true;
  isvisible:any = false;
  
  addoffer(){
    this.cardVisible =false;
    this.isvisible = true;
    
  }

  
  confirm(){
    this.cardVisible = true;
    this.isvisible = false;
  }

  getCategoryList() {

    this.http.get('/read_category',).subscribe((response: any) => {

      this.categoryList = response.records
      console.log(response.records);

    }, (error: any) => {
      console.log(error);
    }
    );
  }

  getProductList(){
    this.http.get('/read_product',).subscribe((response: any) => {

      this.productList = response.records
      console.log(response.records);

    }, (error: any) => {
      console.log(error);
    }
    );
  }
}
