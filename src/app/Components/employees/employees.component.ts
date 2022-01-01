import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees/employees.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, AfterViewInit {
  userData = {
    name: '',
    last_name: '',
    birthday: ''
  }
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<any>;
  employees: any;
  scroller: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private employesService: EmployeesService,
  ) { 
   
  }
  @HostListener("scroll", ['$event'])

  ngOnInit(): void {
  this.getEmployees();  
  }
  ngAfterViewInit() {
  
  }
  getEmployees(){
    this.employesService.getEmployees().subscribe((response: any)=> {
      this.employees = response.data.employees;
      const users = this.employees
      this.dataSource = new MatTableDataSource(users); 
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  addEmployee(){
    this.employesService.setEmployee(JSON.stringify(this.userData)).subscribe((response: any)=> {
      this.userData.name = '';
      this.userData.last_name = '';
      this.userData.birthday = '';
      this.getEmployees();
    })  
  }

}
  