# O que é ORM?

- **Object Relational Mapper** (ORM)
- **Abstrai a complexidade das queries** para trabalharmos com métodos
- Nos **concentramos nas regras de negócios** e não nos comandos SQL
- Uma ORM muito utilizada para Node.js é a **Sequelize**
- Em alguns casos **uma ORM pode trazer prejuízos de performance**
- A **query pura executa mais rapidamente** do que a ORM e temos código "gerado", ou seja, não vemos por baixo dos panos

# O que é Sequelize?

- **Uma ORM** para Node.js
- Ela é **baseada em promises** (then, catch)
- Tem integração para **vários bancos relacionais**, como o MySQL
- **Precisamos sempre criar um Model** que é o reflexo da nossa tabela em uma classe
- Precisamos instalar um pacote já que é um **módulo externo**

# Instalando o Sequelize

- Para instalar o Sequelize utilizamos o pacote **sequelize**
- E para conectar precisamos passar: **banco, usuário e senha** e **instaciando** a classe Sequelize
- É possível checar a conexão com o **método authenticate**

# Criando um Model

- Para criar um **Model** temos que instaciar uma classe que representará uma tabela
- Um Model User **cria uma nova tabela chamada users**
- Colocamos os **campos e os tipos** dele como propriedade do Model
- Futuramente ele será utilizado para as **operações entre aplicação e banco**
- O método **sync** faz a criação das tabelas baseada nos models

# Inserindo dados

- Para inserir um dado **vamos precisar do Model** que criamos, ou seja, importar ele no arquivo de execução do comando
- O método a ser utilizado é o **create**
- Ele leva como parâmetro **todos os campos** e insere o registro na tabela

# Lendo dados

- Para ler os dados de uma tabela vamos utilizar o **método fetchAll** que também requer o **model**, no nosso caso, o **User**
- Os dados vem em um **objeto especial** 
- Para transformar em um array de objetos **temos que inserir um parâmetro** que é o **raw** como true

# Utilizando o WHERE

- Para filtrar dados com o Sequelize utilizando WHERE, **precisamos inserir um novo parâmetro** que será o **where**, que é um objeto onde colocamos as propriedades e valores que queremos filtrar
- E para retornar apenas um resultado podemos utilizar o método **findOne**

# Removendo itens

- Para remover itens utilizamos o método **destroy**
- A função vai ficar bem parecida com a de resgatar usuário só que será um **POST** 
- **Precisamos também criar um formulário** no front-end

# Editando itens

- O primeiro passo da edição é **resgatar os dados do item**
- Com isso podemos **preencher o formulário** e depois fazer o UPDATE
- Vamos utilizar o método **findOne**, igual na rota de visualização, e fazer o preenchimento do form na nossa **nova view**

# Atualizando o dado no banco

- Para realizar a query de UPDATE vamos utilizar o **método update** do Sequelize
- Nele passamos o **objeto atualizado** do item e também filtramos por meio do **atributo where** que item vamos atualizar

# Refazer as tabelas

- Podemos forçar a **reconstrução das tabelas**
- No método **sync**, onde são sincronizados os **models e as tabelas**, vamos colocar um atributo chamado **force** como true
- Exemplo: `sync({ force: true })`
- Note que os dados são perdidos nesse processo

# Relacionamentos

Em bancos relacionais podemos criar **relacionamentos entre as tabelas**
- Para concretizar isso no Sequelize vamos precisar de **dois Models**, ou seja, precisamos criar mais um no nosso projeto
- Depois precisamos **inserir um método de relacionamento em algum dos models** que vai criar a relação
- Após o sync **uma coluna** que faz a relação entre as tabelas será criada
- Essa coluna representa a **FOREIGN KEY**

# Adicionando dados relacionados

- Para adicionar o dado relacionado **o fluxo é quase o mesmo**
- O grande detalhe é que precisamos passar o **id do item** que o relaciona
- Podemos fazer isso com um input do tipo **hidden** dentro do **form** que contém os dados do novo item e enviando para uma **nova rota** no nosso sistema

# Resgatando dados relacionados

- Precisamos definir as **relações entre os dois Models** 
- Podemos fazer isso no Model de endereços
- Depois basta utilizar o **operador include** com o nome do Model onde estamos resgatando o dado
- Isso faz com que os **registros associados** também venham na seleção
- Como há dados relacionados, precisamos **remover o raw**

# Removendo dados relacionados

- Para remover itens relacionados utilizaremos o **mesmo processo de remoção de itens**
- Criaremos um **formulário** que envia o id do item e uma rota para receber estas informações e executar a remoção utilizando o **método destroy**