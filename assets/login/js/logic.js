document.getElementById("tes").addEventListener("click", () => {
  let uname = document.getElementById("username").value;
  let name = document.getElementById("nama").value;
  let pwd = document.getElementById("password-field").value;
  let jenkel = document.getElementById("jenis").value;
  let agama = document.getElementById("agama").value;
  let alamat = document.getElementById("alamat").value;

  const person = {
    username: uname,
    nama: name,
    password:pwd,
    gender:jenkel,
    religion:agama,
    address:alamat
  };
//   console.log(person);
localStorage.setItem('orang', JSON.stringify(person));
});




