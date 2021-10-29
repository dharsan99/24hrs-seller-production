import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

   constructor(private router: Router,private http:HttpService,
    private toastCtrl: ToastController){}

  ngOnInit() {
  }

  signinemailid:any = '';
  signinpassword:any = '';

  signin(){
    const Data = {
      email_id :  this.signinemailid,
      password : this.signinpassword 
    }
    
    this.http.post('/seller_login', Data).subscribe((response: any) => {
      console.log(response);
      if(response.success == "true"){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })

        this.navigateTabs()
      }else{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Please enter the valid email & password'
        })
      }
    },(error: any) =>{
      console.log(error);
    }
    );
  }

  navigateTabs()
  {
    this.signinemailid ='';
    this.signinpassword ='';
    this.router.navigate(['/sellerpage'])
  }

  signupPage(){
    this.router.navigate(['/signuppage'])
  }

}
