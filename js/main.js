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
      return '<span style="display:inline-flex; align-items:center;">' +
        '<span style="padding:0 22px;">' + esc(w) + '</span>' +
        '<span style="color:var(--accent);">✦</span></span>';
    }).join('');
    Array.prototype.forEach.call(document.querySelectorAll('.marquee-row'), function (el) {
      el.innerHTML = html;
    });
  }

  function renderStack() {
    setHtml('stackGrid', (data.stack || []).map(function (cat) {
      var chips = cat.items.map(function (chip) {
        return '<span style="display:inline-flex; padding:7px 13px; border-radius:999px; border:1px solid rgba(243,241,234,0.2); font-size:13.5px; color:rgba(243,241,234,0.92);">' + esc(chip) + '</span>';
      }).join('');
      return '<div style="background:var(--ink); padding:clamp(24px,3vw,36px);">' +
        '<div style="font-family:\'JetBrains Mono\',monospace; font-size:12px; letter-spacing:0.06em; color:var(--accent); margin-bottom:18px;">' + esc(cat.label) + '</div>' +
        '<div style="display:flex; flex-wrap:wrap; gap:8px;">' + chips + '</div></div>';
    }).join(''));
  }

  function renderJobs() {
    setHtml('jobsList', (data.jobs || []).map(function (job) {
      var points = job.points.map(function (pt) {
        return '<li style="font-size:15px; line-height:1.55; color:#3a3b41;">' + esc(pt) + '</li>';
      }).join('');
      return '<div class="job-row reveal" style="display:grid; grid-template-columns:0.28fr 0.32fr 1fr; gap:clamp(16px,3vw,48px); padding:clamp(24px,3vw,38px) 0; border-bottom:1px solid rgba(23,24,28,0.14); align-items:start;">' +
        '<div><div style="font-family:\'Space Grotesk\',sans-serif; font-weight:700; font-size:clamp(18px,1.9vw,24px); letter-spacing:-0.01em;">' + esc(job.company) + '</div>' +
        '<div style="font-family:\'JetBrains Mono\',monospace; font-size:12.5px; color:var(--mut); margin-top:6px;">' + esc(job.dates) + '</div></div>' +
        '<div style="font-size:15.5px; font-weight:600; color:var(--accent); padding-top:3px;">' + esc(job.role) + '</div>' +
        '<ul style="margin:0; padding-left:18px; display:flex; flex-direction:column; gap:9px;">' + points + '</ul></div>';
    }).join(''));
  }

  function renderProjects() {
    setHtml('projectsGrid', (data.projects || []).map(function (p) {
      var tags = p.tags.map(function (t) {
        return '<span style="font-family:\'JetBrains Mono\',monospace; font-size:11.5px; color:#3a3b41;">' + esc(t) + '</span>';
      }).join('');
      return '<div class="pcard reveal" style="position:relative; display:flex; flex-direction:column; background:var(--paper); border:1px solid rgba(23,24,28,0.1); border-radius:22px; padding:clamp(24px,2.6vw,32px); overflow:hidden;">' +
        '<div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:22px;">' +
        '<span style="font-family:\'JetBrains Mono\',monospace; font-size:12px; color:var(--mut);">' + esc(p.num) + '</span>' +
        '<span style="display:inline-flex; align-items:center; gap:6px; font-family:\'JetBrains Mono\',monospace; font-size:11px; letter-spacing:0.05em; padding:5px 11px; border-radius:999px; background:color-mix(in oklab, var(--accent) 14%, transparent); color:var(--accent);">' + esc(p.badge) + '</span></div>' +
        '<h3 style="font-family:\'Space Grotesk\',sans-serif; font-weight:700; font-size:clamp(21px,2.2vw,27px); letter-spacing:-0.02em; margin:0 0 4px;">' + esc(p.name) + '</h3>' +
        '<div style="font-size:13.5px; color:var(--mut); margin-bottom:16px;">' + esc(p.client) + '</div>' +
        '<p style="font-size:14.5px; line-height:1.58; color:#3a3b41; margin:0 0 22px; flex:1;">' + esc(p.blurb) + '</p>' +
        '<div style="display:flex; flex-wrap:wrap; gap:7px; padding-top:18px; border-top:1px solid rgba(23,24,28,0.1);">' + tags + '</div></div>';
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
