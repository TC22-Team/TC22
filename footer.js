var path = window.location.pathname;
var pagename = path.split("/").pop();
/*if (!pagename || 0 === pagename.length || !pagename || 0 === pagename.length)
{
  pagename="index.html"; 
}*/
document.getElementById("footerSite").innerHTML = '  \
<hr /> \
<div class="footer"> \
<p><a href="index.html">IAPR TC22 webpage</a> \
You can contribute to the edition through the <a href="https://github.com/TC22-Team/TC22">Github source page</a> and directly edit this page <a href="https://github.com/TC22-Team/TC22/blob/main/'+pagename+'">here</a>. </p>\
</div> \
';

