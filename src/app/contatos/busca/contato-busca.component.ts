import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contato } from '../services/contato.model';
import { ContatoService } from '../services/contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'contato-busca',
  templateUrl: './contato-busca.component.html',
  styleUrls: ['./contato-busca.component.scss']
})
export class ContatoBuscaComponent implements OnInit {

  contatos: Observable<Contato[]>;
  private termosDaBusca: Subject<string> = new Subject<string>();
  // private timeout;

  constructor(
    private contatoService: ContatoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contatos = this.termosDaBusca
      .debounceTime(200) //Delay para chamada
      .distinctUntilChanged() //ignore se o próximo termo for igual ao anterior
      .switchMap(t => t ? this.contatoService.search(t) : Observable.of<Contato[]>([]))
      .catch(err => Observable.of<Contato[]>([]));
    this.contatos.subscribe();
  }

  search(t: string, event: KeyboardEvent): void{
    let codes: Array<number> = new Array(37,38,39,40);//setas
    if(codes.includes(event.keyCode)){
      return;
    }
    if(t.length > 2 && t.length < 24){//Evita escrita com busca exagerada
      // if(this.timeout){
      //   clearTimeout(this.timeout);
      // }
      // this.timeout = setTimeout(()=>{ this.termosDaBusca.next(t); }, 200);
      this.termosDaBusca.next(t);
    }
  }

  verDetalhe(contato: Contato, event: Event): void{
    event.preventDefault();
    let link = ['contatos/save', contato.id];
    this.router.navigate(link);
  }

}
