import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosComponent } from './contatos.component';
import { ContatoDetalheComponent } from './save/contato-detalhe.component';
import { ContatoRoutingModule } from './contatos.routing.module';
import { ContatoService } from './services/contato.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ContatoRoutingModule,
    FormsModule
  ],
  exports: [
    ContatosComponent, 
    ContatoDetalheComponent
  ],
  declarations: [
    ContatosComponent,
    ContatoDetalheComponent
  ],
  providers: [
    ContatoService
  ]
})
export class ContatosModule { }
