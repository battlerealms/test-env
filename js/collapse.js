//Animation of collapsing/expanding for text collapsibles

document.querySelectorAll('.lbl-toggle').forEach(function(label) {
  label.addEventListener('click', function() {
    const content = this.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + 'px';
  });
});

//Animation of collapsing/expanding for tables

$("tr.collapse").find("span#collapse").click(function() {
  $(this).parents("tr.collapse").toggleClass("active"); 
  
  if ($(this).text() == "Open")
       $(this).text("Close")
    else
       $(this).text("Open");

});
