import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl= "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }
      
  /**
   * Get all users
   */
  getUsers(){
    return this.http.get(this.apiUrl);
    }


  /**
   * Get a single user by id
   */
  getUser(id: string){
   return this.http.get(this.apiUrl + `/${id}`);

  }
}
