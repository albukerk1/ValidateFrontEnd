# ValidateFrontEnd
Atividade prática para treinar validação de campos de formulários em Front-End.

## Explicações das Expressões Regulares e Funcionamento do Código

### HTML:
O código HTML "index.html" define um formulário para contato com três campos: Nome, Email e Telefone. Cada campo possui atributos como id, name e required para identificação, e o campo de telefone também possui um atributo pattern que especifica o padrão brasileiro para números de telefone. Este padrão será usado para validar o número de telefone do usuário.

### CSS:
O código CSS estiliza o formulário, define fundo, fonte, bordas arredondadas e outras propriedades visuais para criar uma interface de usuário atraente e responsiva.

### JavaScript:
1. **Validação do Formulário:**
   - Quando o formulário é submetido, o evento de submissão é capturado e uma função de callback é acionada para validar os campos do formulário (nome, email e telefone).
   - Cada campo é verificado utilizando expressões regulares:
     - `validarNome(nome)`: Verifica se o nome inserido contém até 100 caracteres e não contém números.
     - `validarEmail(email)`: Verifica se o email inserido possui um formato válido.
     - `validarTelefone(telefone)`: Verifica se o telefone inserido está no formato padrão brasileiro.
   - Se algum dos campos não passar na validação, uma mensagem de alerta é exibida e o evento de submissão é cancelado.

2. **Formatação do Número de Telefone em Tempo Real:**
   - Um evento de entrada (`input`) é atribuído ao campo de telefone.
   - Sempre que o usuário digitar no campo de telefone, uma função de callback é acionada.
   - Esta função remove todos os caracteres não numéricos do valor do campo de telefone e formata o número adicionando parênteses em torno dos dois primeiros dígitos, seguido de um espaço, e depois os números restantes.
   - O valor atualizado é então atribuído de volta ao campo de telefone, fornecendo a formatação desejada em tempo real.

### Comentários Adicionais no Código em JavaScript:
- Os comentários explicam o propósito de cada parte do código, como a validação de nome, email e telefone, bem como a formatação do número de telefone em tempo real.
