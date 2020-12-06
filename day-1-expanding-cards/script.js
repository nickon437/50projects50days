const panels = document.querySelectorAll('.panel');

for (const toClickPanel of panels) {
  toClickPanel.addEventListener('click', () => {
    for (const panel of panels) {
      panel.classList.remove('active');
    }
    
    toClickPanel.classList.add('active');
  });
}
