import { Oferta } from "./shared/oferta.model";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { URL_API } from "./app.api";

@Injectable()
export class OfertasService{

constructor(private http:Http){}

    public getOfertas() : Promise<Oferta[]>{
        
       return this.http.get(`${URL_API}?destaque=true`)
        .toPromise()
        .then((resposta:any)=>resposta.json())
    } 

    public getOfertasPorCategoria(filtro:string) : Promise<Oferta[]>{

        return this.http.get(`${URL_API}?categoria=${filtro}`)
        .toPromise()
        .then((resposta:any)=>resposta.json())
    }
    public getOfertaPorId(id:string) : Promise<Oferta>{
        return this.http.get(`${URL_API}?id=${id}`)
        .toPromise()
        .then((resposta:any)=>resposta.json()[0])
    }
}