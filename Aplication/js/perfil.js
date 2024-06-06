

document.addEventListener("DOMContentLoaded", function() {
  
    const buttoneditar= document.querySelector("#editar");
    const inputname= document.querySelector("#nome");
    const inputemail= document.querySelector("#email");
    const inputtel= document.querySelector("#telefone");
    const inputpassword= document.querySelector("#senha");
    const inputupload = document.querySelector("#upload");
    const buttonsalvar = document.querySelector("#salvar");


    buttoneditar.addEventListener("click", function() {
        inputname.disabled = false;
        inputemail.disabled = false;
        inputtel.disabled = false;
        inputpassword.disabled = false;
        buttonsalvar.disabled = false;
        inputupload.disabled = false;

        });


        const uploadInput = document.getElementById('upload');
    

        uploadInput.addEventListener('change', () => {
            const fileName = uploadInput.files[0]?.name || 'Nenhum ficheiro selecionado';
            uploadLabel.textContent = fileName;
        });
});



