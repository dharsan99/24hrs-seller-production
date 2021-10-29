import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute) {
      route.params.subscribe(val => {
      
        this.PopupModel = false;
        
  
      });
    }


  ngOnInit() {
  
  }
  
  PopupModel: any = false;

  support(){
    this.router.navigate(['/support'])
  }

  backToprivious(){
    this.PopupModel = false;
    
   }
  popupModelOpen() {
      this.PopupModel = true;
  }

  updateProfile(){
    this.backToprivious()
    this.router.navigate(['/tabs/tab5'])
  }

}
