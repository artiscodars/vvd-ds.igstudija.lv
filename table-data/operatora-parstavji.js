new Tabulator("#operatora-parstavji-table", {
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
   // resizableRows: true,
   // pagination: "local",
  //  paginationSize: 10,
  //  paginationSizeSelector: [5, 10, 20, 100],
 //   movableColumns: true,
  //  paginationCounter: "rows",
    maxHeight: "100%",
    columnDefaults:{
        headerTooltip:true,
      
    },
    layout: "fitColumns",
    "columns": [
         {
            "title": "Vārds", 
            "field": "vards"},
        {
            "title": "Uzvārds", 
            "field": "uzvards"},
        {
            "title": "Amats", 
            "field": "amats"},
        {
            "title": "Pārstāvja tips", 
            "field": "tips"},
        {
            "title": null, 
            "field": "darbibas",
              width:50,
               hozAlign: "center",
            formatter: function (cell) {
                return '<button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash-can"></i></button>';
            }
        }
    ],
    "data": [
        {                  
            "vards": "Jānis",
            "uzvards":"Bērziņš",
            "amats": "Vecākais inženieris" ,
             "tips": "Pārstāvis"    
        },
        {                  
            "vards": "Anna ",
            "uzvards":"Kalna",
            "amats": "Direktors" ,
             "tips": "Amatpersona"    
        }
    ]
});