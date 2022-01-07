import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { GirisComponent } from './components/giris/giris.component';
import { UyeolComponent } from './components/uyeol/uyeol.component';
import { AdminsComponent } from './components/admins/admins.component';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { KiralamaComponent } from './components/kiralama/kiralama.component';

const routes: Routes = [

{path: '', component : HomeComponent},

{path: 'araclarımız', component : Test1Component},

{path: 'konular', component : Test2Component},

{path: 'giris', component : GirisComponent},

{path: 'Uyeol', component : UyeolComponent},

{path: 'admins', component : AdminsComponent},

{path: 'kayitlar', component : KayitlarComponent},

{path: 'kiralama', component : KiralamaComponent}


,


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
