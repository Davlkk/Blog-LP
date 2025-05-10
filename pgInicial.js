  function scrollRow(distance) {
    document.getElementById('scrollable').scrollBy({
      left: distance,
      behavior: 'smooth'
    });
  }