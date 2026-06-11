import { Injectable } from '@angular/core';
import { Contato } from './contato.model';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class ContatoService {
  
  private contatosUrl: string = 'app/contatos';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ) {}
  
  private handleError(err): Promise<any>{
    console.log('Error.', err);
    return Promise.reject(err.message || err)
  } 

  getContatos(): Promise<Contato[]> {
    return this.http.get(this.contatosUrl)
      .toPromise()
      .then(response => response.json() as Contato[])
      .catch(this.handleError);
    // return Promise.resolve(CONTATOS);
  }

  getNextId(): Promise<number> {
    return this.http.get(this.contatosUrl)
      .toPromise()
      .then(response => {
        const contatos: Contato[] = response.json();
        let ids = contatos.map(c => c.id);
        let max = 0;
        for(let i=0; i<ids.length; i++){
          if (ids[i] > max) {
            max = ids[i];
          }
        }
        return contatos.length ? max + 1 : 1;
      })
      .catch(this.handleError);
    // return Promise.resolve(CONTATOS);
  }

  create(contato: Contato): Promise<Contato> {
    return this.http
    .post(this.contatosUrl, JSON.stringify(contato), {headers: this.headers})
    .toPromise()
    .then((response: Response) => response.json() as Contato)
    .catch(this.handleError);
  }

  update(contato: Contato): Promise<Contato> {
    return this.http
    .put(`${this.contatosUrl}/${contato.id}`, JSON.stringify(contato), {headers: this.headers})
    .toPromise()
    .then((response: Response) => response.json() as Contato)
    .catch(this.handleError);
  }

  delete(contato: Contato): Promise<Contato>{
    return this.http
    .delete(`${this.contatosUrl}/${contato.id}`, {headers: this.headers})
    .toPromise()
    .then(() => contato)
    .catch(this.handleError);
  }

  getContato(id: number): Promise<Contato>{
    return this.getContatos().then((contatos: Contato[]) => contatos.find(c => c.id === id));
  }

  getContatosSlowly(): Promise<Contato[]> {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    }).then(()=>{
      console.log("Primeiro Then");
      return "Curso Angular 2";
    }).then((param: string)=>{
      console.log("Segundo Then.\nRetorno: "+param);
    }).then(() => this.getContatos());
  }
  
  search(term: string): Observable<Contato[]>{
    return this.http
    .get(`${this.contatosUrl}/?nome=${term}`)
    .map((res: Response) => res.json() as Contato[])
  }

}
