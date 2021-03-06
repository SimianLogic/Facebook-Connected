/////   AJAX    /////
////
function initAjax() {
  $('a.remote').remoteSubmit();
  initNotices();
  initSpinner();
}

/////
// Submit remote URLs via AJAX
$.fn.remoteSubmit = function(){
  return $(this).live('click', function(e){
    var $this = $(this);
    $.ajax({  type      : ($this.attr('rel') || 'GET'), 
              url       : $this.attr('href'), 
              dataType  : 'script' });
    return false;
  });
};

/////
// work with Rails respond_to block and forgery protection
$.ajaxSetup({
	data: { authenticity_token : AUTH_TOKEN }, 
	'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript"); hideNotices();} 
});

////
// Setup basic flash notice functions
function initNotices(){
  $('.notice:not(:has(a))').
    attr('title', 'Click to hide').
    live('click', function(){$(this).fadesOut();});
}
/////
// Show new notices
$.fn.notify = function(text) {
  return $(this).stop().fadeTo(1,0, function(){
    $(this).html(text).show().fadeTo('fast',1);
  });
}
////
// Clear flash notice from page
function hideNotices(){
  $('.notice').fadesOut();
}



////
// setup spinner for AJAX requests
function initSpinner() {
  $('#spinner')
    .ajaxSend(function(){$(this).fadesIn()})
    .ajaxComplete(function(){$(this).fadesOut()});
}
