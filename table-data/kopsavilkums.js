new Tabulator("#kopsavilkums-table", {
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
                    "pages": "lapas",
                }
            },
            "headerFilters": {
                "default": "atlasīt kolonnu...", //default header filter placeholder text

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
    columnDefaults: {
        headerTooltip: true,

    },
    layout: "fitColumns",
    "columns": [
        {
            "title": "Iepakojuma un vienreiz lietojamo trauku materiāla veids",
            "field": "a",
            width: 300},
        {
            "title": "Radītais izlietotā iepakojuma un vienreiz lietojamo trauku daudzums",
            "field": "b",
            width: 300},
        {
            "title": "Latvijas Republikas teritorijā savāktais izlietotā iepakojuma un vienreiz lietojamo trauku daudzums pārskata gadā",
            "field": "c",
            width: 300},
        {
            "title": "Reģenerācijai/ pārstrādei sagatavotais izlietotā iepakojuma un vienreiz liet. trauku daudzums pārskata gadā",
            "field": "d",
            width: 300},
        {
            title: "Pārstrādāts/ Reģenerēts LR teritorijā",
            "columns": [

                {
                    "title": "Materiālu pārstrāde",
                    "field": "e",
                    width: 150
                },
                {
                    "title": "Cita veida pārstrāde",
                    "field": "f",
                    width: 150
                },
                {
                    "title": "Citi reģenerācijas veidi",
                    "field": "g",
                    width: 150
                },
                {
                    "title": "Sadedzināšana ar enerģijas atgūšanu",
                    "field": "h",
                    width: 150
                }
            ]},
        {
            title: "Pārstrādāts/ Reģenerēts ārvalstīs",
            "columns": [

                {
                    "title": "Materiālu pārstrāde",
                    "field": "i",
                    width: 150
                },
                {
                    "title": "Cita veida pārstrāde",
                    "field": "j",
                    width: 150
                },
                {
                    "title": "Citi reģenerācijas veidi",
                    "field": "k",
                    width: 150
                },
                {
                    "title": "Sadedzināšana ar enerģijas atgūšanu",
                    "field": "l",
                    width: 150
                }

            ]},
        {
            title: "Kopējais iepakojuma daudzums",
            "columns": [

                {
                    "title": "Pārstrādāts (kg)",
                    "field": "m",
                    width: 150
                },
                {
                    "title": "Pārstrādāts (%)",
                    "field": "n",
                    width: 150
                },
                {
                    "title": "Reģenerēts (kg)",
                    "field": "o",
                    width: 150
                },
                {
                    "title": "Reģenerēts (%)",
                    "field": "p",
                    width: 150
                },
                {
                    "title": "Kopā (kg)",
                    "field": "r",
                    width: 150
                },
                {
                    "title": "Kopā (%)",
                    "field": "s",
                    width: 150
                }]
        },
        {
            "title": "Kopējais eksportētais atkritumu daudzums (kg)",
            "field": "t",
            width: 150
        },
        {
            title: "Mērķa sasniegšanas novērtējums",
            "columns": [

                {
                    "title": "Reģenerācijai (t.sk.pārstrādei)",
                    "field": "u",
                    width: 150
                },
                {
                    "title": "Pārstrādei",
                    "field": "v",
                    width: 150
                }


            ]}
    ],
    "data": [

        {
            "a": "-",
            "b": "-",
            "c": "-",
            "d": "-",
            "e": "-",
            "f": "-",
            "g": "-",
            "h": "-",
            "i": "-",
            "j": "-",
            "k": "-",
            "l": "-",
            "m": "-",
            "n": "-",
            "o": "-",
            "p": "-",
            "r": "-",
            "s": "-",
            "t": "-",
            "u": "-",
            "v": "-"

        }

    ]
});




