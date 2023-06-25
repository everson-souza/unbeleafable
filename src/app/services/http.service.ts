
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::  File Type   : Service                                                       ::
::  Description : Service to do http requests                                   ::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

import {Injectable} from "@angular/core";
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, timeout} from "rxjs/operators";
import { AppParameters } from "./app-parameters";

@Injectable({
providedIn: 'root'
})
export class HttpService {

    constructor(private Http: HttpClient, private AppParameter: AppParameters) {
    }

    Post(Url:any, Parameters:any, Timeout = 40000): Observable<any> {
    
        let _Headers = new HttpHeaders().set('Content-Type', 'application/json');        
        return new Observable(Observer => {
            this.Http.post<any>(this.AppParameter.URL + Url, Parameters, {
                headers: _Headers
            }).pipe(
                timeout(Timeout ? Timeout : 40000),
                catchError((Error) => { // Error...
                    // Handle 'timeout over' error
                    if (Error && Error.name == "TimeoutError") {
                        Error.error = {Error : "LOGINSERVICE_TIMEDOUT"};
                    }
                    // Return other errors
                    return throwError(Error);
                })
            ).subscribe(
                (Result) => {
                    Observer.next(Result);
                    Observer.complete();
                },
                (Error => {
                    const _Erro: IHttpError = {
                        HttpStatus : Error.status,
                        Status: Error.error && Error.error.Status ?  Error.error.Status : Error.status,
                        Mensagem: Error.error && Error.error.Error ? Error.error.Error : null,
                        ObjetoErro: Error.error,
                        Query: Error.error.Query
                    };
                    Observer.error(_Erro);
                    Observer.complete();
                })
            );
        });
    }

    Put(Url:any, Parameters:any, Timeout = 40000): Observable<any> {
    
        let _Headers = new HttpHeaders().set('Content-Type', 'application/json');        
        return new Observable(Observer => {
            this.Http.put<any>(this.AppParameter.URL + Url, Parameters, {
                headers: _Headers
            }).pipe(
                timeout(Timeout ? Timeout : 40000),
                catchError((Error) => { // Error...
                    // Handle 'timeout over' error
                    if (Error && Error.name == "TimeoutError") {
                        Error.error = {Error : "LOGINSERVICE_TIMEDOUT"};
                    }
                    // Return other errors
                    return throwError(Error);
                })
            ).subscribe(
                (Result) => {
                    Observer.next(Result);
                    Observer.complete();
                },
                (Error => {
                    const _Erro: IHttpError = {
                        HttpStatus : Error.status,
                        Status: Error.error && Error.error.Status ?  Error.error.Status : Error.status,
                        Mensagem: Error.error && Error.error.Error ? Error.error.Error : null,
                        ObjetoErro: Error.error,
                        Query: Error.error.Query
                    };
                    Observer.error(_Erro);
                    Observer.complete();
                })
            );
        });
    }

    Get(Url:any, Timeout = 40000): Observable<any> {
    
        let _Headers = new HttpHeaders().set('Content-Type', 'application/json');        
        return new Observable(Observer => {
            this.Http.get<any>(this.AppParameter.URL + Url, {
                headers: _Headers
            }).pipe(
                timeout(Timeout ? Timeout : 40000),
                catchError((Error) => { // Error...
                    // Handle 'timeout over' error
                    if (Error && Error.name == "TimeoutError") {
                        Error.error = {Error : "LOGINSERVICE_TIMEDOUT"};
                    }
                    // Return other errors
                    return throwError(Error);
                })
            ).subscribe(
                (Result) => {
                    Observer.next(Result);
                    Observer.complete();
                },
                (Error => {
                    const _Erro: IHttpError = {
                        HttpStatus : Error.status,
                        Status: Error.error && Error.error.Status ?  Error.error.Status : Error.status,
                        Mensagem: Error.error && Error.error.Error ? Error.error.Error : null,
                        ObjetoErro: Error.error,
                        Query: Error.error.Query
                    };
                    Observer.error(_Erro);
                    Observer.complete();
                })
            );
        });
    }

}
 
export interface IHttpError {
    HttpStatus: number;
    Status: number;
    Mensagem: string;
    ObjetoErro: any;
    Query?: any;
}

 