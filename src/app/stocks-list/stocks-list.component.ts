import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { stock } from "../Model/Stock";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: 'app-stocks-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stocks-list.component.html',
  styleUrl: './stocks-list.component.css'
})
export class StocksListComponent implements OnInit {
  private URL_STOCK = 'http://localhost:52001';
  stockList: stock[] | undefined;

  constructor(private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllstocks()
      .pipe()
      .subscribe(value => {
        this.stockList = value;
      });
  }
  getAllstocks(): Observable<stock[]> {
    const url = `${this.URL_STOCK}/stocks`;
    return this.httpClient.get<stock[]>(url);
  }

}
