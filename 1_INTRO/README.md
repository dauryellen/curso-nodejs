# O que é Node.js?

- O **Node.js** é uma runtime de JavaScript
- Ou seja, **uma biblioteca utilizada por um compilador** durante a execução do programa
- Que está construída na **V8 engine** (escrita em C++) da Google
- Possibilitando criar softwares em JS no lado do servidor
- Temos então um código JS rodando em C++ para garantir **alta perfomance**

# O que é npm?

- O **npm** é um gerenciador de pacotes do Node
- Vamos poder utilizar **bibliotecas de terceiros,** baixando elas pelo npm
- E também **executar determinados scripts** no nosso programa
- Dificilmente um software em Node.js não utiliza o npm
- Os módulos externos ficam numa pasta chamada **node_modules**
- Ela deve ser descartável, ou seja, a cada instalação do projeto baixamos todos os pacotes novamente 

# Executando o Node

- Na maioria das vezes **estaremos executando o Node via arquivos** do nosso projeto
- Porém é possível também **executá-lo via terminal**
- Basta digitar: *node*
- O Node.js possui todas as **funcionalidades de JavaScript**
- O nome do recurso é **REPL (Read Evaluate Print Loop)**

# Nosso primeiro programa

- Agora vamos criar algo mais sólido, um **programa simples baseado em um arquivo**
- A extensão dos arquivos de Node serão **.js**
- Vamos executar o arquivo com o comando: *node < arquivo >*
- O código será interpretado e o programa executado

# Utilizando um módulo

- Agora vamos **evoluir o nível de nossos programas**
- Importaremos um módulo do Node: o **File System**
- Este módulo serve para trabalhar com diretórios, arquivos e etc
- E ele é um **Core Module,** ou seja, não é necessário instalar
- Podemos importar módulos com a instrução **import**