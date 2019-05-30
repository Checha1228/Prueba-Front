import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
	idDetalle: string;
	producto: Object;

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

}
