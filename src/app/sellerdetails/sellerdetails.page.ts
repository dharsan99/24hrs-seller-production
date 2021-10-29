import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sellerdetails',
  templateUrl: './sellerdetails.page.html',
  styleUrls: ['./sellerdetails.page.scss'],
})
export class SellerdetailsPage implements OnInit {

  constructor(private router: Router,private http:HttpService,) { }

  ngOnInit() {
  }

  navigateHome(){
    this.router.navigate(['/tabs'])
  }
}
