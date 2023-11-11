import { NgModule } from '@angular/core';
import { ResolveFn, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { ContactMailComponent } from './contact-mail/contact-mail.component';
import { ContactSiteWebComponent } from './contact-site-web/contact-site-web.component';
import { CalculeComponent } from './calcule/calcule.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contact', component: ContactComponent,
    children: [
      { path: 'contactMail', component: ContactMailComponent },
      { path: 'contactSiteWeb', component: ContactSiteWebComponent }
    ]
  },
  { path: 'Calc', component: CalculeComponent },
  { path: '**', component: NotfoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
