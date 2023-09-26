import getFullBudgetObject from './9-getFullBudget.js';

test('getFullBudgetObject returns the right object', () => {
    const fullBudget = getFullBudgetObject(200, 500, 100);
    expect(fullBudget.getIncomeInDollars(fullBudget.income)).toEqual('$200');
    expect(fullBudget.getIncomeInEuros(fullBudget.income)).toEqual('200 euros');
  });
