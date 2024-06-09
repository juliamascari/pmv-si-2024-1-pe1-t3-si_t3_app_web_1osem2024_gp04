# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


### Resultados Esperados

| Nº Teste | Página | Cenário de Teste | Resultado |
|----------|----------|------------------------------------------------|---------------------------------------------------------------------|
| TF - 001 | Cadastro | Usúario preenche todos os campos corretamente. | O cadastro é bem sucedido e ele é direcionado para página de Login. |
| TF - 002 | Cadastro | Usúario não preenche todos os campos e tenta se cadastrar. | É apresentado um ALERT com o erro cometido, ele precisa preencher os cinco campos.  |
| TF - 003 | Cadastro | Usúario cria uma senha com menos de 8 caracteres. | É apresentado um ALERT com o erro cometido, ele precisa tentar uma senha maior. |
| TF - 004 | Cadastro | Usúario tenta se cadastrar com um email já cadastrado. | É apresentado um ALERT com o erro cometido e orientando, ele precisa tentar outro email. |
| TF - 005 | Cadastro | Usúario já é cadastrado e deseja ir para página de Login | Clica em "Fazer Login" e é direcionado para a página de Login. |
| TF - 006 | Login | Usúario preenche todos os campos corretamente. | Clica em "Entrar" e é direcionado para a página de Login. |
| TF - 007 | Login | Usúario não preenche todos os campos e tenta fazer login. | É apresentado um ALERT com o erro cometido, ele precisa preencher os dois campos. |
| TF - 008 | Login | Usúario preenche os campos com email não cadastrado ainda. | É apresentado um ALERT com o erro cometido, ele precisa se cadastrar antes de fazer login. |
| TF - 009 | Login | Usúario preenche corretamente o email mas a senha não. | É apresentado um ALERT com o erro cometido, ele precisa tentar novamente. |
| TF - 010 | Login | Usúario ainda não se cadastrou e deseja fazer cadastro. | Clica em "Se Cadastrar" e é direcionado para a página de Cadastro. |
| TF - 011 | Perfil | Usúario clica no botão editar. | É liberado o campo de edição de (nome,email, telefone senha). |
| TF - 012 | Perfil | Usúario clica no botão salvar| São armazenados os dados alterados. |
| TF - 013 | Perfil | Usúario clica na imagem de perfil. | É realizado o upload de uma imagem. |
| TF - 014 | Perfil | Usúario clica no botão sair. | Usuário é redirecionado a página de agendamento. |
| TF - 015 | Perfil | Usúario cria uma senha com menos de 8 caracteres. |É apresentado um ALERT com o erro cometido, ele precisa tentar uma senha maior. |
| TF - 016 | Perfil | Usúario tenta se cadastrar com um email sem "@". | É apresentado um ALERT com o erro cometido e orientando, ele precisa inserir um email válido. |



