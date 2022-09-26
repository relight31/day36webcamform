import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
})
export class CameraComponent implements OnInit {
  constructor(private router: Router, private camSvc: CameraService) {}

  ngOnInit(): void {
    this.width = Math.floor(window.innerWidth / 3);
  }
  webcamImage!: WebcamImage;
  width!: number;
  trigger = new Subject<void>();
  // subjects have subscribers

  triggerSnapshot() {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    console.log(this.webcamImage.imageAsDataUrl);
    // base64 encoding of an image into a string
    this.router.navigate(['/upload']);
  }

  get triggerObservable() {
    return this.trigger.asObservable();
  }
}
