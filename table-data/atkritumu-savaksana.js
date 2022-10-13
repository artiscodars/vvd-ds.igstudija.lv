
new Tabulator("#atkritumu-savaksana-table", {
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
    //pagination: "local",
  //  paginationSize: 10,
  //  paginationSizeSelector: [5, 10, 20, 100],
    movableColumns: true,
 //   paginationCounter: "rows",
    maxHeight: "100%",
    layout: "fitColumns",
    "columns": [
        {
            "title": "Vieta",
            "field": "atkritumu-savaksanas-vieta"},
        {
            "title": "Adrese",
            "field": "atkritumu-savaksanas-vietas-adrese"},
        {
            "title": "Atkritumu kods / nosaukums",
            "field": "atkritumu-kods-nosaukums"},
        {
            "title": "Apjoms gadā (t)",
            "field": "atkritumu-apjoms"},
        {
            "title": null,
            "field": "darbibas",
            width: 60,
            hozAlign: "center",
            headerSort: false,
            formatter: function (cell) {
                return '<button class="btn btn-sm btn-success"><i class="fa-solid fa-pencil tone"></i></button>';
            }
        }
    ],
    rowFormatter: function (row) {
        //create and style holder elements
        var holderEl = document.createElement("div");
        var tableEl = document.createElement("div");

        //holderEl.style.boxSizing = "border-box";
        holderEl.style.padding = "0px 0px 30px 0px";
          holderEl.style.borderTop = "3px solid #333";
          holderEl.style.borderBotom = "0px solid #333";


        tableEl.style.border = "0px solid #333";

        holderEl.appendChild(tableEl);

        row.getElement().appendChild(holderEl);

        var subTable = new Tabulator(tableEl, {
            //layout: "fitColumns",
            
            data: row.getData().ligumi,
            columns: [
                {title: "Līguma numurs", field: "ligumanr"},
                {title: "Līguma puses", field: "ligumapuses"},
                {title: "Līguma termiņš", field: "ligumatermins"}
            ]
        });
    },

    "data": [
        {
            "atkritumu-savaksanas-vieta": "Poligons",
            "atkritumu-savaksanas-vietas-adrese": "Zemzariņi, Vecauces pag.",
            "atkritumu-kods-nosaukums": "7656",
            "atkritumu-apjoms": "1000",
            ligumi: [
                {ligumanr: "12345", ligumapuses: "SIA Eko Osta, SIA Poligons", ligumatermins: "01.01.2022 - 31.12.2025"},
                {ligumanr: "12346", ligumapuses: "SIA Eko Osta, SIA Cits poligons", ligumatermins: "01.01.2022 - 31.12.2025"},
            ]

        },
        {
            "atkritumu-savaksanas-vieta": "Poligons 2",
            "atkritumu-savaksanas-vietas-adrese": "Brankas, Vecauces pag.",
            "atkritumu-kods-nosaukums": "7656",
            "atkritumu-apjoms": "100",
            ligumi: [
                {ligumanr: "22345", ligumapuses: "SIA Eko Osta, SIA MARE MARE", ligumatermins: "01.01.2022 - 31.12.2025"},
                {ligumanr: "32346", ligumapuses: "SIA Eko Osta, SIA Great moovers", ligumatermins: "01.01.2022 - 31.12.2025"},
            ]
        }
    ]

});

