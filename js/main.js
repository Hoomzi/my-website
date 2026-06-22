document.addEventListener('DOMContentLoaded', function() {

  // ── بخش ترجمه و دوزبانه (i18n) ──
  const translations = {
    en: {
      doc_title: "BusinessWeb Studio — Expert WordPress Design",
      nav_home: "Home",
      nav_services: "Services",
      nav_about: "About",
      nav_portfolio: "Portfolio",
      nav_contact: "Contact",
      nav_quote: "Get a Quote",
      hero_tag: "WordPress Engineering",
      hero_desc: "I engineer scalable WordPress ecosystems that boost conversion rates and streamline your operations. Let’s build an asset that generates revenue.",
      hero_btn: "Explore Services",
      stat_1: "Projects Delivered",
      stat_2: "Client Satisfaction",
      stat_3: "Years Experience",
      stat_4: "Happy Clients",
      serv_tag: "What I Do",
      serv_desc: "End-to-end WordPress solutions crafted with precision and purpose",
      s1_title: "WordPress Design",
      s1_desc: "Bespoke WordPress websites tailored to your brand with pixel-perfect design and seamless navigation.",
      s1_l1: "Custom Theme Development",
      s1_l2: "Responsive Mobile Design",
      s1_l3: "Page Speed Optimization",
      featured_badge: "Most Popular",
      s2_title: "WooCommerce Stores",
      s2_desc: "Fully functional online stores with optimized checkout flows, payment integrations, and inventory management.",
      s2_l1: "Complete Store Setup",
      s2_l2: "Payment Gateway Integration",
      s2_l3: "Product Catalog Design",
      s3_title: "Landing Pages",
      s3_desc: "High-converting landing pages designed to capture leads, drive sales, and make campaigns succeed.",
      s3_l1: "Conversion-Focused Design",
      s3_l2: "A/B Testing Ready",
      s3_l3: "Fast Load Performance",
      s4_title: "SEO & Optimization",
      s4_desc: "Technical SEO and performance optimization to rank higher on Google and deliver lightning-fast experiences.",
      s4_l1: "On-Page SEO Setup",
      s4_l2: "Core Web Vitals",
      s4_l3: "Speed Optimization",
      about_exp: "Years<br />Experience",
      about_lead: "With over 5 years of hands-on experience, I help B2B brands and e-commerce stores scale their operations through custom, high-speed WordPress development.",
      about_skills_title: "Core Expertise:",
      about_skills_desc: "WordPress Architecture, Elementor Pro, JetEngine, WooCommerce, Technical SEO, & Performance Optimization.",
      about_btn: "Work With Me",
      testi_tag: "Client Words",
      t1_quote: '"Exceptional work! The WordPress site delivered was beyond expectations. Fast, elegant, and perfectly aligned with our brand."',
      t1_role: "CEO, Bloom Agency",
      t2_quote: '"Our WooCommerce store saw a 40% increase in conversions after the redesign. Professional, responsive, and truly talented."',
      t2_role: "Owner, TechGear Shop",
      t3_quote: '"The landing page built for our campaign was stunning. Our lead generation improved dramatically. Highly recommended!"',
      t3_role: "Marketing Director",
      t4_quote: '"Professional communication, timely delivery, and an absolutely beautiful final product. Will definitely work together again."',
      t4_role: "Founder, StartupHub",
      contact_desc: "Ready to elevate your online presence? I'd love to hear about your project. Reach out and let's start creating.",
      f_name: "Your Name",
      f_email: "Email Address",
      f_service: "Service Needed",
      f_details: "Project Details",
      f_send: "Send Message →",
      f_success: "✓ Message sent successfully!",
      f_error: "⚠ Something went wrong. Try again.",
      foot_brand: "Premium WordPress design services crafted with passion, precision, and purpose.",
      foot_quick: "Quick Links",
      foot_wa: "WhatsApp Me",
      foot_copy: "© 2025 BusinessWebStudio. All rights reserved.",
      foot_heart: "Built with ♥ for exceptional WordPress experiences"
    },
    fa: {
      doc_title: "استودیو بیزینس‌وب — طراحی تخصصی وردپرس",
      nav_home: "خانه",
      nav_services: "خدمات",
      nav_about: "درباره من",
      nav_portfolio: "نمونه کارها",
      nav_contact: "ارتباط با من",
      nav_quote: "دریافت مشاوره",
      hero_tag: "مهندسی وردپرس",
      hero_desc: "من سیستم‌های وردپرسی مقیاس‌پذیر و پرسرعتی توسعه می‌دهم که نرخ تبدیل شما را افزایش داده و فرآیندهای کسب‌وکارتان را ساده‌تر می‌کنند. بیایید یک دارایی دیجیتال درآمدزا بسازیم.",
      hero_btn: "مشاهده خدمات",
      stat_1: "پروژه موفق",
      stat_2: "رضایت مشتریان",
      stat_3: "سال تجربه کاری",
      stat_4: "مشتری خوشحال",
      serv_tag: "خدمات من",
      serv_desc: "راهکارهای صفر تا صد وردپرس که با دقت و بر اساس اهداف بیزینس شما طراحی شده‌اند",
      s1_title: "طراحی سایت وردپرس",
      s1_desc: "سایت‌های اختصاصی وردپرس متناسب با برند شما، با طراحی پیکسل‌پرپکت و تجربه کاربری روان.",
      s1_l1: "توسعه پوسته اختصاصی",
      s1_l2: "طراحی کاملاً ریسپانسیو موبایل",
      s1_l3: "بهینه‌سازی کامل سرعت صفحه",
      featured_badge: "محبوب‌ترین",
      s2_title: "فروشگاه‌های ووکامرس",
      s2_desc: "فروشگاه‌های آنلاین حرفه‌ای با فرآیند خرید بهینه‌شده، اتصال به درگاه و مدیریت هوشمند انبار.",
      s2_l1: "راه‌اندازی کامل فروشگاه",
      s2_l2: "اتصال به درگاه‌های پرداخت",
      s2_l3: "طراحی کاتالوگ محصولات",
      s3_title: "صفحات فرود (Landing)",
      s3_desc: "لندینگ‌پیج‌های با نرخ تبدیل بالا جهت جذب لید، افزایش فروش و موفقیت کمپین‌های تبلیغاتی.",
      s3_l1: "طراحی هدفمند برای فروش",
      s3_l2: "آماده برای تست‌های A/B",
      s3_l3: "سرعت لود فوق‌العاده بالا",
      s4_title: "سئو و بهینه‌سازی",
      s4_desc: "سئو تکنیکال و افزایش پرفورمنس جهت کسب رتبه‌های برتر گوگل و خلق تجربه‌ای فوق سریع.",
      s4_l1: "کانفیگ سئو On-Page",
      s4_l2: "بهبود شاخص‌های Core Web Vitals",
      s4_l3: "آپتیمایز پیشرفته سرعت",
      about_exp: "سال<br />تجربه کاری",
      about_lead: "با بیش از ۵ سال تجربه عملی، به برندهای B2B و فروشگاه‌های آنلاین کمک می‌کنم تا از طریق توسعه اختصاصی و بهینه‌سازی شده وردپرس، بیزینس خود را رشد دهند.",
      about_skills_title: "تخصص‌های اصلی:",
      about_skills_desc: "معماری وردپرس، المنتور پرو، جت انجین، ووکامرس، سئو تکنیکال و افزایش پرفورمنس سایت.",
      about_btn: "همکاری با من",
      testi_tag: "نظرات مشتریان",
      t1_quote: '"کار فوق‌العاده! سایت وردپرسی تحویل داده شده فراتر از انتظارات ما بود. سریع، شیک و کاملاً هماهنگ با هویت برند ما."',
      t1_role: "مدیرعامل آژانس Bloom",
      t2_quote: '"فروشگاه ووکامرس ما بعد از بازطراحی شاهد افزایش ۴۰ درصدی نرخ تبدیل بود. حرفه‌ای، متعهد و واقعاً بااستعداد."',
      t2_role: "مالک TechGear Shop",
      t3_quote: '"لندینگ پیج ساخته شده برای کمپین ما خیره‌کننده بود. جذب لید ما به شدت بهبود یافت. به شدت توصیه می‌شود!"',
      t3_role: "مدیر مارکتینگ",
      t4_quote: '"ارتباطات حرفه‌ای، تحویل به موقع و یک محصول نهایی کاملاً زیبا. قطعاً دوباره با هم همکاری خواهیم کرد."',
      t4_role: "بنیان‌گذار StartupHub",
      contact_desc: "برای ارتقای سطح بیزینس خود آماده‌اید؟ مشتاق شنیدن درباره پروژه شما هستم. با من در ارتباط باشید.",
      f_name: "نام شما",
      f_email: "آدرس ایمیل",
      f_service: "خدمت مورد نیاز",
      f_details: "جزئیات پروژه",
      f_send: "ارسال پیام ←",
      f_success: "✓ پیام شما با موفقیت ارسال شد!",
      f_error: "⚠ خطایی رخ داد. دوباره تلاش کنید.",
      foot_brand: "خدمات پرمیوم طراحی وردپرس که با عشق، دقت و هدفمندی خلق شده‌اند.",
      foot_quick: "دسترسی سریع",
      foot_wa: "ارسال پیام در واتس‌اپ",
      foot_copy: "© ۲۰۲۵ استودیو بیزینس‌وب. تمامی حقوق محفوظ است.",
      foot_heart: "ساخته شده با ♥ برای خلق تجربه‌های بی‌نظیر وردپرس"
    }
  };

  const selectOptions = {
    en: [
      { val: "", text: "Select a service..." },
      { val: "wordpress", text: "WordPress Design" },
      { val: "woocommerce", text: "WooCommerce Store" },
      { val: "landing", text: "Landing Page" },
      { val: "seo", text: "SEO Optimization" }
    ],
    fa: [
      { val: "", text: "انتخاب خدمت مورد نظر..." },
      { val: "wordpress", text: "طراحی سایت وردپرس" },
      { val: "woocommerce", text: "فروشگاه ووکامرس" },
      { val: "landing", text: "صفحه فرود (لندینگ)" },
      { val: "seo", text: "سئو و بهینه‌سازی" }
    ]
  };

  let currentLang = localStorage.getItem('site_lang') || 'en';

  function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // مدیریت عناوین ترکیبی هیرو، خدمات، ابوت و تستیمونیال
    const heroTitle = document.getElementById('heroTitle');
    if(heroTitle) {
      heroTitle.innerHTML = lang === 'fa' 
        ? `راهکارهای پربازده <span class="grad-txt">وردپرس</span><br />برای رشد کسب‌وکار شما`
        : `High-Performance <span class="grad-txt">WordPress Solutions</span><br />for Growing Businesses`;
    }
    const servTitle = document.getElementById('servTitle');
    if(servTitle) {
      servTitle.innerHTML = lang === 'fa'
        ? `خدمات <span class="grad-txt">پرمیوم</span>`
        : `Premium <span class="grad-txt">Services</span>`;
    }
    const aboutTitle = document.getElementById('aboutTitle');
    if(aboutTitle) {
      aboutTitle.innerHTML = lang === 'fa'
        ? `طراح و توسعه‌دهنده پشت <span class="grad-txt">رشد دیجیتال شما</span>`
        : `The Designer Behind<br /><span class="grad-txt">Your Digital Growth</span>`;
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
        ? `بیایید با هم چیزی <span class="grad-txt">بزرگ بسازیم</span>`
        : `Let's Build<br />Something <span class="grad-txt">Great</span>`;
    }

    // بهینه‌سازی سلکت باکس فرم تماس
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

    // تغییر دایرکشن کل لایوت سایت
    if (lang === 'fa') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'fa');
    } else {
      document.documentElement.removeAttribute('dir');
      document.documentElement.setAttribute('lang', 'en');
    }

    localStorage.setItem('site_lang', lang);
  }

  // رویداد دکمه سوییچ زبان
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.addEventListener('click', function() {
      currentLang = currentLang === 'en' ? 'fa' : 'en';
      updateLanguage(currentLang);
      setTimeout(tUpdate, 50); // سینک مجدد متغیرهای اسلایدر پس از تغییر زبان
    });
  }

  // اجرای اولیه زبان انتخابی
  updateLanguage(currentLang);

  // ── کدهای منطقی اصلی خودت (بدون کوچکترین دستکاری) ──

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

  // TESTIMONIALS
  var testiTrack = document.getElementById('testiTrack');
  var testiCards = document.querySelectorAll('.testi-card');
  var tCurrent = 0;
  function tVisible(){ return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3; }
  function tUpdate(){
    var vis = tVisible();
    var max = Math.max(0, testiCards.length - vis);
    tCurrent = Math.min(tCurrent, max);
    var gap = 24;
    var trackW = testiTrack.parentElement.offsetWidth;
    var cardW = (trackW - gap * (vis - 1)) / vis;
    
    // فیکس رندر ترنسلیت برای حالت RTL و LTR بدون پرش لایوت اسلایدر
    let directionFactor = document.documentElement.getAttribute('dir') === 'rtl' ? 1 : -1;
    testiTrack.style.transform = 'translateX(' + (directionFactor * (tCurrent * (cardW + gap))) + 'px)';
  }
  
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
    submitBtn.textContent = currentLang === 'fa' ? "ارسال پیام ←" : "Send Message →";
    submitBtn.disabled = false;
  });

  // SMART SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click',function(e){ var t=document.querySelector(a.getAttribute('href')); if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); } }); });

});