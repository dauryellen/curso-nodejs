# O que é o Express?

- Um **framework para Node.js** muito utilizado
- Serve para criarmos **aplicações web**
- Nele podemos criar rotas, renderizar HTML, conectar a um banco de dados
- **O Express torna a criação de apps muito mais simplificada** do que com o Core modules 

# Primeiros Passos

- O **setup inicial do Express é simples,** mas precisamos seguir alguns passos
- **Importar o Express** e invocá-lo
- **Definir uma porta base** para a aplicação
- **Criar uma rota** (URL que será acessada)
- **Executar o método listen** na porta especificada 

# O que são rotas?
- Rota é um conceito **super importante e presente** em aplicações web
- Basicamente são as **URL's que acessamos**
- Se criarmos uma rota **/produtos,** podemos acessar através da URL **www.nossosite.com/produtos**
- **Quando o usuário acessa podemos acessar várias lógicas,** como carregar produtos do banco de dados
- Ou seja, rotas **são uma ponte** entre o usuário e a lógica da aplicação

# Renderizando HTML

- Para enviar HTML como resposta utilizamos o método **sendFile**
- Isso faz com que o arquivo seja **renderizado no navegador**
- Precisamos acessar o arquivo por meio do diretório base, isso requer o módulo **path**

# Problema de atualização

- Precisamos toda vez **reiniciar o servidor** para receber as atualizações e isso é muito custoso
- Vamos então instalar o módulo **Nodemon** que **a cada vez que o arquivo é salvo ele reinicia o projeto** facilitando nossa vida
- Vamos salvar como **dependência de desenvolvimento** (*--save-dev*)

# Middlewares

- Middlewares são códigos que podem ser executados no **meio/entre (middle) de alguma ação e outra**
- Por exemplo: podemos ter um middleware para **verificar se usuário está logado**
- O método que nos dá acesso a utilizar middlewares é o **use** no Express

# Parâmetros por URL

- Podemos resgatar os parâmetros da URL por meio do **req**
- Acessamos **req.params.< *nome* > onde nome **deve ser o que está definido na URL do Express** que fica desta forma: **/users/:id** 
- Neste caso estaríamos buscando o usuário no banco de dados pelo id e o parâmetro vem pela URL

# Enviando dados por POST

- Para enviar os dados vamos precisar **criar um form e enviar os dados via POST** para alguma URL
- No Express precisamos colocar alguns **middlewares** como o **express.json** para ler os dados do body e também uma rota que vai receber esses dados utilizando o **método post** do Express

# Módulo de rotas

- Podemos **unir várias rotas em um módulo,** isso vai deixar nosso código mais organizado
- Normalmente **criamos uma pasta ou arquivo** que contém essas rotas que representam uma entidade em comum , como **users**
- Vamos utilizar um novo objeto chamado **Router** e colocar as rotas nele
- Depois precisamos **exportá-lo e importar no arquivo principal

# Colocando CSS

- Para inserir CSS nas páginas e arquivos estáticos **vamos precisar de um middleware**
- Que é o **express.static**
- **Precisamos colocar um diretório base** que normalmente é o public e criar os estáticos a partir dessa pasta
- No HTML podemos **acessar o caminho relativo após a pasta definida,** e pronto

# Criando uma página 404

- Para criar uma página 404, ou seja, **quando um usuário acessa uma página que não existe**, basta criar um novo middleware **abaixo de todas as rotas**, que responde com esse status e **enviar um arquivo de template** referente a essa página 