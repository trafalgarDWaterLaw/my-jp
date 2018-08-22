import { Injectable, OnInit } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';


@Injectable() export class AppService implements OnInit {
    requestsArr = [];
constructor(private http: Http, private _cookieService: CookieService,
        public router: Router,
        private _service: NotificationsService) {
}

ngOnInit() {

}

alertCheck(msg) {
    alert(msg);
}

getAccessToken() {
    return '';
}
getHeader() {
        const headers = new Headers({'Content-Type': 'application/json', 'Token': this.getAccessToken()});
        const options = new RequestOptions({ headers: headers});
        return options;
    }


    get(endpoint: string): Observable<any> {
        const options = this.getHeader();
        const response$ = this.http
            .get(endpoint, options);
        return response$;
    }

    /*common post call*/
    post(endpoint: string, data: any): Observable<any> {
        const options = this.getHeader();
        const response$ = this.http
            .post(endpoint, data, options);
        return response$;
    }

    put(endpoint: string, data: any): Observable<any> {
        const options = this.getHeader();
        const response$ = this.http
            .put(endpoint, data, options);
        return response$;
    }

    handleError(error: any) {
        const errorMsg = error.message || `There was a problem with our hyperdrive device and we couldn't retrieve your data!`;
        return Observable.throw(errorMsg);
    }

    getNotificationOption() {
        const options = {
            position: ['bottom', 'right'],
            timeOut: 0,
            lastOnBottom: true,
        };
        return options;
    }

    showError(message: any) {
        this._service.error(
            'Error',
            message,
            {
                showProgressBar: true,
                pauseOnHover: true,
                clickToClose: true,
                maxLength: 100,
                timeOut: 3000
            }
        )
    }

    showSuccess(message: any) {
        this._service.success(
            'Success',
            message,
            {
                showProgressBar: true,
                pauseOnHover: true,
                clickToClose: true,
                maxLength: 100,
                timeOut: 3000
            }
        )
    }

    showTextCopy(message: any) {
        this._service.success(
            'Success',
            message,
            {
                showProgressBar: false,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 100,
                timeOut: 1000
            }
        )
    }
}
