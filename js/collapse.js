//Animation of collapsing/expanding for text collapsibles

document.querySelectorAll('.lbl-toggle').forEach(function(label) {
  label.addEventListener('click', function() {
    const content = this.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + 'px';
  });
});

//Animation of collapsing/expanding for tables
 $(document).ready(function() {
   
      // Target the new button
  $("#openButton").click(function() {
    
        // Toggle the class and text of the coltab row
     $(".coltab").toggleClass("activetable"); 
      if ($(".coltab").hasClass("activetable")) {
        $("#openButton").text("Close");
         $(".table__wrapper").css("max-height", "800px"); // Expand rows
      } else {
        $("#openButton").text("Open");
         $(".table__wrapper").css("max-height", "0px"); // Collapse rows
       }
     });
   });
