 

new Tabulator("#atkritumu-parvadasana-table", {
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
    pagination: "local",
    paginationSize: 10,
    paginationSizeSelector: [5, 10, 20, 100],
    movableColumns: true,
    paginationCounter: "rows",
    maxHeight: "100%",
    layout: "fitColumns",
    "columns": [
         {
            "title": "Sākotnējās atrašanās vietas komersanta firma, reģ.nr.", 
            "field": "sakotneja-vieta-firma-regnr"},
      {
            "title": "Sākotnējās atrašanās vietas adrese", 
            "field": "sakotnejas-vietas-adrese"},
         {
            "title": "Galamērķa talrunis, fakss", 
            "field": "galamerka-talrunis"},
         {
            "title": "Galamērķa komersanta firma, reģ.nr.", 
            "field": "galamerka-vieta-firma-regnr"},
         {
            "title": "Galamērķa faktiskā adrese", 
            "field": "galamerka-adrese"},
       {
            "title": "Atkritumu kods / nosaukums", 
            "field": "atkritumu-kods-nosaukums"},
         {
            "title": "Apjoms gadā (t)", 
            "field": "atkritumu-apjoms"},
         {
            "title": "Pārvadāšanā izmantojamie specializētie transportlīdzekļi", 
            "field": "specializetie-transporta-lidzekli"},
         
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
                {title: "Atkritumu klases kods un nosaukums", field: "atkritumukods"},
                {title: "Līguma puses", field: "ligumapuses"},
                {title: "Līguma termiņš", field: "ligumatermins"}
            ]
        });
    },
    "data": [
        {                  
            "sakotneja-vieta-firma-regnr": "Poligons, 49999999994",
            "sakotnejas-vietas-adrese": "Zemzariņi, Vecauces pag.",
            "galamerka-talrunis": "56984578",
            "galamerka-vieta-firma-regnr": "Cits Poligons, 40404040404",
            "galamerka-adrese": "Poligoins 2, Ogre",
            "atkritumu-kods-nosaukums": "965",
            "atkritumu-apjoms": "10000",
            "specializetie-transporta-lidzekli": "",
            ligumi: [
                {ligumanr: "12345", atkritumukods:"Sīku stikla daļiņu un stikla pulvera atkritumi, kuri satur smagos metālus (piemēram, no katodstaru spuldzēm)", ligumapuses: "SIA Eko Osta, SIA Poligons", ligumatermins: "01.01.2022 - 31.12.2025"},
                {ligumanr: "12346", atkritumukods:"Sīku stikla daļiņu un stikla pulvera atkritumi, kuri satur smagos metālus (piemēram, no katodstaru spuldzēm)", ligumapuses: "SIA Eko Osta, SIA Cits poligons", ligumatermins: "01.01.2022 - 31.12.2025"},
            ]
        },
        {                  
            "sakotneja-vieta-firma-regnr": "Raktuvju Darbonis, 49998899994",
            "sakotnejas-vietas-adrese": "Ogres novads, Apsītes",
            "galamerka-talrunis": "56984578",
            "galamerka-vieta-firma-regnr": "Cits Poligons, 40404040404",
            "galamerka-adrese": "Poligoins 2, Ogre",
            "atkritumu-kods-nosaukums": "965",
            "atkritumu-apjoms": "10000",
            "specializetie-transporta-lidzekli": "",
            ligumi: [
                {ligumanr: "12345", atkritumukods:"Sīku stikla daļiņu un stikla pulvera atkritumi, kuri satur smagos metālus (piemēram, no katodstaru spuldzēm)", ligumapuses: "SIA Eko Osta, SIA Poligons", ligumatermins: "01.01.2022 - 31.12.2025"},
                {ligumanr: "12346", atkritumukods:"Sīku stikla daļiņu un stikla pulvera atkritumi, kuri satur smagos metālus (piemēram, no katodstaru spuldzēm)", ligumapuses: "SIA Eko Osta, SIA Cits poligons", ligumatermins: "01.01.2022 - 31.12.2025"},
            ]
        }
    ]
});