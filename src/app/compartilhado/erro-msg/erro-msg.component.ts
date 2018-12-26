import { Component } from '@angular/core';

@Component({
  selector: 'app-erro-msg',
  templateUrl: './erro-msg.component.html',
  styleUrls: ['./erro-msg.component.css']
})
export class ErroMsgComponent {

  public error: string;
  setError(error: string, tempo: number = 5000) {
    this.error = error;
    setTimeout(() => {
      this.error = null;
    }, tempo);
  }

}
