import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { User } from '../types/user';

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	constructor(private http: HttpClient) { }

	//   mainLocalApi = "http://localhost:5000/api"

	//   headers = new HttpHeaders({
	// 	'accepts': '*/*',
	//   })

	//   getMentors(): Observable<any> {
	// 	  return this.http.get(`${this.mainLocalApi}/users`);
	//   }

	mentors: User[] = [
		{
			id: 1,
			firstName: "Mike",
			lastName: "Vazovski",
			email: "mike@vazovski.com",
			role: "mentor"
		},
		{
			id: 1,
			firstName: "Mif",
			lastName: "Fim",
			email: "moroznaia@svezhest.com",
			role: "mentor"
		},
		{
			id: 1,
			firstName: "Habib",
			lastName: "Bihab",
			email: "habib@bihab.com",
			role: "mentor"
		},
		{
			id: 1,
			firstName: "Spanch",
			lastName: "Bob",
			email: "spanch@bob.com",
			role: "mentor"
		},
		{
			id: 1,
			firstName: "Milka",
			lastName: "Aklim",
			email: "milka@aklim.com",
			role: "mentor"
		},
		{
			id: 1,
			firstName: "Piter",
			lastName: "Parker",
			email: "piter@parker.com",
			role: "mentor"
		},
		{
			id: 1,
			firstName: "Victor",
			lastName: "Riabinin",
			email: "victor@riabinin.com",
			role: "mentor"
		},
		{
			id: 1,
			firstName: "Harley",
			lastName: "Davidson",
			email: "harley@davidson.com",
			role: "mentor"
		},
		{
			id: 1,
			firstName: "Ronald",
			lastName: "McDonald",
			email: "ronald@mcdonald.com",
			role: "mentor"
		},
	]
}
