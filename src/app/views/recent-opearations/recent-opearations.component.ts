import { Component, OnInit } from '@angular/core';
import { Operation } from "../../interfaces/Operation";
import { CalculatorOperationsService } from "../../services/calculator-operations/calculator-operations.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'pm-recent-opearations',
  templateUrl: './recent-opearations.component.html',
  styleUrls: ['./recent-opearations.component.css']
})
export class RecentOpearationsComponent implements OnInit {
  public error: string = ""
  public symbol: string = '&#9000;&#65039';
  public result: number = 0;
  public operationList: Operation[] = [];
  public operation: Operation = {
    id: 0,
    primer_valor: 0,
    segundo_valor: 0,
    operacion: '',
    resultado: 0
  };

  constructor(private calcService: CalculatorOperationsService) {}

  addOperations(): void {
    this.calcService.getOperations().subscribe({
      next: res => this.operationList = res,
      error: err => console.log(err),
      complete: () => console.log("Got operations")
    });
  }

  saveNewOperation(): void {
    delete this.operation.id;
    if (this.isRadioSelected()) {
      this.calcService.saveOperation(this.operation).subscribe({
        next: res => {
          console.log(res);
          this.addOperations();
        },
        error: err => console.log(err),
        complete: () => console.log("Operation saved")
      });
    }
  }

  deleteOperation(id: number | undefined): void {
    // @ts-ignore
    this.calcService.deleteOperation(id.toString()).subscribe({
      next: res => {
        console.log(res)
        this.addOperations();
      },
      error: err => console.log(err),
      complete: () => console.log("Operation deleted")
    });
  }

  isRadioSelected(): boolean {
    let flag = true;
    if (this.operation.operacion === 'Sum') {
      let first = this.operation.primer_valor;
      let second = this.operation.segundo_valor;
      // @ts-ignore
      this.result = first + second;
      this.operation.resultado = this.result;

    } else if (this.operation.operacion === 'Subtract') {
      let first = this.operation.primer_valor;
      let second = this.operation.segundo_valor;
      // @ts-ignore
      this.result = first - second;
      this.operation.resultado = this.result;

    } else if (this.operation.operacion === 'Multiply') {
      let first = this.operation.primer_valor;
      let second = this.operation.segundo_valor;
      // @ts-ignore
      this.result = first * second;
      this.operation.resultado = this.result;

    } else if (this.operation.operacion === 'Divide') {
      let first = this.operation.primer_valor;
      let second = this.operation.segundo_valor;
      if (second != 0) {
        // @ts-ignore
        this.result = first / second;
      }

      this.operation.resultado = this.result;

    } else {
      flag = false
    }

    return flag;
  }

  ngOnInit(): void {
    this.addOperations();
  }
}
