import {Component, OnInit} from '@angular/core';
import {FakeData} from "../../interfaces/FakeData";
import {InputService} from "../../services/input/input.service";

@Component({
  selector: 'pm-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public dataList: FakeData[];

  public symbol: string = '&#128214';

  constructor(private service: InputService) {
    this.dataList = [];
  }

  addData(): void {
    this.service.getData().subscribe({
      next: data => this.dataList = data,
      error: error => console.log("Error"),
      complete: () => console.log("Completed")
    });
  }

  ngOnInit(): void {
    this.addData();
  }
}
