import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DashboardService } from '../../services/dashboard.service';
import { Characters } from 'src/interfaces/characters.model';

@Component({
  selector: 'list-characters',
  templateUrl: './list-characters.component.html',  
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit, AfterViewInit {

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['image','name','species', 'gender', 'created', 'status', 'detail'];
  characters: Characters[] = [];
  length: number = 0;
  pageSize: number = 10;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private dashboardService: DashboardService, private router: Router ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getCharacters(page: number = 1): void {
    this.dashboardService.getCharacters(page).subscribe((data: any) => {
      try {
        this.characters = data.body.results;
        this.length = data.body.info.count;
        this.dataSource = new MatTableDataSource(this.characters);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } catch (error) { 
        console.log(error);
      }
    });
  }

  onPageChange(event: any): void  {
    const pageIndex = event.pageIndex;
    this.getCharacters(pageIndex + 1);
  }

  goDetails(id: number): void {
    this.router.navigate(['/dashboard/character', id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
