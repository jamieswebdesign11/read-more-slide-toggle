$('a[data-hidden-text]').click(function (event) { 
    event.preventDefault(event); 
    event.stopImmediatePropagation(event); 
    var section = $(this).parent().parent(); 
    var child = section.children('.hidden-sec'); 
    child.slideToggle(); 
});