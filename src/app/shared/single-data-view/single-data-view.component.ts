import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-single-data-view',
  templateUrl: './single-data-view.component.html',
  styleUrls: ['./single-data-view.component.css']
})
export class SingleDataViewComponent implements OnInit {

  constructor() { }

  // tableColumn = ['item', 'desc',]
  @Input() tableData = []
  @Output() paginationEmit = new EventEmitter();
  pagination = []
  priceSelected
  totalcount: number = 0

  //   [[{ name: 'vishal' }, { name: 'gamer' }, { name: 'dota' }], [{ name: 'counterstrike' }, { name: 'old gamer' }],[{ name: 'vishal' }, { name: 'gamer' }, { name: 'dota' }], [{ name: 'counterstrike' }, { name: 'old gamer' }]
  //   ,[{ name: 'vishal' }, { name: 'gamer' }, { name: 'dota' }], [{ name: 'counterstrike' }, { name: 'old gamer' }],[{ name: 'vishal' }, { name: 'gamer' }, { name: 'dota' }], [{ name: 'counterstrike' }, { name: 'old gamer' }]
  //   ,[{ name: 'vishal' }, { name: 'gamer' }, { name: 'dota' }], [{ name: 'counterstrike' }, { name: 'old gamer' }]
  // ]
  priceFilter = [{
    viewValue: '1000 to 2000',
    value: 2000
  },
  {
    viewValue: '3000 to 4000',
    value: 4000
  },
  {
    viewValue: '5000 to 6000',
    value: 6000
  },
  {
    viewValue: '7000 to 8000',
    value: 8000
  },
  {
    viewValue: '9000 to 10000',
    value: 10000
  }]

  ngOnInit() {

    this.pagination = [1, 2, 3]
    this.priceSelected = 2000
  }

  additem(item) {
    console.log(item)

  }


  ngOnChanges(changes: SimpleChanges) {

    console.log(changes)
    debugger
    // if (changes.tableData.firstChange) {
      this.totalcount = changes.tableData.currentValue.length
      this.tableData = this.filterTableData(changes.tableData.currentValue)
      console.log(this.tableData)
    // }

  }

  filterTableData(data) {

    console.log(data)

    let size = 3;
    console.log(data.length / size)

    return new Array(Math.ceil(data.length / size)).fill("")
      .map(function () { return this.splice(0, size) }, data.slice());

  }

  selectedpage(pageno) {
    this.paginationEmit.emit({ pageno: pageno })
  }

  clickprev() {
    console.log('clicked prev')

    console.log(this.pagination)
    if (this.pagination[0] != 1 && this.pagination[2] > 3) {
      console.log("yes")
      let prevPage = this.pagination[0] - 1
      this.pagination = []

      this.pagination.push(prevPage + 1)
      this.pagination.push(prevPage + 2)
      this.pagination.unshift(prevPage)
      this.paginationEmit.emit({ pageno: this.pagination[0] })
    }
  }

  clicknext() {
    console.log("clciked next")

    console.log(this.totalcount)
    debugger
    let lastpage = this.pagination[this.pagination.length - 1]

    if (lastpage < Math.ceil(this.totalcount / 12)) {

      this.pagination = this.pagination.slice(-2)
      this.pagination.push(this.pagination[1] + 1)

      console.log(this.pagination)

      this.paginationEmit.emit({ pageno: this.pagination[2] })
    }
  }

  applyFilter(price) {
    console.log("applying filter now")
    console.log(price)

  }


}
