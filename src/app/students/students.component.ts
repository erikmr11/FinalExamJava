import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../services/student.model';
import { StudentService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  studentForm: FormGroup | undefined;

  constructor(private studentService: StudentService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getStudents();
    this.createForm();
  }

  createForm(): void {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      grade: ['', Validators.required]
    });
  }

  getStudents(): void {
    this.studentService.getStudents()
      .subscribe((students: Student[]) => this.students = students);
  }

  createStudent(): void {
    if (this.studentForm && this.studentForm.valid) {
      const newStudent: Student = this.studentForm.value;
      this.studentService.createStudent(newStudent)
        .subscribe(() => {
          this.getStudents(); // Reload students after creation
          this.studentForm?.reset(); // Reset form after creation
        });
    }
  }

  editStudent(student: Student): void {
  }

  deleteStudent(studentId: number): void {
  }

  onSubmit(): void {
    this.createStudent(); // Call createStudent() when form submitted
  }
}
