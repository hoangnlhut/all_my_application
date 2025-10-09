import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvesmentService } from '../investment.service';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {

    constructor(private investmentService : InvesmentService){}

    enteredInitial = signal('0');
    enteredAnnual = signal('0');
    enteredReturn = signal('5');
    enteredDuration = signal('6');

    onSubmit(){
      this.investmentService.CalculateInvestmentResults({
        initialInvestment : +this.enteredInitial(), 
        annualInvestment  : +this.enteredAnnual(), 
        expectedReturn  : +this.enteredReturn(),
        duration  : +this.enteredDuration() 
      });

      this.enteredInitial.set('0');
      this.enteredAnnual.set('0');
      this.enteredReturn.set('5');
      this.enteredDuration.set('8');
      
    }
}
