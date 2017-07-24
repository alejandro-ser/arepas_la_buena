$('.btn-ver-menu').click(function(event) {
  $('.pagina-izquierda').addClass('pagina-izquierda2');
  
  setTimeout(function(){
    $('.pagina-derecha').addClass('pagina-derecha2');
  }, 300);
});


$('.btn-cerrar').click(function(event) {
  $('.pagina-derecha').removeClass('pagina-derecha2');

  setTimeout(function(){
    $('.pagina-izquierda').removeClass('pagina-izquierda2');
  }, 300);
});
