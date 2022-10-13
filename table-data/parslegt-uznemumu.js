new Tabulator("#parslegt-uznemumu-table", {
    layout: "fitColumns",
    "columns": [
        {
            "title": "Nosaukums", 
            "field": "nosaukums"},
        {
            "title": "Reģistrācijas Nr.", 
            "field": "regnr"},
        {
            "title": null, 
            "field": "darbibas",
             width:80,
               hozAlign: "center",
               headerSort: false,
            formatter: function (cell) {
                return '<button class="btn btn-sm btn-success">Pārslēgt</button>';
            }
        }
    ],
     "data": [
        {                  
            "nosaukums": "SIA Izgāztuve",
            "regnr": "49879086756"                
        },
        {                  
            "nosaukums": "SIA Eko Osta",
            "regnr": "48706558888"                   
        }
    ]
});
