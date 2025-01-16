import { ToastrService } from 'ngx-toastr';
import { Student, StudentServiceService } from './../student-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {

 

 constructor(public studentService : StudentServiceService , private toastr:ToastrService){}

 students: Student[] = [];
 
 
 ngOnInit(): void {
  this.getStudents();
}

getStudents() {
  this.studentService.getStudents()
  .subscribe(data => {
    this.students = data;
  });
}

delete(id:number){ {
  alert('are you sure you want to delete');
  this.studentService.deleteStudent(id)
  .subscribe(data => {
    this.getStudents();
    this.toastr.error('Student removed successfully!', 'removed!');
  });
}
}


selectedStudent: Student | null = null;
selectStudent(student: Student) {
  this.selectedStudent = student;
}

}
