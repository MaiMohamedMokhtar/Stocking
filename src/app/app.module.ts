import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DrugStockingComponent } from './drug-stocking/drug-stocking.component';
import { SearchListComponent } from './search-list/search-list.component';
import { BarCodeComponent } from './bar-code/bar-code.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { HttpClientModule } from '@angular/common/http';
import {CommonService} from './common.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DrugStockingComponent,
    SearchListComponent,
    BarCodeComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ZXingScannerModule,
    HttpClientModule,
    
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
