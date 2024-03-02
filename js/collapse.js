// Add smooth animation to collapsing/expanding
document.querySelectorAll('.lbl-toggle').forEach(function(label) {
  label.addEventListener('click', function() {
    const content = this.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + 'px';
  });
});
