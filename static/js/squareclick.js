document.addEventListener('DOMContentLoaded', () => {
    const squareElements = document.querySelectorAll('.square');
    squareElements.forEach(square => {
      square.addEventListener('click', () => {
        const link = square.querySelector('a');
        if (link) {
          link.click();
        }
      });
    });
  });
  