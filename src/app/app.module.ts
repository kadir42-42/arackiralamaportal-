import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { HomeComponent } from './components/home/home.component';
import { GirisComponent } from './components/giris/giris.component';
import { UyeolComponent } from './components/uyeol/uyeol.component';
import { AdminComponent } from './admin/admin.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { AdminsComponent } from './components/admins/admins.component';
import { FormsModule } from '@angular/forms';
import { KiralamaComponent } from './components/kiralama/kiralama.component';



@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    HomeComponent,
    GirisComponent,
    UyeolComponent,
    KayitlarComponent,
    AdminsComponent,
    KiralamaComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
 AngularFireDatabaseModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
