import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers:[OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica : string
  constructor(private route : ActivatedRoute,private ofertaService : OfertasService) { }

  ngOnInit() {
    this.ofertaService.getOndeFicaID(this.route.parent.snapshot.params['id'])
    .then((resposta:string)=> this.ondeFica = resposta)
  }

}
