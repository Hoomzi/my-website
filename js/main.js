document.addEventListener('DOMContentLoaded', function() {

  // ── بخش ترجمه و دوزبانه (i18n) ──
  const translations = {
    en: {
      doc_title: "BusinessWeb Studio — Custom WordPress Design & WooCommerce Development",
      nav_home: "Home",
      nav_services: "Services",
      nav_about: "About",
      nav_portfolio: "Portfolio",
      nav_contact: "Contact",
      nav_quote: "Start a Project",
      hero_tag: "WordPress & WooCommerce Expert",
      hero_desc: "Your website should be your best salesperson — available 24/7, converting visitors into customers. I build fast, strategic WordPress sites that look great and actually grow your business.",
      hero_btn: "See What I Do",
      stat_1: "Projects Delivered",
      stat_2: "Client Satisfaction",
      stat_3: "Years of Experience",
      stat_4: "Happy Clients",
      serv_tag: "Services",
      serv_desc: "Every project is treated as a long-term investment, not just a deliverable. Here's how I help your business grow online.",
      s1_title: "WordPress Website Design",
      s1_desc: "A website built around your goals, not a template. I craft custom WordPress sites that reflect your brand identity and guide visitors toward taking action.",
      s1_l1: "Custom Theme Development",
      s1_l2: "Mobile-First Responsive Design",
      s1_l3: "Core Web Vitals Optimization",
      featured_badge: "Most Popular",
      s2_title: "WooCommerce Online Stores",
      s2_desc: "An online store that actually sells. I build WooCommerce shops with seamless checkout flows, secure payment gateways, and product pages designed to convert.",
      s2_l1: "Full Store Setup & Configuration",
      s2_l2: "Payment Gateway Integration",
      s2_l3: "Conversion-Optimized Product Pages",
      s3_title: "Landing Pages",
      s3_desc: "One goal. One page. Maximum results. I design focused landing pages for campaigns and product launches that capture leads and turn clicks into revenue.",
      s3_l1: "Conversion-Focused Layout",
      s3_l2: "A/B Testing Ready Structure",
      s3_l3: "Sub-2s Load Speed",
      s4_title: "SEO & Performance",
      s4_desc: "Being found on Google is not luck — it's strategy. I handle the technical SEO and speed optimization that moves your site up the rankings and keeps it there.",
      s4_l1: "Technical & On-Page SEO",
      s4_l2: "Core Web Vitals (LCP, CLS, INP)",
      s4_l3: "Page Speed & Caching Setup",
      about_exp: "Years<br />Experience",
      about_lead: "I'm Hooman — a WordPress developer and web strategist with 6+ years of hands-on experience. I work with businesses of all sizes, from local startups to international brands, helping them build websites that don't just look good but actually generate results. My advantage? Solid technical skill, competitive pricing, and a personal, responsive approach you won't get from a big agency.",
      about_skills_title: "Core Skills:",
      about_skills_desc: "WordPress, Elementor Pro, WooCommerce, JetEngine, Technical SEO, Core Web Vitals & Performance Optimization.",
      about_btn: "Let's Work Together",
      testi_tag: "Client Reviews",
      t1_quote: '"Working with BusinessWeb Studio was one of the best decisions for our business. The site launched on time, loads incredibly fast, and our team loves managing it. Hooman was responsive and genuinely invested in our success."',
      t1_role: "CEO, Bloom Agency",
      t2_quote: '"Our WooCommerce store saw a 40% jump in conversions within the first month after the redesign. The checkout flow is smooth, the design is clean, and customers keep complimenting it."',
      t2_role: "Owner, TechGear Shop",
      t3_quote: '"The landing page for our product launch exceeded every expectation. Lead cost dropped, conversion rate climbed, and the design made our brand look elite. I send everyone to BusinessWeb Studio now."',
      t3_role: "Marketing Director",
      t4_quote: '"Clear communication, honest timelines, and a result that made us proud. We\'ve worked with several developers over the years — Hooman is the one we keep coming back to."',
      t4_role: "Founder, StartupHub",
      contact_desc: "Got a project in mind? Tell me about your goals, your timeline, and your budget — no pressure, no sales pitch. I'll give you an honest answer about what's possible and what it takes.",
      f_name: "Your Name",
      f_email: "Email Address",
      f_service: "Which Service Do You Need?",
      f_details: "Tell Me About Your Project",
      f_send: "Send Message \u2192",
      f_success: "\u2713 Message received! I'll get back to you within 24 hours.",
      f_error: "\u26a0 Something went wrong. Please try again or reach me on WhatsApp.",
      foot_brand: "Custom WordPress design and WooCommerce development for businesses that take their online presence seriously.",
      foot_quick: "Quick Links",
      foot_wa: "Chat on WhatsApp",
      foot_copy: "\u00a9 2025 BusinessWeb Studio. All rights reserved.",
      foot_heart: "Built with \u2665 and a lot of attention to detail"
    },
    fa: {
      doc_title: "استودیو بیزینس‌وب — طراحی حرفه‌ای وردپرس و ووکامرس",
      nav_home: "خانه",
      nav_services: "خدمات",
      nav_about: "درباره من",
      nav_portfolio: "نمونه کارها",
      nav_contact: "تماس با من",
      nav_quote: "شروع پروژه",
      hero_tag: "متخصص وردپرس و ووکامرس",
      hero_desc: "سایت شما باید بهترین فروشنده‌ی کسب‌وکارتان باشد — یکی که ۲۴ ساعته کار می‌کند و بازدیدکننده را به مشتری تبدیل می‌کند. من سایت‌های وردپرسی سریع و هدفمند می‌سازم که هم زیبا هستند و هم واقعاً به رشد شما کمک می‌کنند.",
      hero_btn: "خدمات را ببینید",
      stat_1: "پروژه تحویل داده شده",
      stat_2: "رضایت مشتریان",
      stat_3: "سال تجربه",
      stat_4: "مشتری راضی",
      serv_tag: "خدمات",
      serv_desc: "هر پروژه برای من یک سرمایه‌گذاری بلندمدت است، نه یک کار تحویل‌دادن. اینجا ببینید چطور به رشد آنلاین کسب‌وکار شما کمک می‌کنم.",
      s1_title: "طراحی سایت وردپرس",
      s1_desc: "یک سایت که حول اهداف شما ساخته شده، نه یک قالب آماده. وب‌سایت‌های وردپرس اختصاصی طراحی می‌کنم که هویت برند شما را منعکس کرده و بازدیدکننده را به سمت اقدام هدایت می‌کنند.",
      s1_l1: "توسعه پوسته کاملاً اختصاصی",
      s1_l2: "طراحی ریسپانسیو با اولویت موبایل",
      s1_l3: "بهینه‌سازی شاخص‌های Core Web Vitals",
      featured_badge: "محبوب‌ترین",
      s2_title: "فروشگاه ووکامرس",
      s2_desc: "فروشگاهی که واقعاً می‌فروشد. فروشگاه‌های ووکامرس را با فرآیند خرید روان، درگاه‌های پرداخت امن و صفحات محصول بهینه‌شده برای فروش می‌سازم.",
      s2_l1: "راه‌اندازی و پیکربندی کامل فروشگاه",
      s2_l2: "اتصال به درگاه‌های پرداخت معتبر",
      s2_l3: "صفحات محصول بهینه برای تبدیل",
      s3_title: "لندینگ پیج",
      s3_desc: "یک هدف. یک صفحه. بیشترین نتیجه. لندینگ پیج‌های متمرکز برای کمپین‌ها و معرفی محصول طراحی می‌کنم که لید جذب کرده و کلیک را به درآمد تبدیل می‌کنند.",
      s3_l1: "چیدمان هدفمند برای تبدیل",
      s3_l2: "ساختار آماده برای تست A/B",
      s3_l3: "سرعت لود زیر ۲ ثانیه",
      s4_title: "سئو و بهینه‌سازی",
      s4_desc: "دیده شدن در گوگل شانس نیست — استراتژی است. سئو تکنیکال و بهینه‌سازی سرعتی انجام می‌دهم که سایت شما را در نتایج بالا نگه می‌دارد.",
      s4_l1: "سئو تکنیکال و On-Page",
      s4_l2: "بهبود Core Web Vitals (LCP, CLS, INP)",
      s4_l3: "راه‌اندازی کشینگ و افزایش سرعت",
      about_exp: "سال<br />تجربه",
      about_lead: "من هومن هستم — توسعه‌دهنده وردپرس و متخصص وب با بیش از ۶ سال تجربه عملی. با کسب‌وکارهای مختلف از استارتاپ‌های کوچک تا برندهای بین‌المللی کار می‌کنم و به آن‌ها کمک می‌کنم سایتی بسازند که نه‌فقط خوب به نظر برسد، بلکه واقعاً نتیجه بدهد. مزیت من؟ مهارت فنی قوی، قیمت رقابتی و پشتیبانی شخصی که در آژانس‌های بزرگ پیدا نمی‌کنید.",
      about_skills_title: "تخصص‌های اصلی:",
      about_skills_desc: "وردپرس، المنتور پرو، ووکامرس، جت انجین، سئو تکنیکال، Core Web Vitals و بهینه‌سازی پرفورمنس.",
      about_btn: "با هم کار کنیم",
      testi_tag: "نظر مشتریان",
      t1_quote: '"همکاری با استودیو بیزینس‌وب یکی از بهترین تصمیم‌های کسب‌وکار ما بود. سایت به موقع راه‌اندازی شد، سرعت فوق‌العاده‌ای دارد و تیم ما عاشق مدیریتش است. هومن همیشه در دسترس بود و واقعاً به موفقیت ما اهمیت می‌داد."',
      t1_role: "مدیرعامل آژانس Bloom",
      t2_quote: '"فروشگاه ووکامرس ما در اولین ماه بعد از بازطراحی ۴۰٪ افزایش نرخ تبدیل داشت. فرآیند خرید روان، طراحی تمیز و مشتریان دائماً از ظاهر سایت تعریف می‌کنند."',
      t2_role: "صاحب فروشگاه TechGear",
      t3_quote: '"لندینگ پیج معرفی محصولمان فراتر از هر انتظاری بود. هزینه جذب لید پایین آمد، نرخ تبدیل بالا رفت و طراحی برند ما را حرفه‌ای نشان داد. حالا همه را به استودیو بیزینس‌وب معرفی می‌کنم."',
      t3_role: "مدیر مارکتینگ",
      t4_quote: '"ارتباط شفاف، تایم‌لاین واقع‌بینانه و نتیجه‌ای که ما را سربلند کرد. با چند دولوپر در طول سال‌ها کار کرده‌ایم — هومن همیشه کسی است که برمی‌گردیم."',
      t4_role: "بنیان‌گذار StartupHub",
      contact_desc: "پروژه‌ای دارید؟ از اهداف، تایم‌لاین و بودجه‌تان بگویید — بدون فشار و بدون فروشندگی. یک جواب صادقانه درباره آنچه ممکن است و اینکه چه چیزی نیاز دارد خواهم داد.",
      f_name: "نام شما",
      f_email: "آدرس ایمیل",
      f_service: "کدام خدمت را نیاز دارید؟",
      f_details: "پروژه‌تان را برایم تعریف کنید",
      f_send: "ارسال پیام ←",
      f_success: "✓ پیام دریافت شد! ظرف ۲۴ ساعت پاسخ خواهم داد.",
      f_error: "⚠ خطایی رخ داد. دوباره تلاش کنید یا در واتس‌آپ تماس بگیرید.",
      foot_brand: "طراحی اختصاصی وردپرس و توسعه ووکامرس برای کسب‌وکارهایی که حضور آنلاینشان را جدی می‌گیرند.",
      foot_quick: "دسترسی سریع",
      foot_wa: "چت در واتس‌آپ",
      foot_copy: "© ۲۰۲۵ تمامی حقوق این ساین برای بیزینس وب اتودیو محفوظ است",
      foot_heart: "ساخته شده توسط هومن کشاورزی"
    }
  };

  const selectOptions = {
    en: [
      { val: "", text: "Select a service..." },
      { val: "wordpress", text: "WordPress Website Design" },
      { val: "woocommerce", text: "WooCommerce Online Store" },
      { val: "landing", text: "Landing Page" },
      { val: "seo", text: "SEO & Performance" }
    ],
    fa: [
      { val: "", text: "خدمت مورد نظر را انتخاب کنید..." },
      { val: "wordpress", text: "طراحی سایت وردپرس" },
      { val: "woocommerce", text: "فروشگاه ووکامرس" },
      { val: "landing", text: "لندینگ پیج" },
      { val: "seo", text: "سئو و بهینه‌سازی" }
    ]
  };

  let currentLang = localStorage.getItem('site_lang') || 'en';

  // تعریف اولیه متغیر تابع tUpdate برای جلوگیری از خطای عدم تعریف در کلیک دکمه‌ها
  let tUpdate = function() {};

  function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    const heroTitle = document.getElementById('heroTitle');
    if(heroTitle) {
      heroTitle.innerHTML = lang === 'fa'
        ? `سایتی که برای شما <span class="grad-txt">کار می‌کند</span><br />نه فقط خوب به نظر برسد`
        : `WordPress Sites That <span class="grad-txt">Work for You</span><br />Not Just Look Good`;
    }
    const servTitle = document.getElementById('servTitle');
    if(servTitle) {
      servTitle.innerHTML = lang === 'fa'
        ? `خدمات <span class="grad-txt">تخصصی</span>`
        : `Expert <span class="grad-txt">Services</span>`;
    }
    const aboutTitle = document.getElementById('aboutTitle');
    if(aboutTitle) {
      aboutTitle.innerHTML = lang === 'fa'
        ? `متخصص وب که به <span class="grad-txt">رشد واقعی شما</span> اهمیت می‌دهد`
        : `A Developer Who Cares About<br /><span class="grad-txt">Your Real Results</span>`;
    }
    const testiTitle = document.getElementById('testiTitle');
    if(testiTitle) {
      testiTitle.innerHTML = lang === 'fa'
        ? `مشتریان چه <span class="grad-txt">می‌گویند</span>`
        : `What Clients <span class="grad-txt">Say</span>`;
    }
    const contactTitle = document.getElementById('contactTitle');
    if(contactTitle) {
      contactTitle.innerHTML = lang === 'fa'
        ? `بیایید از پروژه‌تان <span class="grad-txt">بگویید</span>`
        : `Tell Me About Your <span class="grad-txt">Project</span>`;
    }

    const selectEl = document.getElementById('formService');
    if (selectEl) {
      selectEl.innerHTML = '';
      selectOptions[lang].forEach(opt => {
        let o = document.createElement('option');
        o.value = opt.val;
        o.textContent = opt.text;
        selectEl.appendChild(o);
      });
    }

    if (lang === 'fa') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'fa');
    } else {
      document.documentElement.removeAttribute('dir');
      document.documentElement.setAttribute('lang', 'en');
    }

    localStorage.setItem('site_lang', lang);
  }

  document.querySelectorAll('#langBtn, #langBtnMob, .btn-lang').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      currentLang = currentLang === 'en' ? 'fa' : 'en';
      updateLanguage(currentLang);
      setTimeout(tUpdate, 50);
    });
  });

  updateLanguage(currentLang);

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

  // COUNTERS
  var counterFired = {};
  function runCounter(el) {
    if (counterFired[el.id || el.dataset.target + Math.random()]) return;
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

  // SKILL BARS
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

  // TESTIMONIALS (اسلایدر نظرات مشتریان)
  var testiTrack = document.getElementById('testiTrack');
  var testiCards = document.querySelectorAll('.testi-card');
  var tCurrent = 0;
  function tVisible(){ return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3; }
  
  // تعریف بدنه اصلی تابع آپدیت جهت حرکت اسلایدر
  tUpdate = function() {
    if (!testiTrack) return;
    var vis = tVisible();
    var max = Math.max(0, testiCards.length - vis);
    tCurrent = Math.min(tCurrent, max);
    var gap = 24;
    var trackW = testiTrack.parentElement.offsetWidth;
    var cardW = (trackW - gap * (vis - 1)) / vis;
    let directionFactor = document.documentElement.getAttribute('dir') === 'rtl' ? 1 : -1;
    testiTrack.style.transform = 'translateX(' + (directionFactor * (tCurrent * (cardW + gap))) + 'px)';
  };

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
  setTimeout(tUpdate, 100);

  // FORM SPREE
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const successMsg = document.getElementById("formSuccess");
  const errorMsg = document.getElementById("formError");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      submitBtn.textContent = currentLang === 'fa' ? "در حال ارسال..." : "Sending...";
      submitBtn.disabled = true;
      successMsg.style.display = "none";
      errorMsg.style.display = "none";

      try {
        const response = await fetch("https://formspree.io/f/xjgaqkbr", {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: new FormData(form)
        });
        if (response.ok) {
          successMsg.style.display = "block";
          form.reset();
        } else {
          errorMsg.style.display = "block";
        }
      } catch (error) {
        errorMsg.style.display = "block";
      }
      submitBtn.textContent = currentLang === 'fa' ? "ارسال پیام ←" : "Send Message \u2192";
      submitBtn.disabled = false;
    });
  }

  // SMART SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var targetId = a.getAttribute('href');
      if (targetId === '#') return;
      var t=document.querySelector(targetId);
      if(t){
        e.preventDefault();
        t.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

});
