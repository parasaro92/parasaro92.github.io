function gallery(){
  $('.p1').click(function(ev) { ev.preventDefault(); bootbox.alert('<h4 class="text-center">PSD to HTML</h4><hr><img class="img-responsive all p1" src="images/psd2html1.png"><br/><div class="col-md-offset-3 col-md-9"><a href="https://github.com/parasaro92/psd2html1" target="_blank"><button type="button" class="btn btn-success">Github URL</button></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://parasaro92.github.io/psd2html1/" target="_blank"><button type="button" class="btn btn-danger">Launch Demo</button></a></div>'); });
  $('.p2').click(function(ev) { ev.preventDefault(); bootbox.alert('<h4 class="text-center">PSD to HTML</h4><hr><img class="img-responsive" src="images/riding.png"><br/><div class="col-md-offset-3 col-md-9"><a href="https://github.com/parasaro92/machine-angels-club" target="_blank"><button type="button" class="btn btn-success">Github URL</button></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://parasaro92.github.io/machine-angels-club/" target="_blank"><button type="button" class="btn btn-danger">Launch Demo</button></a></div>'); });
  $('.c1').click(function(ev) { ev.preventDefault(); bootbox.alert('<h4 class="text-center">Calculator</h4><hr><img class="img-responsive" src="images/calci.png"><br/><p class="text-center">A simple Calculator app built using Javascript and jquery</p><div class="col-md-offset-3 col-md-9"><a href="https://github.com/parasaro92/calci" target="_blank"><button type="button" class="btn btn-success">Github URL</button></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://parasaro92.github.io/calci/" target="_blank"><button type="button" class="btn btn-danger">Launch Demo</button></a></div>'); });
  $('.g1').click(function(ev) { ev.preventDefault(); bootbox.alert('<h4 class="text-center">2048 game</h4><hr><img class="img-responsive" src="images/game.png"><br/><p class="text-center">An image matching game forked it and modified it.... </p><div class="col-md-offset-3 col-md-9"><a href="https://github.com/parasaro92/game_2048" target="_blank"><button type="button" class="btn btn-success">Github URL</button></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://parasaro92.github.io/game_2048/" target="_blank"><button type="button" class="btn btn-danger">Launch Demo</button></a></div>'); });
  $('.w1').click(function(ev) { ev.preventDefault(); bootbox.alert('<h4 class="text-center">Jekyll website</h4><hr><img class="img-responsive" src="images/tbbt.png"><br/><hr><p class="text-center">Made a website using jekyll site server </p><div class="col-md-offset-3 col-md-9"><a href="https://github.com/parasaro92/tbbt" target="_blank"><button type="button" class="btn btn-success">Github URL</button></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://parasaro92.github.io/tbbt/" target="_blank"><button type="button" class="btn btn-danger">Launch Demo</button></a></div>'); });
  $('.rails').click(function(ev) { ev.preventDefault(); bootbox.alert('<h4 class="text-center">Todo-App</h4><hr><img class="img-responsive" src="images/todo.png"><br/><hr><p class="text-center">Todo-App in which you can create new tasks, edit tasks and even shift your tasks toongoing to completion. It is a great app to track your progress and even make it easier solves </p><div class="col-md-offset-3 col-md-9"><a href="https://github.com/parasaro92/Todo-app" target="_blank"><button type="button" class="btn btn-success">Github URL</button></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://cryptic-earth-3671.herokuapp.com/" target="_blank"><button type="button" class="btn btn-danger">Launch Demo</button></a></div>'); });
  $('.rails1').click(function(ev) { ev.preventDefault(); bootbox.alert('<h4 class="text-center">Book-store</h4><hr><img class="img-responsive" src="images/book.png"><br/><hr><p class="text-center">This is Bookstore app built using Ruby on Rails.</p><div class="col-md-offset-3 col-md-9"><a href="https://github.com/parasaro92/Book-store" target="_blank"><button type="button" class="btn btn-success">Github URL</button></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://murmuring-tor-9444.herokuapp.com/" target="_blank"><button type="button" class="btn btn-danger">Launch Demo</button></a></div>'); });
  $('.rails2').click(function(ev) { ev.preventDefault(); bootbox.alert('<h4 class="text-center">Dostbook</h4><hr><img class="img-responsive" src="images/dost.png"><br/><hr><p class="text-center">This is cool coding social network. In this app, you can send friend request and accept friend requests. you can see what others are doing on your timeline. </p><div class="col-md-offset-3 col-md-9"><a href="https://github.com/parasaro92/Dostbook" target="_blank"><button type="button" class="btn btn-success">Github URL</button></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://desolate-river-8893.herokuapp.com/" target="_blank"><button type="button" class="btn btn-danger">Launch Demo</button></a></div>'); });
  $('.rails3').click(function(ev) { ev.preventDefault(); bootbox.alert('<h4 class="text-center">MedRek</h4><hr><img class="img-responsive" src="images/med1.jpg"><br/><hr><p class="text-center">Patient can track their medical records and upcoming appointments. Doctor can track their patient records and health issues. </p><div class="col-md-offset-3 col-md-9"><a href="https://github.com/CodeAstra/MedRec" target="_blank"><button type="button" class="btn btn-success">Github URL</button></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://medrek.herokuapp.com/" target="_blank"><button type="button" class="btn btn-danger">Launch Demo</button></a></div>'); });
}

$(document).ready(gallery);
$('document').ready(function() {
  $('#all').click(function() {
      $('.all').fadeIn(1000);
    });
    $('#html').click(function() {
      $('.all').fadeOut(1000);
      $('.p1').fadeIn(1000);
      $('.p2').fadeIn(1000);
      $('.g1').fadeIn(1000);
    });
    $('#js').click(function() {
      $('.all').fadeOut(1000);
      $('.c1').fadeIn(1000);
      $('.rails').fadeIn(1000);
    });
    $('#rails').click(function() {
      $('.all').fadeOut(1000);
      $('.rails').fadeIn(1000);
      $('.rails1').fadeIn(1000);
      $('.rails2').fadeIn(1000);
      $('.rails3').fadeIn(1000);
    });
});
