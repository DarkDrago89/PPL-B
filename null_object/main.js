// 1. Abstract / Interface (kontrak bersama)
class Customer {
  getName() {} // abstract
  isAuthenticated() {}
  applyDiscount(price) {}
}

// 2. Real Object (perilaku nyata)
class RegisteredCustomer extends Customer {
  constructor(name, level) {
    super(); this.name = name; this.level = level;
  }
  getName() { return this.name; }
  isAuthenticated() { return true; }
  applyDiscount(price) {
    const rates = { gold: 0.2, silver: 0.1 };
    return price * (1 - (rates[this.level] || 0));
  }
}

// 3. Null Object (default behavior, do-nothing)
class GuestCustomer extends Customer {
  getName()         { return "Guest"; }
  isAuthenticated() { return false; }
  applyDiscount(price) { return price; // no discount
  }
}

// 4. Client menggunakan keduanya tanpa null-check
function checkout(customer, price) {
  console.log(`Halo, ${customer.getName()}!`);
  const final = customer.applyDiscount(price);
  console.log(`Total: Rp${final}`);
}

checkout(new RegisteredCustomer("Andi", "gold"), 100000);
checkout(new GuestCustomer(), 100000);
