import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { ContatosModule } from './contatos/contatos.module';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './inMemoryData.service';
import { ContatoBuscaComponent } from './contatos/busca/contato-busca.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoBuscaComponent
  ],
  imports: [
    BrowserModule,
    ContatosModule,
    RoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
