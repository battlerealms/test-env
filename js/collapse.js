//Animation of collapsing/expanding for text collapsibles

document.querySelectorAll('.lbl-toggle').forEach(function(label) {
  label.addEventListener('click', function() {
    const content = this.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + 'px';
  });
});

//Animation of collapsing/expanding for tables

function toggleTable(tableId, button) {
  var table = document.getElementById(tableId);
  
  // Toggle the class for table animation
  table.classList.toggle("collapsed");
  table.classList.toggle("expanded");
  
  // Toggle the class for button animation
  button.classList.toggle("expand");
}

  // Set width inline
  if (table.classList.contains("collapsed")) {
    table.style.width = "700px";
  } else {
    table.style.width = "700px";
  }
