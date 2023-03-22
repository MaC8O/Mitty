// Add a class to the body element when the mouse enters a card element
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      document.body.classList.add('card-hovered');
    });
  });
  
  // Remove the class from the body element when the mouse leaves a card element
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseleave', () => {
      document.body.classList.remove('card-hovered');
    });
  });
  
  const image = document.querySelector('.first');


container.addEventListener('mousemove', e => {
  const x = (window.innerWidth - e.pageX) / 10;
  const y = (window.innerHeight - e.pageY) / 10;
  image.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

const p1 = document.querySelector('p1');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(p1);
