/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::  Tipo        : Classe abstrata                                             ::
::  Descrição   : Singleton de parametros da aplicação                        ::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

import {Injectable} from "@angular/core";
import {UserParameter} from "../interfaces/UserParameter";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
providedIn: "root"
})
export class AppParameters {

    AutToken;
    URL = "http://localhost:3000/"

    UserAuth: BehaviorSubject<UserParameter | null> = new BehaviorSubject<UserParameter | null>(null);

    constructor() {        
    }


}

