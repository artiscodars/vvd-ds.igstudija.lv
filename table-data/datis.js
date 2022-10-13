
new Tabulator("#datis-table", {
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

    "columns": [
        {
            "title": "Atkritumu veids", 
            "field": "a"},
        {
            "title": "Savācējs", 
            "field": "b"},
        {
            "title": "Latvijā savāktais izlietotā iepakojuma un vienreiz lietojamo trauku daudzums pārskata gadā", 
            "field": "c"},
        {
            "title": "Atkritumu tips", 
            "field": "d"},
        {
            "title": "Komersants, kurš pieņēma atkritumus no Savācēja", 
            "field": "e"},
        {
            "title": "Apsaimniekotāja līdzfinansējums (euro) par savākto apjomu", 
            "field": "f"},
        {
            "title": "Apsaimniekotāja līdzfinansējuma par savākto apjomu saņēmējs – komersanta nosaukums", 
            "field": "g"},
        {
            "title": "Starpnieks", 
            "field": "h"},
        {
            "title": "Laukuma adrese", 
            "field": "i"},
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
            "a":"-",
            "b":"-",
            "c":"-",
            "d":"-",
            "e":"-",
            "f":"-",
            "g":"-",
            "h":"-",
            "i":"-"
            
        }
    ]
});