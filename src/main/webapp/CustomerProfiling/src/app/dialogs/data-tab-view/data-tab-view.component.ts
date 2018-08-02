import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'data-tab-view',
    templateUrl: './data-tab-view.component.html',
    styleUrls: ['./data-tab-view.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DataTabViewComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<DataTabViewComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
    }
}
