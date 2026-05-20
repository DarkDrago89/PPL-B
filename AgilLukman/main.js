// Target Interface
const Printer = {
   print: function() {
       throw new Error('print method must be implemented!');}};
// Adaptee
class LegacyPrinter {
   printDocument() {
       console.log('Legacy Printer is printing a document.');}}
// Adapter
class PrinterAdapter {
   constructor() {
       this.legacyPrinter = new LegacyPrinter();}
   print() {this.legacyPrinter.printDocument();}}
// Client Code
class Client {
   static clientCode(printer) {
       printer.print();}
   static main() {
       // Using the Adapter
       const adapter = new PrinterAdapter();
       this.clientCode(adapter);}}
// Running the client code
Client.main(); // Output : Legacy Printer is printing a document.
