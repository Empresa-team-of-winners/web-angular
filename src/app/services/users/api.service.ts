import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class ApiService {
    private API_SERVER = "http://localhost:8080/";
  
    constructor(private httpClient: HttpClient) { }
  

    //user
  
    public saveUser (user:any): Observable<any>{
        return this.httpClient.post(this.API_SERVER+"user/",user);
      }

      public getUsers (): Observable<any>{
        return this.httpClient.get(this.API_SERVER+"user/");
      }

      //enterprise

    public getEnterprises (): Observable<any>{
      return this.httpClient.get(this.API_SERVER+"enterprise/");
    }
    public saveEnterprise (enterprise:any): Observable<any>{
      return this.httpClient.post(this.API_SERVER+"enterprise/",enterprise);
    }

    public deleteEnterprise (id:any): Observable<any>{
      return this.httpClient.delete(this.API_SERVER+"enterprise/delete/"+id);
    }

    //transaction
    public getTransactions (): Observable<any>{
      return this.httpClient.get(this.API_SERVER+"transaction/");
    }
    public saveTransaction (transaction:any): Observable<any>{
      return this.httpClient.post(this.API_SERVER+"transaction/",transaction);
    }

  }