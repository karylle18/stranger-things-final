(function () {
  'use strict';
  var questions = [
    { q: 'Who is the chief of police in Hawkins?', a: ['Jim Hopper', 'Steve Harrington', 'Ted Wheeler'], c: 0 },
    { q: 'What food does Eleven love the most?', a: ['Pizza', 'Eggo waffles', 'Ice cream sundaes'], c: 1 },
    { q: 'How does Joyce try to talk to Will in Season 1?', a: ['Radio', 'Letters in the mail', 'Christmas lights'], c: 2 },
    { q: 'Which character beats Dustin at an arcade game?', a: ['Max Mayfield', 'Mike Wheeler', 'Will Byers'], c: 0 },
    { q: 'Where does Steve work in Season 3?', a: ['Melvald\'s', 'Scoops Ahoy', 'Hawkins Lab'], c: 1 },
    { q: 'Which game do the Party members play together?', a: ['Chess', 'Monopoly', 'Dungeons & Dragons'], c: 2 }
  ];
  var i = 0, score = 0;
  var box = document.getElementById('quiz');
  if (!box) return;

  function render() {
    if (i >= questions.length) {
      box.innerHTML = '<h2>You scored ' + score + ' out of ' + questions.length + '</h2><p>' +
        (score >= 5 ? 'Hawkins would be proud of you.' : 'Visit the character pages and try again.') +
        '</p><button class="btn" id="again" type="button">Play again</button>';
      document.getElementById('again').addEventListener('click', function () { i = 0; score = 0; render(); });
      return;
    }
    var q = questions[i];
    box.innerHTML = '<p class="progress">Question ' + (i + 1) + ' of ' + questions.length + '</p><p class="q"></p><div class="opts"></div><p class="msg" aria-live="polite"></p>';
    box.querySelector('.q').textContent = q.q;
    var opts = box.querySelector('.opts');
    q.a.forEach(function (text, idx) {
      var b = document.createElement('button');
      b.type = 'button'; b.textContent = text;
      b.addEventListener('click', function () { answer(idx, opts, b); });
      opts.appendChild(b);
    });
  }

  function answer(idx, opts, btn) {
    var q = questions[i], buttons = opts.querySelectorAll('button');
    buttons.forEach(function (b) { b.disabled = true; });
    buttons[q.c].classList.add('right');
    if (idx === q.c) { score++; box.querySelector('.msg').textContent = 'Correct.'; }
    else { btn.classList.add('wrong'); box.querySelector('.msg').textContent = 'Not quite. The answer is ' + q.a[q.c] + '.'; }
    var next = document.createElement('button');
    next.className = 'btn'; next.type = 'button'; next.textContent = i + 1 < questions.length ? 'Next question' : 'See my score';
    next.addEventListener('click', function () { i++; render(); });
    box.appendChild(next);
    next.focus();
  }
  render();
})();

