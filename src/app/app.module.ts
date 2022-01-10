import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormModule } from './pages/candidate-form/form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginModule } from './pages/user-login/user-login.module';
import { RecruiterModule } from './pages/recruiter/recruiter.module';
import { TranslateModule } from '@ngx-translate/core';
import { translateModuleConfig } from './app.i18n';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { AdminModule } from './pages/admin/admin.module';
import { HeaderUserNameModule } from './components/header-user-name/header-user-name.module';
import { TechInterviewerModule } from './pages/tech-interviewer/tech-interviewer.module';
import { MatSelectModule } from '@angular/material/select';
import { MentorModule } from './pages/mentor/mentor.module';
import { AppStoreModule } from './app-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Interceptor } from './interceptor/interceptor';
import { AdminNavModule } from './components/admin-nav/admin-nav.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CalendarModule } from '../app/components/calendar/calendar.module';
import { ManagerModule } from './pages/manager/manager.module';
import { MultitoolsModule } from './components/multitools/multitools.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    AdminModule,
    BrowserAnimationsModule,
    UserLoginModule,
    RecruiterModule,
    HttpClientModule,
    MatSlideToggleModule,
    TranslateModule.forRoot(translateModuleConfig),
    NotFoundModule,
    HeaderUserNameModule,
    TechInterviewerModule,
    MatSelectModule,
    MentorModule,
    AppStoreModule,
    StoreDevtoolsModule.instrument({ name: 'Example' }),
    AdminNavModule,
    MatSnackBarModule,
    CalendarModule,
    ManagerModule,
	MultitoolsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: Interceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
