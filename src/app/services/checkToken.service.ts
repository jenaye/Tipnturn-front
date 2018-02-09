import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CheckTokenService extends Http {

    constructor (backend: XHRBackend, options: RequestOptions) {
        const token = localStorage.getItem('token');
        options.headers.set('Authorization', `Bearer ${token}`);
        super(backend, options);
    }

    request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
        const token = localStorage.getItem('token');
        if (typeof url === 'string') {
            if (!options) {
                options = {headers: new Headers()};
            }
            options.headers.set('Authorization', `Bearer ${token}`);
        } else {
            url.headers.set('Authorization', `Bearer ${token}`);
        }
        return super.request(url, options);
    }
}