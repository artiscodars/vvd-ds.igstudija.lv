

new Tabulator("#atkritumu-parkrausana-table", {
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
            "title": "Pārkraušanas centrs vai stacija", 
            "field": "parkrausanas-centrs-vai-stacija"},
      {
            "title": "Pārkraušanas vieta (adrese)", 
            "field": "parkrausanas-vieta"},
       {
            "title": "Atkritumu kods / nosaukums", 
            "field": "atkritumu-kods-nosaukums"},
         {
            "title": "Apjoms gadā (t)", 
            "field": "atkritumu-apjoms"},
        {
            "title": null, 
            "field": "darbibas",
             width:50,
               hozAlign: "center",
               headerSort: false,
            formatter: function (cell) {
                return '<button class="btn btn-sm btn-success"><i class="fa-solid fa-pencil tone"></i></button>';
            }
        }
    ],
    "data": [
        {                  
            "parkrausanas-centrs-vai-stacija": "Poligons"   ,
               "parkrausanas-vieta":"Zemzariņi, Vecauces pag.",
               "atkritumu-kods-nosaukums":"7656",
               "atkritumu-apjoms":"1000"
            
        },
        {                  
            "parkrausanas-centrs-vai-stacija": "Poligons 2"   ,
               "parkrausanas-vieta":"Brankas, Vecauces pag.",
               "atkritumu-kods-nosaukums":"7656",
               "atkritumu-apjoms":"100"
        }
    ]
});