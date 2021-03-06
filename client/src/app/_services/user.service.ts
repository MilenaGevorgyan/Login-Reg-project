﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(environment.apiUrl + '/users/');
    }

/* getOne(id: number) {
        return this.http.get(environment.apiUrl + '/user/me' + id);
    }*/

    create(user: User) {
        return this.http.post(environment.apiUrl + '/auth/signup/', user);
    }

    update(user: User) {
        return this.http.put(environment.apiUrl + '/users/me' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(environment.apiUrl + '/users/' + id);
    }
}
