document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.container');
    containers.forEach((container, index) => {
      container.style.setProperty('--animation-order', index + 1);
    });
  });
  