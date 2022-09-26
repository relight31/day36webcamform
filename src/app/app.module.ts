import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CameraComponent } from './components/camera.component';
import { CameraService } from './services/camera.service';
import { UploadComponent } from './components/upload.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: CameraComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, CameraComponent, UploadComponent],
  imports: [
    BrowserModule,
    WebcamModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CameraService],
  bootstrap: [AppComponent],
})
export class AppModule {}
