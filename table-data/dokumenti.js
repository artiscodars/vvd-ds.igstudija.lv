new Tabulator("#dokumenti-table", {
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
   // pagination: "local",
    //paginationSize: 10,
   // paginationSizeSelector: [5, 10, 20, 100],
    movableColumns: true,
   // paginationCounter: "rows",
    maxHeight: "100%",
    layout: "fitColumns",
    "columns": [
        {
            "title": "N.p.k.",
            "field": "npk",
            width: 50,
            hozAlign: "center",
             headerSort: false
            
        },
        {
            "title": "Nosaukums",
            "field": "nosaukums",
            
            formatter: function (cell, formatterParams) {
                var value = cell.getValue();
                return "<a href='#'>" + value + "</a>";
                
            }
        },
        {
            "title": "Apraksts",
            "field": "apraksts",
             headerSort: false,
               editor: "textarea"
            
        },

        {
            "title": null,
            "field": "darbibas",
             headerSort: false,
            width: 50,
            hozAlign: "center",
            formatter: function (cell) {
                return '<button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash-can"></i></button>';
            }
        }
    ],
    "data": [
        {
            "npk":"1.",
            "nosaukums": "Kaut kāds dokumenta nosaukums"

        },
        {
            "npk":"2.",
            "nosaukums": "Cits dokuments"
        }
    ]
});