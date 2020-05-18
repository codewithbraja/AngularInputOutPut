import { Component, Input,Output,EventEmitter, OnChanges } from '@angular/core';
import { Customer } from '../Model/Customer'
@Component({
  selector: 'grid-ui',
  templateUrl: './GridComponent.html'
})
export class GridComponent implements OnChanges {

  constructor() {
    console.log('constructor called');
  }
  ngOnChanges(): void {
    console.log('onchange called  called');
   // this.SetData(this.gridData);
  }
  ngOnInit(): void {
    console.log('ngOninit called');
  }
 
  gridColumns: Array<Object> = new Array<Object>();
  gridData: Array<Object> = new Array<Object>();

  @Output("grid-selected")
  selectedEvent: EventEmitter<Object> = new EventEmitter<Object>();
  @Input("grid-EntityName")
  EntityName: String = "";

  @Input("grid-Data")
  set gridDataset(Data: Array<Object>) {
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
   // this.gridData = this.gridData.slice();
  }

  Select(_selectedObject:Object) {
    this.selectedEvent.emit(_selectedObject);
  }
}
