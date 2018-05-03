var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  // About page
  {
    path: '/about/',
    url: 'pages/about.html',
    name: 'about',
  },
  // buttons page 
  {
    path: '/buttons/',
    url:'pages/buttons.html',
    name: 'buttons',
  },
  {
    path: '/game/',
    url:'pages/aboutMI2.html',
    name: 'game',
  },
  {
    path: '/details/',
    url:'pages/details.html',
    name: 'details',
        
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];

function submit()
{
    // create vars
    var name = document.getElementById("name").value;
    var birthday = document.getElementById("birthdate").value;
   
    localStorage.setItem("name", name);
   
}
