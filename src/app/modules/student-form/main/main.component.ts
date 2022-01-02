import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentModel } from 'src/app/app-common/models';
import { DataService } from 'src/app/app-common/services/data.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { pageLoadAnimation } from 'src/app/app-common/animations';

@Component({
  selector: 'ss-app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [pageLoadAnimation],
})
export class MainComponent implements OnInit {
  @ViewChild('formDiv') scrollDiv: ElementRef | any;
  studentForm: FormGroup = this.fb.group({
    students: this.fb.array([]),
  });
  setTimer: any;
  get students(): FormArray {
    return this.studentForm.get('students') as FormArray;
  }
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log(this.data.formData);
    if (this.data.formData) {
      for (const i of this.data.formData) {
        this.students.push(this.createStudent(i));
      }
    } else if (sessionStorage.getItem('studentForm')) {
      const data: any = sessionStorage.getItem('studentForm');
      const parsedData = JSON.parse(data);
      for (const i of parsedData.students) {
        this.students.push(this.createStudent(i));
      }
    } else {
      this.students.push(this.createStudent());
    }
  }

  createStudent(data?: any): FormGroup {
    if (data) {
      return this.fb.group({
        name: [data.name, Validators.required],
        class: [data.class, Validators.required],
        section: [data.section, Validators.required],
      });
    }
    return this.fb.group({
      name: ['', Validators.required],
      class: ['', Validators.required],
      section: ['', Validators.required],
    });
  }

  addStudent() {
    clearTimeout(this.setTimer);
    this.students.push(this.createStudent());
    this.setTimer = setTimeout(() => {
      this.scrollDiv.nativeElement.scrollTop =
        this.scrollDiv?.nativeElement.scrollHeight;
    }, 10);
  }

  deleteStudent(i: number) {
    this.students.removeAt(i);
  }

  onSubmit() {
    console.log(this.studentForm);

    this.data.formData = this.studentForm.value.students;
    sessionStorage.setItem(
      'studentForm',
      JSON.stringify(this.studentForm.value)
    );
    this.router.navigate(['/studentForm/formDetails']);
  }
}
