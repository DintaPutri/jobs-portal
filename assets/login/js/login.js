
function changeAction() {
  let aksi = document.getElementById("aksi");
  let uname = document.getElementById("username").value;
  let pwd = document.getElementById("password-field").value;

  let user = JSON.parse(localStorage.getItem("orang")).username;
  let pw = JSON.parse(localStorage.getItem("orang")).password;

  if (uname == user && pwd == pw) {
      aksi.action = "index.html";
      document.getElementById("btn-satu").style.display = "none"
      document.getElementById("btn-dua").style.display = "none"
    } else {
      aksi.action = "Register.html";
    }
}
