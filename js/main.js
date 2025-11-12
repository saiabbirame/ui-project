document.addEventListener('DOMContentLoaded', function () {
  const msg = document.getElementById('message');
  const change = document.getElementById('changeBtn');
  const reset = document.getElementById('resetBtn');

  const originals = { text: msg.textContent };

  change.addEventListener('click', function () {
    const options = [
      'Have a great day! 🌤️',
      'This UI is built with plain HTML, CSS and JavaScript.',
      'You can open this file in a browser to view the static site.',
      'Hello — thanks for trying the static UI!'
    ];
    const next = options[Math.floor(Math.random() * options.length)];
    msg.textContent = next;
  });

  reset.addEventListener('click', function () {
    msg.textContent = originals.text;
  });
});
