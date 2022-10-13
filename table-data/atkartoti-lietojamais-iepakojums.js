
new Tabulator("#atkartoti-lietojamais-iepakojums-table", {

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

    columnHeaderVertAlign:"bottom",
    
    layout: "fitColumns",

    "columns": [
        {
            "title": "Atkritumu veids",
            "field": "a",
            frozen: true
        },
        {
            title: "Tirgū pirmo reizi kopā ar preci laistais iepakojums",
            "columns": [
                {
                    "title": "Viss (kg)",
                    "field": "bx",
                    bottomCalc: "sum"
                },
                {
                    "title": "Viss (vienības)",
                    "field": "ba"
                },
                {
                    "title": "Primārais (kg)",
                    "field": "bc"
                },
                {
                    "title": "Primārais (vienības)",
                    "field": "bb"
                }

            ]
        },
        {
            title: "Tirgū pirmo reizi kopā ar preci laistais atkārtoti lietojamais iepakojums",
            "columns": [
                {
                    "title": "Viss(kg)",
                    "field": "xx"
                },
                {
                    "title": "Primārais (kg)",
                    "field": "zz"
                }

            ]
        },
        {
            title: "Atkārtoti lietojamā iepakojums rotācijas",
            "columns": [
                {
                    "title": "Viss (kg)",
                    "field": "b"},
                {
                    "title": "Viss (skaits)",
                    "field": "c"},
                {
                    "title": "Primārais (kg)",
                    "field": "d"},
                {
                    "title": "Primārais (skaits)",
                    "field": "e"}
            ]
        },
    ],

    "data": [
        {
            "a": "Pudeles",
            "bx": "1000",
            "ba": "100",
            "bc": "500",
            "bb": "30",
            "xx": "40000",
            "zz": "100000",
            "b": "2000000",
            "c": "234",
            "d": "1776544",
            "e": "23456"
        },
        {
            "a": "Pudeles",
            "bx": "1000",
            "ba": "100",
            "bc": "500",
            "bb": "30",
            "xx": "40000",
            "zz": "100000",
            "b": "2000000",
            "c": "234",
            "d": "1776544",
            "e": "23456"
        }
    ]
});