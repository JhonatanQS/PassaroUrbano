import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public Oferta : Oferta
  constructor(private route : ActivatedRoute, private ofertaService : OfertasService) {

   }

  ngOnInit() {

    let id  = this.route.snapshot.params['id']
    this.ofertaService.getOfertaPorId(id)
    .then((oferta:Oferta)=>this.Oferta = oferta)
  }

}
