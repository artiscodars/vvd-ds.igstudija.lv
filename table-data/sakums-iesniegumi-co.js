new Tabulator("#sakums-iesniegumi-co-table", {
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
            "title": "Nosaukums",
            "field": "nosaukums",
    headerSort: false,
            formatter: function (cell, formatterParams) {
                var value = cell.getValue();
                return "<a href='#'>" + value + "</a>";
                
            }
        },
        {
            "title": "Klients",
            "field": "klients" 
        },
        {
            "title": "Datums",
            "field": "datums",
            width: 100,
             headerSort: false
           
            
        }

        
    ],
    "data": [
        {
            
            "nosaukums": "Kaut kāds dokumenta nosaukums",
            "datums":"12.12.2022",
            "klients":"SIA EKO OSTA"

        },
        {
            
            "nosaukums": "Cits dokuments",
            "datums":"12.12.2022",
            "klients":"SIA EKO OSTA"
        }
    ]
});