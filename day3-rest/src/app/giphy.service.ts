import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

export interface Giphy {
title: string;
imageUrl: string;

}

@Injectable()

export class GiphyService {

    readonly  API_KEY = "7cf49b91cbac420198483abde27d622f";

    constructor(private http: HttpClient){}

    search(searchTerm: string, limit = 10, offset = 0): Promise<Giphy[]>{

        const params = new HttpParams()
            .set('api_key', this.API_KEY)
            .set('q', searchTerm)
            .set('limit', limit + '')
            .set('offset', offset + '');

        return(
            this.http.get<Giphy[]>('https://api.giphy.com/v1/gifs/search', { params: params }) 
                .toPromise()
                .then ((result : any) => {
                    console.log('', result);
                
                    const g: Giphy[] = [];

                    const data = result.data;

                    for (let d of data) {
                        g.push(
                            {   
                                title: d.title,
                                imageUrl: d.images.fixed_width.url
                            }
                        )
                    }

                    return(g);

                })
        );
    }
} 