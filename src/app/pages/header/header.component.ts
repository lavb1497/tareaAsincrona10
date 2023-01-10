import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  newNombre!:string;
  newTarea!:string;
  nombres:any[] = [];

  @Output() enviarNombres = new EventEmitter<any[]>();

  agregarNombre (){
      this.nombres.push({newNombre: this.newNombre, newTarea: this.newTarea});
      this.enviarNombres.emit(this.nombres);
  }
}
