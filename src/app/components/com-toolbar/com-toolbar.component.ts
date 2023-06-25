import { Component } from '@angular/core';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AppParameters } from 'src/app/services/app-parameters';
import { CommonModule, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-com-toolbar', 
  templateUrl: './com-toolbar.component.html',
  standalone: true,
  styleUrls: ['./com-toolbar.component.sass'],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, RouterModule, CommonModule, NgIf],
})
export class ComToolbarComponent {

  User: any;
  ObserverUsuarioAutenticado;

  teste = false;

  constructor(private AppParameter: AppParameters,
              private LoginService: LoginService){
    
    this.AppParameter = AppParameter;

    this.ObserverUsuarioAutenticado = this.AppParameter.UserAuth.subscribe(User => {      
      this.User = User;
    });
  }

  Logout(){
    this.LoginService.Logout();
  }
}
