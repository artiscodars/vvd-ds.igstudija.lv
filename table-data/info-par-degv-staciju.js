new Tabulator("#info-par-degv-staciju-table", {
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
            "title": "Npk",
            "field": "npk",
            hozAlign: "center",
            width: 50
        },
        {
            "title": "Rezervuāra tips ",
            "field": "a",
            editor: "select",
            editorParams: {
                values: [
                    "Virszemes",
                    "Pazemes"
                ]}
        },
         {
            "title": "Tilpums, m3",
            "field": "b",
            editor: "number",
        },
         {
            "title": "Degvielas veids",
            "field": "c",
            editor: "select",
            editorParams: {
                values: [
                    "Dīzeļdegviela",
                    "Benzīns",
                    "Škidrinātā naftas gāze",
                    "Dabasgāze"
                ]}
        },
        {
            "title": "Vai ir monitoringa tīkls? ",
            "field": "d",
            editor: "select",
            editorParams: {
                values: [
                    "Jā",
                    "Nē"
                ]}
        },
        {
            "title": "Vai ir pretinfiltrācijas segums?",
            "field": "e",
            editor: "select",
            editorParams: {
                values: [
                    "Jā",
                    "Nē"
                ]}
        },
        {
            "title": "Vai ir tvaika uztveršanas sistēma?",
            "field": "f",
            editor: "select",
            editorParams: {
                values: [
                    "Jā",
                    "Nē"
                ]}
        },
        {
            "title": "Vai ir tvaika savākšanas sistēma?",
            "field": "g",
            editor: "select",
            editorParams: {
                values: [
                    "Jā",
                    "Nē"
                ]}
        },
        

        {
            "title": "",
            "field": "darbibas",
            width: 50,
            hozAlign: "center",
            headerSort: false,
            formatter: function (cell) {
                return '<button class="btn btn-sm btn-success"><i class="fa-solid fa-pencil tone"></i></button>';
            }
        }
    ],
    "data": [ 
    
        {
            "npk":1,
            "a":"Virszemes",
            "b":"10000",
            "c":"Benzīns",
            "d":"Jā",
            "e":"Jā",
            "f":"Jā",
            "g":"Jā"
        }
    ]
});
