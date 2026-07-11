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
    setHtml('stackGrid', (data.stack || []).map(function (cat, i) {
      var chips = cat.items.map(function (chip) {
        return '<span class="chip">' + esc(chip) + '</span>';
      }).join('');
      return '<div class="stack-cat reveal" style="--i:' + i + '">' +
        '<div class="stack-cat__label">' + esc(cat.label) + '</div>' +
        '<div class="chips">' + chips + '</div></div>';
    }).join(''));
  }

  function renderJobs() {
    setHtml('jobsList', (data.jobs || []).map(function (job, i) {
      var points = job.points.map(function (pt) {
        return '<li>' + esc(pt) + '</li>';
      }).join('');
      return '<div class="job-row reveal" style="--i:' + i + '">' +
        '<div><div class="job__company">' + esc(job.company) + '</div>' +
        '<div class="job__dates">' + esc(job.dates) + '</div></div>' +
        '<div class="job__role">' + esc(job.role) + '</div>' +
        '<ul class="job__points">' + points + '</ul></div>';
    }).join(''));
  }

  function renderProjects() {
    setHtml('projectsGrid', (data.projects || []).map(function (p, i) {
      var tags = p.tags.map(function (t) {
        return '<span class="tag">' + esc(t) + '</span>';
      }).join('');
      return '<div class="pcard reveal" style="--i:' + (i % 3) + '">' +
        '<div class="pcard__head">' +
        '<span class="pcard__num">' + esc(p.num) + '</span>' +
        '<span class="pcard__badge">' + esc(p.badge) + '</span></div>' +
        '<h3 class="pcard__title">' + esc(p.name) + '</h3>' +
        '<div class="pcard__client">' + esc(p.client) + '</div>' +
        '<p class="pcard__blurb">' + esc(p.blurb) + '</p>' +
        (p.outcome ? '<div class="pcard__outcome"><span class="pcard__outcome-label">IMPACT</span><span>' + esc(p.outcome) + '</span></div>' : '') +
        '<div class="pcard__tags">' + tags + '</div></div>';
    }).join(''));
  }

  function renderProcess() {
    setHtml('processGrid', (data.process || []).map(function (step, i) {
      return '<div class="step reveal" style="--i:' + i + '">' +
        '<div class="step__num">' + esc(step.num) + '</div>' +
        '<div class="step__title">' + esc(step.title) + '</div>' +
        '<p class="step__text">' + esc(step.text) + '</p></div>';
    }).join(''));
  }

  // Section stays hidden until data.js contains at least one quote.
  function renderTestimonials() {
    var items = data.testimonials || [];
    var section = document.getElementById('testimonials');
    if (!section || !items.length) return;
    section.hidden = false;
    setHtml('testimonialsGrid', items.map(function (t, i) {
      return '<figure class="tcard reveal" style="--i:' + (i % 3) + '">' +
        '<blockquote class="tcard__quote">“' + esc(t.quote) + '”</blockquote>' +
        '<figcaption class="tcard__who"><b>' + esc(t.name) + '</b>' +
        (t.role ? '<span>' + esc(t.role) + '</span>' : '') +
        '</figcaption></figure>';
    }).join(''));
  }

  // Reveal résumé buttons once data.js points at a PDF.
  function initResumeLinks() {
    if (!data.resumeUrl) return;
    Array.prototype.forEach.call(document.querySelectorAll('[data-resume]'), function (a) {
      a.href = data.resumeUrl;
      a.hidden = false;
    });
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

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Thin accent bar that tracks scroll progress.
  function initProgressBar() {
    var bar = document.createElement('div');
    bar.className = 'progress';
    document.body.appendChild(bar);
    function update() {
      var scrolled = window.scrollY || document.documentElement.scrollTop;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? scrolled / max : 0) + ')';
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
  }

  // Count the hero stats up from zero when they scroll into view.
  function initStatCountUp() {
    var nums = Array.prototype.slice.call(document.querySelectorAll('.stat__num'));
    if (!nums.length) return;

    function run(el) {
      var parsed = /^(\d+)(.*)$/.exec((el.textContent || '').trim());
      if (!parsed) return;
      var target = parseInt(parsed[1], 10);
      var suffix = parsed[2];
      if (reduceMotion) { el.textContent = target + suffix; return; }
      var duration = 1200, start = null;
      el.textContent = '0' + suffix;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      // Safety net: guarantee the final value even if rAF never runs.
      setTimeout(function () { el.textContent = target + suffix; }, duration + 400);
    }

    if (!('IntersectionObserver' in window)) { nums.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { setTimeout(function () { run(e.target); }, 550); io.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    nums.forEach(function (el) { io.observe(el); });
  }

  // Soft accent glow that follows the cursor across project cards.
  function initCardSpotlight() {
    if (reduceMotion) return;
    Array.prototype.forEach.call(document.querySelectorAll('.pcard'), function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
      });
    });
  }

  function init() {
    renderMarquee();
    renderStack();
    renderJobs();
    renderProjects();
    renderProcess();
    renderTestimonials();
    initResumeLinks();
    initReveal();
    initProgressBar();
    initStatCountUp();
    initCardSpotlight();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
