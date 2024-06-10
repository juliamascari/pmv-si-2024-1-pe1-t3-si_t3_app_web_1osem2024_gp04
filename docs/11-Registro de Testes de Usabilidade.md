# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="7-Programação de Funcionalidades.md"> Programação de Funcionalidades</a></span>, <a href="10-Plano de Testes de Usabilidade.md"> Plano de Testes de Usabilidade</a>

Relatório com evidências dos testes e relatos dos usuários participantes, baseado em um plano de testes pré-definido.

> **Links Úteis**:
> - [Ferramentas deTestes de Usabilidade](https://www.usability.gov/how-to-and-tools/resources/templates.html)


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



