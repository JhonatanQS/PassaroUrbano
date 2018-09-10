import { Oferta } from "./shared/oferta.model";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { URL_API, URL_API2, URL_APIO } from "./app.api";

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

    public getOfertaPorId(id:number) : Promise<Oferta>{
        return this.http.get(`${URL_API}?id=${id}`)
        .toPromise()
        .then((resposta:any)=>resposta.json().shift())
    }

    public getComoUsarID(id:number):Promise<string>{
        return this.http.get(`${URL_API2}?id=${id}`)
        .toPromise()
        .then((resposta:any)=>{
          return resposta.json()[0].descricao
        })
    }
    public getOndeFicaID(id:number):Promise<string>{
        return this.http.get(`${URL_APIO}?id=${id}`)
        .toPromise()
        .then((resposta:any)=>{
          return resposta.json()[0].descricao
        })

    }
}