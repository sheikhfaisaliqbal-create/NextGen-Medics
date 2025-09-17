(function(){
  // Mobile nav toggle
  var btn = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if(btn && nav){
    btn.addEventListener('click', function(){
      var isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
  // Year in footer
  var y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }
})();
