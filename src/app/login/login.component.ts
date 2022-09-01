import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  language: string = 'en';
  buttonMode: HTMLButtonElement;
  iconMoon: string =
    '<img src="../assets/icons-template/icons/moon.svg" alt="moon icon"/>';
  iconSun: string =
    '<img src="../assets/icons-template/icons/brightness-high.svg" alt="sun icon"/>';
  isDark: boolean = false;
  email: HTMLInputElement ;
  employee : Employee = new Employee;


  constructor(public translate: TranslateService, private employeeService: EmployeeService, private router: Router) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.language);
  }

  ngOnInit(): void {
  }
  changeLanguage(language: string) {
    this.translate.use(language);
  }
  toggleDarkMode() {
    document.body.classList.toggle('darkmode');
    if(document.body.classList.contains('darkmode')) {
      this.isDark = true;
    }else{
      this.isDark = false;
    }
  }
  saveEmployee(){
    this.employeeService.addEmploye(this.employee).subscribe(data=>{
      console.log(data);
      this.redirectHome();
    }, err => console.log(err));
  }
  redirectHome(){
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    this.saveEmployee();
  }

}
