import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { ProductosService } from '../../services/productos.service'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
	producto;
	idDetalle;
	cantidad = 1;
  	constructor(private servicio: ProductosService,private route: ActivatedRoute,private router: Router) { }

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			this.idDetalle = params.get("idDetalle");
			this.servicio.getProductos(this.idDetalle).subscribe((res)=>{
				console.log(res);
				this.producto = res;
			});
		  })
		
	}

	sumarCantidad() {
		this.cantidad = (this.cantidad<10) ? this.cantidad + 1 : 10;
	}

	restarCantidad() {
		this.cantidad = (this.cantidad>1) ? this.cantidad - 1 : 1;
	}

	agregarAlCarrito() {
		this.router.navigateByUrl('/Carrito/'+this.idDetalle);
	}


}
