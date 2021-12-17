import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/Leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  Leaders: Leader[];

  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.Leaders = this.leaderService.getLeaders();
  }

}
