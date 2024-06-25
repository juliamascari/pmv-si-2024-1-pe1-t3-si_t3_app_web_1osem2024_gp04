# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)



### Resultados Esperados

## Página de perfil

| Nº Teste  | Página  | Cenário de Teste                                                                          | Resultado                                                                                         |
|-----------|---------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| TP - 001  | Perfil  | Clicar no botão "Editar perfil" e tentar editar nome, e-mail, telefone e senha, depois clicar em "Salvar". | Os campos de edição são habilitados para modificação e os novos dados são armazenados localmente. |
| TP - 002  | Perfil  | Clicar no ícone de imagem para abrir o seletor de arquivos e selecionar uma imagem no dispositivo. | A imagem selecionada é exibida como a nova imagem de perfil após o upload.                        |
| TP - 003  | Perfil  | Realizar alguma edição nos dados do perfil e clicar no botão "Salvar".                      | Os dados editados são salvos localmente e uma mensagem de sucesso é exibida ao usuário.           |
| TP - 004  | Perfil  | Tentar salvar o perfil com um e-mail inválido (sem "@") e uma senha com menos de 8 caracteres. | Um alerta é exibido informando os erros nos campos de e-mail e senha.                             |
| TP - 005  | Perfil  | Navegar entre diferentes tamanhos de tela e dispositivos.                                   | O layout e a funcionalidade do perfil se adaptam corretamente a diferentes tamanhos de tela.      |
| TP - 006  | Perfil  | Tentar salvar o perfil com um e-mail sem o símbolo "@".                                     | Um alerta é exibido informando o erro no campo de e-mail.                                         |
| TP - 007  | Perfil  | Tentar salvar o perfil com uma senha com menos de 8 caracteres.                             | Um alerta é exibido informando o erro no campo de senha.                                          |
| TP - 008 | Login        | Usuário insere nome de usuário e senha corretos e clica em "Login".                                           | O login é bem-sucedido e o usuário é redirecionado para a página inicial.                          |
| TP - 009 | Login        | Usuário insere nome de usuário incorreto e senha correta e clica em "Login".                                  | É exibida uma mensagem de erro informando que o nome de usuário está incorreto.                    |
| TP - 010 | Login        | Usuário insere nome de usuário correto e senha incorreta e clica em "Login".                                  | É exibida uma mensagem de erro informando que a senha está incorreta.                              |
| TP - 011 | Login        | Usuário deixa os campos de nome de usuário e senha em branco e clica em "Login".                              | É exibida uma mensagem de erro informando que os campos são obrigatórios.                          |
| TP - 012 | Login        | Usuário clica no botão "Cadastrar" na página de login.                                                        | O usuário é redirecionado para a página de cadastro.                                               |
| TP - 013 | Cadastro     | Usuário preenche todos os campos corretamente e clica em "Cadastrar".                                         | O cadastro é bem-sucedido e o usuário é redirecionado para a página de login.                      |
| TP - 014 | Cadastro     | Usuário deixa o campo "Nome" em branco e tenta se cadastrar.                                                  | É exibida uma mensagem de erro informando que o campo "Nome" é obrigatório.                        |
| TP - 015 | Cadastro     | Usuário deixa o campo "E-mail" em branco e tenta se cadastrar.                                                | É exibida uma mensagem de erro informando que o campo "E-mail" é obrigatório.                      |
| TP - 016 | Cadastro     | Usuário deixa o campo "Celular" em branco e tenta se cadastrar.                                               | É exibida uma mensagem de erro informando que o campo "Celular" é obrigatório.                     |
| TP - 017 | Cadastro     | Usuário deixa o campo "Senha" em branco e tenta se cadastrar.                                                 | É exibida uma mensagem de erro informando que o campo "Senha" é obrigatório.                       |
| TP - 018 | Cadastro     | Usuário insere um e-mail em formato inválido e tenta se cadastrar.                                            | É exibida uma mensagem de erro informando que o e-mail inserido é inválido.                        |
| TP - 019 | Agendamento  | Usuário seleciona uma cidade, prédio, andar, dia e turno corretamente.                                        | O agendamento é bem-sucedido e uma mensagem de confirmação é exibida.                              |
| TP - 020 | Agendamento  | Usuário não seleciona uma cidade e tenta agendar.                                                             | É exibida uma mensagem de erro informando que a cidade é obrigatória.                              |
| TP - 021 | Agendamento  | Usuário não seleciona um prédio e tenta agendar.                                                              | É exibida uma mensagem de erro informando que o prédio é obrigatório.                              |
| TP - 022 | Agendamento  | Usuário não seleciona um andar e tenta agendar.                                                               | É exibida uma mensagem de erro informando que o andar é obrigatório.                               |
| TP - 023 | Agendamento  | Usuário não seleciona um dia e tenta agendar.                                                                 | É exibida uma mensagem de erro informando que o dia é obrigatório.                                 |
| TP - 024 | Agendamento  | Usuário não seleciona um turno e tenta agendar.                                                               | É exibida uma mensagem de erro informando que o turno é obrigatório.                               |
| TP - 025 | Reservas     | Usuário aplica filtros de cidade, prédio, andar, dia e turno corretamente.                                    | As reservas filtradas são exibidas corretamente de acordo com os critérios aplicados.              |
| TP - 026 | Reservas     | Usuário aplica filtro apenas por cidade.                                                                      | As reservas da cidade selecionada são exibidas.                                                    |
| TP - 027 | Reservas     | Usuário aplica filtro por cidade e prédio.                                                                    | As reservas do prédio na cidade selecionada são exibidas.                                          |
| TP - 028 | Reservas     | Usuário aplica filtro por cidade, prédio e andar.                                                             | As reservas do andar no prédio e cidade selecionados são exibidas.                                 |
| TP - 029 | Reservas     | Usuário aplica filtro por cidade, prédio, andar e dia.                                                        | As reservas do dia no andar, prédio e cidade selecionados são exibidas.                            |
| TP - 030 | Reservas     | Usuário aplica filtro por cidade, prédio, andar, dia e turno.                                                 | As reservas do turno no dia, andar, prédio e cidade selecionados são exibidas.                     |
| TP - 031 | Reservas     | Usuário aplica filtro sem selecionar nenhum critério.                                                         | Todas as reservas são exibidas.                                                                    |

### Ideias de Melhorias para a Página de Perfil

1. **Validação em Tempo Real:**
   - Implementar validação em tempo real para os campos de e-mail e senha, fornecendo feedback imediato sobre erros.
   - Exibir mensagens de erro próximas aos campos correspondentes, com dicas específicas para corrigir os erros.

2. **Confirmação de Senha:**
   - Adicionar um campo de confirmação de senha para garantir que o usuário não cometa erros de digitação.
   - Nova página para alteração de senha.

3. **Upload de Imagem:**
   - Permitir a recorte e ajuste da imagem de perfil após o upload, para que o usuário possa selecionar a melhor parte da imagem.
   - Adicionar uma pré-visualização da imagem antes de confirmar o upload.

4. **Segurança:**
   - Implementar armazenamento seguro para senhas, utilizando hash e criptografia.
   - Adicionar um segundo fator de autenticação (2FA) para aumentar a segurança da conta.

5. **Responsividade:**
   - Melhorar a adaptação do layout para dispositivos móveis e telas de diferentes tamanhos.
   - Garantir que todos os botões e campos sejam facilmente utilizáveis em dispositivos de toque.

6. **Feedback de Ações:**
   - Exibir mensagens de sucesso ou erro ao salvar os dados do perfil, com informações claras sobre o que foi atualizado ou o que deu errado.
   - Adicionar indicadores de carregamento para operações que possam levar mais tempo.

### Ideias de Melhorias para a Página de Agendamento

1. **Validação em Tempo Real:**
   - Implementar validação em tempo real para os campos de seleção de cidade, prédio, andar, dia e turno, fornecendo feedback imediato sobre erros.
   - Exibir mensagens de erro próximas aos campos correspondentes, com dicas específicas para corrigir os erros.

2. **Confirmação de Seleção:**
   - Adicionar uma etapa de confirmação de agendamento para garantir que o usuário revisou todas as seleções antes de confirmar.

### Ideias de Melhorias para a Página de Reservas

1. **Validação em Tempo Real:**
   - Implementar validação em tempo real para os campos de filtros de cidade, prédio, andar, dia e turno, fornecendo feedback imediato sobre erros.
   - Exibir mensagens de erro próximas aos campos correspondentes, com dicas específicas para corrigir os erros.

2. **Confirmação de Seleção:**
   - Adicionar uma etapa de confirmação de reserva para garantir que o usuário revisou todas as seleções antes de confirmar.

### Ideias de Melhorias para a Página de Cadastro

1. **Validação em Tempo Real:**
   - Implementar validação em tempo real para os campos de nome, e-mail, celular e senha, fornecendo feedback imediato sobre erros.
   - Exibir mensagens de erro próximas aos campos correspondentes, com dicas específicas para corrigir os erros.

2. **Confirmação de Senha:**
   - Adicionar um campo de confirmação de senha para garantir que o usuário não cometa erros de digitação.
   - Criar uma nova página ou modal para permitir que o usuário altere sua senha de forma segura e eficiente durante o cadastro.

 ### Ideias de Melhorias para a Página de Login

1. **Validação em Tempo Real:**
   - Implementar validação em tempo real para os campos de nome, e-mail, celular e senha, fornecendo feedback imediato sobre erros.
   - Exibir mensagens de erro próximas aos campos correspondentes, com dicas específicas para corrigir os erros.
   - Campo para recuperar senha.



