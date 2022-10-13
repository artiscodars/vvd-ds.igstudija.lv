$(".collapse-menu").click(function (e) {
    //e.preventDefault();
    $("body").toggleClass("menu-collapsed");
});

$(document).ready(function(){
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));


tinymce.init({
    selector:'textarea.tiny-mce',
    plugins : "autoresize",
    menubar:false
});


$(function(){
    $(".wmd-view-topscroll").scroll(function(){
        $(".tabulator-tableholder")
            .scrollLeft($(".wmd-view-topscroll").scrollLeft());
    });
    $(".tabulator-tableholder").scroll(function(){
        $(".wmd-view-topscroll")
            .scrollLeft($(".tabulator-tableholder").scrollLeft());
    });
});





});


$('[data-toggle="modal"]').on("click", function(){
  $($(this).attr("data-target")).modal("show");
 
});

$("button[data-bs-toggle='collapase']").on('shown.bs.collapse', function () {
       $(window).trigger('resize');
   });


$( '#basic-usage' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' )
} );


//textarea resizer START
$(document).ready(function(){
var autoResizeTextarea = function (querySelector, options) {
    var config = {
        maxHeight: Infinity
    }
    for (var option in options) {
        // noinspection JSUnfilteredForInLoop
        config[option] = options[option]
    }
    for (var i = 0; i < querySelector.length; i++) {
        forEachElement(querySelector[i])
    }
    function elementHeight(element) {
        return parseFloat(getComputedStyle(element, null).height.replace("px", ""))
    }

    function initInternal(element) {
        var initialDisplay = element.style.display
        element.style.display = "block" // prevent display="none"
        element.autoResizeTextarea.initialHeight = elementHeight(element)
        element.autoResizeTextarea.initialScrollHeight = parseFloat(element.scrollHeight)
        if (element.autoResizeTextarea.initialScrollHeight > element.autoResizeTextarea.initialHeight) {
            element.autoResizeTextarea.initialHeight = element.autoResizeTextarea.initialScrollHeight + 2
        }
        element.style.height = element.autoResizeTextarea.initialHeight + "px"
        element.style.display = initialDisplay
    }

    function init(element) {
        element.autoResizeTextarea = {}
        initInternal(element)
        updateElement(element)
        if (!element.autoResizeTextarea.initialHeight) {
            // try again, element might take longer to render
            setTimeout(function () {
                initInternal(element)
                updateElement(element)
            }, 500)
        }
    }

    function updateElement(element) {
        element.style.height = element.autoResizeTextarea.initialHeight + "px"
        var newHeight = element.autoResizeTextarea.initialHeight + element.scrollHeight - element.autoResizeTextarea.initialScrollHeight
        newHeight = Math.max(newHeight, element.autoResizeTextarea.initialHeight)
        element.style.height = Math.min(newHeight, config.maxHeight) + "px"
    }

    function forEachElement(element) {
        init(element)
        element.addEventListener("input", function () {
            updateElement(element)
        })
    }
}

autoResizeTextarea(document.querySelectorAll("textarea.auto-resize"), {maxHeight: 320});
});

//textarea resizer END

