import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'list-characters',
  templateUrl: './list-characters.component.html',  
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit {

  characters: any[] = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'species', 'gender', 'status'];
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getCharacters(1);
  }

  async getCharacters(page: number) { 

    const data = await this.dashboardService.getCharacters(page);
    this.dataSource = new MatTableDataSource(data.body.results);
    console.log(this.dataSource);
  }

}
