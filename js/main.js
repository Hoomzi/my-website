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
      doc_title: "\u0627\u0633\u062a\u0648\u062f\u06cc\u0648 \u0628\u06cc\u0632\u06cc\u0646\u0633\u200c\u0648\u0628 \u2014 \u0637\u0631\u0627\u062d\u06cc \u062d\u0631\u0641\u0647\u200c\u0627\u06cc \u0648\u0631\u062f\u067e\u0631\u0633 \u0648 \u0648\u0648\u06a9\u0627\u0645\u0631\u0633",
      nav_home: "\u062e\u0627\u0646\u0647",
      nav_services: "\u062e\u062f\u0645\u0627\u062a",
      nav_about: "\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0646",
      nav_portfolio: "\u0646\u0645\u0648\u0646\u0647 \u06a9\u0627\u0631\u0647\u0627",
      nav_contact: "\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0646",
      nav_quote: "\u0634\u0631\u0648\u0639 \u067e\u0631\u0648\u0698\u0647",
      hero_tag: "\u0645\u062a\u062e\u0635\u0635 \u0648\u0631\u062f\u067e\u0631\u0633 \u0648 \u0648\u0648\u06a9\u0627\u0645\u0631\u0633",
      hero_desc: "\u0633\u0627\u06cc\u062a \u0634\u0645\u0627 \u0628\u0627\u06cc\u062f \u0628\u0647\u062a\u0631\u06cc\u0646 \u0641\u0631\u0648\u0634\u0646\u062f\u0647\u200c\u06cc \u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631\u062a\u0627\u0646 \u0628\u0627\u0634\u062f \u2014 \u06cc\u06a9\u06cc \u06a9\u0647 \u06f2\u06f4 \u0633\u0627\u0639\u062a\u0647 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0648 \u0628\u0627\u0632\u062f\u06cc\u062f\u06a9\u0646\u0646\u062f\u0647 \u0631\u0627 \u0628\u0647 \u0645\u0634\u062a\u0631\u06cc \u062a\u0628\u062f\u06cc\u0644 \u0645\u06cc\u200c\u06a9\u0646\u062f. \u0645\u0646 \u0633\u0627\u06cc\u062a\u200c\u0647\u0627\u06cc \u0648\u0631\u062f\u067e\u0631\u0633\u06cc \u0633\u0631\u06cc\u0639 \u0648 \u0647\u062f\u0641\u0645\u0646\u062f \u0645\u06cc\u200c\u0633\u0627\u0632\u0645 \u06a9\u0647 \u0647\u0645 \u0632\u06cc\u0628\u0627 \u0647\u0633\u062a\u0646\u062f \u0648 \u0647\u0645 \u0648\u0627\u0642\u0639\u0627\u064b \u0628\u0647 \u0631\u0634\u062f \u0634\u0645\u0627 \u06a9\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f.",
      hero_btn: "\u062e\u062f\u0645\u0627\u062a \u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc\u062f",
      stat_1: "\u067e\u0631\u0648\u0698\u0647 \u062a\u062d\u0648\u06cc\u0644 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647",
      stat_2: "\u0631\u0636\u0627\u06cc\u062a \u0645\u0634\u062a\u0631\u06cc\u0627\u0646",
      stat_3: "\u0633\u0627\u0644 \u062a\u062c\u0631\u0628\u0647",
      stat_4: "\u0645\u0634\u062a\u0631\u06cc \u0631\u0627\u0636\u06cc",
      serv_tag: "\u062e\u062f\u0645\u0627\u062a",
      serv_desc: "\u0647\u0631 \u067e\u0631\u0648\u0698\u0647 \u0628\u0631\u0627\u06cc \u0645\u0646 \u06cc\u06a9 \u0633\u0631\u0645\u0627\u06cc\u0647\u200c\u06af\u0630\u0627\u0631\u06cc \u0628\u0644\u0646\u062f\u0645\u062f\u062a \u0627\u0633\u062a\u060c \u0646\u0647 \u06cc\u06a9 \u06a9\u0627\u0631 \u062a\u062d\u0648\u06cc\u0644\u200c\u062f\u0627\u062f\u0646\u06cc. \u0627\u06cc\u0646\u062c\u0627 \u0628\u0628\u06cc\u0646\u06cc\u062f \u0686\u0637\u0648\u0631 \u0628\u0647 \u0631\u0634\u062f \u0622\u0646\u0644\u0627\u06cc\u0646 \u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631 \u0634\u0645\u0627 \u06a9\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u0645.",
      s1_title: "\u0637\u0631\u0627\u062d\u06cc \u0633\u0627\u06cc\u062a \u0648\u0631\u062f\u067e\u0631\u0633",
      s1_desc: "\u06cc\u06a9 \u0633\u0627\u06cc\u062a \u06a9\u0647 \u062d\u0648\u0644 \u0627\u0647\u062f\u0627\u0641 \u0634\u0645\u0627 \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647\u060c \u0646\u0647 \u06cc\u06a9 \u0642\u0627\u0644\u0628 \u0622\u0645\u0627\u062f\u0647. \u0648\u0628\u200c\u0633\u0627\u06cc\u062a\u200c\u0647\u0627\u06cc \u0648\u0631\u062f\u067e\u0631\u0633 \u0627\u062e\u062a\u0635\u0627\u0635\u06cc \u0637\u0631\u0627\u062d\u06cc \u0645\u06cc\u200c\u06a9\u0646\u0645 \u06a9\u0647 \u0647\u0648\u06cc\u062a \u0628\u0631\u0646\u062f \u0634\u0645\u0627 \u0631\u0627 \u0645\u0646\u0639\u06a9\u0633 \u06a9\u0631\u062f\u0647 \u0648 \u0628\u0627\u0632\u062f\u06cc\u062f\u06a9\u0646\u0646\u062f\u0647 \u0631\u0627 \u0628\u0647 \u0633\u0645\u062a \u0627\u0642\u062f\u0627\u0645 \u0647\u062f\u0627\u06cc\u062a \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f.",
      s1_l1: "\u062a\u0648\u0633\u0639\u0647 \u067e\u0648\u0633\u062a\u0647 \u06a9\u0627\u0645\u0644\u0627\u064b \u0627\u062e\u062a\u0635\u0627\u0635\u06cc",
      s1_l2: "\u0637\u0631\u0627\u062d\u06cc \u0631\u06cc\u0633\u067e\u0627\u0646\u0633\u06cc\u0648 \u0628\u0627 \u0627\u0648\u0644\u0648\u06cc\u062a \u0645\u0648\u0628\u0627\u06cc\u0644",
      s1_l3: "\u0628\u0647\u06cc\u0646\u0647\u200c\u0633\u0627\u0632\u06cc \u0634\u0627\u062e\u0635\u200c\u0647\u0627\u06cc Core Web Vitals",
      featured_badge: "\u0645\u062d\u0628\u0648\u0628\u200c\u062a\u0631\u06cc\u0646",
      s2_title: "\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0648\u0648\u06a9\u0627\u0645\u0631\u0633",
      s2_desc: "\u0641\u0631\u0648\u0634\u06af\u0627\u0647\u06cc \u06a9\u0647 \u0648\u0627\u0642\u0639\u0627\u064b \u0645\u06cc\u200c\u0641\u0631\u0648\u0634\u062f. \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0648\u0648\u06a9\u0627\u0645\u0631\u0633 \u0631\u0627 \u0628\u0627 \u0641\u0631\u0622\u06cc\u0646\u062f \u062e\u0631\u06cc\u062f \u0631\u0648\u0627\u0646\u060c \u062f\u0631\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u067e\u0631\u062f\u0627\u062e\u062a \u0627\u0645\u0646 \u0648 \u0635\u0641\u062d\u0627\u062a \u0645\u062d\u0635\u0648\u0644 \u0628\u0647\u06cc\u0646\u0647\u200c\u0634\u062f\u0647 \u0628\u0631\u0627\u06cc \u0641\u0631\u0648\u0634 \u0645\u06cc\u200c\u0633\u0627\u0632\u0645.",
      s2_l1: "\u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u0648 \u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc \u06a9\u0627\u0645\u0644 \u0641\u0631\u0648\u0634\u06af\u0627\u0647",
      s2_l2: "\u0627\u062a\u0635\u0627\u0644 \u0628\u0647 \u062f\u0631\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u067e\u0631\u062f\u0627\u062e\u062a \u0645\u0639\u062a\u0628\u0631",
      s2_l3: "\u0635\u0641\u062d\u0627\u062a \u0645\u062d\u0635\u0648\u0644 \u0628\u0647\u06cc\u0646\u0647 \u0628\u0631\u0627\u06cc \u062a\u0628\u062f\u06cc\u0644",
      s3_title: "\u0644\u0646\u062f\u06cc\u0646\u06af \u067e\u06cc\u062c",
      s3_desc: "\u06cc\u06a9 \u0647\u062f\u0641. \u06cc\u06a9 \u0635\u0641\u062d\u0647. \u0628\u06cc\u0634\u062a\u0631\u06cc\u0646 \u0646\u062a\u06cc\u062c\u0647. \u0644\u0646\u062f\u06cc\u0646\u06af \u067e\u06cc\u062c\u200c\u0647\u0627\u06cc \u0645\u062a\u0645\u0631\u06a9\u0632 \u0628\u0631\u0627\u06cc \u06a9\u0645\u067e\u06cc\u0646\u200c\u0647\u0627 \u0648 \u0645\u0639\u0631\u0641\u06cc \u0645\u062d\u0635\u0648\u0644 \u0637\u0631\u0627\u062d\u06cc \u0645\u06cc\u200c\u06a9\u0646\u0645 \u06a9\u0647 \u0644\u06cc\u062f \u062c\u0630\u0628 \u06a9\u0631\u062f\u0647 \u0648 \u06a9\u0644\u06cc\u06a9 \u0631\u0627 \u0628\u0647 \u062f\u0631\u0622\u0645\u062f \u062a\u0628\u062f\u06cc\u0644 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f.",
      s3_l1: "\u0686\u06cc\u062f\u0645\u0627\u0646 \u0647\u062f\u0641\u0645\u0646\u062f \u0628\u0631\u0627\u06cc \u062a\u0628\u062f\u06cc\u0644",
      s3_l2: "\u0633\u0627\u062e\u062a\u0627\u0631 \u0622\u0645\u0627\u062f\u0647 \u0628\u0631\u0627\u06cc \u062a\u0633\u062a A/B",
      s3_l3: "\u0633\u0631\u0639\u062a \u0644\u0648\u062f \u0632\u06cc\u0631 \u06f2 \u062b\u0627\u0646\u06cc\u0647",
      s4_title: "\u0633\u0626\u0648 \u0648 \u0628\u0647\u06cc\u0646\u0647\u200c\u0633\u0627\u0632\u06cc",
      s4_desc: "\u062f\u06cc\u062f\u0647 \u0634\u062f\u0646 \u062f\u0631 \u06af\u0648\u06af\u0644 \u0634\u0627\u0646\u0633 \u0646\u06cc\u0633\u062a \u2014 \u0627\u0633\u062a\u0631\u0627\u062a\u0698\u06cc \u0627\u0633\u062a. \u0633\u0626\u0648 \u062a\u06a9\u0646\u06cc\u06a9\u0627\u0644 \u0648 \u0628\u0647\u06cc\u0646\u0647\u200c\u0633\u0627\u0632\u06cc \u0633\u0631\u0639\u062a\u06cc \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u062f\u0647\u0645 \u06a9\u0647 \u0633\u0627\u06cc\u062a \u0634\u0645\u0627 \u0631\u0627 \u062f\u0631 \u0646\u062a\u0627\u06cc\u062c \u0628\u0627\u0644\u0627 \u0646\u06af\u0647 \u0645\u06cc\u200c\u062f\u0627\u0631\u062f.",
      s4_l1: "\u0633\u0626\u0648 \u062a\u06a9\u0646\u06cc\u06a9\u0627\u0644 \u0648 On-Page",
      s4_l2: "\u0628\u0647\u0628\u0648\u062f Core Web Vitals (LCP, CLS, INP)",
      s4_l3: "\u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u06a9\u0634\u06cc\u0646\u06af \u0648 \u0627\u0641\u0632\u0627\u06cc\u0634 \u0633\u0631\u0639\u062a",
      about_exp: "\u0633\u0627\u0644<br />\u062a\u062c\u0631\u0628\u0647",
      about_lead: "\u0645\u0646 \u0647\u0648\u0645\u0646 \u0647\u0633\u062a\u0645 \u2014 \u062a\u0648\u0633\u0639\u0647\u200c\u062f\u0647\u0646\u062f\u0647 \u0648\u0631\u062f\u067e\u0631\u0633 \u0648 \u0645\u062a\u062e\u0635\u0635 \u0648\u0628 \u0628\u0627 \u0628\u06cc\u0634 \u0627\u0632 \u06f6 \u0633\u0627\u0644 \u062a\u062c\u0631\u0628\u0647 \u0639\u0645\u0644\u06cc. \u0628\u0627 \u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0627\u0632 \u0627\u0633\u062a\u0627\u0631\u062a\u0627\u067e\u200c\u0647\u0627\u06cc \u06a9\u0648\u0686\u06a9 \u062a\u0627 \u0628\u0631\u0646\u062f\u0647\u0627\u06cc \u0628\u06cc\u0646\u200c\u0627\u0644\u0645\u0644\u0644\u06cc \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u0645 \u0648 \u0628\u0647 \u0622\u0646\u200c\u0647\u0627 \u06a9\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u0645 \u0633\u0627\u06cc\u062a\u06cc \u0628\u0633\u0627\u0632\u0646\u062f \u06a9\u0647 \u0646\u0647\u200c\u0641\u0642\u0637 \u062e\u0648\u0628 \u0628\u0647 \u0646\u0638\u0631 \u0628\u0631\u0633\u062f\u060c \u0628\u0644\u06a9\u0647 \u0648\u0627\u0642\u0639\u0627\u064b \u0646\u062a\u06cc\u062c\u0647 \u0628\u062f\u0647\u062f. \u0645\u0632\u06cc\u062a \u0645\u0646\u061f \u0645\u0647\u0627\u0631\u062a \u0641\u0646\u06cc \u0642\u0648\u06cc\u060c \u0642\u06cc\u0645\u062a \u0631\u0642\u0627\u0628\u062a\u06cc \u0648 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0634\u062e\u0635\u06cc \u06a9\u0647 \u062f\u0631 \u0622\u0698\u0627\u0646\u0633\u200c\u0647\u0627\u06cc \u0628\u0632\u0631\u06af \u067e\u06cc\u062f\u0627 \u0646\u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f.",
      about_skills_title: "\u062a\u062e\u0635\u0635\u200c\u0647\u0627\u06cc \u0627\u0635\u0644\u06cc:",
      about_skills_desc: "\u0648\u0631\u062f\u067e\u0631\u0633\u060c \u0627\u0644\u0645\u0646\u062a\u0648\u0631 \u067e\u0631\u0648\u060c \u0648\u0648\u06a9\u0627\u0645\u0631\u0633\u060c \u062c\u062a \u0627\u0646\u062c\u06cc\u0646\u060c \u0633\u0626\u0648 \u062a\u06a9\u0646\u06cc\u06a9\u0627\u0644\u060c Core Web Vitals \u0648 \u0628\u0647\u06cc\u0646\u0647\u200c\u0633\u0627\u0632\u06cc \u067e\u0631\u0641\u0648\u0631\u0645\u0646\u0633.",
      about_btn: "\u0628\u0627 \u0647\u0645 \u06a9\u0627\u0631 \u06a9\u0646\u06cc\u0645",
      testi_tag: "\u0646\u0638\u0631 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646",
      t1_quote: '"\u0647\u0645\u06a9\u0627\u0631\u06cc \u0628\u0627 \u0627\u0633\u062a\u0648\u062f\u06cc\u0648 \u0628\u06cc\u0632\u06cc\u0646\u0633\u200c\u0648\u0628 \u06cc\u06a9\u06cc \u0627\u0632 \u0628\u0647\u062a\u0631\u06cc\u0646 \u062a\u0635\u0645\u06cc\u0645\u200c\u0647\u0627\u06cc \u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631 \u0645\u0627 \u0628\u0648\u062f. \u0633\u0627\u06cc\u062a \u0628\u0647 \u0645\u0648\u0642\u0639 \u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632\u06cc \u0634\u062f\u060c \u0633\u0631\u0639\u062a \u0641\u0648\u0642\u200c\u0627\u0644\u0639\u0627\u062f\u0647\u200c\u0627\u06cc \u062f\u0627\u0631\u062f \u0648 \u062a\u06cc\u0645 \u0645\u0627 \u0639\u0627\u0634\u0642 \u0645\u062f\u06cc\u0631\u06cc\u062a\u0634 \u0627\u0633\u062a. \u0647\u0648\u0645\u0646 \u0647\u0645\u06cc\u0634\u0647 \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0628\u0648\u062f \u0648 \u0648\u0627\u0642\u0639\u0627\u064b \u0628\u0647 \u0645\u0648\u0641\u0642\u06cc\u062a \u0645\u0627 \u0627\u0647\u0645\u06cc\u062a \u0645\u06cc\u200c\u062f\u0627\u062f."',
      t1_role: "\u0645\u062f\u06cc\u0631\u0639\u0627\u0645\u0644 \u0622\u0698\u0627\u0646\u0633 Bloom",
      t2_quote: '"\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0648\u0648\u06a9\u0627\u0645\u0631\u0633 \u0645\u0627 \u062f\u0631 \u0627\u0648\u0644\u06cc\u0646 \u0645\u0627\u0647 \u0628\u0639\u062f \u0627\u0632 \u0628\u0627\u0632\u0637\u0631\u0627\u062d\u06cc \u06f4\u06f0\u0651 \u0627\u0641\u0632\u0627\u06cc\u0634 \u0646\u0631\u062e \u062a\u0628\u062f\u06cc\u0644 \u062f\u0627\u0634\u062a. \u0641\u0631\u0622\u06cc\u0646\u062f \u062e\u0631\u06cc\u062f \u0631\u0648\u0627\u0646\u060c \u0637\u0631\u0627\u062d\u06cc \u062a\u0645\u06cc\u0632 \u0648 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u062f\u0627\u0626\u0645\u0627\u064b \u0627\u0632 \u0638\u0627\u0647\u0631 \u0633\u0627\u06cc\u062a \u062a\u0639\u0631\u06cc\u0641 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f."',
      t2_role: "\u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 TechGear",
      t3_quote: '"\u0644\u0646\u062f\u06cc\u0646\u06af \u067e\u06cc\u062c \u0645\u0639\u0631\u0641\u06cc \u0645\u062d\u0635\u0648\u0644\u0645\u0627\u0646 \u0641\u0631\u0627\u062a\u0631 \u0627\u0632 \u0647\u0631 \u0627\u0646\u062a\u0638\u0627\u0631\u06cc \u0628\u0648\u062f. \u0647\u0632\u06cc\u0646\u0647 \u062c\u0630\u0628 \u0644\u06cc\u062f \u067e\u0627\u06cc\u06cc\u0646 \u0622\u0645\u062f\u060c \u0646\u0631\u062e \u062a\u0628\u062f\u06cc\u0644 \u0628\u0627\u0644\u0627 \u0631\u0641\u062a \u0648 \u0637\u0631\u0627\u062d\u06cc \u0628\u0631\u0646\u062f \u0645\u0627 \u0631\u0627 \u062d\u0631\u0641\u0647\u200c\u0627\u06cc \u0646\u0634\u0627\u0646 \u062f\u0627\u062f. \u062d\u0627\u0644\u0627 \u0647\u0645\u0647 \u0631\u0627 \u0628\u0647 \u0627\u0633\u062a\u0648\u062f\u06cc\u0648 \u0628\u06cc\u0632\u06cc\u0646\u0633\u200c\u0648\u0628 \u0645\u0639\u0631\u0641\u06cc \u0645\u06cc\u200c\u06a9\u0646\u0645."',
      t3_role: "\u0645\u062f\u06cc\u0631 \u0645\u0627\u0631\u06a9\u062a\u06cc\u0646\u06af",
      t4_quote: '"\u0627\u0631\u062a\u0628\u0627\u0637 \u0634\u0641\u0627\u0641\u060c \u062a\u0627\u06cc\u0645\u0644\u0627\u06cc\u0646 \u0648\u0627\u0642\u0639\u200c\u0628\u06cc\u0646\u0627\u0646\u0647 \u0648 \u0646\u062a\u06cc\u062c\u0647\u200c\u0627\u06cc \u06a9\u0647 \u0645\u0627 \u0631\u0627 \u0633\u0631\u0628\u0644\u0646\u062f \u06a9\u0631\u062f. \u0628\u0627 \u0686\u0646\u062f \u062f\u0648\u0644\u067e\u0631 \u062f\u0631 \u0637\u0648\u0644 \u0633\u0627\u0644\u200c\u0647\u0627 \u06a9\u0627\u0631 \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u0645 \u2014 \u0647\u0648\u0645\u0646 \u0647\u0645\u06cc\u0634\u0647 \u06a9\u0633\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u06cc\u0645."',
      t4_role: "\u0628\u0646\u06cc\u0627\u0646\u200c\u06af\u0630\u0627\u0631 StartupHub",
      contact_desc: "\u067e\u0631\u0648\u0698\u0647\u200c\u0627\u06cc \u062f\u0627\u0631\u06cc\u062f\u061f \u0627\u0632 \u0627\u0647\u062f\u0627\u0641\u060c \u062a\u0627\u06cc\u0645\u0644\u0627\u06cc\u0646 \u0648 \u0628\u0648\u062f\u062c\u0647\u062a\u0627\u0646 \u0628\u06af\u0648\u06cc\u06cc\u062f \u2014 \u0628\u062f\u0648\u0646 \u0641\u0634\u0627\u0631 \u0648 \u0628\u062f\u0648\u0646 \u0641\u0631\u0648\u0634\u0646\u062f\u06af\u06cc. \u06cc\u06a9 \u062c\u0648\u0627\u0628 \u0635\u0627\u062f\u0642\u0627\u0646\u0647 \u062f\u0631\u0628\u0627\u0631\u0647 \u0622\u0646\u0686\u0647 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0648 \u0627\u06cc\u0646\u06a9\u0647 \u0686\u0647 \u0686\u06cc\u0632\u06cc \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u062f \u062e\u0648\u0627\u0647\u0645 \u062f\u0627\u062f.",
      f_name: "\u0646\u0627\u0645 \u0634\u0645\u0627",
      f_email: "\u0622\u062f\u0631\u0633 \u0627\u06cc\u0645\u06cc\u0644",
      f_service: "\u06a9\u062f\u0627\u0645 \u062e\u062f\u0645\u062a \u0631\u0627 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u062f\u061f",
      f_details: "\u067e\u0631\u0648\u0698\u0647\u200c\u062a\u0627\u0646 \u0631\u0627 \u0628\u0631\u0627\u06cc\u0645 \u062a\u0639\u0631\u06cc\u0641 \u06a9\u0646\u06cc\u062f",
      f_send: "\u0627\u0631\u0633\u0627\u0644 \u067e\u06cc\u0627\u0645 \u2190",
      f_success: "\u2713 \u067e\u06cc\u0627\u0645 \u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u062f! \u0638\u0631\u0641 \u06f2\u06f4 \u0633\u0627\u0639\u062a \u067e\u0627\u0633\u062e \u062e\u0648\u0627\u0647\u0645 \u062f\u0627\u062f.",
      f_error: "\u26a0 \u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f \u06cc\u0627 \u062f\u0631 \u0648\u0627\u062a\u0633\u200c\u0622\u067e \u062a\u0645\u0627\u0633 \u0628\u06af\u06cc\u0631\u06cc\u062f.",
      foot_brand: "\u0637\u0631\u0627\u062d\u06cc \u0627\u062e\u062a\u0635\u0627\u0635\u06cc \u0648\u0631\u062f\u067e\u0631\u0633 \u0648 \u062a\u0648\u0633\u0639\u0647 \u0648\u0648\u06a9\u0627\u0645\u0631\u0633 \u0628\u0631\u0627\u06cc \u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062d\u0636\u0648\u0631 \u0622\u0646\u0644\u0627\u06cc\u0646\u0634\u0627\u0646 \u0631\u0627 \u062c\u062f\u06cc \u0645\u06cc\u200c\u06af\u06cc\u0631\u0646\u062f.",
      foot_quick: "\u062f\u0633\u062a\u0631\u0633\u06cc \u0633\u0631\u06cc\u0639",
      foot_wa: "\u0686\u062a \u062f\u0631 \u0648\u0627\u062a\u0633\u200c\u0622\u067e",
      foot_copy: "\u00a9 \u06f2\u06f0\u06f2\u06f5 \u0627\u0633\u062a\u0648\u062f\u06cc\u0648 \u0628\u06cc\u0632\u06cc\u0646\u0633\u200c\u0648\u0628. \u062a\u0645\u0627\u0645\u06cc \u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638 \u0627\u0633\u062a.",
      foot_heart: "\u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647 \u0628\u0627 \u2665 \u0648 \u062f\u0642\u062a \u0641\u0631\u0627\u0648\u0627\u0646 \u062f\u0631 \u062c\u0632\u0626\u06cc\u0627\u062a"
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
      { val: "", text: "\u062e\u062f\u0645\u062a \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f..." },
      { val: "wordpress", text: "\u0637\u0631\u0627\u062d\u06cc \u0633\u0627\u06cc\u062a \u0648\u0631\u062f\u067e\u0631\u0633" },
      { val: "woocommerce", text: "\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0648\u0648\u06a9\u0627\u0645\u0631\u0633" },
      { val: "landing", text: "\u0644\u0646\u062f\u06cc\u0646\u06af \u067e\u06cc\u062c" },
      { val: "seo", text: "\u0633\u0626\u0648 \u0648 \u0628\u0647\u06cc\u0646\u0647\u200c\u0633\u0627\u0632\u06cc" }
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

    const heroTitle = document.getElementById('heroTitle');
    if(heroTitle) {
      heroTitle.innerHTML = lang === 'fa'
        ? `\u0633\u0627\u06cc\u062a\u06cc \u06a9\u0647 \u0628\u0631\u0627\u06cc \u0634\u0645\u0627 <span class="grad-txt">\u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f</span><br />\u0646\u0647 \u0641\u0642\u0637 \u062e\u0648\u0628 \u0628\u0647 \u0646\u0638\u0631 \u0645\u06cc\u200c\u0631\u0633\u062f`
        : `WordPress Sites That <span class="grad-txt">Work for You</span><br />Not Just Look Good`;
    }
    const servTitle = document.getElementById('servTitle');
    if(servTitle) {
      servTitle.innerHTML = lang === 'fa'
        ? `\u062e\u062f\u0645\u0627\u062a <span class="grad-txt">\u062a\u062e\u0635\u0635\u06cc</span>`
        : `Expert <span class="grad-txt">Services</span>`;
    }
    const aboutTitle = document.getElementById('aboutTitle');
    if(aboutTitle) {
      aboutTitle.innerHTML = lang === 'fa'
        ? `\u0645\u062a\u062e\u0635\u0635\u06cc \u06a9\u0647 \u0628\u0647 <span class="grad-txt">\u0631\u0634\u062f \u0648\u0627\u0642\u0639\u06cc \u0634\u0645\u0627</span> \u0627\u0647\u0645\u06cc\u062a \u0645\u06cc\u200c\u062f\u0647\u062f`
        : `A Developer Who Cares About<br /><span class="grad-txt">Your Real Results</span>`;
    }
    const testiTitle = document.getElementById('testiTitle');
    if(testiTitle) {
      testiTitle.innerHTML = lang === 'fa'
        ? `\u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0686\u0647 <span class="grad-txt">\u0645\u06cc\u200c\u06af\u0648\u06cc\u0646\u062f</span>`
        : `What Clients <span class="grad-txt">Say</span>`;
    }
    const contactTitle = document.getElementById('contactTitle');
    if(contactTitle) {
      contactTitle.innerHTML = lang === 'fa'
        ? `\u0628\u06cc\u0627\u06cc\u06cc\u062f \u0627\u0632 \u067e\u0631\u0648\u0698\u0647\u200c\u062a\u0627\u0646 <span class="grad-txt">\u0628\u06af\u0648\u06cc\u06cc\u062f</span>`
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
    submitBtn.textContent = currentLang === 'fa' ? "\u062f\u0631 \u062d\u0627\u0644 \u0627\u0631\u0633\u0627\u0644..." : "Sending...";
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
    submitBtn.textContent = currentLang === 'fa' ? "\u0627\u0631\u0633\u0627\u0644 \u067e\u06cc\u0627\u0645 \u2190" : "Send Message \u2192";
    submitBtn.disabled = false;
  });

  // SMART SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click',function(e){ var t=document.querySelector(a.getAttribute('href')); if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); } }); });

});
