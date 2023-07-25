import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  colors = ['orange', 'pink', 'blue', 'red', 'cadetblue'];
  slides = [
    {
      title: "HTML",
      img: "assets/img/html.png",
      icon: "logo-html5",
      p: "HTML (HyperText Markup Language) es el lenguaje de marcado estándar utilizado para crear la estructura y el contenido de las páginas web. Se compone de una serie de etiquetas que definen los elementos y la semántica de una página."
    },
    {
      title: "SCSS",
      img: "assets/img/scss.png",
      icon: "logo-css3",
      p: "SCSS (Sassy CSS) es una extensión de CSS que ofrece características adicionales y una sintaxis más poderosa. Permite utilizar variables, anidamiento de selectores, mixins y más, lo que facilita el mantenimiento y la reutilización del código CSS. SCSS se compila en CSS válido para su uso en los navegadores web."
    },
    {
      title: "TYPESCRIPT",
      img: "assets/img/ts.png",
      icon: "logo-javascript",
      p: "TypeScript es un lenguaje de programación de alto nivel desarrollado por Microsoft. Es un superconjunto de JavaScript que agrega características de tipado estático, interfaces, clases y otros conceptos de programación orientada a objetos. TypeScript se compila en JavaScript para ser ejecutado en cualquier navegador o entorno que admita JavaScript."
    },
    {
      title: "ANGULAR",
      img: "assets/img/Angular.png",
      icon: "logo-angular",
      p: "Angular es un framework de desarrollo de aplicaciones web de código abierto basado en TypeScript. Proporciona una estructura robusta para crear aplicaciones web y móviles escalables y de alto rendimiento, utilizando componentes, enrutamiento, gestión de estado y más."
    },
    {
      title: "IONIC",
      img: "assets/img/ionic.png",
      icon: "logo-ionic",
      p: "Ionic es un framework de desarrollo de aplicaciones móviles híbridas basado en Angular y Apache Cordova. Permite crear aplicaciones multiplataforma utilizando tecnologías web como HTML, CSS y JavaScript, y proporciona una amplia gama de componentes y herramientas para crear interfaces de usuario nativas y funcionales."
    }
  ]

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  finish(){
    console.log("estoy tratando de cerrar");
    this.storage.set("introShow", true);
    this.router.navigateByUrl("/menu/home");
  }

}
