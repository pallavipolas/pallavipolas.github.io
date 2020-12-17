// for filters

$( document ).ready(
    function() {
    var $btns = $('.btn').click(function(){
        if(this.id == 'all') {
            $('#shop > div').show(); 
        }
        else {
            var $el = $('.' + this.id).show();
            $('#shop > div').not($el).hide(); 
        }

    });
});

function openShop(evt, item) {
    var icons = document.getElementsByClassName("icon-header-active");
    for (i = 0; i < icons.length; i++) {
        icons[i].className = "icon-header-inactive";
    }
    evt.currentTarget.className = "icon-header-active";
    var navs = document.getElementsByClassName("navs");
    for (i = 0; i < navs.length; i++) {
        navs[i].className = navs[i].className.replace("nav-border-dark", "nav-border");
    }
    document.getElementById("nav-" + item).className = document.getElementById("nav-" + item).className.replace("nav-border", "nav-border-dark");
  }

