import { LeaderService } from './../services/leader.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display:block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  errMsg1: string;
  errMsg2: string;
  errMsg3: string;
  constructor(private dishService: DishService, private promotionService: PromotionService, private leaderService: LeaderService, @Inject('BaseURL') public BaseURL: any) { }

  ngOnInit(): void {
    this.dishService.getFeatureDish().subscribe((dish) => this.dish = dish, errMsg => this.errMsg1 = <any>errMsg);
    this.promotionService.getFeaturePromotion().subscribe((promotion) => this.promotion = promotion, errMsg => this.errMsg2 = <any>errMsg);
    this.leaderService.getLeader().subscribe((leader) => this.leader = leader, errMsg => this.errMsg3 = <any>errMsg);
  }

}
