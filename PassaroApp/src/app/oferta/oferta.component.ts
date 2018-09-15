import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public Oferta : Oferta
  constructor(private route : ActivatedRoute,private ofertasService : OfertasService ) {

   }
  ngOnInit() {

    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
        .then((oferta:Oferta)=>{
         this.Oferta = oferta})

        //  let meuObservableTeste = Observable.create((observer:Observer<string>)=>{
        //     observer.next('primeiro evento da stream')
        //  });

        //  meuObservableTeste.subscribe(
        //    (resultado : any) => console.log(resultado)
        //  )
  }

}
