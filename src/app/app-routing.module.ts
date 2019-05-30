import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './components/main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule'
      },
     {
       path: 'Detalle/:idDetalle',
       loadChildren: './pages/detalle/detalle.module#DetalleModule'
     },
     {
       path: 'Carrito/:idDetalle',
       loadChildren: './pages/carrito/carrito.module#CarritoModule'
     }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
