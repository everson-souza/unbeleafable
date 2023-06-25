/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::  File Type   : Service                                                       ::
::  Description : Service with common utilities                                 ::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

import {Compiler, ElementRef, Injectable, Injector, NgModuleFactory, Type} from "@angular/core";
import {DatePipe} from "@angular/common";
import {TranslateService} from "@ngx-translate/core";
import {Big} from "big.js";
import {Md5} from "ts-md5/dist/md5";
import {UserParameter} from "../interfaces/UserParameter";
import {map, timeout} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class UtilService {

    constructor(private Date: DatePipe,
                private compiler: Compiler,
                private injector: Injector,
                private Http: HttpClient,
                private Translate: TranslateService) {
    }

    isElectron() {
        return (window as any).require;
    }

    /**f
     * Gera um md5 da string
     */
    Md5(Valor: string): string {
        const _Valor = Md5.hashStr(Valor);
        return typeof _Valor === "string" ? _Valor : (_Valor as any).toString();
    }

    isFunction(Objeto) {
        if (!Objeto) {
            return false;
        }
        return typeof Objeto === "function";
    }

    isString(Obj) {
        return typeof Obj === "string";
    }

    isPromise(Obj) {
        return Obj && Obj.then && this.isFunction(Obj.then);
    }


    async getQueryParameter(QueryParameter, ValorPesquisa?) {
        let _Parametros;
        if (QueryParameter && this.isFunction(QueryParameter)) {
            const _Retorno = QueryParameter(ValorPesquisa);
            if (this.isPromise(_Retorno)) {
                _Parametros = await _Retorno;
            } else {
                _Parametros = _Retorno;
            }
        } else {
            _Parametros = QueryParameter;
        }
        return _Parametros;
    }
  
    getItemLocalStorage(Chave) {
        return localStorage.getItem(Chave);
    }

    setItemLocalStorage(Chave, Objeto) {
        localStorage.setItem(Chave, this.isString(Objeto) ? Objeto : JSON.stringify(Objeto));
    }
}

export enum TypeColorConsole {
    Red = 1,
    Green = 2,
    Yellow = 3,
    Blue = 4,
}
