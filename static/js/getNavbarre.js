fetch("/navbarre") 
.then(response => response.text())
.then(data => {
  const navBarContainer = document.getElementById('navbarre');
  navBarContainer.innerHTML = data;
});
