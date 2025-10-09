import { Component, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvesmentService } from '../investment.service';

@Component({
  selector: 'app-content',
  imports: [CurrencyPipe],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {
  constructor(private investmentService: InvesmentService){}

  datas = computed(() => this.investmentService.results());
}
