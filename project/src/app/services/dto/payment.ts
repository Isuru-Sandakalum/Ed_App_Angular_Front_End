export class Payment {

  paymentId;
  fullName;
  email;
  address;
  city;
  district;
  postalCode;
  cardName;
  number;
  exMonth;
  exYear;
  cvv;

  constructor(payment?:any){
    payment = payment || {};
    this.paymentId = payment.paymentid || null;
    this.fullName = payment.fullname || '';
    this.email = payment.email || '';
    this.address = payment.address || '';
    this.city = payment.city || '';
    this.district = payment.district || '';
    this.postalCode = payment.postalcode || '';
    this.cardName = payment.cardname || '';
    this.number = payment.number || '';
    this.exYear = payment.exyear || '';
    this.exMonth = payment.exmonth || '';
    this.cvv = payment.cvv || '';

  }
}
