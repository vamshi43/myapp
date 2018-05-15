import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent,DialogComponent, } from './app.component';
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
import { RegistrationComponent } from './registration/registration.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

const appRoutes: Routes = [
  
  
  
  { path: '',
  redirectTo: '/home',
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

{ path: 'registration',
component: RegistrationComponent
},
  
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    DialogComponent,
    AboutComponent,
    RegistrationComponent,
    
   
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
    MatRadioModule,
    MatSidenavModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
 ],

 
entryComponents: [
  DialogComponent,
  // RegistrationComponent
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
