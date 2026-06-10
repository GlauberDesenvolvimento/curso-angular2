import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { ContatosModule } from './contatos/contatos.module';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './inMemoryData.service';
import { DialogService } from './dialog.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContatosModule,
    RoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
