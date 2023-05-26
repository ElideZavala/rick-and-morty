import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Characters } from 'src/interfaces/characters.model';

@Component({
  selector: 'list-characters',
  templateUrl: './list-characters.component.html',  
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['image','name','species', 'gender', 'created', 'status', 'detail'];
  characters: Characters[] = [];
  length: number = 0;
  pageSize: number = 10;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dashboardService: DashboardService ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(page: number = 1): void {
    this.dashboardService.getCharacters(page).subscribe((data: any) => {
      this.characters = data.body.results;
      // this.length = data.body.results.length;
      this.length = data.body.info.count;
      this.dataSource = new MatTableDataSource(this.characters );
      this.dataSource.sort = this.sort;
    });
  }

  onPageChange(event: any): void  {
    const pageIndex = event.pageIndex;
    this.getCharacters(pageIndex + 1);
  }

  goDetails(id: number): void {
    console.log(id);
  }
}
