import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.activeItem = "home"

    });
  }
 ngOnInit() {
   
 }

  activeItem:any = "home" ;

  close(){

    this.router.navigate(['/'])
  }

  home(){
    this.activeItem = "home"
    this.router.navigate(['/tabs'])
             
  } 

  myproducts(){
    this.activeItem = "myproducts"
    this.router.navigate(['/myproducts'])
              
  }

  promotion(){
    this.activeItem = "promotion"
    this.router.navigate(['/tabs/tab2'])             
  }

  Offers(){
    this.activeItem = "offers"
    this.router.navigate(['/tabs/tab4'])             
  }


  myprofile(){
    this.activeItem = "myprofile"
    this.router.navigate(['/tabs/tab5'])             
  }

  support(){
    this.activeItem = "support"
    this.router.navigate(['/support'])             
  }

  logout(){
    this.activeItem = "logout"
    this.router.navigate(['/'])
  }
  
}
