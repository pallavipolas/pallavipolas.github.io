function openGrid(evt, mediaType) {
    var enabled, disabled;
    if (evt.currentTarget.className == 'icon-header-active') 
    {
        return;
    }
    if(mediaType == 'photos')
    {
        enabled = 'photos';
        disabled = 'videos';
    } else 
    {
        enabled = 'videos';
        disabled = 'photos';
    }
    nav_div1 = document.getElementById("nav-div-" + enabled);
    nav_div1.className = nav_div1.className.replace("nav-border", "nav-border-dark");
    document.getElementById(enabled).style.visibility = "visible";
    document.getElementById(disabled).style.visibility = "hidden";
    document.getElementById(enabled).style.display = "block";
    document.getElementById(disabled).style.display = "none";

    nav_div2 = document.getElementById("nav-div-" + disabled);
    nav_div2.className = nav_div2.className.replace("-dark", "");

    document.getElementById("icon-" + enabled).className = "icon-header-active";
    document.getElementById("icon-" + disabled).className = "icon-header-inactive";
  }