  
   function search_managment() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    if (input == "") {
      alert("Please enter a search term.");
      return;
    }
    let x = document.getElementsByClassName('managment');
    let found = false;
    for (let i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "list-item";
        x[i].addEventListener('click', function () {
          let animalName = this.innerHTML.toLowerCase().trim();
          window.location.href = animalName + '.html';
        });
        found = true;
      }
    }
    if (!found) {
      alert("The searched term was not found in the site.");
    }
  }

  function search_managment() {
	var input = document.getElementById("searchbar").value.toLowerCase();
	var links = document.querySelectorAll(".managment a");
	for (var i = 0; i < links.length; i++) {
	  if (links[i].textContent.toLowerCase().indexOf(input) !== -1) {
		window.location.href = links[i].href;
		return;
	  }
	}
  }
  