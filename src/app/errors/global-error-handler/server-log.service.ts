import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IServerLog } from './interfaces/IServerLog';

@Injectable({ providedIn: 'root' })
export class ServerLogService {

    constructor(
        private _http: HttpClient
    ) { }

    log(serverLog: IServerLog) {
        // return this._http.post(url, serverLog);

        // alert(`SERVER LOG: \n \nMessage: ${serverLog.message}\n \nUrl:${serverLog.url}\n \nUser:${serverLog.userName}\n \nStack:${serverLog.stack}`);
    }

}
