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

    getAll(): Promise<People[]>{
        return (
            this.db['people'].orderBy('name')
                .toArray()
        );
    }

    find(id: number): Promise<People>{
        const p = new Promise<People>((resolve, reject) => {
            this.db['people'].where('cid').equals(id)
                .toArray()
                .then((result: People[]) => {
                    if (result.length > 0)
                        resolve(result[0])
                    else
                        reject(id);
                })
        });
        return (p);
    }

}