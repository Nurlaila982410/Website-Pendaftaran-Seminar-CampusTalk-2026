
        function kirimEvaluasi(event) {
            event.preventDefault();

            let form = event.target;

            document.getElementById("nama").innerHTML = form.nama.value;
            document.getElementById("nilai").innerHTML = form.penilaian.value;
            document.getElementById("hasilPembicara").innerHTML = form.pembicara.value;
            document.getElementById("hasilSaran").innerHTML = form.saran.value;

            document.getElementById("formulir").style.display = "none";
            document.getElementById("hasil").style.display = "block";}