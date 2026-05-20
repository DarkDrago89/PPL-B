class ReportBuilder {
 build() {
   const data = this.fetchData();
   return this.formatData(data);
 }

 fetchData()  { throw new Error("Wajib di-override!"); }
 formatData(data) { throw new Error("Wajib di-override!"); }
}

class PDFBuilder extends ReportBuilder {
 fetchData()  { return "Teks mentah database"; }
 formatData(data) { return `[PDF Format] ${data}`; }
}

class CSVBuilder extends ReportBuilder {
 fetchData()  { return "Teks,mentah,database"; }
 formatData(data) { return `[CSV Format] ${data}`; }
}

console.log(new PDFBuilder().build()); // Output: [PDF Format] Teks mentah database
console.log(new CSVBuilder().build()); // Output: [CSV Format] Teks,mentah,database


