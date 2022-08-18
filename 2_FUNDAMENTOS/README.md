# O que são módulos?

- Módulos são **scripts reaproveitáveis,** que utilizamos bastante programando em Node
- Eles são divididos em três categorias
- **Internos:** módulos que nós desenvolvemos
- **Core Modules:** módulos que vem com o Node.js
- **Externos:** módulos que instalamos via npm

# Módulos internos

- Os **módulos internos** são criados nas pastas do nosso projeto
- Precisamos **exportar** o módulo
- Podemos utilizar a instrução **module.exports** e importar onde precisamos utilizar
- Para importar vamos utilizar a instrução **require**

# Export e Import

- Com o Node.js também é possível utilizar o **export e import do ES6**
- São funcionalidades mais modernas de **importação e exportação** com **mais recursos** do que as que vimos anteriormente
- Para isso precisamos modificar os nossos arquivos para a extensão **.mjs** e então exportar com **export defaul** e importar com **import** uma única função, caso seja necessário

# Core Modules

- No Node temos diversos **Core Modules**, que são os que vêm prontos para serem utilizados
- Eles resolvem diversos problemas, como: **trabalhar com arquivos e diretórios, servir aplicações** e etc

# Ler argumentos

- O Node permite o **envio de argumentos via linha de comando**
- Passamos eles após a instrução de execução do arquivo
- Os argumentos ficam em um array chamado: **process.argv** onde podemos **fazer um loop e resgatar os valores** enviados

# Módulos Externos

- Os módulos externos podem ser instalados via **npm**
- Para isso precisamos inicializar o npm no projeto com *npm init*
- A partir daí os módulos ficam mapeados e podemos instalar módulos que são salvos na pasta **node_modules**
- Podemos instalar módulos com *npm install < nome >*

# Algo prático com argumentos

- Podemos **utilizar os argumentos recebidos** para aplicar no nosso programa alguma lógica
- Basta **encapsular em variáveis** e depois utilizá-los
- Ou seja, podemos a partir do terminal, **executar também uma função de um módulo interno nosso,** por exemplo

# Explorando o console

- Temos uma grande variedade de métodos no **console**, como o *console.log*
- Podemos **imprimir mais de uma variável** por vez
- Inserir **variáveis entre strings**
- Há um método para limpar as mensagens do console

# Melhorando a visualização

- Há um módulo externo chamado **chalk**
- Ele pode deixar a **visualização do console** mais agradável fazendo com que seja possível expressar um **feedback baseado em cores**

# Lendo entrada de dados

- Podemos ler dados do usuário com o módulo **readline**, um Core Module
- Neste caso, utilizamos o método **question** que faz uma pergunta a ser respondida pelo usuário
- Depois podemos **processar a resposta** e entregar um retorno

# Melhorando a leitura de dados

- Há um módulo externo chamado **inquirer** que é muito mais completo para **resgatar e lidar** com o input do usuário
- Além disso, é **baseado em Promises**, o que torna sua utilização mais simples

# Event Loop

- O **Event Loop** é um recurso de arquitetura Node
- O **Node.js executa uma linha por vez**, e de cima para baixo do código escrito
- Isso nos ajuda a **evitar problemas de concorrência**, garantindo a execução do código
- Precisamos apenas cuidar com **bloqueios de fluxo**, como loops infinitos

# Event Emmiter

- O **Event Emmiter** se comporta como os eventos do navegador
- Podemos **ativar um código em alguns pontos da aplicação**, como o início
- É um Core Module chamado **events**
- Precisamos instanciar a **classe EventEmmiter** que vem deste módulo e então utilizar os métodos para atingir nosso objetivo

# Síncrono e Assíncrono

- Em Node.js temos duas opções ao executar métodos: sync e async
- **Foma síncrona:** o código espera ser totalmente executado para prosseguir
- **Forma assíncrona:** o código continua progredindo e em um ponto futuro obtém a resposta da execução assíncrona

# Erros no Node

- Temos duas formas principais para **gerar ou evidenciar erros** em Node.js
- **throw:** uma forma de encerrar um programa, gerando um novo erro
- **try catch:** uma forma de evidenciar algo que deu errado em um bloco de código e exibir a mensagem de erro