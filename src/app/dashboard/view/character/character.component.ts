import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { Characters } from 'src/interfaces/characters.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  id!: string;
  character: Characters = {
    id: 0,
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
    created: '',
    origin: {
        name: '',
        url: '',
    },
    location: {
        name: '',
        url: '',
    },
    episode: [],
    url: '',
    type: '',
  }


  constructor(private dashboardService: DashboardService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id;
    console.log('this.id: ', this.id);
    this.getCharacter(1);
  }

  getCharacter(id: number): void {
    this.dashboardService.getCharacter(id).subscribe((data: any) => {
      this.character = data.body;
      console.log(this.character);
    });
  }

}
