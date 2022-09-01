import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) {}

  getListEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  updateEmployee(id:number,employee:Employee) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,employee);
  }
  getEmployeeById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`)
  }
  addEmploye(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }
  deleteEmployee(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }}
