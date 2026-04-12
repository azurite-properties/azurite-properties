/* Shared nav behaviour */
(function(){
  var nav = document.getElementById('nav');
  if (nav) window.addEventListener('scroll', function(){ nav.classList.toggle('scrolled', window.scrollY > 70); }, {passive:true});
  window.openMobile = function(){ var m=document.getElementById('mobile-nav'); if(m){m.classList.add('open');document.body.style.overflow='hidden';} };
  window.closeMobile = function(){ var m=document.getElementById('mobile-nav'); if(m){m.classList.remove('open');document.body.style.overflow='';} };
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') window.closeMobile(); });
  /* dropdown */
  document.querySelectorAll('.nav-dropdown-toggle').forEach(function(btn){
    btn.addEventListener('click', function(){
      var dd = btn.closest('.nav-dropdown');
      document.querySelectorAll('.nav-dropdown').forEach(function(d){ if(d!==dd) d.classList.remove('open'); });
      dd.classList.toggle('open');
    });
  });
  document.addEventListener('click', function(e){
    if(!e.target.closest('.nav-dropdown')) document.querySelectorAll('.nav-dropdown').forEach(function(d){d.classList.remove('open');});
  });
  /* copyright year */
  var cy = document.getElementById('copy-year');
  if(cy) cy.textContent = new Date().getFullYear();
  /* emails */
  (function(){
    var e1='info\u0040azuriteproperties\u002eco\u002eke';
    var e2='sales\u0040azuriteproperties\u002eco\u002eke';
    ['email-main','email-sales','email-footer'].forEach(function(id){
      var el=document.getElementById(id);
      if(el){ el.href='mailto:'+(id==='email-sales'?e2:e1); el.textContent=(id==='email-sales'?e2:e1); }
    });
    var f=document.getElementById('contact-form');
    if(f) f.action='mailto:'+e1;
  })();
})();
