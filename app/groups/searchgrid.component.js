System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SearchGridComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SearchGridComponent = (function () {
                function SearchGridComponent() {
                    // we pass an empty gridOptions in, so we can grab the api out
                    this.gridOptions = {};
                    this.gridOptions.enableSorting = true;
                    //this.createRowData(data);
                    this.createColumnDefs();
                    this.showGrid = true;
                }
                SearchGridComponent.prototype.createRowData = function () {
                    var rowData = [];
                    rowData = [];
                    this.rowData = rowData;
                    console.log(this.rowData);
                };
                SearchGridComponent.prototype.createColumnDefs = function () {
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
                };
                SearchGridComponent.prototype.calculateRowCount = function () {
                    if (this.gridOptions.api && this.rowData) {
                        var model = this.gridOptions.api.getModel();
                        var totalRows = this.rowData.length;
                        var processedRows = model.getRowCount();
                        this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
                    }
                };
                SearchGridComponent.prototype.onModelUpdated = function () {
                    console.log('onModelUpdated');
                    this.calculateRowCount();
                };
                SearchGridComponent.prototype.onReady = function () {
                    console.log('onReady');
                    this.calculateRowCount();
                };
                SearchGridComponent.prototype.onCellClicked = function ($event) {
                    console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
                };
                SearchGridComponent.prototype.onCellValueChanged = function ($event) {
                    console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
                };
                SearchGridComponent.prototype.onCellDoubleClicked = function ($event) {
                    console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
                };
                SearchGridComponent.prototype.onCellContextMenu = function ($event) {
                    console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
                };
                SearchGridComponent.prototype.onCellFocused = function ($event) {
                    console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
                };
                SearchGridComponent.prototype.onRowSelected = function ($event) {
                    // taking out, as when we 'select all', it prints to much to the console!!
                    // console.log('onRowSelected: ' + $event.node.data.name);
                };
                SearchGridComponent.prototype.onSelectionChanged = function () {
                    // console.log('selectionChanged: ' + selectedRowsString );
                };
                SearchGridComponent.prototype.onBeforeFilterChanged = function () {
                    console.log('beforeFilterChanged');
                };
                SearchGridComponent.prototype.onAfterFilterChanged = function () {
                    console.log('afterFilterChanged');
                };
                SearchGridComponent.prototype.onFilterModified = function () {
                    console.log('onFilterModified');
                };
                SearchGridComponent.prototype.onBeforeSortChanged = function () {
                    console.log('onBeforeSortChanged');
                };
                SearchGridComponent.prototype.onAfterSortChanged = function () {
                    console.log('onAfterSortChanged');
                };
                SearchGridComponent.prototype.onVirtualRowRemoved = function ($event) {
                    // because this event gets fired LOTS of times, we don't print it to the
                    // console. if you want to see it, just uncomment out this line
                    // console.log('onVirtualRowRemoved: ' + $event.rowIndex);
                };
                SearchGridComponent.prototype.onRowClicked = function ($event) {
                    console.log('onRowClicked: ' + $event.node.data.name);
                };
                SearchGridComponent.prototype.onQuickFilterChanged = function ($event) {
                    this.gridOptions.api.setQuickFilter($event.target.value);
                };
                // here we use one generic event to handle all the column type events.
                // the method just prints the event name
                SearchGridComponent.prototype.onColumnEvent = function ($event) {
                    console.log('onColumnEvent: ' + $event);
                };
                SearchGridComponent.prototype.onClickjoin = function ($event) {
                    var updatednodes = [];
                    var rowData = this.rowData;
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
                            for (var i = 0; i < rowData.length; i++) {
                                var d = rowData[i];
                                if (d.id === data.id) {
                                    rowData.splice(i, 1);
                                    rowData.push(data);
                                }
                            }
                        }
                    });
                    this.rowData = rowData.sort(function (a, b) { return a.id - b.id; });
                    this.gridOptions.api.setRowData(this.gridOptions.rowData);
                };
                SearchGridComponent.prototype.refreshgrid = function () {
                    this.gridOptions.api.refreshView();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], SearchGridComponent.prototype, "showGrid", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SearchGridComponent.prototype, "rowData", void 0);
                SearchGridComponent = __decorate([
                    core_1.Component({
                        selector: 'mw-searchgrid',
                        templateUrl: 'app/groups/searchgrid.component.html',
                        styles: ['.toolbar button {margin: 2px; padding: 0px;}']
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchGridComponent);
                return SearchGridComponent;
            }());
            exports_1("SearchGridComponent", SearchGridComponent);
        }
    }
});
//# sourceMappingURL=searchgrid.component.js.map