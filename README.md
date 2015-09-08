# High Lights BrazilJS 2015

## Get started

Para rodar os exemplos execute no terminal

```javascript
npm install
```
e depois

```javascript
gulp watch
```

Assim todas vez que você salvar os arquivos /src/*.js javascript compilado aparecerá na pasta /dist/*.js

## Ecmascript-2015.js

Com a evolução da internet e do modo que interagíamos, houve a necessidade de atualizarmos nossas ferramentas de trabalho, para poder evoluir e suprir as novas demandas dos usuários. 

E as expecificações do Ecmascript 6 já estão prontas para que o browsers possam utilizar. 
Esse foi um dos assuntos mais comentados da BrazilJS de 2015. 

A seguir vou dar uma pequena demostração das novidades da última atualização do javascript. 

## Babel JavaScript compiler

Nem todas as features do ecm6 estão disponiveis hoje nos browsers, mas podemos utilizar um compiler para transformar essas novas features em ecm5 assim todos os browsers conseguem rodar o código sem erro.
Vou usar o BabelJS um compiler muito utilizado e por grandes empresas como:

- Spotify
- Reddit
- Atlassian
- Facebook
- PayPal
- Mozilla

## Gulp + BabelJS

Para facilitar esse compiler vamos utilizar o gulp para fazer a build de ecmascript 6 para o 5.

Estou utilizando o gulp-babel e o gulp-watch para que todas vez que eu salvar o arquivo ele é compilado em uma pasta de dist


## Let

let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. 

Isso é inverso da keyword var, que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.

## Template Strings

A feature template strings nos dá um a possibilidade de interpolar strings igual nas linguagens Perl ou Python. 

Podemos Utilizar tags para a customização das Strings, desse modo evitando ataques de injeção ou construindo niveis altos de estruturação de dados para conteúdos de Strings.

## Class

Foi introduzido no ecmascript 6 a tag class deixando mais fácil a aplicação de programação orientada a objeto em javascript. Class suporta protótipo baseado em herança, super calls, instanciamento, metodos e construtores.

## Arrow Function

Arrows são funções encurtadas usando a sintaxe =>. Essas funções são similares as linguagens C#, javas e CoffeScript. 

Diferente de functions, arrows compartilham o mesmo this no contexto em volta do código.

## Extend handling

Agora temos a opção de utilizar a variavel passada em uma função com uma valor default. 

## Links

[Suporte do firefox ao Ecmascript 6](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Suporte_ao_ECMAScript_6_na_Mozilla)

[Can I Use?](http://caniuse.com/)

[BabelJS](https://babeljs.io/)

