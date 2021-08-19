import AOS from 'aos';
import ScrollMagic from 'scrollmagic';


(function($) {

  // Menu

  $('#full-page-menu a, #full-page-menu button').each(function() {
    $(this).attr('tabindex', '-1')
  })

  function openMenu() {
    $('#full-page-menu').removeClass('collapsed');
    $('#full-page-menu').attr('aria-hidden', 'false')
    $('body').addClass('freeze');
    $('#full-page-menu a, #full-page-menu button').each(function() {
      $(this).attr('tabindex', '0')
    })
  }

  function closeMenu() {
    $('#full-page-menu').addClass('collapsed');
    $('#full-page-menu').attr('aria-hidden', 'true')
    $('body').removeClass('freeze');
    $('#full-page-menu a, #full-page-menu button').each(function() {
      $(this).attr('tabindex', '-1')
    })
    $('main').focus();
  }

  $('nav .menu').on('click', function() {
    openMenu();
  })

  $('#close-menu').on('click', function() {
    closeMenu();
  })

  $('#full-page-menu a').click(closeMenu);

  // Scroll Magic

  var controller = new ScrollMagic.Controller();

  $('.subtitle').each(function(index, subtitle) {
    new ScrollMagic.Scene({
      triggerElement: subtitle,
      triggerHook: 0.6
    })
    .setClassToggle(subtitle, "active")
    .addTo(controller);
  });

}(jQuery))

// AOS

AOS.init({ offset: 150 });
