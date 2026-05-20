// === main.js ===
const { PaymentFactory } = require("./concrete-payments");

const orders = [
 { id: 101, userId: 7, total: 150000, method: "mbanking" },
 { id: 102, userId: 8, total: 80000, method: "ewallet" },
 { id: 103, userId: 9, total: 50000, method: "crypto" }, // tidak didukung
 { id: 104, userId: 10, total: 0,  method: "mbanking" }, // invalid
];

console.log("===== CleanNest Payment Simulator =====");
for (const ord of orders) {
 const processor = PaymentFactory.create(ord.method);
 const result = processor.pay(ord);
 console.log("Hasil order #" + ord.id + " => " + (result ? "BERHASIL" : "GAGAL"));
}

