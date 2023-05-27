import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() image: string = '';
  @Input() name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
