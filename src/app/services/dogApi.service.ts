import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const API_URL = "https://dog.ceo/api/"

@Injectable()
export class DogApiService {
    constructor(private _http: Http) { }

    findRandomDog() {
        // data.message contains the string url
        return this._http.get(`${API_URL}breeds/image/random`)
            .map(res => res.json())
            .map(data => data.message)
    }
}