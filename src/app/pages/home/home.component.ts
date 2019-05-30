import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	config: SwiperOptions = {
		autoplay: 3000, // Autoplay option having value in milliseconds
		paginationElement: '.swiper-pagination', // Pagination Class defined
		paginationHide: false,
		paginationClickable: true,
	};
  constructor(private router: Router) { }

  ngOnInit() {
  }

	irAudifonos() {
		this.router.navigateByUrl('/Detalle/Audifonos');
		}

	irGafas() {
		this.router.navigateByUrl('/Detalle/Gafas');
		}

}
