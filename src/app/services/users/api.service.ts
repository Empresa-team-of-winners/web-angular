import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class ApiService {
    private API_SERVER = "http://localhost:8080/";
  
    constructor(private httpClient: HttpClient) { }
  
  
    public saveUser (user:any): Observable<any>{
        return this.httpClient.post(this.API_SERVER+"user/",user);
      }

    public getEnterprises (): Observable<any>{
      return this.httpClient.get(this.API_SERVER+"enterprise/");
    }

    public getUsers (): Observable<any>{
      return this.httpClient.get(this.API_SERVER+"user/");
    }

    public saveEnterprise (enterprise:any): Observable<any>{
      return this.httpClient.post(this.API_SERVER+"enterprise/",enterprise);
    }
  
  }