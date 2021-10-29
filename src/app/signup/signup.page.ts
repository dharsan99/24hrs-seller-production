import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import validator from 'validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController) { }


  ngOnInit() {
  }


  emailid: any = '';
  sellername: any = '';
  mobilenumber: any = '';
  password: any = '';

  emailidRes: any = false;
  usernameRes: any = false;
  mobilenumberRes: any = false;
  passwordRes: any = false;

  isNotMbileAlert: any = false;
  isNotEmailAlert: any = false;
  isUserNameAlert: any = false;

  pwLowercaseAlert: any = false;
  pwUppercaseAlert: any = false;
  pwNumberAlert: any = false;
  pwMinimumAlert: any = false;
  invalidAlert: any = false;

  isEmail() {
    this.emailidRes = (validator.isEmail(this.emailid));
    if ((this.emailidRes)) {
      this.isNotEmailAlert = false
    } else {
      this.isNotEmailAlert = true
    }
  }

  // isUserName(username) {
  //   console.log(username);

  //   var regex = /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/;
  //   this.usernameRes = (regex.test(username));
  //   console.log(this.usernameRes);

  //   if (this.usernameRes) {
  //     this.isUserNameAlert = false
  //   } else {
  //     this.isUserNameAlert = true
  //   }
  //   return regex.test(username);
  // }

  // isMobileNum(mobilenumber) {
  //   console.log(mobilenumber);

  //   var regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  //   this.mobilenumberRes = (regex.test(mobilenumber));
  //   console.log(this.mobilenumberRes);

  //   if (this.mobilenumberRes) {
  //     this.isNotMbileAlert = false
  //   } else {
  //     this.isNotMbileAlert = true
  //   }
  //   return regex.test(mobilenumber);
  // }

  passwordValidation(pw) {
    console.log(pw);

    var lowerCaseLetters = /[a-z]/g;
    this.passwordRes = (lowerCaseLetters.test(pw));

    if (this.passwordRes) {
      this.pwLowercaseAlert = false
    } else {
      this.pwLowercaseAlert = true
    }


    var upperCaseLetters = /[A-Z]/g;
    this.passwordRes = (upperCaseLetters.test(pw));

    if (this.passwordRes) {
      this.pwUppercaseAlert = false
    } else {
      this.pwUppercaseAlert = true
    }

    var numbers = /[0-9]/g;
    this.passwordRes = (numbers.test(pw));

    if (this.passwordRes) {
      this.pwNumberAlert = false
    } else {
      this.pwNumberAlert = true
    }




    if (pw.length >= 8) {
      this.pwMinimumAlert = false
    } else {
      this.pwMinimumAlert = true
    }

    return numbers.test(pw);
  }




  signup() {



    if (!this.emailidRes) {
      this.isNotEmailAlert = true
    }

    if(!this.passwordRes){
      this.invalidAlert = true
    }
    // if (!this.usernameRes) {
    //   this.isUserNameAlert = true
    // }
    // if (!this.mobilenumberRes) {
    //   this.isNotMbileAlert = true
    // }


    // if (!this.emailidRes && !this.usernameRes && !this.mobilenumberRes ) {
    //   return false
    // }
    if (!this.emailidRes && !this.passwordRes) {
      return false
    }
    const userData = {
      seller_name: this.sellername,
      email_id: this.emailid,
      mobile_number: this.mobilenumber,
      password: this.password
    }

    this.http.post('/seller_register', userData).subscribe((response: any) => {
      if (response.success == "true") {
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
        console.log(response);

        this.navigateSigninPage()
      }
    }, (error: any) => {
      console.log(error);
    }
    );


  }

  navigateSigninPage() {
    this.sellername = ''
    this.emailid = ''
    this.mobilenumber = ''
    this.password
    this.router.navigate(['/tabs'])
  }
  signinPage() {
    this.router.navigate(['/'])
  }


}

