import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';



@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas : Observable<Oferta[]>
  public ofertas2: Oferta[]
  private subjectPesquisa : Subject<string> =new Subject<string>()

  constructor(private ofertaService : OfertasService) {

   }

  ngOnInit() {

    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), 
      distinctUntilChanged(), //busca se o termo for diferente do anterior
      switchMap((termo: string)=>{
        console.log('requisição http para a api ', termo)
 
        if(termo.trim() === ''){
          //retornar um observable de array de ofertas vazio
          return of([])
        }
        return this.ofertaService.pesquisaOferta(termo)
      }),
      catchError ((erro)=> {
        console.log(erro)
        return of([])
      })
    )
    this.ofertas.subscribe((ofertas:Oferta[])=>this.ofertas2 = ofertas)
  }
  public pesquisa(termoDaBusca: string):void{

   this.subjectPesquisa.next(termoDaBusca)
  }
}
