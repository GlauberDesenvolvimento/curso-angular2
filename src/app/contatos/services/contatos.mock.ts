import { Contato } from "./contato.model"

let c1: Contato = new Contato(1, 'Fulano', 'fulano@gmail.com', '(61) 99999-9999');
let c2: Contato = new Contato(2, 'Ciclano', 'ciclano@gmail.com', '(61) 99999-9999');
let c3: Contato = new Contato(3, 'Beltrano', 'beltrano@gmail.com', '(61) 99999-9999');

export const CONTATOS: Contato[] = [ c1, c2, c3 ];