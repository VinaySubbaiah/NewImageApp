import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { HttpClientModule } from '@angular/common/http'
import { ImageViewerModule } from "ngx-image-viewer";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule,
    HttpClientModule,
    NgbModalModule,
    ImageViewerModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
