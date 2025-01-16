import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Student {
  id: number;
  name: string;
  age: number;
  imgUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private apiUrl = 'https://localhost:7261/api/Students';

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get<Student[]>(this.apiUrl);
  }


  addStudent(student: Student){
    return this.http.post(this.apiUrl, student);
  }


  deleteStudent(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
