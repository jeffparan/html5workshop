import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { People } from './model';

// export interface StarWars {
//     name: string;
//     height: string;
//     mass: string;
//     gender: string;
//     url: string;
// }

const URL = 'https://swapi.com/api/people/'

@Injectable()

export class StarWarsService {

    //if got api key then key in here
    readonly  API_KEY = "7cf49b91cbac420198483abde27d622f";

    constructor(private http: HttpClient){}
   
    searchPeople(id: number): Promise<People>{
        //this.http.get(URL + id)
        return(
            this.http.get<People>(`https://swapi.co/api/people/${id}`)
            .toPromise()
            .then(result => {
                result.cid = id;
                result.image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
                return (result);
            })


        );
    }

    // searchPeople(cat: string, id: number){
    //     //this.http.get(URL + id)
    //     this.http.get(`https://swapi.co/api/${cat}/${id}`)
    // }

}