var path = window.location.pathname;
var pagename = path.split("/").pop();
/*if (!pagename || 0 === pagename.length || !pagename || 0 === pagename.length)
{
  pagename="index.html"; 
}*/
document.getElementById("footerSite").innerHTML = '  \
<hr /> \
<div class="footer"> \
<p><a href="index.html">IAPR TC22 website</a>. \
You can contribute to the contents via a pull request to the <a href="https://github.com/TC22-Team/TC22">repository on Github</a>. </p>\
</div> \
';

