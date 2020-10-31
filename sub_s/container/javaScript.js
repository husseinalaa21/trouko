var sug_s ,sug_q , sug,icon,main_menu;

sug_s = document.getElementById("sug_s");
sug_q = document.getElementById("sug_q");
sug = document.getElementById("sug");
icon = document.getElementById("icon");
main_menu = document.getElementById("main_menu")

icon.addEventListener("click", e =>{ 
    if (main_menu.style.display === "none") {
        main_menu.style.display = "block";
        icon.style.backgroundColor = "";
        icon.style.color = "  rgb(238, 238, 240)";
      } else {
        main_menu.style.display = "none";
        icon.style.backgroundColor = "";
        icon.style.color = "";
      }
 })