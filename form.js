function tampilData(event) {
    event.preventDefault();

    var data = new FormData(event.target);

    document.getElementById("nama").innerHTML = data.get("nama");
    document.getElementById("nim").innerHTML = data.get("nim");
    document.getElementById("prodi").innerHTML = data.get("prodi");
    document.getElementById("fakultas").innerHTML = data.get("fakultas");
    document.getElementById("jenis_kelamin").innerHTML = data.get("jenis_kelamin");
    document.getElementById("email").innerHTML = data.get("email");
    document.getElementById("no_hp").innerHTML = data.get("no_hp");
    document.getElementById("alasan").innerHTML = data.get("alasan");

    document.getElementById("formulir").style.display = "none";
    document.getElementById("hasil").style.display = "block";}