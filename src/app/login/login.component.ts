import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../services/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //@ts-ignore
  loginFormGroup:FormGroup;

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.loginFormGroup = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
    this.loginFormGroup.reset();
  }
  loginProcess(){
    if(this.loginFormGroup.valid) {
      this.authService.login(this.loginFormGroup.value).subscribe(result=>{
        if(result.status==200) {
          alert("invalid credentials");
        } else {
          const userdetail = result;
          this.router.navigateByUrl('userprofile',result);
        }
      })
    }
  }
}
