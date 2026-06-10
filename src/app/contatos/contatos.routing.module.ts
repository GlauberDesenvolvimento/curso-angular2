import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './contatos.component';
import { ContatoDetalheComponent } from './save/contato-detalhe.component';

const contatoRoutes: Routes = [
  {
    path: 'contatos',
    component: ContatosComponent
  },
  {
    path: 'contatos/save',
    component: ContatoDetalheComponent
  },
  {
    path: 'contatos/save/:id',
    component: ContatoDetalheComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(contatoRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ContatoRoutingModule { }
