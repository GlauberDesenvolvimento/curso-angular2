import { InMemoryDbService } from "angular-in-memory-web-api";
import { Contato } from "./contatos/services/contato.model";
import { CONTATOS } from "./contatos/services/contatos.mock";

export class InMemoryDataService implements InMemoryDbService{

    createDb(){

        let contatos: Contato[] = CONTATOS;

        return {contatos: contatos};

    }

}