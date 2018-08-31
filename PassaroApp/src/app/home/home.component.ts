import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public Ofertas : Oferta[]
  constructor(private ofertasService : OfertasService) { 
  }

  ngOnInit() {
   // this.Ofertas = this.ofertasService.getOfertas()
   this.ofertasService.getOfertas()
   .then((ofertas:Oferta[]) => {

    this.Ofertas = ofertas
   })
    //console.log(this.Ofertas)
  }
}
