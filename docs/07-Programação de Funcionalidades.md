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

#Páginas:

### Página de Cadastro

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
| name | Armazenar o nome do usúario | ALTA | input-box |
| email | Armazenar o email do usúario | ALTA | input-box |
| cel | Armazenar o celular do usúario | MÉDIA | input-box |
| password | Armazenar a senha do usúario | ALTA | input-box |
| empresa | Armazenar a empresa do usúario | ALTA | input-box |
|----| Validar dados e cadastrar usúario | ALTA | "cadastrarUsuario()" |
|----| Direcionar para página de Login caso já seja cadastrado | ALTA | div "login" |


### Página de Login

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
| email | Validar o email do usúario | ALTA | input-box |
| password | Validar a senha do usúario | ALTA | input-box |
|----| Validar se dados já estão cadastrados e fazer Login | ALTA | "validarLogin()" |
|----| Direcionar para página de Cadastro caso usúario não seja cadastrado | ALTA | div "cadastro" |
