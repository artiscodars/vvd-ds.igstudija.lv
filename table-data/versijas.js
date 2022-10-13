new Tabulator("#versijas-table", {
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
            "title": "Pievienoja",
            "field": "pievienoja"},

        {
            "title": "Datums un laiks",
            "field": "datums-un-laiks"},
        {
            "title": "Komentārs",
            "field": "komentars"},

        {
            "title": "Datne",
            "field": "datne",
            formatter: function (cell, formatterParams) {
                var value = cell.getValue();
                return "<a href='#'>" + value + "</a>";

            }}
    ],
    "data": [
        {
            "pievienoja": "Liena Kadaga",
            "datums-un-laiks": "12.12.2022 11:54",
            "komentars": "Komentārs",
            "datne": "<a href='#'>datnes_nosaukums.pdf</a>"

        },
        {
            "pievienoja": "Alfrēds Kalniņš",
            "datums-un-laiks": "11.12.2022 12:33",
            "komentars": "Komentārs",
            "datne": "<a href='#'>datnes_nosaukums.pdf</a>"

        }
    ]
});