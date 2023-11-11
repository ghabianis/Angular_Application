import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { FormsModule } from '@angular/forms';
import { DataPipePipe } from './data-pipe.pipe';
import { ExtractCharPipe } from './pipes/extract-char.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { ContactMailComponent } from './contact-mail/contact-mail.component';
import { ContactSiteWebComponent } from './contact-site-web/contact-site-web.component';
import { CalculeComponent } from './calcule/calcule.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    DataPipePipe,
    ExtractCharPipe,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    ContactComponent,
    ContactMailComponent,
    ContactSiteWebComponent,
    CalculeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
