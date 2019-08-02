# Implementación de meta descripción y de title 

´´´´´´´´´
npm install
´´´´´´´´´

- se envia los datos de seo enlas url de la siguiente forma en el routing.module.ts.

´´´´´´´´
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

´´´´´´´´

- en el app.component.ts se extraeria de la sigente forma.

´´´´´´´´
import { Component } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string;
  descripcion: string;
  constructor(private router: Router, private title: Title, private meta: Meta) {
    this.getDataRoute().subscribe((data: any) => {
      console.log(data);
      this.titulo = data.titulo;
      this.descripcion = data.descripcion;
      this.title.setTitle(this.titulo);
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.descripcion
      };
      this.meta.updateTag(metaTag);
    });
  }

  getDataRoute() {
    return this.router.events
      .pipe(
        filter((event) => {
          return event instanceof ActivationEnd;
        }),
        filter((event: ActivationEnd) => {
          return event.snapshot.firstChild === null;
        }),
        map((event: ActivationEnd) => {
          return event.snapshot.data;
        })
      );
  }

}

´´´´´´´´