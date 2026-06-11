import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ContatoService } from '../services/contato.service';
import { Contato } from '../services/contato.model';

@Component({
  selector: 'contato-detalhe',
  templateUrl: './contato-detalhe.component.html',
  styleUrls: ['./contato-detalhe.component.scss']
})
export class ContatoDetalheComponent implements OnInit {

  private contatoService: ContatoService;
  private route: ActivatedRoute;
  private location: Location;
  private isNew: Boolean;
  public contato: Contato = new Contato(0, '', '', '');

  constructor(contatoService: ContatoService, route: ActivatedRoute, location: Location) {
    this.contatoService = contatoService;
    this.route = route;
    this.location = location;
    this.contatoService.getNextId().then((nextId)=>{
      this.contato = new Contato(nextId, '', '', '');
    });
  }

  ngOnInit(): void{
    this.route.params.forEach((params: Params)=>{
      let id:number = +params['id'];
      if(id){
        this.isNew = false;
        this.contatoService.getContato(id).then((contato: Contato) => {
          this.contato = contato;
          // console.log(contato);
          // console.log(this.contato);
        });
      }else{
        this.isNew = true;
      }
    });
  }

  onSubmit(): void{
    let promise;

    if(this.isNew){
      promise = this.contatoService.create(this.contato);
    }else{
      promise = this.contatoService.update(this.contato);
    }

    promise.then(() => {this.location.back()});

  }

  log(form){
    console.log(form);
  }

  voltar():void{
    this.location.back();
  }

}
