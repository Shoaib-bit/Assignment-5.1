import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor (private router : Router,
                public studentData : StudentService) {

  }
  studentDetail !: FormGroup;
  get control(){
    return new FormControl()
  }
  get requiredControl(){
      return new FormControl('',Validators.required)
  }
  ngOnInit(): void {
      this.studentDetail = new FormGroup({
          first_name : this.requiredControl,
          last_name : this.requiredControl,
          email : this.requiredControl,
          gender : this.requiredControl,
          dob : this.requiredControl,
          class : this.requiredControl,
          address : this.control,
          phone_number : this.control,
          parents_email : this.requiredControl,
          description : this.control,
          password : this.control
      })
      
  }
  
  getAction() {
    if(this.studentDetail.invalid) {
        alert('please fill reuired fields')
    } else {
      let obj = this.studentDetail.getRawValue();
      console.log(obj);
      this.studentDetail.reset();
      this.studentData.student.push(obj);
      this.router.navigate(['table'])
    }
  }
}
