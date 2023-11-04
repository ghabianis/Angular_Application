import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { FormsModule } from '@angular/forms';
import { DataPipePipe } from './data-pipe.pipe';
import { ExtractCharPipe } from './pipes/extract-char.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    DataPipePipe,
    ExtractCharPipe
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
