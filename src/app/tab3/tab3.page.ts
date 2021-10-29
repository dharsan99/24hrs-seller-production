import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(public popoverController: PopoverController, private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute) {
    route.params.subscribe(val => {
      
      this.PopupModel = false;
      
      this.getCategoryList()

    });
  }

  ngOnInit() {
    

  }


  public date: string = new Date().toISOString();
  Category: any = '';
  subcategory:any = '';
  productname:any = '';
  description:any = '';
  cost:any = ''
  categoryName:any = '';
  categoryList: any = [];


  PopupModel: any = false;
  

  async upload(ev: any) {
    const popover = await this.popoverController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  
 backToprivious(){
  this.PopupModel = false;
  this.Category = ''
  
 }
 addproduct() {
  
  this.router.navigate(['/myproducts'])
}
  createCategory() {
    this.PopupModel = false;
    const catData = {
      category_name: this.categoryName,
      created_at: this.date
    }

    this.http.post('/create_category', catData).subscribe((response: any) => {
      console.log(response);
      this.Category = ""
      this.getCategoryList()
      if (response.success == "true") {
        console.log("test");
        
        
      }
      
    }, (error: any) => {
      console.log(error);
    }
    );

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

  popupModelOpen() {
    if (this.Category == "1") {
      this.PopupModel = true;
      this.Category = 'Select Your Category'
    }

  }

  addToProduct() {
    

      const productData = {
        category: this.Category,
        subcategory: this.subcategory,
        product_name: this.productname,
        description: this.description,
        cost: this.cost
      }

      this.http.post('/update_product', productData).subscribe((response: any) => {
        console.log(response);
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

          this.addproduct()
        }
      }, (error: any) => {
        console.log(error);
      }
      );

    }

  

  }
