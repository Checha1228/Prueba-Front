import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpClient: HttpClient) { }

  getProductos(detalle) {
		let parametro = (detalle  === "Audifonos" ) ? '19cvev' : '171a5j';
		return this.httpClient.get('https://api.myjson.com/bins/'+ parametro);
  }
}
