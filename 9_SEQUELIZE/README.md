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