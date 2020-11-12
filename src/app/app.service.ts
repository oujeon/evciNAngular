import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    readonly baseAppUrl: string = 'http://localhost:3000/';
    readonly distLocation: string = 'MyApplication/';
}