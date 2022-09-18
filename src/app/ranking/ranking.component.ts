import {Component, Input, OnInit} from '@angular/core';
import {Quotation} from "../models/quotation";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  @Input()
  quotes: Quotation[];
  @Input()
  title: String;

  ngOnInit(): void {
  }

}
