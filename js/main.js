document.addEventListener('DOMContentLoaded', function() {

  // REVEAL
  var revealEls = document.querySelectorAll('.service-card,.section-head,.about-content,.about-img-col,.port-card,.testi-card,.contact-info,.contact-form-wrap,.stat-item');
  revealEls.forEach(function(el){ el.classList.add('reveal'); });
  var ro = new IntersectionObserver(function(entries, obs){
    entries.forEach(function(entry, i){
      if(entry.isIntersecting){ setTimeout(function(){ entry.target.classList.add('visible'); }, i*60); obs.unobserve(entry.target); }
    });
  }, {threshold:0.08});
  revealEls.forEach(function(el){ ro.observe(el); });

  // HEADER
  var header = document.getElementById('header');
  var navLinks = document.querySelectorAll('nav a');
  window.addEventListener('scroll', function(){
    header.classList.toggle('scrolled', window.scrollY > 60);
    var sections=['home','services','about','portfolio','contact'], current='';
    sections.forEach(function(id){ var s=document.getElementById(id); if(s && window.scrollY>=s.offsetTop-130) current=id; });
    navLinks.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href')==='#'+current); });
  }, {passive:true});

  // BURGER
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobileMenu');
  function menuClose(){ mobileMenu.classList.remove('open'); burger.classList.remove('open'); }
  function menuOpen(){ mobileMenu.classList.add('open'); burger.classList.add('open'); }
  burger.addEventListener('click', function(e){ e.stopPropagation(); mobileMenu.classList.contains('open') ? menuClose() : menuOpen(); });
  mobileMenu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', menuClose); });
  document.addEventListener('click', function(e){ if(!header.contains(e.target)) menuClose(); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') menuClose(); });

  // COUNTERS — threshold:0 تا حتی اگه reveal هنوز کامل نشده باشه fire کنه
  var counterFired = {};
  function runCounter(el) {
    if (counterFired[el.id || el.dataset.target + Math.random()]) return;
    var uid = el.dataset.target + '_' + Date.now();
    el._fired = true;
    var target = +el.dataset.target, step = target / (1800/16), cur = 0;
    var t = setInterval(function(){ cur = Math.min(cur+step, target); el.textContent = Math.floor(cur); if(cur>=target) clearInterval(t); }, 16);
  }
  var co = new IntersectionObserver(function(entries, obs){
    entries.forEach(function(entry){
      if(!entry.isIntersecting || entry.target._fired) return;
      runCounter(entry.target);
      obs.unobserve(entry.target);
    });
  }, {threshold:0, rootMargin:'0px 0px -50px 0px'});
  document.querySelectorAll('.counter').forEach(function(el){ co.observe(el); });

  // SKILL BARS — observe the about section directly
  var aboutSection = document.getElementById('about');
  var skillsFired = false;
  function fireSkills() {
    if (skillsFired) return;
    skillsFired = true;
    document.querySelectorAll('.skill-fill').forEach(function(f){ f.style.width = f.dataset.w + '%'; });
  }
  if(aboutSection){
    new IntersectionObserver(function(entries, obs){
      entries.forEach(function(entry){
        if(entry.isIntersecting){ fireSkills(); obs.unobserve(entry.target); }
      });
    }, {threshold:0, rootMargin:'0px 0px -100px 0px'}).observe(aboutSection);
  }

  // TESTIMONIALS — fixed card width calculation
  var testiTrack = document.getElementById('testiTrack');
  var testiCards = document.querySelectorAll('.testi-card');
  var tCurrent = 0;
  function tVisible(){ return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3; }
  function tUpdate(){
    var vis = tVisible();
    var max = Math.max(0, testiCards.length - vis);
    tCurrent = Math.min(tCurrent, max);
    // گپ 24px = 1.5rem
    var gap = 24;
    var trackW = testiTrack.parentElement.offsetWidth;
    var cardW = (trackW - gap * (vis - 1)) / vis;
    testiTrack.style.transform = 'translateX(-' + (tCurrent * (cardW + gap)) + 'px)';
  }
  // دکمه‌ها با pointer-events مطمئن
  var btnNext = document.getElementById('tNext');
  var btnPrev = document.getElementById('tPrev');
  if(btnNext) btnNext.addEventListener('click', function(e){
    e.preventDefault();
    var max = Math.max(0, testiCards.length - tVisible());
    tCurrent = tCurrent < max ? tCurrent + 1 : 0;
    tUpdate();
  });
  if(btnPrev) btnPrev.addEventListener('click', function(e){
    e.preventDefault();
    var max = Math.max(0, testiCards.length - tVisible());
    tCurrent = tCurrent > 0 ? tCurrent - 1 : max;
    tUpdate();
  });
  window.addEventListener('resize', tUpdate, {passive:true});
  // اجرای اولیه بعد از رندر
  setTimeout(tUpdate, 100);

  // FORM
  var form=document.getElementById('contactForm');
  if(form){ var sm=document.getElementById('formSuccess'); form.addEventListener('submit',function(e){ e.preventDefault(); var btn=form.querySelector('button[type="submit"]'); btn.textContent='Sending...'; btn.style.opacity='.7'; setTimeout(function(){ btn.textContent='Send Message →'; btn.style.opacity='1'; sm.classList.add('show'); form.reset(); setTimeout(function(){ sm.classList.remove('show'); },5000); },1500); }); }

  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click',function(e){ var t=document.querySelector(a.getAttribute('href')); if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); } }); });

});