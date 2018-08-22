import {Injectable} from '@angular/core';
import {Headers, Http, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import { AppService } from '../../app.service';

@Injectable() export class ProfileService {

    constructor(private appService: AppService) {

    }

    // profileData() {
    //     const url = '';
    //     const data$ = this.appService.get(url)
    //                     .pipe(map(res => {
    //                         res = res._body;
    //                         return res;
    //                         }));
    //     return data$;
    // }
}
