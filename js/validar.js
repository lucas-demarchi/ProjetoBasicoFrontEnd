// Validação de Campos do Formulário de Login!
function ValidarCamposFormLogin(){
    if(document.formLogin.email.value.trim() == ""){
        alert("Preencher o campo obrigatório E-MAIL!");
        document.formLogin.email.focus();
        return false;
    }

    if(document.formLogin.senha.value.trim() == ""){
        alert("Preencher o campo obrigatório SENHA!")
        document.formLogin.senha.focus();
        return false;
    }
}

// Validação de Campos do Formulário de Cadastro!
function ValidarCamposFormCadastro(){
    if(document.formCadastro.nome.value.trim() == ""){
        alert("Preencher o campo obrigatório NOME!");
        document.formCadastro.nome.focus();
        return false;
    }

    if(document.formCadastro.email.value.trim() == ""){
        alert("Preencher o campo obrigatório E-MAIL!")
        document.formCadastro.email.focus();
        return false; 
    }

    if(document.formCadastro.tele.value.trim() == ""){
        alert("Preencher o campo obrigatório TELEFONE!")
        document.formCadastro.tele.focus();
        return false;
    }

    if(document.formCadastro.data.value.trim() == ""){
        alert("Favor selecionar a DATA!")
        document.formCadastro.data.focus();
        return false;
    }
    
    if(document.formCadastro.curso.value.trim() == ""){
        alert("Favor selecionar o seu CURSO!")
        document.formCadastro.curso.focus();
        return false;
    }

    if(document.formCadastro.senha.value.trim() == ""){
        alert("Preencher o campo obrigatório SENHA!")
        document.formCadastro.senha.focus();
        return false;
    }

    if(document.formCadastro.repSenha.value.trim() == ""){
        alert("Favor preencher o campo obrigatório REPETIR SENHA!")
        document.formCadastro.repSenha.focus();
        return false;
    }else if(document.formCadastro.repSenha.value.trim() != document.formCadastro.senha.value){
        alert("O campo SENHA e REPETIR SENHA devem ser iguais!");
        document.formCadastro.repSenha.focus();
        return false;
    }

    // Impede o redirecionamento e impede a limpeza dos campos
    alert("Cadastro realizado com sucesso!");
    return false; // impede o redirecionamento para formulario.html
}