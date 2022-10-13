new Tabulator("#zinojuma-aprites-vesture-table", {
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
    columnDefaults:{
        headerTooltip:true,
      
    },
    layout: "fitColumns",
    "columns": [
        {
            "title": "Vadītājs",
            "field": "vaditajs"},

        {
            "title": "Lietotājs",
            "field": "lietotajs"},
        {
            "title": "Aktivitātes datums un laiks",
            "field": "aktivitates-datums-un-laiks"},
        {
            "title": "Darbība",
            "field": "darbiba"},
        {
            "title": "Komentārs",
            "field": "komentars"},
        {
            "title": "Npieciešams uzsākt APL",
            "field": "nepieciesams-uzsakts-apl",
            formatter: "lookup",
            formatterParams: {
                "ja": "Jā"
            },
            hozAlign: "center"
        },
        {
            "title": "Npieciešams sagatavot lēmumu par veicamajām darbībām",
            "field": "nepieciesams-lemums",
            formatter: "lookup",
            formatterParams: {
                "ja": "Jā"
            },
            hozAlign: "center"
        }
    ],
    "data": [
        {
            "vaditajs": "Liena Kadaga",
            "lietotajs": "Alfrēds Kalniņš",
            "aktivitates-datums-un-laiks": "12.12.2022 11:54",
            "darbiba": "Pabeigts",
            "komentars": "Komentārs",
            "nepieciesams-uzsakts-apl": null,
            "nepieciesams-lemums": "ja"

        },
        {
            "vaditajs": "Liena Kadaga",
            "lietotajs": "Alfrēds Kalniņš",
            "aktivitates-datums-un-laiks": "12.12.2022 11:54",
            "darbiba": "Pabeigts",
            "komentars": "Komentārs",
            "nepieciesams-uzsakts-apl": "ja",
            "nepieciesams-lemums": null

        }
    ]
});