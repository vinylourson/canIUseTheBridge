import {Component, ViewChild, AfterViewInit} from '@angular/core';
import { DataService } from '../data.service';
// import {LiveAnnouncer} from '@angular/cdk/a11y';
// import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
// import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // standalone: true,
  // imports: [MatSortModule, MatTableModule]
})
export class HomeComponent {
  products:any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data)=>{
      console.log(data);
      this.products = data as any[];
      // sort lifts by date and show only lifts that are equal or greater than today

    })
  }
}

// export class TableSortingExample implements AfterViewInit {
//   // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = new MatTableDataSource(ELEMENT_DATA);

//   constructor(private _liveAnnouncer: LiveAnnouncer) {}

//   @ViewChild(MatSort) sort: MatSort;

//   ngAfterViewInit() {
//     this.dataSource.sort = this.sort;
//   }

//   /** Announce the change in sort state for assistive technology. */
//   announceSortChange(sortState: Sort) {
//     // This example uses English messages. If your application supports
//     // multiple language, you would internationalize these strings.
//     // Furthermore, you can customize the message to add additional
//     // details about the values being sorted.
//     if (sortState.direction) {
//       this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
//     } else {
//       this._liveAnnouncer.announce('Sorting cleared');
//     }
//   }
// }

export interface lifts {
  bateau: string;
  date_passage: Date;
  fermeture_a_la_circulation: string;
  re_ouverture_a_la_circulation: string;
}