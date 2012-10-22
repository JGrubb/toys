jQuery(document).ready(function($){
  $('a').click(function(e){
    e.preventDefault();
    $('.modaltastic').modal({
      opacity : 70,
      closeHTML : 'Close',
      overlayClose :  true,
    });
  });
});
