import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Summary, Film } from './model';

const URL = ''

@Injectable()

export class SakilaService{

    constructor(private http: HttpClient){}

    getFilm(fid: number): Promise<Film[]>{
        return (
            this.http.get<Film[]>(URL + `film/${fid}`)
                .toPromise()
        );
    }

    getFilms(offset=0, limit=20): Promise<Summary[]>{
        const params = new  HttpParams()
        .set('offset', offset + '')
        .set('limit', limit + '');

        return (
            this.http.get<Summary[]>(URL + 'films', {params : params})
                .toPromise()
        )
    }




}
