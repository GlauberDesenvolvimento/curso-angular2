import { Component, OnInit } from '@angular/core';
import { ContatoService } from './services/contato.service';
import { Contato } from './services/contato.model';

@Component({
  selector: 'contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {
  
  private currentTimeout: any;
  private contatoService:ContatoService;
  public contatos: Contato[] = [];
  public mensagem: {};
  public classesCss: {};
  
  constructor(contatoService:ContatoService) {
    this.contatoService = contatoService;
  }

  ngOnInit():void {
    this.contatoService.getContatos().then((contatos: Contato[]) => {
      this.contatos = contatos;
    }).catch(err => {
      console.log("Aconteceu um erro", err);
      this.mostrarMensagem({
        tipo: "danger",
        texto: "Ocorreu um erro ao buscar a lista"
      });
    });
  }

  onDelete(contato: Contato): void{
    this.confirm('Deseja deletar o contato: '+ contato.nome)
    .then((canDelete: Boolean) => {
      if(canDelete){
        this.contatoService
        .delete(contato)
        .then((c: Contato) => {

          this.contatos = this.contatos.filter((c: Contato)=> c.id != contato.id )

          this.mostrarMensagem({
            tipo: "success",
            texto: "Contato deletado"
          });

        }).catch(err => {
          console.log(err);
          this.mostrarMensagem({
            tipo: "danger",
            texto: "Ocorreu um erro"
          });
        })
      }
    })
  }

  private mostrarMensagem(mensagem: {tipo: string, texto: string}):void{
    this.mensagem = mensagem;
    this.montarClasses(mensagem.tipo);
    if(mensagem.tipo != "danger"){

      if(this.currentTimeout){
        clearTimeout(this.currentTimeout);
      }

      this.currentTimeout = setTimeout(()=> {
        this.mensagem = undefined;
      }, 3000);

    }
  }

  private montarClasses(tipo: string):void{
    this.classesCss = {
      'alert': true
    };
    this.classesCss['alert-' + tipo] = true; //alert-
    /**
     * {
     * 'alert': true,
     * 'alert-success': true,
     * 'alert-danger': true,
     * }
     */
  }

  confirm(message?: string){
    return new Promise(resolve => {
        return resolve(window.confirm(message || 'Confirmar'));
    });
  }

}
