import { Injectable } from "@angular/core";
import Dexie from 'dexie';

import { People } from "./model";

@Injectable()

export class StarwarsStorageService{

    private db: Dexie;

    constructor(){
        this.db = new Dexie('swdb');    

        this.db.version(1).stores({
            people: "cid, image, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships,created, edited, url"
        });
    }

    save(data: People): Promise<number>{
        return (this.db['people'].put(data));
    }

    findPeople(pattern: any): Promise<People[]>{
        return (
        this.db['people']
            .orderBy('name')
            .filter(peopl => {
                return (pattern.test(peopl.name));
            })
            .toArray()
        );
    }

}