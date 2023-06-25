import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { ComDialogFormComponent } from 'src/app/components/com-dialog-form/com-dialog-form.component';
import { HttpService } from 'src/app/services/http.service';
import { ComDialogComponent } from 'src/app/components/com-dialog/com-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppParameters } from 'src/app/services/app-parameters';


export interface Plantas{
  userID: string;
  id: string;
  plant: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})

export class HomeComponent {

  Route: Router;

  plants: Plantas[];
  
  constructor(public AppParameter: AppParameters,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar,
              public HttpService: HttpService) {}

  AfterViewInit() {
    
  }

  OnDestroy() {
  }

  ngOnInit() {
    this.getPlants();
  }

  
  OpenForm(data): void {
    const dialogRef = this.dialog.open(ComDialogFormComponent, {
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.data) this.createPlant(result.data);
    });
  }

  async createPlant(data){
    let _Retorno;
    const _Promise = this.HttpService.Post("plants", {
        id: data.id,
        plant: data.plant,
        description: data.description, 
        img: data.img,
        userID: this.AppParameter.UserAuth.value?.UserId        
    }).toPromise();
    try {
        _Retorno = await _Promise;
        
        if (!_Retorno)
            throw new Error("Null response");
        if (_Retorno) {
            console.log('Deu certo')
            this.openSnackBar('Congrats! You added ' + data.plant + ' to your plants ');
            this.plants.push(data)          
        }
    } catch (Erro) {    
        this.dialog.open(ComDialogComponent, 
            {
                data: {
                    title: 'Error',
                    text: Erro}});
        throw Erro;
    }
  }

  async getPlants(){
    let _Retorno;
    const _Promise = this.HttpService.Get("plants?userID="+this.AppParameter.UserAuth.value?.UserId).toPromise();
    try {
        _Retorno = await _Promise;
        
        if (!_Retorno)
            throw new Error("Null response");
        if (_Retorno) {
            console.log('Deu certo')
            this.plants = _Retorno;    
        }
    } catch (Erro) {    
        this.dialog.open(ComDialogComponent, 
            {
                data: {
                    title: 'Error',
                    text: Erro}});
        throw Erro;
    }
  
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {duration:5000});
  }

}
