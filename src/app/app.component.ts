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
