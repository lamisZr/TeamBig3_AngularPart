
export class stock {
  date: string;
  openprice: string;
  highprice: string;
  lowprice: string;
  closeprice: string;
  volume: string;

  constructor(date: string, openprice: string, highprice: string, closeprice: string, lowprice: string, volume: string) {
    this.date = date;
    this.openprice = openprice;
    this.highprice = highprice;
    this.lowprice = lowprice;
    this.closeprice = closeprice;
    this.volume = volume;
  }
}



/* export class StockEntity {
  stockKey: string;
  date: string;
  open: number;
  high: number;
  low: number;
  volume: number;

  constructor(stockKey: string, date: string, open: number, high: number, low: number, volume: number) {
    this.stockKey = stockKey;
    this.date = date;
    this.open = open;
    this.high = high;
    this.low = low;
    this.volume = volume;
  }
} */

