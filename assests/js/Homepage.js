
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block"){
            dropdownContent.style.display = "none"
        } else {
            dropdownContent.style.display = "block";
        }
        
    });
}

function openPage(pageName,elmnt,color) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
    document.getElementById('logo').style.display = "none";
  }
  
  
  document.getElementById("defaultOpen").click();