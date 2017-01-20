import { Component, Input } from '@angular/core';

import { GridOptions } from 'ag-grid/main';


@Component({
    selector: 'mw-searchgrid',
    templateUrl: 'app/groups/searchgrid.component.html',
    styles: ['.toolbar button {margin: 2px; padding: 0px;}']
})
export class SearchGridComponent {

    private gridOptions: GridOptions;
    @Input() showGrid: boolean;
    @Input() rowData;
    private columnDefs: any[];
    public rowCount: string;
    public selecteddata: any[];

    constructor() {
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};
        this.gridOptions.enableSorting = true;
        //this.createRowData(data);
        this.createColumnDefs();
        this.showGrid = true;
    }

    private createRowData() {
        var rowData: any[] = [];
        rowData = [];
        this.rowData = rowData;
        console.log(this.rowData);
    }

    private createColumnDefs() {
        this.columnDefs = [
            {
                headerName: '#', width: 75, checkboxSelection: true, suppressSorting: true,
                suppressMenu: true, pinned: true
            },
            {
                headerName: 'Groupname', field: "groupname", checkboxSelection: false, suppressSorting: true,
                suppressMenu: true, pinned: true
            },
            {
                headerName: 'Course', field: "course", checkboxSelection: false, suppressSorting: true,
                suppressMenu: true, pinned: true

            },
            {
                headerName: 'Term', field: "term", checkboxSelection: false, suppressSorting: true,
                suppressMenu: true, pinned: true
            },
            {
                headerName: 'Department', field: "department", checkboxSelection: false, suppressSorting: true,
                suppressMenu: true, pinned: true
            },
            {
                headerName: 'University', field: "university", checkboxSelection: false, suppressSorting: true,
                suppressMenu: true, pinned: true
            },
            {
                headerName: 'CreatedBy', field: "createdby", checkboxSelection: false, suppressSorting: true,
                suppressMenu: true, pinned: true
            },
            {
                headerName: 'Seats Left', field: "seatsleft", checkboxSelection: false, suppressSorting: true,
                suppressMenu: true, pinned: true, filter: 'number'
            },
            {
                headerName: 'Id', field: "id", checkboxSelection: false, suppressSorting: true,
                suppressMenu: true, pinned: false, filter: 'number', hide: true
            }
        ];
    }

    private calculateRowCount() {
        if (this.gridOptions.api && this.rowData) {
            var model = this.gridOptions.api.getModel();
            var totalRows = this.rowData.length;
            var processedRows = model.getRowCount();
            this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
        }
    }

    private onModelUpdated() {
        console.log('onModelUpdated');
        this.calculateRowCount();
    }

    private onReady() {
        console.log('onReady');
        this.calculateRowCount();
    }
    private onCellClicked($event) {
        console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellValueChanged($event) {
        console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
    }

    private onCellDoubleClicked($event) {
        console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellContextMenu($event) {
        console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellFocused($event) {
        console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
    }

    private onRowSelected($event) {
        // taking out, as when we 'select all', it prints to much to the console!!
        // console.log('onRowSelected: ' + $event.node.data.name);
    }

    private onSelectionChanged() {
        // console.log('selectionChanged: ' + selectedRowsString );
    }

    private onBeforeFilterChanged() {
        console.log('beforeFilterChanged');
    }

    private onAfterFilterChanged() {
        console.log('afterFilterChanged');
    }

    private onFilterModified() {
        console.log('onFilterModified');
    }

    private onBeforeSortChanged() {
        console.log('onBeforeSortChanged');
    }

    private onAfterSortChanged() {
        console.log('onAfterSortChanged');
    }

    private onVirtualRowRemoved($event) {
        // because this event gets fired LOTS of times, we don't print it to the
        // console. if you want to see it, just uncomment out this line
        // console.log('onVirtualRowRemoved: ' + $event.rowIndex);
    }

    private onRowClicked($event) {
        console.log('onRowClicked: ' + $event.node.data.name);
    }

    public onQuickFilterChanged($event) {
        this.gridOptions.api.setQuickFilter($event.target.value);
    }

    // here we use one generic event to handle all the column type events.
    // the method just prints the event name
    private onColumnEvent($event) {
        console.log('onColumnEvent: ' + $event);
    }

    onClickjoin($event) {
        var updatednodes= [];
        var rowData= this.rowData;
        console.log(rowData);
         var selectedRows = this.gridOptions.api.getSelectedRows();
            selectedRows.forEach(function (selectedRow, index) {
                 var data = selectedRow;                 
                 console.log(data);
                 if (data.seatsleft === 0) {
                    return false;
                }
                else {
                    data.seatsleft = data.seatsleft - 1;
                    //updatednodes.push(selectedRow);
                    for(var i = 0; i < rowData.length;i++)
                    {
                        var d = rowData[i];
                        if (d.id === data.id)
                        {
                            rowData.splice(i,1);
                            rowData.push(data);
                            
                        }
                    }
                }
            });
            this.rowData = rowData.sort(function(a, b) {return a.id - b.id;});
            this.gridOptions.api.setRowData(this.gridOptions.rowData);
            
    }
    refreshgrid() {
        this.gridOptions.api.refreshView();
    }

}