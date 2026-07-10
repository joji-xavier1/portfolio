/* Rendering + interactions. Reads content from window.PORTFOLIO (js/data.js). */
(function () {
  'use strict';

  var data = window.PORTFOLIO || {};

  // Escape user/content strings before injecting as HTML.
  function esc(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function setHtml(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function renderMarquee() {
    var html = (data.marqueeWords || []).map(function (w) {
      return '<span class="marquee__item">' +
        '<span class="marquee__word">' + esc(w) + '</span>' +
        '<span class="marquee__star">✦</span></span>';
    }).join('');
    Array.prototype.forEach.call(document.querySelectorAll('.marquee-row'), function (el) {
      el.innerHTML = html;
    });
  }

  function renderStack() {
    setHtml('stackGrid', (data.stack || []).map(function (cat) {
      var chips = cat.items.map(function (chip) {
        return '<span class="chip">' + esc(chip) + '</span>';
      }).join('');
      return '<div class="stack-cat">' +
        '<div class="stack-cat__label">' + esc(cat.label) + '</div>' +
        '<div class="chips">' + chips + '</div></div>';
    }).join(''));
  }

  function renderJobs() {
    setHtml('jobsList', (data.jobs || []).map(function (job) {
      var points = job.points.map(function (pt) {
        return '<li>' + esc(pt) + '</li>';
      }).join('');
      return '<div class="job-row reveal">' +
        '<div><div class="job__company">' + esc(job.company) + '</div>' +
        '<div class="job__dates">' + esc(job.dates) + '</div></div>' +
        '<div class="job__role">' + esc(job.role) + '</div>' +
        '<ul class="job__points">' + points + '</ul></div>';
    }).join(''));
  }

  function renderProjects() {
    setHtml('projectsGrid', (data.projects || []).map(function (p) {
      var tags = p.tags.map(function (t) {
        return '<span class="tag">' + esc(t) + '</span>';
      }).join('');
      return '<div class="pcard reveal">' +
        '<div class="pcard__head">' +
        '<span class="pcard__num">' + esc(p.num) + '</span>' +
        '<span class="pcard__badge">' + esc(p.badge) + '</span></div>' +
        '<h3 class="pcard__title">' + esc(p.name) + '</h3>' +
        '<div class="pcard__client">' + esc(p.client) + '</div>' +
        '<p class="pcard__blurb">' + esc(p.blurb) + '</p>' +
        '<div class="pcard__tags">' + tags + '</div></div>';
    }).join(''));
  }

  // Reveal-on-scroll for elements with the .reveal class.
  function initReveal() {
    function reveal() {
      var h = window.innerHeight;
      Array.prototype.forEach.call(document.querySelectorAll('.reveal:not(.in)'), function (el) {
        if (el.getBoundingClientRect().top < h - 40) el.classList.add('in');
      });
    }
    reveal();
    window.addEventListener('scroll', reveal, { passive: true });
    window.addEventListener('resize', reveal, { passive: true });
    // Safety net: never leave anything hidden.
    setTimeout(function () {
      Array.prototype.forEach.call(document.querySelectorAll('.reveal:not(.in)'), function (el) {
        el.classList.add('in');
      });
    }, 4000);
  }

  function init() {
    renderMarquee();
    renderStack();
    renderJobs();
    renderProjects();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
