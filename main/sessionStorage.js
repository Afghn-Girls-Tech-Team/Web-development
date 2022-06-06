sessionStorage.setItem("uni" ,"Kandahr university");
sessionStorage.setItem("lfaculty" ,"CS")
sessionStorage.setItem("subject", "Networking")
var user= sessionStorage.getItem("uni");

document.getElementById("idOf").innerHTML="University:"+user;
//sessionStorage.removeItem("faculty");
//sessionStorage.clear();
//cookies
