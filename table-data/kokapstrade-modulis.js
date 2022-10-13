
new Tabulator("#kokapstrade-modulis-table", {
    locale: "lv-lv",
    langs: {
        "lv-lv": {

            "ajax": {
                "loading": "Loading", //ajax loader text
                "error": "Error", //ajax error text
            },
            "groups": {//copy for the auto generated item count in group header
                "item": "item", //the singular  for item
                "items": "items", //the plural for items
            },
            "pagination": {
                "first": "Pirmā", //text for the first page button
                "first_title": "Pirmā lapa", //tooltip text for the first page button
                "last": "Pēdējā",
                "last_title": "Last Page",
                "prev": "Atpakaļ",
                "prev_title": "Iepriekšējā lapa",
                "next": "Tālāk",
                "next_title": "Nākamā lapa",
                "page_size": "Skaits lapā",
                "all": "Visas",
                "counter": {
                    "showing": "Rāda",
                    "of": "no",
                    "rows": "",
                    "pages": "lapas"
                }
            },
            "headerFilters": {
                "default": "atlasīt..." //default header filter placeholder text

            }
            
        }
    },
columnHeaderVertAlign: "bottom",
    resizableRows: true,
  //  pagination: "local",
  //  paginationSize: 10,
   // paginationSizeSelector: [5, 10, 20, 100],
  //  movableColumns: true,
  //  paginationCounter: "rows",
    maxHeight: "100%",
    layout: "fitColumns",

    responsiveLayout: true,
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
            "title": "Rādītājs",
            "field": "raditajs",
            headerFilter: true,
        },
        {
            "title": "Vērtība",
            "field": "vertiba",
            width: 100,
             headerFilter: true,
            editor:"select", 
            headerFilter:"select", 
            headerFilterParams:{
              values:[
                    "Atbilst",
                    "Neatbilst", 
                    "Neattiecas"
                ]
                },
            editorParams: {
               values:[
                    "Atbilst",
                    "Neatbilst", 
                    "Neattiecas"
                ]
                
                }

        },
        {
            "title": "Piezīmes",
            "field": "piezimes",
            editor: "textarea"

        },

        {
            "title": "",
            "field": "darbibas",
            width: 50,
            hozAlign: "center",
            headerSort: false,
            formatter: function (cell) {
                return '<button class="btn btn-sm btn-success"><i class="fa-solid fa-file tone"></i></button>';
            }
        }
    ],
    "data": [
        {
            "npk": 1,
            "raditajs": "Kaut kāds rādītāja nosaukums ļoti garš un sarežģīts, ka ne izlasīt, ne atcerēties Kaut kāds rādītāja nosaukums ļoti garš un sarežģīts, ka ne izlasīt, ne atcerēties Kaut kāds rādītāja nosaukums ļoti garš un sarežģīts, ka ne izlasīt, ne atcerēties",
            "vertiba": "a",
            "piezimes": "Pilnīgi noteikti viss ir ok"
        },
        {
            "npk": 2,
            "raditajs": "Kaut kāds rādītāja nevisai garš nosaukums",
            "piezimes": "Pilnīgi noteikti viss ir ok",
            "vertiba": "b"
        },
        {
            "npk": 3,
            "raditajs": "Kaut kāds rādītāja nosaukums mazliet atširīgs",
            "vertiba": null,
            "piezimes": null
        },
        {
            "npk": 4,
            "raditajs": "Kaut kāds nosaukums",
            "vertiba": "c",
            "piezimes": "nav attiecināms"
        }
    ]
});
