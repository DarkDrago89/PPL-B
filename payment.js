// === payment.js ===
class PaymentTemplate {
 // (1) template method - urutan algoritma fixed
 pay(order) {
   console.log("\n=== Mulai proses pembayaran ===");
   if (!this.validateOrder(order)) return false;
   if (!this.authenticate())       return false;
   const ok = this.transfer(order.total);
   if (ok) this.notify(order);
   console.log("=== Selesai ===\n");
   return ok;
 }
 // (2) langkah bersama untuk semua subclass
 validateOrder(order) {
   if (!order || order.total <= 0) {
     console.log("[X] Order tidak valid");
     return false;
   }
   console.log(`[OK] Order #${order.id} - Rp${order.total}`);
   return true;
 }
 // (3) abstract steps - wajib di-override
 authenticate() { throw new Error("authenticate() harus diimplementasi"); }
 transfer(amount) { throw new Error("transfer() harus diimplementasi"); }
 // (4) hook - opsional di-override
 notify(order) { console.log("Notifikasi default ke user #" + order.userId); }
}
module.exports = PaymentTemplate;