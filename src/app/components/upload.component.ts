import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  constructor(private camSvc: CameraService, private router: Router) {}
  imageSrc!: String;
  ngOnInit(): void {
    if (!this.camSvc.image) {
      // if the page is refreshed and all components are destroyed and recreated
      this.router.navigate(['/']);
    } else {
      this.imageSrc = this.camSvc.image;
    }
  }
}
