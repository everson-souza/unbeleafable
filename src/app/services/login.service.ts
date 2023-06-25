/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::  File Type   : Service                                                       ::
::  Description : Service to login into the application                         ::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpService} from "./http.service";
import {UtilService} from "./util.service";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import {UserParameter} from "../interfaces/UserParameter";
import { ComDialogComponent } from "../components/com-dialog/com-dialog.component";
import { AppParameters } from "./app-parameters";

@Injectable({
    providedIn: "root"
})
export class LoginService {

    constructor(private AppParameter: AppParameters,
                private Util: UtilService,
                private HttpService: HttpService,
                private Rotas: Router,
                public dialog: MatDialog) {
    }

    async DoLogin(UserName: string, Senha: string): Promise<UserParameter> {
        let _Retorno;
        const _Promise = this.HttpService.Post("login", {
            email: UserName,
            password: Senha,            
        }).toPromise();
        try {
            _Retorno = await _Promise;
            
            if (!_Retorno)
                throw new Error("Null response");
            if (_Retorno.accessToken) {
                const _Usuario = this.setUser(_Retorno);
                if (_Usuario.User) {
                    return _Usuario.User;                    
                }
            }
            throw new Error("User not set");
        } catch (Erro) {    
            this.dialog.open(ComDialogComponent, 
                {
                    data: {
                        title: 'Error',
                        text: Erro}});
            throw Erro;
        }
    }
    

    async Register(UserName: string, Senha: string, Firstname: string): Promise<UserParameter> {
        let _Retorno;
        const _Promise = this.HttpService.Post("register", {
            email: UserName,
            password: Senha,            
            firstname: Firstname
        }).toPromise();
        try {
            _Retorno = await _Promise;
            
            if (!_Retorno)
                throw new Error("Null response");
            if (_Retorno.accessToken) {
                const _Usuario = this.setUser(_Retorno);
                if (_Usuario.User) {
                    return _Usuario.User;                    
                }
            }
            throw new Error("User not set");
        } catch (Erro) {    
            this.dialog.open(ComDialogComponent, 
                {
                    data: {
                        title: 'Error',
                        text: Erro}});
            throw Erro;
        }
    }

    private setUser(Access: any) {
        const _User: UserParameter = new UserParameter();
        _User.UserEmail = Access.user.email;
        _User.UserName = Access.user.firstname;
        _User.UserLastName = Access.user.lastname;
        _User.UserAge = Access.user.age;
        _User.UserId = Access.user.id;

        localStorage.setItem("user", JSON.stringify(Access.user));
        localStorage.setItem("accessToken", Access.accessToken);

        this.AppParameter.UserAuth.next(_User);

        return {
            User: _User,
        };
    }

    Logout() {
        this.Rotas.navigate(["login"]);
        this.AppParameter.UserAuth.next(null);
        
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
    }
    
    async ChangePassword(Email) {
        try {
            const _Promise = this.HttpService.Post('changePassword', {
                Email
            }).toPromise();
            return await _Promise;
        }
        catch (Erro) {            
            throw Erro;
        }
    }
}
 