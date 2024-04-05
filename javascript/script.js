document.getElementById("judul").innerHTML= "javascript";
let doc=document.getElementById("deskripsi");
doc.innerHTML="Formulir";
let nama=document.getElementById("nama");
let btnSimpan=document.getElementById("simpan");
let data = [];
btnSimpan.addEventListener("click", function(){
    console.log("tombol ditekan");
    data.push(nama.value);
    console.log(data);


    document.getElementById("list").innerHTML=""; //clear element list
    for(const [index, value] of data.entries()){
        console.log(value);
        document.getElementById("list").innerHTML += `<li>${value}</li>`
    }
})
