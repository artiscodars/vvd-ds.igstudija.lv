
new Tabulator("#dnr-table", {
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
   // paginationSize: 10,
  //  paginationSizeSelector: [5, 10, 20, 100],
    movableColumns: true,
  //  paginationCounter: "rows",
    maxHeight: "100%",
    layout: "fitColumns",

    "columns": [
        {
            "title": "Iepakojums", 
            "field": "iepakojuma-veids"},
        
        {
            "title": "Likme", 
            "field": "likme"},
        {
            "title": "Radītais (kg)", 
            "field": "raditais-kg", bottomCalc:"sum",},
        {
            "title": "DRN (EUR)", 
            "field": "dnr-eur", bottomCalc:"sum",},
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
            "iepakojuma-veids":"Stikls",
        
        "likme":"2",
        "raditais-kg":"34",
        "dnr-eur":"527169.72",
        },
        {
            "iepakojuma-veids":"Plastmasa (izņemot bioplastmasu, oksonoārdāmo plastmasu, polistirolu un plastmasas maisiņus)",
       
        "likme":"1.22",
        "raditais-kg":"34",
        "dnr-eur":"1155562.04",
        },
        {
            "iepakojuma-veids":"Bioplastmasa",
       
        "likme":"0.24",
        "raditais-kg":"34",
        "dnr-eur":"0.00",
        },
        {
            "iepakojuma-veids":"Oksonoārdāmā plastmasa (laista tirgū līdz 02.07.2021.)",
       
        "likme":"1.22",
        "raditais-kg":"34",
        "dnr-eur":"0.00",
        },
        {
            "iepakojuma-veids":"Polistirols",
       
        "likme":"2.20",
        "raditais-kg":"34",
        "dnr-eur":"0.00",
        }
        ,
        {
            "iepakojuma-veids":"Vieglās plastmasas maisiņi",
       
        "likme":"4.80",
        "raditais-kg":"34",
        "dnr-eur":"0.00",
        },
        {
            "iepakojuma-veids":"Plastmasas maisiņi, kuru materiāla biezums ≥ 50 mikroni",
       
        "likme":"1.50",
        "raditais-kg":"34",
        "dnr-eur":"0.00",
        },
        {
            "iepakojuma-veids":"Papīrs un kartons vai citas dabiskās šķiedras",
       
        "likme":"0.24",
        "raditais-kg":"34",
        "dnr-eur":"0.00",
        },
        {
            "iepakojuma-veids":"Metāls",
       
        "likme":"0.24",
        "raditais-kg":"34",
        "dnr-eur":"0.00",
        }
        ,
        {
            "iepakojuma-veids":"Koks",
       
        "likme":"0.24",
        "raditais-kg":"34",
        "dnr-eur":"0.00",
        }
        
    ]
});