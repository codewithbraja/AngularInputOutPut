import { Component } from '@angular/core';
import { Customer } from '../Model/Customer'

@Component({
  selector: 'cust-comp',
  templateUrl: './Customer.component.html',
})
export class CustomerComponent {
  

  currentCustomer: Customer = new Customer();
  customers: Array<Customer> = new Array<Customer>();



  Select(selectedCust: Customer) {
    this.currentCustomer = Object.assign({}, selectedCust);
  }
  Add() {
   this.customers.push(this.currentCustomer);
    //slice method creates a fresh reference of an object
    this.customers = this.customers.slice();
    this.currentCustomer = new Customer();
   
  }
  Update() {
    for (let cust of this.customers)
     {
      if (cust.CustomerCode == this.currentCustomer.CustomerCode)
      {
        cust.CustomerName = this.currentCustomer.CustomerName;
        cust.CustomerAmount = this.currentCustomer.CustomerAmount;
      }
    }
    this.currentCustomer = new Customer();
  }

  


}



