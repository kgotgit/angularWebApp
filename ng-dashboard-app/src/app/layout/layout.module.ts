import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { CommonService } from '../common/common.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, LeftNavComponent],
  exports: [LayoutComponent, HeaderComponent, FooterComponent, LeftNavComponent],
  providers: [ CommonService ]
})
export class LayoutModule { }
