import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  language: string = 'en';
  buttonMode: HTMLButtonElement;
  iconMoon: string =
    '<img src="../assets/icons-template/icons/moon.svg" alt="moon icon"/>';
  iconSun: string =
    '<img src="../assets/icons-template/icons/brightness-high.svg" alt="sun icon"/>';
  isDark: boolean = false;
  email: HTMLInputElement ;
  employee : Employee = new Employee;


  constructor(public translate: TranslateService, private employeeService: EmployeeService) {
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

}
