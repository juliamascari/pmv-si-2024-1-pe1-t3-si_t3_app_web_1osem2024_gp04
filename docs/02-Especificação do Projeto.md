# Especificações do Projeto

O sistema tem como objetivo oferecer uma solução completa para a reserva e gestão de espaços de trabalho em ambientes corporativos, visando facilitar a transição para modelos de trabalho presenciais, flexíveis e híbridos, permitindo aos colaboradores reservar estações de trabalho e salas de reuniões conforme necessário, enquanto permite que os gestores tenham ferramentas que otimizem o uso do espaço e gerenciem as preferências dos funcionários. Para isso o sistema contará com as seguintes ferramentas:
- Interface intuitiva para reserva e gestão de espaços de trabalho.
- Integração com Calendário Corporativo permitindo aos usuários visualizar e reservar espaços com base em suas agendas.
- Lembretes e avisos de inicio e fim da reserva realizada. Podendo ser realizado agendamentos semanais e quinzenais.
- Visualização clara do espaço a ser reservado, mapeando andar, corredor, número da mesa, horário e dia da reserva.

## Personas

|                                                                                                                                                                                       | <h2>Larissa Torres                                                                                                                                                                                                            |                                                                                                           |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
|                                                                                                                                                                                       | <strong>Idade:</strong> 34 anos.                                                                                                                                                                                                                |                                                                                                           |
| <img width=250px heigth=250px src="">| <strong>Ocupação:</strong>  <li> Product Owner <li> Atua como procuradora do cliente, responsável por trabalhar com gerenciamento de produto em uma empresa de tecnologia.                                                                                                                                      
| <strong>Motivações                                                                                                                                                                            | <strong>Frustrações                                                                                                                                                                                                                    | <strong>Hobbies, História:                                                                                        |
| <li> Deseja um sistema que possibilite uma alocação eficiente dos espaços de trabalho para maximizar a utilização do escritório e facilitar a adaptação a modelos de trabalho híbridos.                              | <li>Dificuldades em gerenciar a ocupação dos espaços de forma flexível e responder rapidamente às mudanças nas necessidades de espaço. | <li>Ambientalista <li>Entusiasta de metodologias ágeis, gosta de participar de meetups e conferências sobre gestão de produtos. |






|                                                                                                                                                                                       | <h2>Abilio Junior |                                                                                                           |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
|                                                                                                                                                                                       | <strong>Idade:</strong> 42 anos.                                                                                                                                                                                                                |                                                                                                           |
| <img width=250px heigth=250px src="">| <strong>Ocupação:</strong>  <li>Desenvolvedora Full Stack <li>Sênior em uma Multinacional do ramo têxtil.                                                                                                                                      
| <strong>Motivações                                                                                                                                                                            | <strong>Frustrações                                                                                                                                                                                                                    | <strong>Hobbies, História:                                                                                        |
| <li>Procurar soluções inovadoras e eficientes para implementar os requisitos, com o uso de tecnologias modernas. | <li>Requisitos mal definidos, mudanças frequentes de escopo, falta de documentação técnica adequada. | <li>Apaixonado por codificação, contribui para projetos open source e está sempre em busca de aprender novas linguagens de programação. |

    
|                                                                                                                                                                                       | <h2>Lucas Andrade |                                                                                                           |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
|                                                                                                                                                                                       | <strong>Idade:</strong> 25 anos.                                                                                                                                                                                                                |                                                                                                           |
| <img width=250px heigth=250px src="">| <strong>Ocupação:</strong>  <li>Analista de Qualidade (QA). <li>Acompanha desde o esboço do projeto, passando pela programação, até as implementações d| 
| <strong>Motivações                                                                                                                                                                            | <strong>Frustrações                                                                                                                                                                                                                    | <strong>Hobbies, História:                                                                                        |
| <li>Assegurar que o sistema seja confiável, fácil de usar e livre de erros, proporcionando uma experiência positiva para os usuários. | <li>Falta de comunicação clara entre a equipe, descoberta de erros em fases avançadas do desenvolvimento. | <li>Interessado por automação de testes, mantém um blog onde compartilha dicas sobre qualidade de software.


## Histórias de Usuários

Partindo das informações que as Personas apresentaram, chegou-se à conclusão das seguintes histórias de usuário relevantes ao problema identificado.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Larissa Torres  | Quero poder visualizar a disponibilidade dos espaços de trabalho em tempo real e as reservas feitas pela minha equipe para melhor gerenciamento e otimização do dia a dia. | Uso frequente, visto que vou ao escritório 3x por semana.           |
|Abilio Junior  | Quero poder ter controle dos locais agendados por mim, além de poder  escolher com antecedência os melhores lugares.           | Para poder organizar minha rotina de trabalho e horários.              |               |
|Raquel Campos  | Ter maior credibilidade nas informações publicadas sobre uma empresa e avaliações reais de funcionários, tudo em um mesmo ambiente de internet.         | Dedicar-se e engajar-se a longo prazo com um plano de carreira em uma empresa sólida e coerente com os valores sociais e ambientais.               |
|Lucas Andrade | Quero conciliar as estações agendadas com a minha agenda para estar perto do time que atuarei naquela semana.  | Garantir alinhamento entre desenvolvimento e testes das equipes e poder conciliar as prioridades da semana  |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID|Descrição do Requisito|Prioridade|
|---|---|---|
|RF-001|Permitir que o administrador cadastre vagas disponíveis|ALTA|
|RF-002|Permitir que os funcionários visualizem vagas disponíveis|ALTA|
|RF-003|Permitir que os funcionários reservem uma vaga|ALTA|
|RF-004|Permitir que o administrador visualize reservas atuais|MÉDIA|
|RF-005|Permitir que o administrador cancele reservas|MÉDIA|
|RF-006|Emitir uma lista de espera para vagas que estão cheias|BAIXA|

### Requisitos Não Funcionais

|ID|Descrição do Requisito|Prioridade|
|---|---|---|
|RNF-001|A interface deve ser responsiva e compatível com dispositivos móveis|ALTA|
|RNF-002|O sistema deve ser capaz de atualizar as informações de vaga em tempo real|MÉDIA|
|RNF-003|O sistema deve ser simples e intuitivo para garantir facilidade de uso|ALTA|
|RNF-004|As operações de reserva e cancelamento devem ser processadas em menos de 2 segundos|ALTA|

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID|Restrição|
|---|---|
|01|O projeto deve ser implementado utilizando apenas JavaScript, CSS e HTML|
|02|O sistema deve funcionar sem um backend ou banco de dados|
|03|O projeto deve ser concluído e entregue até o final do semestre

