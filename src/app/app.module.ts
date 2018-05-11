import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent,DialogComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  
  
  
  { path: '',
  redirectTo: '/',
  pathMatch: 'full'
  },
  { path: 'home',
    component: HomeComponent
    
  },

  { path: 'contact',
  component: ContactComponent
},

{ path: 'about',
component: AboutComponent
},
  
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    DialogComponent,
    AboutComponent,
    
   
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSidenavModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

 ],




entryComponents: [
  DialogComponent
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
