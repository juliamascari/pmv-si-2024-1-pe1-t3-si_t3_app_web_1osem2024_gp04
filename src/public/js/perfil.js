document.addEventListener("DOMContentLoaded", function () {
    const inputName = document.querySelector("#nome");
    const inputEmail = document.querySelector("#email");
    const inputTel = document.querySelector("#telefone");
    const inputPassword = document.querySelector("#senha");
    const buttonEditar = document.querySelector("#editar");
    const buttonSalvar = document.querySelector("#salvar");
    const buttonDelete = document.querySelector("#delete");

    let originalEmail = '';
    let originalPassword = '';

    function carregarDadosUsuario() {
        const dadosUsuarioJSON = localStorage.getItem('dadosUsuario');
        if (dadosUsuarioJSON) {
            const dadosUsuario = JSON.parse(dadosUsuarioJSON);
            inputName.value = dadosUsuario.name || 'nome';
            inputEmail.value = dadosUsuario.email || '';
            inputTel.value = dadosUsuario.cel || ''; // ajuste para telefone/celular
            inputPassword.value = dadosUsuario.password || ''; // carregar senha
            originalEmail = dadosUsuario.email;
            originalPassword = dadosUsuario.password;
        }
    }

    carregarDadosUsuario();

    buttonEditar.addEventListener("click", function () {
        inputName.disabled = false;
        inputEmail.disabled = false;
        inputTel.disabled = false;
        inputPassword.disabled = false;
        buttonSalvar.style.display = 'inline-block';
        buttonDelete.style.display = 'inline-block';
    });

    document.getElementById('upload').addEventListener('change', function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            localStorage.setItem('imagemSalva', e.target.result);
            document.getElementById('picture_img').src = e.target.result;
        };

        reader.readAsDataURL(file);
    });

    const imagemSalva = localStorage.getItem('imagemSalva');
    if (imagemSalva) {
        document.getElementById('picture_img').src = imagemSalva;
    }

    buttonSalvar.addEventListener("click", function (event) {
        event.preventDefault();

        if (!inputEmail.value.includes('@')) {
            alert("Por favor, insira um email válido.");
            return;
        }

        if (inputPassword.value.length < 8) {
            alert("Por favor, insira uma senha válida com pelo menos 8 caracteres.");
            return;
        }

        const dadosUsuario = {
            name: inputName.value,
            email: inputEmail.value,
            cel: inputTel.value, // ajuste para telefone/celular
            password: inputPassword.value // adicionando senha
        };

        localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));

        // Atualiza a lista de usuários
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.map(user => 
            user.email === originalEmail ? dadosUsuario : user
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        alert("Dados salvos com sucesso!");

        inputName.disabled = true;
        inputEmail.disabled = true;
        inputTel.disabled = true;
        inputPassword.disabled = true;
        buttonSalvar.disabled = true;
    });

    function formatPhoneNumber(value) {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, "");
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 3) return phoneNumber;
        if (phoneNumberLength < 8) {
            return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
        }
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
    }

    function handlePhoneInput(event) {
        event.target.value = formatPhoneNumber(event.target.value);
    }

    inputTel.addEventListener("input", handlePhoneInput);



    // Função para deletar dados do usuário
    buttonDelete.addEventListener("click", function () {
        // Remove dados do usuário atual
        localStorage.removeItem('dadosUsuario');
        
        // Remove imagem salva
        localStorage.removeItem('imagemSalva');

        // Atualiza a lista de usuários
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.filter(user => user.email !== originalEmail);
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        alert("Usuário deletado com sucesso!");

        // Limpa os campos
        inputName.value = '';
        inputEmail.value = '';
        inputTel.value = '';
        inputPassword.value = '';

        inputName.disabled = true;
        inputEmail.disabled = true;
        inputTel.disabled = true;
        inputPassword.disabled = true;
        buttonSalvar.style.display = 'none';
        buttonDelete.style.display = 'none';

        window.location.href = 'login.html';
      
    });
    
});
