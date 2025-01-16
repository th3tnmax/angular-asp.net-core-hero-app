import { Student, StudentServiceService } from './../student-service.service';
import { Component, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { ToastrService } from 'ngx-toastr';

import {
  ImageCropperComponent,
  ImageCroppedEvent,
  LoadedImage,
} from 'ngx-image-cropper';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-addhero',
  templateUrl: './addhero.component.html',
  styleUrls: ['./addhero.component.css'],
})
export class AddheroComponent {
  // hero={
  //   id:4,
  //   name:'',
  //   age:0,
  //   fku:false,
  //   imgUrl:''
  // }
  hero: Student = {
    id: 0,
    name: '',
    age: 0,
    imgUrl: '',
  };
  // addhero() {
  //   this._shared.students.push(this.hero);
  //   this.hero ={
  //     id:4,
  //     name:'',
  //     age:0,
  //     fku:false,
  //     imgUrl:''
  //   }
  // }
  // selectedimage: File | null = null;
  // imageSelected(event: any) {
  //   const selectedimage = event.target.files[0];
  //   console.log(selectedimage);
  //   if (selectedimage) {
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.hero.imgUrl = e.target.result;
  //     };
  //     reader.readAsDataURL(selectedimage);

  //   }
  // }
@ViewChild('lgModal')lgModal!:any;

  imageChangedEvent: any = '';
  croppedImage: any  = '';
  myfile:any = '';
  croppedImageBase64: any = '';
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    console.log(event.target.files[0].name);
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    // event.blob can be used to upload the cropped image
    this.croppedImageBase64 = event.base64?.split(',')[1];
    console.log(this.croppedImageBase64); // This will log only the Base64 part    
  }
  imageLoaded(image?: LoadedImage) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  saveImage(){
    this.lgModal.hide();
    this.hero.imgUrl = this.croppedImageBase64;
    console.log(this.hero.imgUrl);
  }

  addhero() {
    this.studentService.addStudent(this.hero).subscribe(() => {
      this.resetForm();
      this.toastor.success('Student added successfully!', 'Success!');
    });
  }
  resetForm() {
    this.hero = {
      id: 0,
      name: '',
      age: 0,
      imgUrl: '',
    };
  }

  constructor(
    public studentService: StudentServiceService,
    private toastor: ToastrService
  ) {}
}
