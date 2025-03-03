// Array to store all bank accounts
const accounts = [];

class BankAccount {
    constructor(accountNumber, accountHolderName, balance = 1000) {
        // Validate account number
        if (!this._validateAccountNumber(accountNumber)) {
            throw new Error("Account number must start with 'IN' and be exactly 12 characters long.");
        }

        // Validate initial balance
        if (balance < 1000) {
            throw new Error("Initial balance must be at least ₹1000.");
        }

        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;

        // Add the newly created account to the accounts array
        accounts.push(this);
    }

    // Helper method to validate account number
    _validateAccountNumber(accountNumber) {
        return accountNumber.startsWith("IN") && accountNumber.length === 12;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }
        this.balance += amount;
        console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds.");
        }
        this.balance -= amount;
        console.log(`Withdrew ₹${amount}. New balance: ₹${this.balance}`);
    }

    transfer(amount, targetAccount) {
        if (amount <= 0) {
            throw new Error("Transfer amount must be greater than zero.");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds for transfer.");
        }
        this.balance -= amount;
        targetAccount.balance += amount;
        console.log(`Transferred ₹${amount} to account ${targetAccount.accountNumber}. New balance: ₹${this.balance}`);
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Account Holder: ${this.accountHolderName}`);
        console.log(`Balance: ₹${this.balance}`);
    }
}

// Example usage:
try {
    const account1 = new BankAccount("IN1234567890", "John Doe", 1500);
    const account2 = new BankAccount("IN0987654321", "Jane Smith", 2000);

    account1.displayAccountInfo();
    account2.displayAccountInfo();

    account1.deposit(500);
    account1.withdraw(300);
    account1.transfer(700, account2);

    account1.displayAccountInfo();
    account2.displayAccountInfo();

    console.log("All accounts:", accounts);
} catch (error) {
    console.error(error.message);
}