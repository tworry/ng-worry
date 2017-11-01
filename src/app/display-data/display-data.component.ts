import { Component, OnInit } from '@angular/core';
import { datacode } from './display-data.data';

@Component({
    selector: 'app-display-data',
    templateUrl: './display-data.component.html',
})
export class DisplayDataComponent implements OnInit {
    // 代码
    data = datacode;

    tabs = [
        {
            title: 1,
            content: '123'
        },
        {
            title: 2,
            content: '123'
        },
        {
            title: 3,
            content: '123'
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
