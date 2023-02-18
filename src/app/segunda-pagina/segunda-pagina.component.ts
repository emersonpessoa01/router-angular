import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segunda-pagina',
  templateUrl: './segunda-pagina.component.html',
  styleUrls: ['./segunda-pagina.component.css']
})
export class SegundaPaginaComponent {
  constructor(private route: Router){}

  moverParaPrimeiraPagina(){
    this.route.navigate(["primeira-pagina"])
  }
}
