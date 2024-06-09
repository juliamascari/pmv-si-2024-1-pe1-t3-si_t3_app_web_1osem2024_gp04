# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
>

### Página de Cadastro

|ID    | Descrição | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
| name | Armazenar o nome do usúario | ALTA | input-box |
| email | Armazenar o email do usúario | ALTA | input-box |
| cel | Armazenar o celular do usúario | MÉDIA | input-box |
| password | Armazenar a senha do usúario | ALTA | input-box |
| empresa | Armazenar a empresa do usúario | ALTA | input-box |
|----| Validar dados e cadastrar usúario | ALTA | "cadastrarUsuario()" |
|----| Direcionar para página de Login | ALTA | div "login" |

**Requisitos para validação:**

- O usúario precisa preencher todos os cinco campos e clicar em "Se Cadastrar";
- A senha deve ter no mínimo 8 caracteres;
- O email não pode ter sido utilizado anteriormente;

**Caso uma dessas opções ocorra, é apresentado um ALERT e o usúario precisa seguir a orientação. Caso o contrário, o Cadastro é válidado e ele segue para a página da Home**


### Página de Login

|ID    | Descrição | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
| email | Validar o email do usúario | ALTA | input-box |
| password | Validar a senha do usúario | ALTA | input-box |
|----| Validar se dados já estão cadastrados e fazer Login | ALTA | "validarLogin()" |
|----| Direcionar para página de Cadastro | ALTA | div "cadastro" |

**Requisitos para validação:**

  - O usúario precisa preencher os dois campos e clicar em "Entrar";
  - O usúario precisa já estar cadastrado anteriornente (na página de cadastro);
  - Os campos precisam estar preenchidos corretamente, com os respectivos email e senha;

**Caso uma dessas opções ocorra, é apresentado um ALERT e o usúario precisa seguir a orientação. Caso o contrário, o Login é válidado e ele segue para a página da Home**

### Página de Perfil

|ID    | Descrição | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
| name | Armazenar o nome do usúario | ALTA | input |
| email | Armazenar o email do usúario | ALTA | input |
| tel | Armazenar o celular do usúario | MÉDIA | input |
| password | Armazenar a senha do usúario | ALTA | input |
| foto | Armazenar foto de perfil | média | input |
| editar | Desabilitar campos| ALTA|| button |
| salvar | Armazenar dados alterados| ALTA | button |
| sair | Redirecionar para página agendamento | ALTA | nav |


**Requisitos para validação:**

- O usúario precisa preencher todos os cinco campos e clicar em "Salvar";
- A senha deve ter no mínimo 8 caracteres;
- O email precisa ter o caracter @;

**Caso a senha e o email não cumprir os requisitos, é apresentado um ALERT e o usúario precisa seguir a orientação. Caso o contrário, o Cadastro pode ser salvo**



