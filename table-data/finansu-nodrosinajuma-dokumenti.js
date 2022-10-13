
new Tabulator("#finansu-nodrosinajuma-dokumenti-table", {
    locale:"lv-lv",
    langs:{
        "lv-lv":{
            
            "ajax":{
                "loading":"Loading", //ajax loader text
                "error":"Error", //ajax error text
            },
            "groups":{ //copy for the auto generated item count in group header
                "item":"item", //the singular  for item
                "items":"items", //the plural for items
            },
            "pagination":{
                "first":"Pirmā", //text for the first page button
                "first_title":"Pirmā lapa", //tooltip text for the first page button
                "last":"Pēdējā",
                "last_title":"Last Page",
                "prev":"Atpakaļ",
                "prev_title":"Iepriekšējā lapa",
                "next":"Tālāk",
                "next_title":"Nākamā lapa",
                 "page_size":"Skaits lapā",
                  "all":"Visas",
                "counter":{
                    "showing": "Rāda",
                    "of": "no",
                    "rows": "",
                    "pages": "lapas",
                }
            },
            "headerFilters":{
                "default":"atlasīt kolonnu...", //default header filter placeholder text
               
            }
        }
    },
columnHeaderVertAlign: "bottom",
    resizableRows: true,
    pagination: "local",
    paginationSize: 10,
    paginationSizeSelector: [5, 10, 20, 100],
    movableColumns: true,
    paginationCounter: "rows",
    maxHeight: "100%",
    layout: "fitColumns",

    columnDefaults: {
        tooltip: true,
    },

    "columns": [
        {
            "title": "Finanšu nodrošinājuma izsniedzējs",
            "field": "izsniedzejs"},
        {
            "title": "Nodrošinājuma periods (No)",
            "field": "nodrosinajuma-periods-no"},
        {
            "title": "Nodrošinājuma periods (Līdz)",
            "field": "nodrosinajuma-periods-lidz"},
        {
            "title": "Nodrošinājuma apmērs, EUR",
            "field": "nodrosinajuma-apmers",
            
        
        
        formatter:function(cell, formatterParams){
       var value = cell.getValue();
        if(value < 100000){
            return "<span style='color:red; font-weight:bold;'>" + value + " (-23000) </span>";
        }else{
            return value;
        }}
        
        
        },
        {
            "title": "Dokumenta Nr.",
            "field": "dokumenta-nr"},
        {
            title: "Lasīšanai",
            field: "lasisanai",
            formatter: "rowSelection",
            width: "100", 
            hozAlign: "center",
            headerSort: false,
            cellClick: function (e, cell) {
                cell.getRow().toggleSelect();
            },
            titleFormatter: function (cell, formatterParams, onRendered)
            {
                cell.getElement().style.textAlign = 'center';
                return '' + cell.getValue()
            }
        }
    ],

    "data": [
        {
            "izsniedzejs": "12.12.2022",
            "nodrosinajuma-periods-no": "01.01.2022",
            "nodrosinajuma-periods-lidz": "31.12.2022",
            "nodrosinajuma-apmers": "50000",
            "dokumenta-nr": "5445678",
            "tikai-lasisanai": "Jā"
        }
    ]
});