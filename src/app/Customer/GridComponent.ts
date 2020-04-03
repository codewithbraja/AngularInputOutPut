import { Component, Input, Output } from '@angular/core';
import { Customer } from '../Model/Customer'
@Component({
  selector: 'grid-ui',
  templateUrl: './GridComponent.html'
})
export class GridrComponent {

  constructor() {
    console.log('constructor called');
    let x: Array<Object> = new Array<Object>();
    var c1 = new Customer();
    c1.CustomerCode = "001";
    c1.CustomerName = "AAA"
    c1.CustomerAmount = 10;
    x.push(c1);
    this.Set(x);
  }
  ngOnInit(): void {
    console.log('ngOninit called');
    //below code in invalid in ngOnInit hooks
    //let y: Array<Object> = new Array<Object>();
    //var c2 = new Customer();
    //c2.CustomerCode = "002";
    //c2.CustomerName = "BBB"
    //c2.CustomerAmount = 11;
    //y.push(c2);
    //this.Set(y);
  }
  gridColumns: Array<Object> = new Array<Object>();
  //input

  gridData: Array<Object> = new Array<Object>();


  @Input("grid-EntityName")
  EntityName: String = "";

  @Input("grid-Dataset")
  Set(Data: Array<Object>) {
    console.log('Set method called');
    //fill column names
    if (Data.length > 0) {
      var colNames = Object.keys(Data[0]);
      this.gridColumns = new Array<Object>();
      for (var index in colNames) {
        this.gridColumns.push(colNames[index]);
      }
    }

    this.gridData = Data;
  }

  //ngOnChanges(changes: SimpleChanges) {

  //  for (let property in changes) {
  //    if (property === 'gridData') {
  //      console.log('success:');
  //      console.log('Previous:', changes[property].previousValue);
  //      console.log('Current:', changes[property].currentValue);
  //      console.log('firstChange:', changes[property].firstChange);
  //    }
  //  }
  //}
}
