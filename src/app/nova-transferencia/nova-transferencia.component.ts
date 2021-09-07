import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from "@angular/core";
import { Transferencia } from '../models/transferencia.model';

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

    @Output() aoTransferir = new EventEmitter<any>();

    valor: number = 0;
    destino: number = 0;

    constructor(private service: TransferenciaService) {}

    transferir(){
      const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

      // this.aoTransferir.emit(valorEmitir);

      this.service.adicionar(valorEmitir).subscribe(
        (sucesso) => {
          console.log(sucesso)
          this.limparCampo();
      }, (erro) =>{
        console.error(erro);
      });
    }

    limparCampo(){
      this.valor = 0;
      this.destino = 0;
    }
}
