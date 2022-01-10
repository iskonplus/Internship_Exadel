import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserNameComponent } from './header-user-name.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
	HeaderUserNameComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
	HeaderUserNameComponent,
  ]
})
export class HeaderUserNameModule { }
