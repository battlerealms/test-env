 function toggleCollapsible() {
    var collapsible = document.querySelector('.collapsible');
    var content = collapsible.querySelector('.collapsible-content');

    if (collapsible.clientHeight === 0) {
      // Expand the collapsible
      var height = content.clientHeight;
      collapsible.style.height = height + 'px';
    } else {
      // Collapse the collapsible
      collapsible.style.height = 0;
    }
  }
