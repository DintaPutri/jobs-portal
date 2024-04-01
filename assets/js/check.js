if(JSON.parse(localStorage.getItem("orang")).username!= ""){
    document.getElementById("btn-satu").style.display = "none";
    document.getElementById("btn-dua").style.display = "none";
};


function logout(){
    localStorage.clear();
}