import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from "@angular/common/http";
import { Observable, firstValueFrom } from 'rxjs';
import {environment} from 'src/environments/environment';

export interface resultados{
  id:string,
  owner:string,
  tweet:string,
  description:string,
  username:string,
  email:string,
  bio:string,
  photo:string,
  name:string,
  lastname:string,
  password:string,
  user:any
  _id:string
  msg:string
  token:string
  
}

@Injectable({
  providedIn: 'root'
})



export class DataService {

  constructor(private http: HttpClient) {  }


  //USUARIO
  public register(data:any){
      return this.http.post(`${environment.server}/signup`, data)
    }
    public async login(data:any):Promise<resultados>{
      return firstValueFrom( this.http.post<resultados>(`${environment.server}/signin`, data));
    }
    public async showProfile(data:any,requestOptions:any){
      return firstValueFrom(this.http.post(`${environment.server}/finduser`,data,requestOptions));
    }
    public async deleteUser(data:any,requestOptions:any){
      return firstValueFrom(this.http.post(`${environment.server}/deleteuser`,data,requestOptions));
    }
    public async editUser(data:any,requestOptions:any){
      return firstValueFrom(this.http.post(`${environment.server}/edituser`,data,requestOptions));
    }
    public async editpass(data:any,requestOptions:any){
      return firstValueFrom(this.http.post(`${environment.server}/editpass`,data,requestOptions));
    }

}