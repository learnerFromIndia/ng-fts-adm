import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Route } from '../model/trips.model';

@Injectable()
export class RouteService {

    constructor(private http: Http) { }

    getRoute():Observable<Route[]> {
        return this.http.get('http://localhost:8080/fts-services/api/routes/1').map(response => response.json());
    }

    
}