import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  dataForm: FormGroup;
  tableData: any[] = [
    { name: 'John Doe', age: 25, address: '123 Main St' , selectedCar:1},
    { name: 'Jane Smith', age: 30, address: '456 Oak St' , selectedCar:2},
    { name: 'Bob Johnson', age: 28, address: '789 Pine St', selectedCar:4 }
  ];
  selectedCar: number = 1;
  disabledDrop: boolean = true;
    cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];
  constructor(private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      rows: this.fb.array([])
    });
    this.initDataForm();
  }
  get rowsFormArray(): FormArray | null {
   return this.dataForm.get('rows') as FormArray;
  }
  initDataForm(): void {
    debugger;
    const formArray = this.rowsFormArray;
    this.tableData.forEach(data => {
      formArray?.push(this.fb.group({
        name: [data.name, Validators.required],
        age: [data.age, Validators.required],
        address: [data.address, Validators.required],
        phone: [ , Validators.required],
        selectedCar: [{ value: data.selectedCar, disabled: true }, Validators.required],
      }));
    });
  }
  initNewDataRow(): void {
    debugger;
    this.tableData.push(this.fb.group({
        name: ['', Validators.required],
        age: ['', Validators.required],
        address: ['', Validators.required],
        phone: [ , Validators.required],
        selectedCar: [ '',  Validators.required],
     
    }))
  }
  submitForm(): void {
    debugger;
    if (this.dataForm.valid) {
      console.log('Form submitted:', this.dataForm.value);
      // You can perform further actions with the form data
    } else {
      // Handle validation errors
      // this.rowsFormArray?.controls[2].markAllAsTouched();
     // this.dataForm.controls['rows']. .markAllAsTouched();
      const index = 1; // Replace this with your desired index

const rowControls = (this.dataForm.get('rows') as FormArray).at(index) as FormGroup;

Object.keys(rowControls.controls).forEach(controlName => {
  rowControls.get(controlName)?.markAsTouched();
});

    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
