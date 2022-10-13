new Tabulator("#apmaksas-informacija-table", {
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
            "title": "Datums", 
            "field": "datums"
         
        },
        {
            "title": "Maksājuma Nr.", 
            "field": "maksajuma-nr"
        },
        {
            "title": "Maksājuma veids", 
            "field": "maksajuma-veids"
        },
        {
            "title": "Statuss", 
            "field": "statuss"
        },
        {
            "title": "Maksātāja nosaukums/vārds, uzvārds ", 
            "field": "maksatajs"
        },
        {
            "title": "Maksātāja Reg.nr./Pers.kods", 
            "field": "reg-nr"
        },
        {
            "title": "Maksātāja konts", 
            "field": "konts"
        },
        {
            "title": "Summa, EUR", 
            "field": "summa"
        },
        {
            "title": "Maksājuma mērķis", 
            "field": "merkis"
        }
    ],

    "data": [
        {                  
            "datums": "12.12.2022",
            "maksajuma-nr": "123",
            "maksajuma-veids": "Pārskaitījums",
            "statuss": "Apmaksāts",
            "maksatajs": "SIA EKO OSTA",
            "reg-nr": "40000000000",
            "konts": "LV23HABA32876785575",
            "summa": "100",
            "merkis": "Par licenci"
        }
    ]
});
