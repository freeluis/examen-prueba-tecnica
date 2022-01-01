import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
image: any;
previewUrl: any;
reader  = new FileReader();
imagesPreview = [];
objImg: any;
  constructor() { }

  ngOnInit(): void {
    this.objImg = JSON.parse(localStorage.getItem('image'));
  }
  dragOver(evt){
    evt.preventDefault();
  }
  drop(evt){
    evt.preventDefault(); 
    evt.stopPropagation(); 
    let imageFile = evt.dataTransfer.files[0];
    
    this.file(imageFile);
  }
  file(evt){
    this.image = evt;
    this.reader.onloadend = ()=> {
      this.previewUrl = this.reader.result;
      this.imagesPreview.push({img: this.previewUrl, name: this.image.name}); 
    }
    this.reader.readAsDataURL(evt); 
  }
  addImages(){
    if(localStorage.getItem('image')){
      this.imagesPreview = JSON.parse( localStorage.getItem('image')).concat(this.imagesPreview);
      localStorage.setItem('image', JSON.stringify(this.imagesPreview));
      
    } else {
      localStorage.setItem('image', JSON.stringify(this.imagesPreview));
    }

    this.objImg = this.imagesPreview;
    this.imagesPreview = [];
    
  }

}
