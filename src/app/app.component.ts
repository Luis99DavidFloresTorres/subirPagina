import { Component } from '@angular/core';
import { clases } from './model.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paginaSandrita';
  hrefvariable='https://api.whatsapp.com/send?phone=79304252&text=hola,%20¿qué%20tal?%20,vi%20estos%20productos%20me%20interesa%20';
  slides = [{'image': 'assets/pezCristiano.jpeg'}, {'image': 'assets/pezcristiano2.jpg'},{'image': 'assets/pezcristiano.jpg'}];
  clase1:clases={titulo:"titulo1",imagen:'assets/WhatsApp Image 2022-08-31 at 15.15.35.jpeg',descripcion:"descripcion1",precio:10.30};
  clase2:clases={titulo:"titulo2",imagen:'assets/WhatsApp Image 2022-08-31 at 15.15.35 (1).jpeg',descripcion:"descripcion2",precio:12.30};
  clase3:clases={titulo:"titulo1",imagen:'assets/WhatsApp Image 2022-08-31 at 15.15.36.jpeg',descripcion:"descripcion1",precio:10.30};
  clase4:clases={titulo:"titulo2",imagen:'assets/WhatsApp Image 2022-08-31 at 15.15.36 (1).jpeg',descripcion:"descripcion2",precio:12.30};
  clase5:clases={titulo:"titulo1",imagen:'assets/WhatsApp Image 2022-08-31 at 15.15.37.jpeg',descripcion:"descripcion1",precio:10.30};
  clase6:clases={titulo:"titulo2",imagen:'assets/WhatsApp Image 2022-08-31 at 15.15.37 (1).jpeg',descripcion:"descripcion2",precio:12.30};
  clase7:clases={titulo:"titulo2",imagen:'assets/WhatsApp Image 2022-08-31 at 15.15.38.jpeg',descripcion:"descripcion2",precio:12.30};
  clase8:clases={titulo:"titulo1",imagen:'assets/WhatsApp Image 2022-08-31 at 15.15.38 (1).jpeg',descripcion:"descripcion1",precio:10.30};
  clase9:clases={titulo:"titulo2",imagen:'assets/WhatsApp Image 2022-08-31 at 15.15.39.jpeg',descripcion:"descripcion2",precio:12.30};
  vector:clases[]=[this.clase1,this.clase2, this.clase3, this.clase4, this.clase5, this.clase6, this.clase7, this.clase8, this.clase8, this.clase9,
  this.clase1];
  vectorHombres:clases[]=[]
  vectorMujeres:clases[]=[this.clase1,this.clase2]
  vectorAnimales:clases[]=[this.clase3]
  vectorHogar:clases[]=[this.clase4,this.clase5,this.clase6,this.clase7,this.clase9]
  mensajeClick(titulo:String){
    this.hrefvariable+=titulo+'?';
  }
  hombre(){
    this.vector=this.vectorHombres
  }
  mujer(){
    this.vector=this.vectorMujeres
  }
  animal(){
    this.vector=this.vectorAnimales
  }
  hogar(){
    this.vector=this.vectorHogar
  }
}
