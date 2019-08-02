import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';

const routes: Routes = [
  {path: 'pagina1', component: Pagina1Component, data: { titulo: 'pagina 1', descripcion: ' esta es la descripción de la pagina 1' }},
  {path: 'pagina2', component: Pagina2Component, data: { titulo: 'pagina 2', descripcion: ' esta es la descripción de la pagina 2' }},
  {path: 'pagina3', component: Pagina3Component, data: { titulo: 'pagina 3', descripcion: ' esta es la descripción de la pagina 3' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
