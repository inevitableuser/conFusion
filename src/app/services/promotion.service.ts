import { PROMOTIONS } from './../shared/promotions';
import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: string): Promotion {
    return PROMOTIONS.filter((promotion) => (promotion.id === id))[0];
  }

  getFeaturePromotion(): Promotion {
    return PROMOTIONS.filter((promotion) => (promotion.featured))[0];
  }

}
