# O que são bancos de dados relacionais?

- Os **bancos de dados** relacionais são constituídos por algumas entidades
- **Banco de dados:** um banco para guardar os dados do projeto
- **Tabelas:** onde categorizamos os dados e os inserimos 
- **Colunas:** onde separamos os dados em uma tabela
- **Dados:** o que é inserido, modificado, atualizado e removido em uma tabela
- **Relacionamentos:** ligações entre tabelas

# O que é MySQL?

- O MySQL é um **SGBD** (Sistema Gerenciador de Banco de Dados)
- Que vai nos ajudar a trabalhar com **banco relacionais**
- Também **é o mais utilizado atualmente** em sistemas e aplicações
- Muitos **projetos de Node.js utilizam MySQL**
- Precisamos **instalar** o software **e deixar ele em execução** para que o Node possa se conectar aos bancos que temos disponíveis

# Integração do MySQL e Node.js

- Primeiramente vamos precisar **instalar o drive** que é um pacote chamado **mysql**
- Vamos **instalá-lo com o npm**
- Depois **precisamos conectar ao nosso banco** de dados
- Vamos inserir informações como: **host, user, password e o banco**

# Criando a nossa tabela

- Para manipular os dados do sistema **vamos precisar criar uma tabela**
- Criaremos uma tabela chamada books onde vamos cadastrar livros
- Estes livros vão preciar de **duas informações:** título e número de páginas

# Inserindo dados

- Para inserir dados no banco vamos precisar **criar e executar uma query**
- A query em si **é uma string** seguindo os padrões do MySQL
- Já para executar vamos utilizar o **método query** do pacote mysql
- Nesta aula faremos uso da instrução **INSERT** que insere dados

# Resgatando os dados

- Para resgatar dados vamos precisar criar uma query que será um **SELECT**
- **Podemos escolher quais dados são retornados** determinando as colunas
- Podemos imprimi-los nas nossas **views**

# Resgatando dados específicos

- Para resgatar um dado específico vamos precisar utilizar o **WHERE**
- Desta maneira conseguimos **filtrar por uma coluna e um valor**
- Poderemos então achar os livros pelo seu id

# Editar dados primeiro passo

- Para **editar** algum dado temos antes **alguns preparos a realizar**
- Primeiramente vamos resgatar o dado e **preenchemos o formulário** de dados com os dados que foram resgatados **(SELECT)**
- Isso faz com que o usuário lembre dos dados cadastrados e possa escolher o que editar

# Finalizando a edição

- Para concluir esta etapa precisamos **criar uma nova rota como POST**
- Isso porque o **navegador só consegue interpretar dois verbos atualmente** (GET ou POST)
- E então faremos uma query de **UPDATE** para processar a atualização
- Note que precisamos **passar o id** do livro nesse formulário também

# Remover itens

- Para remover itens vamos utilizar a query **DELETE**
- Precisamos enviar para a rota **um POST com o id do item** a ser removido
- Podemos fazer esse processo em **uma etapa única**

# Connection Pool

- **Connection Pool** é um recurso para otimizar as conexões, **criando um cache** e permitindo sua reutilização
- O **driver mysql** tem esse recurso desenvolvido, podemos aplicá-lo
- Este recurso também **controla as conexões abertas**, fechando-as assim que se tornam inativas

# Preparando a query

- Uma forma de nos defendermos de **SQL Injection** é utilizar **interrogações** em vez de valores e **substituí-las através de um segundo passo** para a query ser executada corretamente
- **Essa técnica deve ser utilizada** em qualquer programa que vá para a produção