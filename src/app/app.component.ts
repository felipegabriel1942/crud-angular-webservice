import { Component} from '@angular/core';
import { ErroMsgComponent } from './compartilhado/erro-msg/erro-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'CRUD de lembretes com angular';
}
