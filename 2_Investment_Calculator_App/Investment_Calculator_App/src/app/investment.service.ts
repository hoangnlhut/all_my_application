import { Injectable, signal } from "@angular/core";
import type { InvestmentInput, InvestmentOutput } from "./content/content.model";

@Injectable({ providedIn : 'root'})
export class InvesmentService
{
    results = signal<InvestmentOutput[] | undefined>(undefined);

    CalculateInvestmentResults(data: InvestmentInput) {

        const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
        const resultsData = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
        resultsData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
        });
        }

        this.results.set(resultsData);

    }
}