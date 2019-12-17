import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {




  @Input() headeritems = []
  @Input() tabledata = []
  @Input() isUsers:boolean  
  @Input() edit: boolean
  @Input() delete: boolean
  @Output() adminEmitter = new EventEmitter()

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  deleteuser(data) { 

    this.adminEmitter.emit({key:'delete',id:data._id})

  }

  edituser(rowdata) {

    const dialogRef = this.dialog.open(ActionDialog, {
      width: '250px',
      data: { Formdata: { ...rowdata } }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
      console.log(this.tabledata)
      this.adminEmitter.emit(res)
    })
  }

}
@Component({
  selector: 'actiondialog',
  templateUrl: 'actiondialog.html',
})
export class ActionDialog implements OnInit {

  Forminputs = []
  lableKeys = []

  constructor(
    public dialogRef: MatDialogRef<ActionDialog>,

    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    console.log(this.data)


    this.lableKeys = Object.keys(this.data.Formdata)

    console.log(this.data)

  }

  Save() {

    console.log(this.data)
    this.dialogRef.close(this.data)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}