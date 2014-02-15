(function($) {
  'use strict';

  /* 2. Incrementer & decrementer 
  -----------------------------------------------------------------------------------------
  */

  $('[aria-controls="number"]').on('click', function() {
    var button = $(this);
    $('#number').val(function(i, oldval) {
      return button.is('[title*="add"]') ? 
        parseInt(oldval, 10) + 10 : 
        parseInt(oldval, 10) - 10;
    });
  });


  // Modal Extension
  // ===============================
  $('#myModal2 .modal-content').attr( {'role' : 'document'});
  var modalhide = $.fn.modal.Constructor.prototype.hide;
  $.fn.modal.Constructor.prototype.hide = function(){
    var modalOpener = this.$element.parent().find('[data-target="#' + this.$element.attr('id') + '"]');
    modalhide.apply(this, arguments);
    modalOpener.focus();
  };


  // Forms
  // ===============================
  var $form = $('#signup');

  $form.submit(function() {
    var errors = $form.find('.errors').html('');
    if ($('#name').val() === '') {
      errors.append('<p>Please enter your first name.</p>');
    }
    if ($('#email').val() === '') {
      errors.append('<p>Please enter your email address.</p>');
    }
    return false;
  });

  
  // Collapse Extension
  // ===============================
  $('.collapsible h3').each(function() {
    
    var $this = $(this);

    // create unique id for a11y relationship
    
    var id = 'collapsible-' + $this.index();

    // wrap the content and make it focusable

    $this.nextUntil('h3').wrapAll('<div id="'+ id +'" aria-hidden="true" tabindex="0">');
    var panel = $this.next();

    // Add the button inside the <h2> so both the heading and button semanics are read
    
    $this.wrapInner('<button aria-expanded="false" aria-controls="'+ id +'">');
    var button = $this.children('button');

    // Toggle the state properties
    
    button.on('click', function() {
      var state = $(this).attr('aria-expanded') === 'false' ? true : false;
      $(this).attr('aria-expanded', state);
      panel.attr('aria-hidden', !state);
      panel.focus();
    });

  });


})(window.jQuery);