import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/service/dashboard-service/dashboard.service';
import { SharedService } from 'src/app/service/shared-service/shared.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {


  IsUser: boolean
  IsDelete: boolean = true
  IsEdit: boolean = true
  tableData = []
  headerData = []

  constructor(public router: Router, public dialog: MatDialog, private dashboardService: DashboardService, public sharedService: SharedService) { }

  ngOnInit() {

    this.GetAllItems()
    console.log("im insid etyh admoing dashboard component!!")

  }

  GetAllUsers() {
    //get all items
    this.dashboardService.getAllUsers().subscribe(res => {
      console.log("got al users")
      console.log(res)
      this.headerData = Object.keys(res.data[0])
      this.tableData = res.data

    })

    this.IsUser = true
    this.IsDelete = false
  }
  admintableEmit(data) {
    console.log("emitteed dat!!")

    console.log(data)

    if (data.id != undefined) {

      this.dashboardService.deleteitems({ _id: data.id }).subscribe(res => {

        console.log(res)
        this.GetAllItems()
      })
      return
    }

    if (this.IsUser) {
      // call user update api
      // this.GetAllUsers

      this.dashboardService.updateUser(data.Formdata).subscribe(res => {

        console.log(res)
        this.sharedService.showSucess("Sucessfull")
        this.GetAllUsers()

      })
    } else {

      this.dashboardService.updateItems(data.Formdata).subscribe(res => {
        console.log(res)
        if (res.status == 1) {

          this.GetAllItems()
        }
        this.sharedService.showSucess(res.msg)
      })
      //call items update api
      // this.GetAllItems()
    }

  }

  GetAllItems() {
    this.IsUser = false
    this.IsDelete = true
    this.dashboardService.getAllItems().subscribe(res => {
      console.log(res)
      if (res.status == 1) {
        this.headerData = Object.keys(res.data[0])
        this.tableData = res.data
      }
    })
  }

  adminlogOut() {
    localStorage.clear()
    sessionStorage.clear()
    this.sharedService.showSucess("sucessfully loged out")
    this.router.navigate(['/'])
  }




  addProduct() {


    const dialogRef = this.dialog.open(ProductDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(res => {

      if (res) {
        this.GetAllItems()
      }
    })

  }


}

@Component({
  selector: 'ProductDialog',
  templateUrl: 'ProductDialog.html',
})
export class ProductDialog implements OnInit {

  Forminputs = []
  filedata=null
  lableKeys = []
  filename
  ProductForm: FormGroup
  constructor(
    private dashboardService: DashboardService,
    public dialogRef: MatDialogRef<ProductDialog>,
    public sharedService: SharedService,
    public fb: FormBuilder,

    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {

    this.InitializeProductForm()

  }
  InitializeProductForm() {
    this.ProductForm = this.fb.group({
      productname: ['', [Validators.required]],
      productcost: ['', [Validators.required]],
      productdesc: ['', [Validators.required]],
    })
  }

  createProduct() {


    let produictObj = {
      details: this.ProductForm.value.productdesc,
      itemname: this.ProductForm.value.productname,
      itemcost: this.ProductForm.value.productcost,
      image:this.filedata
    }

    this.dashboardService.uploadProduct(produictObj).subscribe(res => {
      console.log(res)
      if (res.status == 1) {
        this.sharedService.showSucess(res.msg)
        this.dialogRef.close(1)
      } else {
        this.sharedService.showError(res.msg)
        this.dialogRef.close(0)
      }
    })
  }

  onFileSelect(event) {
    console.log(event)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file)

      this.dashboardService.uploadproductImage(file).subscribe(res => {
        console.log("->>>>>>>>>>>>")

        if (res.status == 1) {
          this.sharedService.showSucess(res.msg)
          this.filedata=res.data
          this.filename = res.data.originalname
        } else {
          this.sharedService.showError(res.msg)
        }

      })
    }
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}