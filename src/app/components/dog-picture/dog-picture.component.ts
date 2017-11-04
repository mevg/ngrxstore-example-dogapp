import { Component, Input } from '@angular/core';

@Component({
    selector: 'dog-picture',
    templateUrl: 'dog-picture.html'
})
export class DogPicture {

    @Input() imgUrl: string;

    constructor() {}

}
