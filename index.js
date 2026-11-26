document.getElementById("formPembicara")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let whatsapp = document.getElementById("whatsapp").value;
    let keahlian = document.getElementById("keahlian").value;
    let foto = document.getElementById("foto").files[0];

    let data = {
        nama: nama,
        email: email,
        whatsapp: whatsapp,
        keahlian: keahlian
    };

    let pembaca = new FileReader();

    pembaca.onload = function() {

        data.foto = pembaca.result;

        sessionStorage.setItem(
            "dataPembicara",
            JSON.stringify(data)
        );

        window.location.href = "index3.html";

    };

    pembaca.readAsDataURL(foto);

});
