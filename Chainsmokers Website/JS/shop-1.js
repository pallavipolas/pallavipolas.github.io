function openShop(evt, item) {
    var i, items, tablinks, navs;
    items = document.getElementsByClassName("items");
    // Remove all displays i.e. clear everything initially to focus on the selected one
    for (i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
    // fetch all tab links using the class name from the document
    tablinks = document.getElementsByClassName("tab-link");
    // clear all border to make them look inactive
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // fetch all navs and clear the focused nav with dark border
    navs = document.getElementsByClassName("navs");
    for (i = 0; i < navs.length; i++) {
      navs[i].className = navs[i].className.replace("nav-border-dark", "nav-border");
    }
    
  // document.getElementById("nav-img-" + item).src = "Assets/Icons/" + item + "-active.png";
   document.getElementById("nav-div-" + item).className 
   = document.getElementById("nav-div-" + item).className.replace("nav-border", "nav-border-dark");
   document.getElementById(item).style.display = "block";
   evt.currentTarget.className += " active";

   // fetch all icon headers and make them inactive
   icons = document.getElementsByClassName("icon-header");
   for (i = 0; i < icons.length; i++) {
    icons[i].className = "icon-header-inactive icon-header";
   }
   evt.currentTarget.className = "icon-header-active icon-header";
  }