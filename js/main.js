/* ==========================================================================
   PINE CAREERS Site Script
   Injects header/footer, wires up navigation, scroll reveals, stat counters,
   testimonial carousel and the contact form.
   ========================================================================== */
(function(){
  "use strict";

  var GLOBE_DATA = {"dots":[[99.2,55.1],[116.0,55.7],[131.7,56.9],[147.9,54.9],[167.1,55.2],[184.2,55.0],[200.5,52.4],[87.9,71.3],[106.7,69.8],[121.4,70.3],[138.4,68.7],[159.3,69.9],[174.3,70.1],[192.6,70.6],[206.7,67.0],[224.1,68.1],[65.3,83.0],[81.2,83.4],[99.5,83.7],[113.4,82.6],[131.8,82.7],[148.9,85.8],[165.0,82.5],[184.9,83.9],[197.5,81.7],[214.6,84.5],[234.9,83.5],[57.4,98.6],[74.3,100.2],[86.7,99.5],[106.9,98.7],[121.9,99.2],[138.1,98.2],[156.8,100.7],[175.8,97.3],[191.0,96.9],[210.0,100.3],[224.0,99.1],[242.5,96.8],[64.8,113.3],[81.8,113.2],[95.1,112.3],[112.2,115.2],[133.3,114.7],[147.6,111.0],[167.3,115.2],[180.5,113.0],[197.4,114.4],[217.8,111.3],[233.4,113.3],[72.2,128.8],[87.6,126.8],[108.4,128.4],[122.7,127.8],[138.2,126.4],[156.2,128.1],[172.7,126.4],[188.9,128.3],[206.7,129.7],[226.7,125.7],[82.6,142.7],[97.4,143.7],[116.0,140.9],[129.6,142.0],[148.1,142.2],[166.6,143.2],[184.8,140.4],[199.0,141.6],[218.2,141.1],[232.0,142.1],[108.4,158.6],[125.3,159.0],[141.7,155.4],[156.9,155.6],[173.5,154.8],[190.4,159.3],[206.9,158.3],[224.8,156.6],[114.7,172.8],[129.4,172.0],[148.5,173.3],[163.9,173.8],[180.5,170.1],[200.0,172.4],[215.2,169.8],[123.8,185.2],[139.1,187.4],[154.9,186.0],[176.4,188.6],[189.0,184.8],[206.9,188.3],[146.7,199.0],[163.6,201.1],[181.4,201.3],[200.5,199.4],[158.9,215.7],[175.6,215.8],[189.3,213.7],[150.0,231.9],[163.2,231.2],[181.7,232.1],[157.7,244.2],[176.3,244.9],[215.2,270.0],[233.2,269.5],[249.2,268.2],[208.4,282.7],[222.0,284.3],[241.6,283.4],[199.3,297.5],[214.1,296.6],[231.3,298.7],[251.2,296.8],[205.5,314.4],[224.0,312.3],[241.7,311.1],[196.6,327.7],[213.9,330.3],[232.6,325.9],[248.3,329.8],[207.8,345.1],[224.5,344.9],[242.9,343.3],[200.1,357.6],[217.4,358.5],[232.4,356.2],[207.6,370.9],[222.0,370.9],[239.9,371.1],[216.5,384.5],[232.1,386.8],[207.4,402.1],[225.7,402.5],[488.3,59.0],[506.1,58.8],[525.8,59.0],[542.7,61.2],[557.3,57.6],[484.4,73.5],[499.7,75.6],[516.7,75.5],[535.2,72.8],[547.7,72.6],[565.2,75.1],[473.8,87.5],[491.5,90.1],[505.9,89.4],[525.7,87.0],[543.0,91.1],[556.6,86.6],[484.2,103.0],[500.0,101.4],[516.9,104.1],[531.1,104.8],[551.7,104.0],[507.5,117.3],[526.2,119.6],[539.6,120.3],[559.2,119.7],[532.7,133.8],[526.6,141.4],[483.5,155.7],[502.4,155.9],[520.4,155.3],[536.5,156.0],[477.1,168.9],[495.2,168.4],[512.0,168.1],[526.8,167.4],[543.5,167.4],[467.0,182.5],[485.4,184.9],[504.8,184.0],[518.5,181.9],[535.0,182.6],[552.0,181.5],[462.3,198.7],[477.9,196.7],[495.8,198.4],[512.8,198.8],[527.9,198.2],[543.5,196.3],[564.1,198.4],[470.0,212.6],[483.5,213.7],[500.4,211.4],[519.8,212.2],[538.9,211.3],[554.8,213.6],[571.9,211.8],[476.7,229.4],[496.4,226.8],[511.6,228.2],[529.2,229.9],[543.6,226.3],[562.8,226.1],[466.9,240.3],[483.1,242.1],[503.0,241.3],[518.2,243.3],[537.5,242.1],[554.4,244.4],[476.6,257.2],[494.7,258.9],[512.6,254.9],[526.4,256.0],[546.2,257.3],[561.0,255.2],[469.4,272.5],[487.6,271.6],[502.5,269.6],[517.3,271.3],[535.6,270.4],[551.5,273.8],[477.8,285.1],[491.8,287.4],[510.9,286.9],[530.0,284.7],[545.4,286.8],[486.3,302.5],[501.7,301.7],[518.5,303.0],[538.0,301.1],[494.2,315.0],[509.5,314.8],[529.2,316.0],[546.2,314.0],[503.0,328.8],[517.9,330.3],[536.8,328.1],[492.9,346.3],[513.3,343.4],[528.2,344.1],[518.5,358.3],[596.5,45.9],[614.3,42.4],[627.4,45.2],[648.5,47.0],[664.7,44.3],[678.6,45.3],[699.3,44.3],[715.4,46.6],[729.3,46.0],[747.5,44.0],[585.4,59.0],[603.3,59.7],[621.7,58.9],[636.8,60.9],[653.6,58.7],[671.9,58.0],[689.3,59.6],[708.4,58.3],[725.3,60.0],[738.9,59.6],[757.9,60.4],[771.8,59.8],[791.0,61.2],[807.0,60.7],[579.1,75.8],[596.2,72.9],[612.2,74.2],[630.6,71.9],[645.5,75.0],[661.9,72.1],[680.7,76.1],[697.6,75.8],[716.1,72.7],[733.1,73.8],[750.0,75.0],[764.7,72.0],[784.7,72.1],[801.7,75.6],[817.6,76.2],[835.7,75.3],[849.9,75.3],[588.5,90.6],[602.1,87.2],[618.7,90.3],[638.3,90.5],[653.7,86.4],[673.6,90.4],[688.1,88.0],[704.3,90.6],[722.1,88.4],[738.1,90.3],[755.3,88.3],[774.8,89.6],[793.1,88.1],[809.2,86.8],[824.6,86.6],[841.9,88.0],[861.2,86.2],[593.6,104.0],[612.7,105.4],[628.8,102.6],[645.0,101.3],[665.2,102.9],[681.3,103.8],[698.0,100.8],[715.9,101.9],[729.7,103.4],[746.4,104.4],[764.1,101.7],[784.3,102.3],[797.8,105.0],[814.1,104.8],[831.8,101.3],[849.3,101.5],[868.3,100.8],[882.2,104.5],[605.2,117.8],[622.2,117.6],[639.3,117.8],[653.1,117.7],[674.1,115.5],[690.4,119.5],[706.1,117.5],[725.2,115.6],[739.9,117.2],[757.9,117.7],[776.0,115.7],[789.0,118.2],[805.9,116.6],[825.6,118.0],[841.2,120.1],[859.1,117.5],[876.5,115.8],[596.2,133.6],[613.6,131.0],[629.3,131.0],[645.7,132.1],[663.1,130.4],[680.1,133.1],[696.9,130.7],[716.5,130.3],[733.1,130.4],[746.6,133.5],[767.0,132.6],[782.9,132.6],[798.7,130.5],[815.8,133.1],[834.7,134.1],[851.6,134.6],[868.0,131.6],[603.4,148.2],[621.4,148.4],[639.7,149.2],[656.5,147.5],[672.7,144.7],[691.1,148.5],[704.9,145.4],[724.0,146.0],[739.2,144.6],[758.8,147.3],[773.5,145.2],[791.6,144.7],[809.2,145.6],[860.3,147.3],[613.3,161.5],[629.2,160.5],[647.7,159.7],[663.2,160.5],[681.4,161.5],[698.3,159.4],[714.0,162.1],[729.1,160.6],[747.1,159.8],[764.3,160.8],[780.1,162.8],[797.9,161.0],[638.6,177.8],[657.0,174.2],[673.7,175.0],[689.4,176.3],[705.5,175.3],[722.2,175.4],[738.4,176.3],[755.1,176.2],[775.9,175.5],[661.4,190.5],[679.6,189.7],[695.4,190.9],[713.6,190.6],[746.5,192.6],[767.2,191.4],[671.2,205.9],[690.4,206.1],[807.2,332.9],[823.5,336.3],[840.6,335.9],[861.1,336.5],[874.3,333.8],[816.4,347.6],[835.6,350.5],[852.5,347.6],[867.7,348.8],[885.8,348.0],[808.2,362.8],[826.7,363.6],[842.7,362.9],[861.0,363.7],[878.1,363.2],[833.4,378.6],[853.2,380.0],[869.4,376.7]],"hubs":[[700,175,"India"],[478,68,"United Kingdom"],[215,115,"New York"],[140,115,"California"],[600,165,"UAE"],[735,225,"Singapore"],[845,355,"Australia"],[500,235,"Nigeria"],[170,65,"Canada"],[515,78,"Germany"]],"routes":[[0,1],[0,2],[0,4],[0,5],[0,6],[0,7],[1,8],[1,9]]};


  var LOGO_URL = "images/logo.png";
  var SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/pine_careers/",
    linkedin: "https://www.linkedin.com/company/pine-careers"
  };

  var NAV_LINKS = [
    { label:"Home", href:"index.html", key:"home" },
    { label:"About Us", href:"about.html", key:"about" },
    {
      label:"Services", key:"services",
      children:[
        { label:"Alumni Engagement", href:"alumni.html", desc:"Engage · onboard · activate", key:"alumni" },
        { label:"Global Institutions", href:"global-institutions.html", desc:"For international universities", key:"global-institutions" },
        { label:"Indian Institutions", href:"indian-institutions.html", desc:"For Indian universities", key:"indian-institutions" },
        { label:"Industries", href:"industries.html", desc:"Education × industry", key:"industries" }
      ]
    },
    { label:"Insights", href:"insights.html", key:"insights" }
  ];

  var FOOTER_SERVICES = [
    { label:"Alumni Engagement", href:"alumni.html" },
    { label:"Global Institutions", href:"global-institutions.html" },
    { label:"Indian Institutions", href:"indian-institutions.html" },
    { label:"Industries", href:"industries.html" }
  ];

  var FOOTER_QUICK = [
    { label:"About Us", href:"about.html" },
    { label:"Insights", href:"insights.html" },
    { label:"Contact Us", href:"contact.html" }
  ];

  function el(tag, attrs, html){
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function(k){ e.setAttribute(k, attrs[k]); });
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  var currentPage = document.body.getAttribute("data-page") || "";

  /* ---------------- Header ---------------- */
  function buildHeader(){
    var host = document.getElementById("site-header");
    if (!host) return;

    var linksHTML = NAV_LINKS.map(function(item){
      if (item.children){
        var open = item.children.some(function(c){ return c.key === currentPage; });
        var childrenHTML = item.children.map(function(c){
          return '<a href="' + c.href + '">' + c.label + (c.desc ? '<span>' + c.desc + '</span>' : '') + '</a>';
        }).join("");
        return (
          '<li class="nav-item has-dropdown' + (open ? ' active' : '') + '">' +
            '<button type="button" class="nav-drop-toggle" aria-expanded="false">' + item.label +
              '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>' +
            '</button>' +
            '<div class="nav-dropdown">' + childrenHTML + '</div>' +
          '</li>'
        );
      }
      var active = item.key === currentPage;
      return '<li class="nav-item' + (active ? ' active' : '') + '"><a href="' + item.href + '">' + item.label + '</a></li>';
    }).join("");

    host.innerHTML =
      '<div class="nav-bar">' +
        '<a class="nav-logo" href="index.html">' +
          '<img src="' + LOGO_URL + '" alt="Pine Careers" onerror="this.replaceWith(Object.assign(document.createElement(\'span\'),{className:\'wordmark\',innerHTML:\'Pine <em>Careers</em>\'}))">' +
          '</a>' +
        '<ul class="nav-links">' +
          linksHTML +
          '<li class="nav-item' + (currentPage === "contact" ? ' active' : '') + '"><a href="contact.html">Contact</a></li>' +
        '</ul>' +
        '<div class="nav-cta">' +
          '<a href="contact.html" class="btn btn-gold btn-sm">Request a Briefing</a>' +
          '<button type="button" class="nav-toggle" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
        '</div>' +
      '</div>';

    // Mobile toggle
    var toggle = host.querySelector(".nav-toggle");
    toggle.addEventListener("click", function(){
      var isOpen = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Dropdown (click-to-toggle, works for touch + desktop)
    host.querySelectorAll(".nav-item.has-dropdown").forEach(function(item){
      var btn = item.querySelector(".nav-drop-toggle");
      btn.addEventListener("click", function(e){
        e.stopPropagation();
        var willOpen = !item.classList.contains("dropdown-open");
        host.querySelectorAll(".nav-item.has-dropdown").forEach(function(other){
          other.classList.remove("dropdown-open");
          other.querySelector(".nav-drop-toggle").setAttribute("aria-expanded","false");
        });
        if (willOpen){
          item.classList.add("dropdown-open");
          btn.setAttribute("aria-expanded","true");
        }
      });
    });
    document.addEventListener("click", function(){
      host.querySelectorAll(".nav-item.has-dropdown").forEach(function(item){
        item.classList.remove("dropdown-open");
      });
    });

    // Close mobile menu when a link is clicked
    host.querySelectorAll(".nav-links a").forEach(function(a){
      a.addEventListener("click", function(){
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded","false");
      });
    });

    // Scroll shadow state
    var onScroll = function(){
      host.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive:true });
  }











  







  /* ---------------- Footer ---------------- */
  function buildFooter(){
    var host = document.getElementById("site-footer");
    if (!host) return;

    var quickHTML = FOOTER_QUICK.map(function(l){ return '<li><a href="' + l.href + '">' + l.label + '</a></li>'; }).join("");
    var servicesHTML = FOOTER_SERVICES.map(function(l){ return '<li><a href="' + l.href + '">' + l.label + '</a></li>'; }).join("");

    var giHTML =
  '<div class="global-impact">' +
    '<div class="gi-inner">' +

      '<div class="gi-text reveal">' +

        '<span class="eyebrow">Our Global Footprint</span>' +

        '<h2>One connected network, mapped across 28 countries.</h2>' +

        '<p>From alumni chapters to leadership roundtables, Pine Careers keeps a single, living picture of where your community actually is and keeps it moving.</p>' +

        '<div class="gi-stats">' +

          '<div class="gi-stat">' +
            '<div class="gi-stat-value" data-count="15.4" data-suffix="M">15.4M</div>' +
            '<div class="gi-stat-label">Alumni found &amp; verified</div>' +
          '</div>' +

          '<div class="gi-stat">' +
            '<div class="gi-stat-value" data-count="28" data-suffix="">28</div>' +
            '<div class="gi-stat-label">Countries in our network</div>' +
          '</div>' +

          '<div class="gi-stat">' +
            '<div class="gi-stat-value" data-count="385" data-suffix="+">385+</div>' +
            '<div class="gi-stat-label">Universities tracked</div>' +
          '</div>' +

          '<div class="gi-stat">' +
            '<div class="gi-stat-value" data-count="1.8" data-suffix="M+">1.8M+</div>' +
            '<div class="gi-stat-label">International Alumni</div>' +
          '</div>' +

        '</div>' +

      '</div>' +

      '<div class="gi-map reveal reveal-d1">' +
        '<div class="globe-wrap">' +
          '<canvas class="globe-canvas" data-globe="lg"></canvas>' +
        '</div>' +
        '<span class="gi-map-caption"></span>' +
      '</div>'
       +

    '</div>' +
  '</div>';

    host.innerHTML =
      giHTML +
      '<div class="footer-main">' +
        '<div class="footer-brand">' +
          '<p>The first integrated recruitment, alumni and industry partner for international higher education in India. A Pine Group higher education business.</p>' +
          '<div class="footer-social">' +
            '<a href="mailto:info@pinecareers.com" aria-label="Email Pine Careers"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg></a>' +
            '<a href="' + SOCIAL_LINKS.linkedin + '" target="_blank" rel="noopener" aria-label="Pine Careers on LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4zM13.5 8.48h-3.83V21h3.83v-6.57c0-3.66 4.75-3.96 4.75 0V21H22v-7.93c0-6.17-6.78-5.94-8.5-2.91z"/></svg></a>' +
            '<a href="' + SOCIAL_LINKS.instagram + '" target="_blank" rel="noopener" aria-label="Pine Careers on Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.2"/><path d="M17.5 6.5h.01"/></svg></a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-col"><h4>Quick Links</h4><ul>' + quickHTML + '</ul></div>' +
        '<div class="footer-col"><h4>Services</h4><ul>' + servicesHTML + '</ul></div>' +
        '<div class="footer-col contact"><h4>Get In Touch</h4><ul>' +
          '<li><span class="label">Email</span><a href="mailto:info@pinecareers.com">info@pinecareers.com</a></li>' +
          '<li><span class="label">Location</span><span>B-314, iThum Tower, Plot No. A-40, Sector-62, Noida, Gautam Buddha Nagar-201301, Uttar Pradesh</span></li>' +
          '<li><span class="label">Response Time</span><span>Within two business days</span></li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<p>&copy; ' + new Date().getFullYear() + ' Pine Careers. All rights reserved.</p>' +
        '<div class="footer-legal"><a href="privacy-policy.html">Privacy Policy</a><a href="terms-of-service.html">Terms of Service</a></div>' +
      '</div>';
  }

  /* ---------------- Scroll reveals ---------------- */
  function initReveals(){
    var targets = document.querySelectorAll(".reveal");
    if (!targets.length || !("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("reveal-active");

    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.14, rootMargin:"0px 0px -40px 0px" });
    targets.forEach(function(t){ io.observe(t); });

    // Safety net: never let content stay hidden, even if an observer
    // misbehaves on an unusual browser/environment.
    setTimeout(function(){
      targets.forEach(function(t){ t.classList.add("visible"); });
    }, 3000);
  }

  /* ---------------- Stat counters ---------------- */
  function initCounters(){
    var stats = document.querySelectorAll(".stat-value[data-count]");
    if (!stats.length) return;

    function animate(node){
      var target = parseFloat(node.getAttribute("data-count"));
      var suffix = node.getAttribute("data-suffix") || "";
      var isDecimal = String(node.getAttribute("data-count")).indexOf(".") !== -1;
      var duration = 1400;
      var start = null;

      function step(ts){
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = target * eased;
        node.textContent = (isDecimal ? value.toFixed(1) : Math.round(value)) + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else node.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
      }
      requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)){
      stats.forEach(animate);
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.4 });
    stats.forEach(function(s){ io.observe(s); });
  }

  /* ---------------- Testimonial slider ---------------- */
  function initTestimonials(){
    var track = document.querySelector(".t-track");
    if (!track) return;
    var slides = Array.prototype.slice.call(track.querySelectorAll(".t-slide"));
    var dotsHost = document.querySelector(".t-dots");
    if (!slides.length) return;

    var index = 0;
    var timer = null;

    if (dotsHost){
      dotsHost.innerHTML = slides.map(function(_, i){
        return '<button type="button" aria-label="Show testimonial ' + (i+1) + '"' + (i===0 ? ' class="active"' : '') + '></button>';
      }).join("");
    }
    var dots = dotsHost ? Array.prototype.slice.call(dotsHost.querySelectorAll("button")) : [];

    function show(i){
      slides.forEach(function(s, si){ s.classList.toggle("active", si === i); });
      dots.forEach(function(d, di){ d.classList.toggle("active", di === i); });
      index = i;
    }
    function next(){ show((index + 1) % slides.length); }

    function startAutoplay(){
      stopAutoplay();
      timer = setInterval(next, 6500);
    }
    function stopAutoplay(){ if (timer) clearInterval(timer); }

    dots.forEach(function(d, i){
      d.addEventListener("click", function(){ show(i); startAutoplay(); });
    });
    track.addEventListener("mouseenter", stopAutoplay);
    track.addEventListener("mouseleave", startAutoplay);

    show(0);
    startAutoplay();
  }

  /* ---------------- Contact form ---------------- */
  function initContactForm(){
    var form = document.getElementById("briefingForm");
    if (!form) return;
    var success = document.getElementById("formSuccess");

    form.addEventListener("submit", function(e){
      e.preventDefault();
      var data = {
        name: form.name.value.trim(),
        institution: form.institution.value.trim(),
        role: form.role.value.trim(),
        email: form.email.value.trim(),
        interest: form.interest.value,
        message: form.message.value.trim()
      };

      var bodyLines = [
        "Name: " + data.name,
        "Institution: " + data.institution,
        "Title / Role: " + data.role,
        "Email: " + data.email,
        "Area of Interest: " + data.interest,
        "",
        data.message
      ];

      var subject = encodeURIComponent("Partnership Briefing Request " + data.institution);
      var body = encodeURIComponent(bodyLines.join("\n"));
      window.location.href = "mailto:info@pinecareers.com?subject=" + subject + "&body=" + body;

      if (success) success.classList.add("visible");
    });
  }

  /* ---------------- Hero network animation ---------------- */
  function initHeroNetwork(){
    var heroes = document.querySelectorAll(".hero");
    if (!heroes.length) return;

    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    heroes.forEach(function(hero){
      var canvas = document.createElement("canvas");
      canvas.className = "hero-network";
      canvas.setAttribute("aria-hidden", "true");
      // Insert as the first element so it sits behind existing hero content.
      hero.insertBefore(canvas, hero.firstChild);

      var ctx = canvas.getContext("2d");
      var w, h, dpr, nodes, orbs, raf;
      var linkDist = 150;
      var palette = ["rgba(228,200,131,", "rgba(20,150,120,"];

      function size(){
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = hero.offsetWidth;
        h = hero.offsetHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      function makeNodes(){
        var count = Math.max(18, Math.min(52, Math.round((w * h) / 26000)));
        nodes = [];
        for (var i = 0; i < count; i++){
          nodes.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.22,
            vy: (Math.random() - 0.5) * 0.22,
            r: Math.random() * 1.4 + 0.9
          });
        }

        // Soft glowing "bokeh" orbs drifting slowly behind the network —
        // the dreamy floating-light layer seen on reference sites.
        var orbCount = Math.max(6, Math.min(16, Math.round((w * h) / 60000)));
        orbs = [];
        for (var o = 0; o < orbCount; o++){
          orbs.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 46 + 18,
            vy: -(Math.random() * 0.16 + 0.05),
            vx: (Math.random() - 0.5) * 0.05,
            baseAlpha: Math.random() * 0.10 + 0.05,
            color: palette[o % palette.length],
            phase: Math.random() * Math.PI * 2
          });
        }
      }

      function step(t){
        ctx.clearRect(0, 0, w, h);

        // Bokeh orbs
        for (var o = 0; o < orbs.length; o++){
          var orb = orbs[o];
          orb.y += orb.vy;
          orb.x += orb.vx;
          if (orb.y < -orb.r) orb.y = h + orb.r;
          if (orb.x < -orb.r) orb.x = w + orb.r;
          if (orb.x > w + orb.r) orb.x = -orb.r;

          var pulse = 0.75 + 0.25 * Math.sin((t || 0) / 1400 + orb.phase);
          var grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
          grad.addColorStop(0, orb.color + (orb.baseAlpha * pulse) + ")");
          grad.addColorStop(1, orb.color + "0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
          ctx.fill();
        }

        // Particle nodes
        for (var i = 0; i < nodes.length; i++){
          var n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }

        for (var a = 0; a < nodes.length; a++){
          for (var b = a + 1; b < nodes.length; b++){
            var dx = nodes[a].x - nodes[b].x;
            var dy = nodes[a].y - nodes[b].y;
            var dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < linkDist){
              ctx.strokeStyle = "rgba(228,200,131," + (0.16 * (1 - dist / linkDist)) + ")";
              ctx.lineWidth = 0.7;
              ctx.beginPath();
              ctx.moveTo(nodes[a].x, nodes[a].y);
              ctx.lineTo(nodes[b].x, nodes[b].y);
              ctx.stroke();
            }
          }
        }

        for (var j = 0; j < nodes.length; j++){
          var node = nodes[j];
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,255,255,0.55)";
          ctx.fill();
        }

        raf = requestAnimationFrame(step);
      }

      function start(){
        size();
        makeNodes();
        if (reduceMotion){
          step(0);
          cancelAnimationFrame(raf);
          return;
        }
        step(0);
      }

      var resizeTimer;
      window.addEventListener("resize", function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
          cancelAnimationFrame(raf);
          start();
        }, 200);
      });

      document.addEventListener("visibilitychange", function(){
        if (document.hidden){
          cancelAnimationFrame(raf);
        } else if (!reduceMotion){
          raf = requestAnimationFrame(step);
        }
      });

      start();
    });
  }

  /* ---------------- Rotating globe (real spherical projection) ----------------
     Draws GLOBE_DATA (a dotted world map + hub cities + connecting routes)
     onto a sphere that slowly rotates, with authentic limb-darkening,
     hub pulses, city labels and great-circle flight arcs that travel over
     the surface and disappear behind the horizon. Pure Canvas 2D no
     external map tiles or WebGL dependency. */
 /* ==========================================================================

   ROTATING GLOBE

   ========================================================================== */

function createGlobe(canvas, opts){

  opts = opts || {};

  var ctx = canvas.getContext("2d");

  var dots = GLOBE_DATA.dots;
  var hubs = GLOBE_DATA.hubs;
  var routes = GLOBE_DATA.routes;

  var showLabels = opts.labels !== false;

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var w, h, dpr, R, cx, cy, raf, rotation = 0.6;


  /*
   * ============================================================
   * PINE CAREERS COLOR PALETTE
   * ============================================================
   *
   * IMPORTANT:
   *
   * Existing BLUE colors are kept for the globe/map.
   *
   * GOLD colors are used ONLY for:
   * - Country points
   * - Country pulse rings
   * - Route/dash lines
   * - Country/city labels
   *
   */

  var COLORS = {

    /* Existing globe colors — unchanged */

    navy900: "#2870B4",
    navy800: "#1F5F96",
    navy700: "#3F82BE",

    pine800: "#174A78",
    pine700: "#5A9BD0",
    pine600: "#82B6DD",


    /* Gold accent */

    gold: "#E4C883",
    goldBright: "#F1D99A",
    goldSoft: "#D8B96E"

  };


  /*
   * ============================================================
   * PROJECT FLAT MAP COORDINATES TO GLOBE
   * ============================================================
   */

  function project(xFlat, yFlat){

    var lonDeg =
      (xFlat / 1000) * 360 -
      180 -
      rotation * (180 / Math.PI);

    var latDeg =
      80 -
      (yFlat / 460) * 160;

    var lonRad =
      lonDeg * Math.PI / 180;

    var latRad =
      latDeg * Math.PI / 180;

    var x3 =
      Math.cos(latRad) *
      Math.sin(lonRad);

    var y3 =
      Math.sin(latRad);

    var z3 =
      Math.cos(latRad) *
      Math.cos(lonRad);

    return {

      x:
        cx + R * x3,

      y:
        cy - R * y3,

      z:
        z3,

      visible:
        z3 > 0.02

    };

  }


  /*
   * ============================================================
   * SIZE
   * ============================================================
   */

  function size(){

    dpr =
      Math.min(
        window.devicePixelRatio || 1,
        2
      );

    w =
      canvas.clientWidth;

    h =
      canvas.clientHeight;


    canvas.width =
      w * dpr;

    canvas.height =
      h * dpr;


    ctx.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    );


    R =
      Math.min(w, h) / 2 - 2;


    cx =
      w / 2;

    cy =
      h / 2;

  }


  /*
   * ============================================================
   * GLOBE BASE
   * ============================================================
   */

  function drawSphereShading(){

    var base =
      ctx.createRadialGradient(

        cx - R * 0.38,
        cy - R * 0.42,
        R * 0.08,

        cx,
        cy,
        R * 1.05

      );


    /*
     * Light area
     */

    base.addColorStop(
      0,
      "rgba(130,182,221,0.88)"
    );


    /*
     * Pine 700
     */

    base.addColorStop(
      0.30,
      "rgba(90,155,208,0.82)"
    );


    /*
     * Navy 700
     */

    base.addColorStop(
      0.55,
      "rgba(63,130,190,0.82)"
    );


    /*
     * Navy 800
     */

    base.addColorStop(
      0.78,
      "rgba(31,95,150,0.88)"
    );


    /*
     * Dark edge
     */

    base.addColorStop(
      1,
      "rgba(23,74,120,0.96)"
    );


    ctx.beginPath();

    ctx.arc(
      cx,
      cy,
      R,
      0,
      Math.PI * 2
    );


    ctx.fillStyle =
      base;

    ctx.fill();


    /*
     * Soft outer rim
     */

    ctx.beginPath();

    ctx.arc(
      cx,
      cy,
      R - 0.5,
      0,
      Math.PI * 2
    );


    ctx.strokeStyle =
      "rgba(130,182,221,0.65)";

    ctx.lineWidth =
      1.2;

    ctx.stroke();

  }


  /*
   * ============================================================
   * GLOBE SHADOW
   * ============================================================
   */

  function drawLimbShadow(){

    var g =
      ctx.createRadialGradient(

        cx,
        cy,
        R * 0.48,

        cx,
        cy,
        R

      );


    g.addColorStop(
      0,
      "rgba(23,74,120,0)"
    );


    g.addColorStop(
      0.55,
      "rgba(23,74,120,0.06)"
    );


    g.addColorStop(
      0.82,
      "rgba(23,74,120,0.20)"
    );


    g.addColorStop(
      1,
      "rgba(23,74,120,0.58)"
    );


    ctx.beginPath();

    ctx.arc(
      cx,
      cy,
      R,
      0,
      Math.PI * 2
    );


    ctx.fillStyle =
      g;

    ctx.fill();

  }


  /*
   * ============================================================
   * GREAT CIRCLE ROUTES
   * ============================================================
   */

  function greatCircleArc(p1, p2, t){

    function toVec(xFlat, yFlat){

      var lonDeg =
        (xFlat / 1000) * 360 -
        180;


      var latDeg =
        80 -
        (yFlat / 460) * 160;


      var lonRad =
        lonDeg * Math.PI / 180;


      var latRad =
        latDeg * Math.PI / 180;


      return [

        Math.cos(latRad) *
        Math.sin(lonRad),

        Math.sin(latRad),

        Math.cos(latRad) *
        Math.cos(lonRad)

      ];

    }


    var v1 =
      toVec(
        p1[0],
        p1[1]
      );


    var v2 =
      toVec(
        p2[0],
        p2[1]
      );


    var dot =
      v1[0] * v2[0] +
      v1[1] * v2[1] +
      v1[2] * v2[2];


    dot =
      Math.max(
        -1,
        Math.min(1, dot)
      );


    var theta =
      Math.acos(dot) ||
      0.0001;


    var sinTheta =
      Math.sin(theta) ||
      0.0001;


    var a =
      Math.sin(
        (1 - t) * theta
      ) /
      sinTheta;


    var b =
      Math.sin(
        t * theta
      ) /
      sinTheta;


    var vx =
      a * v1[0] +
      b * v2[0];


    var vy =
      a * v1[1] +
      b * v2[1];


    var vz =
      a * v1[2] +
      b * v2[2];


    /*
     * Slight lift above globe
     */

    var lift =
      1 +
      0.16 *
      Math.sin(t * Math.PI);


    var rot =
      rotation;


    var rx =
      vx * Math.cos(rot) -
      vz * Math.sin(rot);


    var rz =
      vx * Math.sin(rot) +
      vz * Math.cos(rot);


    return {

      x:
        cx +
        R *
        rx *
        lift,

      y:
        cy -
        R *
        vy *
        lift,

      z:
        rz,

      visible:
        rz > 0.02

    };

  }


  /*
   * ============================================================
   * MAIN ANIMATION
   * ============================================================
   */

  function step(ts){

    ctx.clearRect(
      0,
      0,
      w,
      h
    );


    /*
     * ========================================================
     * GLOBE
     * ========================================================
     */

    drawSphereShading();


    /*
     * ========================================================
     * ROTATION
     * ========================================================
     */

    if (!reduceMotion){

      rotation +=
        0.0016;

    }


    /*
     * ========================================================
     * CONTINENT DOTS
     *
     * IMPORTANT:
     * KEEP THESE BLUE
     * ========================================================
     */

    for (
      var i = 0;
      i < dots.length;
      i++
    ){

      var p =
        project(
          dots[i][0],
          dots[i][1]
        );


      if (!p.visible)
        continue;


      /*
       * Dot transparency
       */

      var alpha =
        0.28 +
        p.z * 0.62;


      /*
       * Dot size
       */

      var r =
        1.05 +
        p.z * 0.95;


      ctx.beginPath();


      ctx.arc(
        p.x,
        p.y,
        r,
        0,
        Math.PI * 2
      );


      /*
       * ======================================================
       * ORIGINAL BLUE MAP DOT COLORS
       * ======================================================
       */

      var dotColor;


      if (p.z > 0.65){

        dotColor =
          "rgba(130,182,221," +
          alpha.toFixed(2) +
          ")";

      }

      else if (p.z > 0.35){

        dotColor =
          "rgba(90,155,208," +
          alpha.toFixed(2) +
          ")";

      }

      else {

        dotColor =
          "rgba(63,130,190," +
          alpha.toFixed(2) +
          ")";

      }


      ctx.fillStyle =
        dotColor;


      ctx.fill();

    }


    /*
     * ========================================================
     * FLIGHT / CONNECTION ROUTES
     *
     * GOLD
     * ========================================================
     */

    var segs =
      40;


    for (
      var r2 = 0;
      r2 < routes.length;
      r2++
    ){

      var hA =
        hubs[
          routes[r2][0]
        ];


      var hB =
        hubs[
          routes[r2][1]
        ];


      /*
       * Animated flow
       */

      var flowT =
        (
          (ts || 0) / 2600 +
          r2 * 0.35
        ) % 1;


      ctx.beginPath();


      var started =
        false;


      for (
        var s = 0;
        s <= segs;
        s++
      ){

        var tt =
          s / segs;


        var pt =
          greatCircleArc(
            hA,
            hB,
            tt
          );


        if (pt.visible){

          if (!started){

            ctx.moveTo(
              pt.x,
              pt.y
            );


            started =
              true;

          }

          else {

            ctx.lineTo(
              pt.x,
              pt.y
            );

          }

        }

        else {

          started =
            false;

        }

      }


      /*
       * ======================================================
       * GOLD DASH LINE
       * ======================================================
       */

      ctx.strokeStyle =
        "rgba(228,200,131,0.82)";


      ctx.lineWidth =
        1.15;


      ctx.setLineDash([
        5,
        6
      ]);


      /*
       * Animated dash movement
       */

      ctx.lineDashOffset =
        -flowT * 60;


      ctx.stroke();


      ctx.setLineDash([]);

    }


    /*
     * ========================================================
     * COUNTRY / HUB POINTS
     *
     * GOLD
     * ========================================================
     */

    for (
      var hI = 0;
      hI < hubs.length;
      hI++
    ){

      var hub =
        hubs[hI];


      var hp =
        project(
          hub[0],
          hub[1]
        );


      if (!hp.visible)
        continue;


      /*
       * ======================================================
       * PULSE ANIMATION
       * ======================================================
       */

      var pulse =
        (
          (ts || 0) / 1000 +
          hI * 0.5
        ) % 2;


      var pulseR =
        3 +
        pulse * 9;


      var pulseA =
        Math.max(
          0,
          0.60 -
          pulse * 0.30
        );


      /*
       * ======================================================
       * GOLD PULSE RING
       * ======================================================
       */

      ctx.beginPath();


      ctx.arc(
        hp.x,
        hp.y,
        pulseR,
        0,
        Math.PI * 2
      );


      ctx.strokeStyle =
        "rgba(228,200,131," +
        pulseA.toFixed(2) +
        ")";


      ctx.lineWidth =
        1.1;


      ctx.stroke();


      /*
       * ======================================================
       * MAIN GOLD COUNTRY POINT
       * ======================================================
       */

      ctx.beginPath();


      ctx.arc(
        hp.x,
        hp.y,
        2.7,
        0,
        Math.PI * 2
      );


      /*
       * Gold point
       */

      ctx.fillStyle =
        COLORS.gold;


      /*
       * Gold glow
       */

      ctx.shadowColor =
        "rgba(228,200,131,0.95)";


      ctx.shadowBlur =
        8;


      ctx.fill();


      ctx.shadowBlur =
        0;


      /*
       * ======================================================
       * COUNTRY / CITY NAME
       *
       * GOLD
       * ======================================================
       */

      if (
        showLabels &&
        hp.z > 0.35 &&
        R > 90
      ){

        ctx.font =
          "500 10px Inter, sans-serif";


        /*
         * GOLD LABEL
         */

        ctx.fillStyle =
          "rgba(228,200,131," +
          (
            0.55 +
            hp.z * 0.40
          ).toFixed(2) +
          ")";


        ctx.fillText(
          hub[2],
          hp.x + 7,
          hp.y - 6
        );

      }

    }


    /*
     * ========================================================
     * FINAL GLOBE SHADOW
     * ========================================================
     */

    drawLimbShadow();


    /*
     * ========================================================
     * CONTINUE ANIMATION
     * ========================================================
     */

    raf =
      requestAnimationFrame(
        step
      );

  }


  /*
   * ============================================================
   * START
   * ============================================================
   */

  function start(){

    size();

    step(0);


    if (reduceMotion){

      cancelAnimationFrame(
        raf
      );

    }

  }


  /*
   * ============================================================
   * RESIZE
   * ============================================================
   */

  var resizeTimer;


  window.addEventListener(
    "resize",
    function(){

      clearTimeout(
        resizeTimer
      );


      resizeTimer =
        setTimeout(
          function(){

            cancelAnimationFrame(
              raf
            );


            start();

          },
          200
        );

    }
  );


  /*
   * ============================================================
   * TAB VISIBILITY
   * ============================================================
   */

  document.addEventListener(
    "visibilitychange",
    function(){

      if (document.hidden){

        cancelAnimationFrame(
          raf
        );

      }

      else if (!reduceMotion){

        raf =
          requestAnimationFrame(
            step
          );

      }

    }
  );


  /*
   * ============================================================
   * START GLOBE
   * ============================================================
   */

  start();

}



  
  function initGlobes(){
    var canvases = document.querySelectorAll(".globe-canvas");
    canvases.forEach(function(c){
      createGlobe(c, { labels: c.getAttribute("data-globe") !== "sm" });
    });
  }

  /* ---------------- YouTube lite-embed facade ---------------- */
  function initYouTubeFacade(){
    var facades = document.querySelectorAll(".yt-facade[data-video-id]");
    if (!facades.length) return;

    facades.forEach(function(el){
      var id = el.getAttribute("data-video-id");
      var title = el.getAttribute("data-title") || "Video";
      var thumb = "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg";
      var watchUrl = "https://www.youtube.com/watch?v=" + id;

      el.innerHTML =
        '<img src="' + thumb + '" alt="' + title + '" loading="lazy">' +
        '<span class="yt-play-btn" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>' +
        '<a class="yt-fallback-link" href="' + watchUrl + '" target="_blank" rel="noopener" onclick="event.stopPropagation();">Watch on YouTube ' +
          '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
        '</a>';

      el.setAttribute("role", "button");
      el.setAttribute("aria-label", "Play video: " + title);
      el.setAttribute("tabindex", "0");

      function play(){
        var wrap = document.createElement("div");
        wrap.className = "yt-video-wrap";
        wrap.innerHTML =
          '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0" ' +
          'title="' + title + '" style="width:100%;height:100%;border:0;" ' +
          'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        el.replaceWith(wrap);
      }

      el.addEventListener("click", play);
      el.addEventListener("keydown", function(e){
        if (e.key === "Enter" || e.key === " "){
          e.preventDefault();
          play();
        }
      });
    });
  }

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", function(){
    buildHeader();
    buildFooter();
    initReveals();
    initCounters();
    initTestimonials();
    initContactForm();
    initHeroNetwork();
    initYouTubeFacade();
    initGlobes();
  });
})();


/* ==========================================================================
   WORLD MAP COUNTRY HOVER TOOLTIP
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {

  const mapWrapper =
    document.querySelector(".world-map-wrapper");

  const tooltip =
    document.querySelector(".wm-country-tooltip");

  const dots =
    document.querySelectorAll(".wm-dot");


  /* ------------------------------------------------------------------------
     Safety check
     ------------------------------------------------------------------------ */

  if (!mapWrapper || !tooltip || !dots.length) {
    return;
  }


  /* ------------------------------------------------------------------------
     Mouse Enter
     ------------------------------------------------------------------------ */

  dots.forEach(function (dot) {

    dot.addEventListener("mouseenter", function () {

      const country =
        dot.getAttribute("data-country");

      if (!country) {
        return;
      }


      /* Set country name */

      tooltip.textContent = country;


      /* Get positions */

      const dotRect =
        dot.getBoundingClientRect();

      const wrapperRect =
        mapWrapper.getBoundingClientRect();


      /* Calculate position relative to map */

      const x =
        dotRect.left -
        wrapperRect.left +
        (dotRect.width / 2);

      const y =
        dotRect.top -
        wrapperRect.top;


      /* Position tooltip */

      tooltip.style.left = `${x}px`;

      tooltip.style.top = `${y}px`;


      /* Show tooltip */

      tooltip.classList.add("visible");


      /* Make hovered point bigger */

      dot.style.r =
        (parseFloat(dot.getAttribute("r")) || 4) + 2;
    });


    /* ----------------------------------------------------------------------
       Mouse Leave
       ---------------------------------------------------------------------- */

    dot.addEventListener("mouseleave", function () {

      tooltip.classList.remove("visible");

      dot.style.r = "";
    });

  });


  /* ------------------------------------------------------------------------
     Hide tooltip if mouse leaves map
     ------------------------------------------------------------------------ */

  mapWrapper.addEventListener("mouseleave", function () {

    tooltip.classList.remove("visible");

  });

});
