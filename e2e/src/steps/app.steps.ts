import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

let accountBalance: number;

Before(() => {
    accountBalance = 0;
});

Given(/^A bank account with starting balance of \$(\d*)/, (amount: number) => {
    accountBalance = amount;
});

When(/^\$(\d*) is deposited/, (amount: number) => {
    accountBalance = accountBalance + amount;
});

Then(/^The bank account balance should be \$(\d*)/, (expectedAmount: number) => {
    expect(accountBalance === expectedAmount);
});
