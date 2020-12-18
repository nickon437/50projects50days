const container = document.querySelector('.container');

document.addEventListener('keydown', (e) => {
  container.innerHTML = `
    <div class="box">
      ${e.key === ' ' ? 'Space' : e.key}
      <small>event.key</small>
    </div>
    <div class="box">
      ${e.code}
      <small>event.code</small>
    </div>
  `;
});
