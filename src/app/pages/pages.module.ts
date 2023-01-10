import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Body1Component } from './body1/body1.component';
import { Body2Component } from './body2/body2.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    HeaderComponent,
    Body1Component,
    Body2Component,
    FooterComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    Body1Component,
    Body2Component,
    FooterComponent,
    HeaderComponent
  ]
})
export class PagesModule { }
