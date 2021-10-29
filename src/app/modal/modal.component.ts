import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor( private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute) {
    route.params.subscribe(val => {
      
    

    });
  }

  ngOnInit() {}
  imagesrc:any;
  async getPicture() {
    let imgUrl = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    let base64Image = 'data:image/jpeg;base64,' + imgUrl;
    console.log(base64Image);
    this.http.post('/processImage', { dataUrl: base64Image }).subscribe((response: any) => {
      console.log(response);
      if (response.success == true) {
        this.imagesrc = response.productData;

      }

    }, (error: any) => {
      console.log(error);
    }
    );
  }
}
