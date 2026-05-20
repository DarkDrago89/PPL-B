// === concrete-payments.js ===
const PaymentTemplate = require("./payment");
class MBankingPayment extends PaymentTemplate {
 constructor(rekening) { super(); this.rekening = rekening; }
 authenticate() { console.log("[MB] PIN m-banking valid"); return true; }
 transfer(amount) {
   console.log(`[MB] Transfer Rp${amount} ke ${this.rekening}`);
   return true;
 }
 notify(order) { console.log(`[MB] SMS ke user #${order.userId}`); }
}
class EWalletPayment extends PaymentTemplate {
 authenticate() { console.log("[EW] QR di-scan, OTP OK"); return true; }
 transfer(amount) { console.log(`[EW] Saldo dipotong Rp${amount}`); return true; }
}
class NullPayment extends PaymentTemplate {
 authenticate() { console.log("[NULL] Metode tidak dikenali"); return false; }
 transfer() { return false; }
 notify() {}
}
class PaymentFactory {
 static create(method) {
   switch ((method || "").toLowerCase()) {
     case "mbanking": return new MBankingPayment("BCA-1234567");
     case "ewallet":  return new EWalletPayment();
     default:         return new NullPayment(); // Null Object
   }}}
module.exports = { MBankingPayment, EWalletPayment, NullPayment, PaymentFactory };
