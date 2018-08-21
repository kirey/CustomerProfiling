import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'data-tab-view',
    templateUrl: './data-tab-view.component.html',
    styleUrls: ['./data-tab-view.component.scss']
    // encapsulation: ViewEncapsulation.None
})
export class DataTabViewComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<DataTabViewComponent>, @Inject(MAT_DIALOG_DATA) public csv_data: any) { }


    ngOnInit() {

        if (this.csv_data.length > 0) {
            // CSV TO TABLE
            let csv_data = this.csv_data.split(/\r?\n|\r/);
            let table_data = '<table class="table table-bordered table-striped">';
            for (let count = 0; count < csv_data.length; count++) {
                let cell_data = csv_data[count].split(",");
                table_data += '<tr>';
                for (let cell_count = 0; cell_count < cell_data.length; cell_count++) {
                    if (count === 0) {
                        table_data += '<th>' + cell_data[cell_count] + '</th>';
                    }
                    else {
                        table_data += '<td>' + cell_data[cell_count] + '</td>';
                    }
                }
                table_data += '</tr>';
            }
            table_data += '</table>';
            document.getElementById('csv_data_table').innerHTML = table_data;
        }
    }
}
