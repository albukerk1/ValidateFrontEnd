document.getElementById('contactForm').addEventListener('submit', function(event) {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    // Validação do Nome
    if (!validarNome(nome)) {
        alert('Por favor, insira um nome válido (sem números e até 100 caracteres).');
        event.preventDefault();
        return;
    }

    // Validação do Email
    if (!validarEmail(email)) {
        alert('Por favor, insira um email válido.');
        event.preventDefault();
        return;
    }

    // Validação do Telefone
    if (!validarTelefone(telefone)) {
        alert('Por favor, insira um número de telefone válido (formato: (XX) XXXX-XXXX ou (XX) XXXXX-XXXX).');
        event.preventDefault();
        return;
    }
});
   // Função que especifica que o campo aceita até 100 caracteres e não aceita números
function validarNome(nome) {
    return /^[^\d]{1,100}$/.test(nome);
}
  
  // Função que especifica os caracteres que validam o email
function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarTelefone(telefone) {
    return /^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone);
}

document.getElementById('telefone').addEventListener('input', function(event) {
    var telefone = event.target.value;

    // Remove qualquer caractere que não seja um dígito
    telefone = telefone.replace(/\D/g, '');

    // Formata o número de telefone
    var formataTelefone = '(' + telefone.substring(0, 2) + ') ' + telefone.substring(2, 7);

    // Verifica se há mais de 7 dígitos para adicionar o hífen
    if (telefone.length > 7) {
        formataTelefone += '-' + telefone.substring(7);
    }

    // Atualiza o valor do campo de telefone
    event.target.value = formataTelefone;
});
