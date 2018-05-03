
// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

var $$ = Dom7;


// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  routes: routes,
   
});



var name = localStorage.getItem("name");
if(name != null)
{
    var popup = app.popup.create({
  content: '<div class="popup my-popup"><div class="view"><div class="page"><div class="navbar"><div class="navbar-inner"><div class="title">Popup</div> <div class="right"><!-- Link to close popup --> <a class="link popup-close">Close</a></div></div> </div><div class="page-content"> Welcome back  ' + name + ' </div> </div> </div> ...</div>',
animate: true,
})
    setTimeout(function(){ popup.open(); },1000);
}








