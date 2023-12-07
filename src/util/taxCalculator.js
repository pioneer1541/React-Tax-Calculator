//This function will take in the income and income type and return the calculated result which has 4 types of time period: weekly,fortnightly, monthly and yearly.
//Each type of time period will display following contents : Income Type, Income Before Tax, Income After Tax and Income Tax.
/*Tax rate table: For each dollar of income	Tax rate
Up to $14,000	10.5%
Over $14,000 and up to $48,000	17.5%
Over $48,000 and up to $70,000	30%
Over $70,000 and up to $180,000	33%
Remaining income over $180,000	39% */
//The tax rate table is from https://www.ird.govt.nz/income-tax/income-tax-for-individuals/income-tax-rates



const taxRate = [0.105, 0.175, 0.3, 0.33, 0.39];
const taxLine = [14000, 48000, 70000, 180000, 1000000000];

export default function taxCalculator(income, incomeType) {
    //Change income to hourly income
    switch (incomeType) {
        case 'weekly':
            income = income / 40;
            break;
        case 'fortnightly':
            income = income / 80;
            break;
        case 'monthly':
            income = income / 160;
            break;
        case 'yearly':
            income = income / 2080;
            break;
        default:
            break;
    }

        let result = [{ incomeType: 'hourly', incomeBeforeTax: income, incomeAfterTax: 0, incomeTax: 0 },{ incomeType: 'weekly', incomeBeforeTax: income * 40, incomeAfterTax: 0, incomeTax: 0 },{ incomeType: 'fortnightly', incomeBeforeTax: income * 80, incomeAfterTax: 0, incomeTax: 0 },{ incomeType: 'monthly', incomeBeforeTax: income * 160, incomeAfterTax: 0, incomeTax: 0 },{ incomeType: 'yearly', incomeBeforeTax: income * 2080, incomeAfterTax: 0, incomeTax: 0 }];

    //Calculate hourly income after tax
    let taxRateIndex = 0;
    let hourlyIncome = { ...result[0] };
    hourlyIncome.incomeBeforeTax *= 2080;
    for (let rate of taxRate) {
        hourlyIncome.incomeTax += (hourlyIncome.incomeBeforeTax > taxLine[taxRateIndex] ? taxLine[taxRateIndex] : hourlyIncome.incomeBeforeTax) * rate;
        hourlyIncome.incomeBeforeTax -= taxLine[taxRateIndex];
        taxRateIndex++;
        if (hourlyIncome.incomeBeforeTax <= 0) {
            hourlyIncome.incomeTax = Number((hourlyIncome.incomeTax/2080).toFixed(2));
            hourlyIncome.incomeBeforeTax = Number(result[0].incomeBeforeTax).toFixed(2);
            break;
        }
    }
    hourlyIncome.incomeAfterTax = Number(hourlyIncome.incomeBeforeTax) - Number(hourlyIncome.incomeTax);

    result[0] = hourlyIncome;

    //Calculate weekly, fortnightly, monthly and yearly income after tax base on hourly income after tax
    for (let incomePeriod of result) {
        if (incomePeriod.incomeType === 'weekly') {
            incomePeriod.incomeAfterTax = Number(result[0].incomeAfterTax * 40).toFixed(2);
            incomePeriod.incomeTax = Number(result[0].incomeTax * 40).toFixed(2);
            incomePeriod.incomeBeforeTax = Number(result[0].incomeBeforeTax * 40).toFixed(2);

        } else if (incomePeriod.incomeType === 'fortnightly') {
            incomePeriod.incomeAfterTax = Number(result[0].incomeAfterTax * 80).toFixed(2);
            incomePeriod.incomeTax = Number(result[0].incomeTax * 80).toFixed(2);
            incomePeriod.incomeBeforeTax = Number(result[0].incomeBeforeTax * 80).toFixed(2);

        } else if (incomePeriod.incomeType === 'monthly') {
            incomePeriod.incomeAfterTax = Number(result[0].incomeAfterTax * 160).toFixed(2);
            incomePeriod.incomeTax = Number(result[0].incomeTax * 160).toFixed(2);
            incomePeriod.incomeBeforeTax = Number(result[0].incomeBeforeTax * 160).toFixed(2);

        } else if (incomePeriod.incomeType === 'yearly') {
            incomePeriod.incomeAfterTax = Number(result[0].incomeAfterTax * 2080).toFixed(2);
            incomePeriod.incomeTax = Number(result[0].incomeTax * 2080).toFixed(2);
            incomePeriod.incomeBeforeTax = Number(result[0].incomeBeforeTax * 2080).toFixed(2);

        }
    }

    return result;




}
