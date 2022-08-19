# O que é Template Engine?

- Uma forma de deixar o **HTML dinâmico, inserindo variáveis** do back-end no front-end
- Podemos também criar **layouts** que são reaproveitados
- É essencial para projetos que usam banco de dados que **não são estáticos**
- Temos diversos disponíveis: **EJS, Pug e Handlebars,** por exemplo
- **Todos atingem o mesmo objetivo,** porém há algumas diferenças de setup e funcionalidades

# Conhecendo o Handlebars

- O **Handlebars** é uma das templates engines mais utilizadas
- Colocamos os dados dinâmicos no HTML entre **{{ }}** para serem impressos
- Podemos **criar condicionais e também loops** no template
- **Conhecido por sua sintaxe limpa no front**, nos força a não executar lógica no HTML
- O nome do pacote é *express-handlebars*

# Instalando o Handlebars

- Vamos precisar instalar o **Express e o Handlebars** para o correto funcionamento
- Podemos também utilizar o **Nodemon** para nos ajudar
- No index precisamos **importar** os pacotes instalados e também adicionar ao Express a **engine** do Handlebars
- Criaremos uma **view** no diretório views com a **extensão handlebars**
- Utilizamos o método **render** para enviar essa view para a requisição

# Criando layouts

- Podemos criar layouts para **reaproveitar código** entre páginas
- Vamos criar uma **pasta chamada layouts** em views e nela **criar o template** que será repetido 
- Colocamos uma tag especial **{{ body }}** para que neste local o "corpo" do site seja inserido
- Em **todas as nossas views** o layout será repetido

# Passando dados para a view

- Vamos passar os dados por meio do **método render**
- Enviamos **um objeto** com chaves e valores e isso nos possibilita acessar estes **dados no template**
- Vamos utilizar a sintaxe de **{{ dado }}** e o dado será impresso

# Utilizando condicionais

- Utilizar uma **estrutura condicional** nos permite mais flexibilidade no layout
- Podemos utilizar o **if** no Handlebars
- A sintaxe é **{{#if algumacoisa}} ... {{/if}}**
- **Só imprime o que está entre as condicionais** se o resultado dela for verdadeiro
- Precisamos encaminhar o dado a ser validado **pelo backend**

# Utilizando o else

- O else é um **complemento do if**
- Utillizamos no Handlebars para a exibição de outra parte do layout, **caso a condição seja falsa**
- Isso nos dá mais flexibilidade ainda!
- A sintaxe é **{{#if algumacoisa}} ... {{else}} ... {{/if}}**

# Estruturas de repetição

- As estruturas de repetição no Handlebars são feitas pelo operador **each**
- A sintaxe é **{{#each}} ... {{/each}}**
- Em um array podemos chamar os itens com **{{this}}**
- Então cada um dos itens é acessado na view
- Como o Handlebars prega **um template mais limpo**, devemos mandar apenas o necessário para o front-end

# Utilizando o with

- O **with** nos permite **abstrair um objeto**
- Ou seja, podemos acessar as propriedades **sem nos referenciarmos sempre ao objeto antes**
- A sintaxe é **{{#with objeto}} ... {{/with}}**
- Desta maneira nossa código fica ainda mais simples

# Conhecendo os partials

- **Os partials são como mini templates** que precisam ser repetidos em diversos locais da nossa aplicação
- Precisamos realizar algumas **modificações na implementação do Handlebars**
- Os partials geralmente ficam em **views/partials**
- Utilizamos a sintaxe **{{>partial}}** para chamá-lo no projeto

# CSS com Handlebars e Express

- A inclusão de CSS no Handlebars **é muito semelhante a que realizamos apenas com Express**
- Precisamos **definir a pasta dos arquivos** estáticos e **vamos linkar o CSS com o nosso layout** em comum para todas as páginas
- Isso torna possível a estilização dos nossos projetos