import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VechileListComponent } from './Vechile/component/vechile-list/vechile-list.component';
import { VechileService } from './Vechile/service/vechile.service';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    VechileListComponent,
    
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [VechileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
