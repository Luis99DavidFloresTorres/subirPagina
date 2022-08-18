import { Component } from '@angular/core';
import { clases } from './model.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paginaSandrita';
  hrefvariable='https://api.whatsapp.com/send?phone=76122187&text=hola,%20¿qué%20tal?%20,cuánto%20cuesta%20';
  slides = [{'image': 'assets/pezCristiano.jpeg'}, {'image': 'assets/pezcristiano2.jpg'},{'image': 'assets/pezcristiano.jpg'}];
  clase1:clases={titulo:"titulo1",imagen:'assets/pezCristiano.jpeg',descripcion:"descripcion1",precio:10.30};
  clase2:clases={titulo:"titulo2",imagen:'assets/pezcristiano2.jpg',descripcion:"descripcion2",precio:12.30};
  clase3:clases={titulo:"titulo1",imagen:'assets/pezCristiano.jpeg',descripcion:"descripcion1",precio:10.30};
  clase4:clases={titulo:"titulo2",imagen:'assets/pezcristiano2.jpg',descripcion:"descripcion2",precio:12.30};
  clase5:clases={titulo:"titulo1",imagen:'assets/pezCristiano.jpeg',descripcion:"descripcion1",precio:10.30};
  clase6:clases={titulo:"titulo2",imagen:'assets/pezcristiano2.jpg',descripcion:"descripcion2",precio:12.30};
  clase7:clases={titulo:"titulo2",imagen:'assets/pezcristiano2.jpg',descripcion:"descripcion2",precio:12.30};
  clase8:clases={titulo:"titulo1",imagen:'assets/pezCristiano.jpeg',descripcion:"descripcion1",precio:10.30};
  clase9:clases={titulo:"titulo2",imagen:'assets/pezcristiano2.jpg',descripcion:"descripcion2",precio:12.30};
  clase10:clases={titulo:"titulo2",imagen:'assets/pezcristiano2.jpg',descripcion:"descripcion2",precio:12.30};
  clase11:clases={titulo:"titulo1",imagen:'assets/pezCristiano.jpeg',descripcion:"descripcion1",precio:10.30};
  clase12:clases={titulo:"titulo2",imagen:'assets/pezcristiano2.jpg',descripcion:"descripcion2",precio:12.30};
  vector:clases[]=[this.clase1,this.clase2, this.clase3, this.clase4, this.clase5, this.clase6, this.clase7, this.clase8, this.clase8, this.clase9, this.clase10, this.clase11, this.clase12,
  this.clase12,this.clase1,this.clase10];
  mensajeClick(titulo:String){
    this.hrefvariable+=titulo+'?';
  }
}
