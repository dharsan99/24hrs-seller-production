import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private http: HttpService, private router: Router, private menu: MenuController,route: ActivatedRoute,public navCtrl: NavController) { 
    route.params.subscribe(val => {
     

    });
  }

  ngOnInit() {
    
    this.list()
  }



  listOfCat: any = [];
  listOfProduct: any = [];



  myproducts() {
    
    this.http.post('/read_product', '').subscribe((response: any) => {
      this.listOfProduct = response.records;
      console.log(this.listOfProduct);
      this.router.navigate(['/myproducts'], { queryParams: { order: JSON.stringify(this.listOfProduct) } })
    }, (error: any) => {
      console.log(error);
    }
    );

  }

  offer() {
    this.router.navigate(['/tabs/tab4'])
  }

  list() {
    this.http.get('/read_category',).subscribe((response: any) => {
      this.listOfCat = response.records;
    }, (error: any) => {
      console.log(error);
    }
    );
  }
}
