# O que é npm?

- É o principal **gerenciador de pacotes** do Node.js
- A sigla significa: **Node Package Manager**
- A maioria dos projetos que vamos trabalhar em Node **também terá atuação do npm**
- Podemos não só instalar pacotes, mas também **configurar o projeto e rodar scripts** por meio do npm
- A criação de um projeto gera sempre um arquivo, o **package.json**

# Criando um projeto com npm
- Para iniciar um projeto, podemos utilizar o comando **npm init**
- Seremos questionados para **configurar algumas opções iniciais**
- Como o **nome do projeto**
- E então um **package.json** condensando as informações é criado
- Isso caracteriza o início do projeto com npm e Node


# Inicialização rápida de um projeto

- Podemos iniciar um projeto rapidamente com o **npm init -y**

# Instalando um pacote

- Para instalar um pacote vamos utilizar o comando **npm install < nome >**
- Onde **< nome >** será substituído pelo nome do pacote
- Quando fazemos desta maneira a instalação, uma pasta **node_modules** é criada
- Nela **todos os arquivos de módulos** de terceiro são armazenados
- Sempre que rodarmos o comando **npm install**, a pasta **node_modules** é recriada com todos os módulos do **package.json**

# Instalando um pacote como dev

- Há uma possibilidade de **instalar pacote apenas para o ambiente de desenvolvimento**
- Utilizamos a flag **--save-dev**
- Isso faz com que ele seja **separado no package.json dos demais**
- E então na build de produção não instalaremos esses módulos
- Um exemplo: servidor para ambiente local como o Nodemon
- *npm install --save-dev nodemon*

# Atualização de pacotes

- Constatemente **os pacotes do npm são atualizados** por seus desenvolvedores
- Temos então o comando **npm update**
- Que vai fazer a atualização de todos os pacotes instalados no package.json
- É possível atualizar um pacote específico com **npm update < nome >**

# Criando scripts

- É possível **criar rotinas com o npm** também
- Ou seja, executamos uma série de comandos com apenas um 
- Utilizamos **npm run < script >**
- Onde **< script >** é o nome da sequência de comandos que configuramos
- *"start": "node index.js"*
- *npm start*
# Instalando um pacote global

- Um **pacote global** não fica salvo na pasta node_modules do projeto
- Ele fica salvo no computador do usuário
- A vantagem é que **podemos acessá-los em qualquer local** via terminal
- Utilizamos a **flag -g** em node install
- *npm install -g lodash*

# Executando scripts com npx

- **Alguns pacotes são scripts executáveis,** que resultam em alguma ação do nosso computador
- Como por exemplo a **instalação do React,** que é feita pelo **npx**
- Desta maneira uma série de processos são simplificados por este executor
- *npx cowsay "Hello World!"*

# Remover pacote com npm

- Para remover um pacote utilizamos o comando: **npm uninstall < nome >**
- Substituindo **< nome >** pelo nome do pacote
- Isso faz com que o pacote seja **removido do package.json** também