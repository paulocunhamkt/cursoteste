# Módulo 1: Fundamentos do Desenvolvimento Web

## Semana 1: HTML - A Estrutura da Web

### Introdução ao HTML5

HTML (HyperText Markup Language) é a linguagem de marcação padrão para criar páginas web. O HTML5 é a versão mais recente e introduziu novos elementos e APIs para tornar o desenvolvimento web mais rico e interativo. Ele é a espinha dorsal de qualquer página web, definindo a estrutura e o conteúdo. Sem o HTML, não haveria conteúdo para estilizar com CSS ou manipular com JavaScript.

### Tags Semânticas

As tags semânticas no HTML5 fornecem significado ao conteúdo, tornando-o mais compreensível tanto para navegadores quanto para desenvolvedores e ferramentas de acessibilidade. Em vez de usar `<div>` para tudo, usamos tags como `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`. Isso melhora a SEO (Search Engine Optimization) e a acessibilidade da página.

**Exemplo:**

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Página Semântica</title>
</head>
<body>
    <header>
        <h1>Título do Site</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Seção Principal</h2>
            <p>Conteúdo da seção.</p>
        </section>
        <article>
            <h3>Artigo</h3>
            <p>Conteúdo do artigo.</p>
        </article>
    </main>

    <footer>
        <p>&copy; 2025 Meu Site</p>
    </footer>
</body>
</html>
```

### Estrutura de Documentos HTML

Todo documento HTML segue uma estrutura básica:

*   `<!DOCTYPE html>`: Declara o tipo de documento como HTML5.
*   `<html lang="pt-br">`: O elemento raiz de uma página HTML. O atributo `lang` define o idioma do conteúdo, importante para acessibilidade e SEO.
*   `<head>`: Contém metadados sobre o documento, como o título da página, links para folhas de estilo CSS, scripts JavaScript e informações para motores de busca. O conteúdo dentro de `<head>` não é exibido diretamente no navegador.
    *   `<meta charset="UTF-8">`: Define a codificação de caracteres para o documento, garantindo que os caracteres especiais sejam exibidos corretamente.
    *   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Configura a viewport para garantir que a página seja responsiva em diferentes dispositivos.
    *   `<title>`: Define o título que aparece na aba do navegador.
*   `<body>`: Contém todo o conteúdo visível da página web, como texto, imagens, links, vídeos, etc.

### Elementos de Texto, Links, Imagens e Listas

#### Elementos de Texto

*   `<h1>` a `<h6>`: Títulos de diferentes níveis de importância.
*   `<p>`: Parágrafos de texto.
*   `<strong>`: Texto em negrito (forte importância).
*   `<em>`: Texto em itálico (ênfase).
*   `<br>`: Quebra de linha.
*   `<hr>`: Linha horizontal (separador temático).

**Exemplo:**

```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<p>Este é um <strong>parágrafo</strong> de texto com <em>ênfase</em>.</p>
<p>Outro parágrafo.<br>Com uma quebra de linha.</p>
<hr>
```

#### Links (Âncoras)

O elemento `<a>` é usado para criar hiperlinks. O atributo `href` especifica o URL de destino.

**Exemplo:**

```html
<a href="https://www.google.com" target="_blank">Visitar Google</a>
<a href="#secao-contato">Ir para Contato</a>
```

*   `target="_blank"`: Abre o link em uma nova aba.
*   `#secao-contato`: Link interno para uma seção específica da mesma página (requer um elemento com `id="secao-contato"`).

#### Imagens

O elemento `<img>` é usado para incorporar imagens. É uma tag vazia (não tem tag de fechamento).

**Exemplo:**

```html
<img src="caminho/para/sua/imagem.jpg" alt="Descrição da imagem" width="300" height="200">
```

*   `src`: Caminho para o arquivo da imagem.
*   `alt`: Texto alternativo para a imagem, importante para acessibilidade (exibido se a imagem não carregar ou para leitores de tela).
*   `width` e `height`: Definem as dimensões da imagem (boas práticas sugerem usar CSS para isso).

#### Listas

*   **Listas Não Ordenadas (`<ul>`):** Itens marcados com pontos.
*   **Listas Ordenadas (`<ol>`):** Itens numerados.
*   **Itens de Lista (`<li>`):** Usados dentro de `<ul>` ou `<ol>`.

**Exemplo:**

```html
<h3>Minhas Habilidades</h3>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

<h3>Passos para Aprender</h3>
<ol>
    <li>Estudar HTML</li>
    <li>Praticar CSS</li>
    <li>Dominar JavaScript</li>
</ol>
```

### Tabelas e Formulários

#### Tabelas

Usadas para exibir dados tabulares.

**Exemplo:**

```html
<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Cidade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>João</td>
            <td>30</td>
            <td>São Paulo</td>
        </tr>
        <tr>
            <td>Maria</td>
            <td>25</td>
            <td>Rio de Janeiro</td>
        </tr>
    </tbody>
</table>
```

*   `<table>`: Define a tabela.
*   `<thead>`: Agrupa o conteúdo do cabeçalho da tabela.
*   `<tbody>`: Agrupa o conteúdo do corpo da tabela.
*   `<tr>`: Define uma linha da tabela.
*   `<th>`: Define uma célula de cabeçalho.
*   `<td>`: Define uma célula de dados.

#### Formulários

Usados para coletar entrada do usuário.

**Exemplo:**

```html
<form action="/submit-form" method="post">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="mensagem">Mensagem:</label>
    <textarea id="mensagem" name="mensagem" rows="4"></textarea>

    <input type="submit" value="Enviar">
</form>
```

*   `<form>`: Define o formulário.
*   `action`: URL para onde os dados do formulário serão enviados.
*   `method`: Método HTTP para enviar os dados (`get` ou `post`).
*   `<label>`: Rótulo para um controle de formulário.
*   `<input>`: Campo de entrada (texto, email, senha, etc.).
    *   `type`: Tipo de entrada.
    *   `id`: Identificador único para o campo (usado com `for` no `<label>`).
    *   `name`: Nome do campo (usado para enviar os dados).
    *   `required`: Torna o campo obrigatório.
*   `<textarea>`: Campo de texto de múltiplas linhas.
*   `<button>` ou `<input type="submit">`: Botão para enviar o formulário.

### Acessibilidade e Boas Práticas

*   **Uso de Tags Semânticas:** Ajuda leitores de tela e motores de busca a entender a estrutura da página.
*   **Atributo `alt` em Imagens:** Essencial para usuários com deficiência visual.
*   **Rótulos (`<label>`) para Formulários:** Associa um rótulo a um campo de entrada, melhorando a usabilidade e acessibilidade.
*   **Estrutura de Títulos (`<h1>` a `<h6>`):** Use-os em ordem hierárquica para organizar o conteúdo.
*   **Contraste de Cores:** Garanta que o texto seja legível em relação ao fundo.
*   **Navegação por Teclado:** Certifique-se de que todos os elementos interativos podem ser acessados e operados usando apenas o teclado.

## Recursos Adicionais

*   [MDN Web Docs - HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
*   [W3Schools - HTML Tutorial](https://www.w3schools.com/html/)
*   [Guia de Acessibilidade Web - W3C](https://www.w3.org/WAI/fundamentals/accessibility-principles/)

---



## Semana 2: CSS - Estilizando a Web

### Introdução ao CSS3

CSS (Cascading Style Sheets) é uma linguagem de folha de estilo usada para descrever a apresentação de um documento escrito em HTML. Ele controla cores, fontes, layout e outros aspectos visuais da página web. O CSS3 é a versão mais recente e trouxe muitos recursos novos, como sombras, gradientes, transições e animações, que permitem criar designs mais complexos e atraentes.

Existem três maneiras principais de aplicar CSS a um documento HTML:

1.  **Inline:** Aplicado diretamente a um elemento HTML usando o atributo `style`. Não é recomendado para estilos complexos ou reutilizáveis.
    ```html
    <p style="color: blue; font-size: 16px;">Este é um parágrafo azul.</p>
    ```
2.  **Interno (Embedded):** Definido dentro da tag `<style>` no `<head>` do documento HTML. Útil para estilos específicos de uma única página.
    ```html
    <head>
        <style>
            p {
                color: green;
            }
        </style>
    </head>
    ```
3.  **Externo (Linked):** Definido em um arquivo `.css` separado e linkado ao documento HTML usando a tag `<link>` no `<head>`. Esta é a forma mais recomendada, pois permite reutilizar estilos em várias páginas e facilita a manutenção.
    ```html
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    ```

### Seletores, Propriedades e Valores

O CSS funciona selecionando elementos HTML e aplicando propriedades a eles. Uma regra CSS consiste em um seletor e um bloco de declaração.

*   **Seletor:** Aponta para o(s) elemento(s) HTML que você deseja estilizar.
*   **Propriedade:** O atributo de estilo que você deseja alterar (ex: `color`, `font-size`).
*   **Valor:** O valor que você deseja atribuir à propriedade (ex: `blue`, `16px`).

#### Tipos de Seletores:

*   **Seletor de Elemento:** Seleciona todos os elementos de um determinado tipo.
    ```css
    p {
        color: red;
    }
    ```
*   **Seletor de ID:** Seleciona um único elemento com um `id` específico (prefixado com `#`). IDs devem ser únicos em uma página.
    ```css
    #meu-titulo {
        font-size: 24px;
    }
    ```
*   **Seletor de Classe:** Seleciona todos os elementos com uma `class` específica (prefixado com `.`). Classes podem ser aplicadas a múltiplos elementos.
    ```css
    .destaque {
        background-color: yellow;
    }
    ```
*   **Seletor Universal:** Seleciona todos os elementos (`*`).
    ```css
    * {
        margin: 0;
        padding: 0;
    }
    ```
*   **Seletores Combinadores:** Permitem selecionar elementos com base em sua relação com outros elementos (ex: descendente, filho, irmão adjacente, irmão geral).
    ```css
    div p { /* Seleciona todos os parágrafos dentro de uma div */
        margin-bottom: 10px;
    }
    ul > li { /* Seleciona todos os itens de lista que são filhos diretos de uma ul */
        list-style-type: none;
    }
    ```

### Modelos de Caixa (Box Model), Display, Posicionamento

#### Box Model

Todo elemento HTML é tratado como uma caixa retangular no CSS. O Box Model descreve como o espaço é ocupado por um elemento, incluindo:

*   **Content (Conteúdo):** Onde o conteúdo real (texto, imagem) do elemento é exibido.
*   **Padding (Preenchimento):** Espaço entre o conteúdo e a borda. É transparente e herda a cor de fundo do elemento.
*   **Border (Borda):** Linha que envolve o padding e o conteúdo.
*   **Margin (Margem):** Espaço externo à borda, separando o elemento de outros elementos. É transparente.

```css
.caixa {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 1px solid black;
    margin: 10px;
    background-color: lightblue;
}
```

#### Propriedade `display`

Controla como um elemento é exibido no layout da página.

*   **`block`:** Ocupa toda a largura disponível e começa em uma nova linha (ex: `div`, `p`, `h1`).
*   **`inline`:** Ocupa apenas o espaço necessário e não começa em uma nova linha (ex: `span`, `a`, `img`).
*   **`inline-block`:** Combina características de `inline` (não quebra linha) e `block` (pode ter largura, altura, padding e margin).
*   **`none`:** O elemento não é exibido e não ocupa espaço no layout.
*   **`flex` e `grid`:** Usados para layouts mais complexos (abordados na próxima seção).

#### Propriedade `position`

Controla o posicionamento de um elemento na página.

*   **`static` (Padrão):** O elemento é posicionado de acordo com o fluxo normal do documento.
*   **`relative`:** O elemento é posicionado em relação à sua posição normal. Propriedades `top`, `bottom`, `left`, `right` o movem de sua posição original, mas o espaço original ainda é reservado.
*   **`absolute`:** O elemento é removido do fluxo normal do documento e posicionado em relação ao seu ancestral posicionado mais próximo (se não houver, em relação ao `<body>`).
*   **`fixed`:** O elemento é removido do fluxo normal e posicionado em relação à janela de visualização (viewport). Permanece fixo mesmo com a rolagem da página.
*   **`sticky`:** O elemento é posicionado normalmente até que sua posição de rolagem atinja um limite especificado, quando então ele se torna fixo.

### Flexbox e Grid Layout para Layouts Responsivos

#### Flexbox (Flexible Box Layout)

Um módulo de layout unidimensional (linha ou coluna) que permite organizar itens em um contêiner de forma flexível. Ideal para componentes de interface e pequenos layouts.

**Conceitos Chave:**

*   **Contêiner Flex (`display: flex`):** O elemento pai que contém os itens flex.
*   **Itens Flex:** Os filhos diretos do contêiner flex.

**Propriedades do Contêiner:**

*   `flex-direction`: Define a direção dos itens (row, column).
*   `justify-content`: Alinha os itens ao longo do eixo principal.
*   `align-items`: Alinha os itens ao longo do eixo transversal.
*   `flex-wrap`: Controla se os itens devem quebrar para a próxima linha.

**Exemplo:**

```html
<div class="container-flex">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>
```
```css
.container-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #ccc;
    height: 150px;
}
.item {
    padding: 10px;
    background-color: lightcoral;
    margin: 5px;
}
```

#### CSS Grid Layout

Um módulo de layout bidimensional (linhas e colunas) que permite criar layouts complexos e responsivos. Ideal para o layout geral de uma página.

**Conceitos Chave:**

*   **Contêiner Grid (`display: grid`):** O elemento pai que contém os itens grid.
*   **Itens Grid:** Os filhos diretos do contêiner grid.
*   **Linhas e Colunas:** Definem a estrutura do grid.
*   **Áreas:** Permitem nomear seções do grid para facilitar o posicionamento.

**Propriedades do Contêiner:**

*   `grid-template-columns`: Define o número e a largura das colunas.
*   `grid-template-rows`: Define o número e a altura das linhas.
*   `grid-gap` (ou `gap`): Espaçamento entre as células do grid.
*   `grid-template-areas`: Permite definir um layout visualmente usando nomes de áreas.

**Exemplo:**

```html
<div class="container-grid">
    <header>Header</header>
    <nav>Nav</nav>
    <main>Main Content</main>
    <footer>Footer</footer>
</div>
```
```css
.container-grid {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "nav main"
        "footer footer";
    gap: 10px;
    height: 300px;
    border: 1px solid #ccc;
}
header { grid-area: header; background-color: lightgreen; padding: 10px; }
nav { grid-area: nav; background-color: lightblue; padding: 10px; }
main { grid-area: main; background-color: lightyellow; padding: 10px; }
footer { grid-area: footer; background-color: lightgray; padding: 10px; }
```

### Transições, Transformações e Animações

#### Transições (`transition`)

Permitem criar efeitos suaves de mudança de estado para propriedades CSS. Quando uma propriedade muda de valor, a transição define como essa mudança ocorre ao longo do tempo.

**Propriedades:**

*   `transition-property`: A propriedade CSS a ser transicionada.
*   `transition-duration`: A duração da transição.
*   `transition-timing-function`: A curva de velocidade da transição (ex: `ease`, `linear`, `ease-in-out`).
*   `transition-delay`: O atraso antes do início da transição.

**Exemplo:**

```css
.botao {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    transition: background-color 0.3s ease-in-out;
}
.botao:hover {
    background-color: darkblue;
}
```

#### Transformações (`transform`)

Permitem manipular a forma e a posição de um elemento no espaço 2D ou 3D sem afetar o layout dos outros elementos.

**Funções Comuns:**

*   `translate(x, y)`: Move o elemento.
*   `rotate(angle)`: Rotaciona o elemento.
*   `scale(x, y)`: Redimensiona o elemento.
*   `skew(x-angle, y-angle)`: Inclina o elemento.

**Exemplo:**

```css
.caixa-transform {
    width: 100px;
    height: 100px;
    background-color: purple;
    transition: transform 0.5s ease;
}
.caixa-transform:hover {
    transform: rotate(45deg) scale(1.2);
}
```

#### Animações (`animation`)

Permitem criar sequências de animação mais complexas e controladas usando `@keyframes`. Você define diferentes estados (quadros-chave) da animação e o navegador interpola entre eles.

**Propriedades:**

*   `animation-name`: Nome da regra `@keyframes`.
*   `animation-duration`: Duração da animação.
*   `animation-timing-function`: Curva de velocidade.
*   `animation-delay`: Atraso.
*   `animation-iteration-count`: Quantas vezes a animação deve ser repetida.
*   `animation-direction`: Direção da animação (normal, reverse, alternate).
*   `animation-fill-mode`: Estilo aplicado ao elemento antes/depois da animação.

**Exemplo:**

```css
@keyframes pulsar {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.elemento-animado {
    width: 50px;
    height: 50px;
    background-color: orange;
    animation: pulsar 2s infinite alternate;
}
```

## Recursos Adicionais

*   [MDN Web Docs - CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
*   [CSS-Tricks - Guia Completo Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
*   [CSS-Tricks - Guia Completo Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
*   [W3Schools - CSS Transitions](https://www.w3schools.com/css/css3_transitions.asp)
*   [W3Schools - CSS Transforms](https://www.w3schools.com/css/css3_transforms.asp)
*   [W3Schools - CSS Animations](https://www.w3schools.com/css/css3_animations.asp)

---



## Semana 3: JavaScript Essencial - A Lógica da Web

### Introdução à Programação

JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos, amplamente utilizada para criar interatividade em páginas web. É a linguagem que dá vida ao front-end, permitindo manipular o HTML e o CSS dinamicamente, responder a eventos do usuário e se comunicar com servidores.

#### Variáveis

Variáveis são contêineres para armazenar dados. Em JavaScript, você pode declarar variáveis usando `var`, `let` ou `const`.

*   `var`: Declara uma variável com escopo de função. Pode ser redeclarada e reatribuída. (Evitar o uso em código moderno).
*   `let`: Declara uma variável com escopo de bloco. Pode ser reatribuída, mas não redeclarada no mesmo escopo.
*   `const`: Declara uma constante com escopo de bloco. Não pode ser redeclarada nem reatribuída após a inicialização. Ideal para valores que não devem mudar.

**Exemplo:**

```javascript
var nome = "João";
let idade = 30;
const PI = 3.14159;

idade = 31; // Válido para let
// PI = 3.14; // Erro: não pode reatribuir uma constante
```

#### Tipos de Dados

JavaScript possui vários tipos de dados:

*   **Primitivos:**
    *   `string`: Texto (ex: "Olá mundo", 'JavaScript').
    *   `number`: Números inteiros e de ponto flutuante (ex: 10, 3.14).
    *   `boolean`: Valores verdadeiros ou falsos (true, false).
    *   `undefined`: Variável declarada, mas sem valor atribuído.
    *   `null`: Representa a ausência intencional de qualquer valor de objeto.
    *   `symbol` (ES6):
    *   `bigint` (ES2020):
*   **Não Primitivos (Objetos):**
    *   `object`: Coleção de pares chave-valor (ex: `{ nome: "Maria", idade: 25 }`).
    *   `array`: Lista ordenada de valores (ex: `[1, 2, 3]`, `["maçã", "banana"]`).
    *   `function`: Bloco de código reutilizável.

**Exemplo:**

```javascript
let texto = "Hello";
let numero = 123;
let isTrue = true;
let indefinido;
let nulo = null;

let pessoa = { nome: "Ana", cidade: "Rio" };
let frutas = ["uva", "pera", "laranja"];
```

#### Operadores

*   **Aritméticos:** `+`, `-`, `*`, `/`, `%` (módulo), `**` (exponenciação).
*   **Atribuição:** `=`, `+=`, `-=`, `*=`.
*   **Comparação:** `==` (igualdade de valor), `===` (igualdade de valor e tipo), `!=`, `!==`, `>`, `<`, `>=`, `<=`. (Sempre preferir `===` e `!==`).
*   **Lógicos:** `&&` (AND), `||` (OR), `!` (NOT).

**Exemplo:**

```javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a > b && a !== b); // true
```

### Estruturas de Controle

Permitem controlar o fluxo de execução do código.

#### Condicionais (`if`, `else if`, `else`)

Executam blocos de código diferentes com base em uma condição.

**Exemplo:**

```javascript
let hora = 14;

if (hora < 12) {
    console.log("Bom dia!");
} else if (hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}
```

#### Laços (`for`, `while`, `do...while`)

Repetem um bloco de código várias vezes.

*   `for`: Ideal para quando você sabe o número de iterações.
    ```javascript
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    // Saída: 0, 1, 2, 3, 4
    ```
*   `while`: Repete enquanto uma condição for verdadeira.
    ```javascript
    let contador = 0;
    while (contador < 3) {
        console.log(contador);
        contador++;
    }
    // Saída: 0, 1, 2
    ```
*   `do...while`: Garante que o bloco de código seja executado pelo menos uma vez.
    ```javascript
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 0);
    // Saída: 0
    ```

### Funções, Escopo e Closures

#### Funções

Blocos de código que podem ser definidos e chamados para executar uma tarefa específica. Promovem a reutilização de código.

**Declaração de Função:**

```javascript
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

console.log(saudacao("Pedro")); // Olá, Pedro!
```

**Expressão de Função:**

```javascript
const somar = function(a, b) {
    return a + b;
};

console.log(somar(5, 3)); // 8
```

#### Escopo

Define a acessibilidade de variáveis, funções e objetos em diferentes partes do seu código.

*   **Escopo Global:** Variáveis declaradas fora de qualquer função são globais e podem ser acessadas de qualquer lugar.
*   **Escopo de Função:** Variáveis declaradas dentro de uma função são locais a essa função e só podem ser acessadas dentro dela.
*   **Escopo de Bloco (com `let` e `const`):** Variáveis declaradas dentro de um bloco (`{}`) são locais a esse bloco.

**Exemplo:**

```javascript
let globalVar = "Sou global";

function minhaFuncao() {
    let funcaoVar = "Sou da função";
    console.log(globalVar);
    console.log(funcaoVar);
}

minhaFuncao();
// console.log(funcaoVar); // Erro: funcaoVar não está definida no escopo global

if (true) {
    let blocoVar = "Sou do bloco";
    console.log(blocoVar);
}
// console.log(blocoVar); // Erro: blocoVar não está definida fora do bloco
```

#### Closures

Uma closure é a combinação de uma função com o ambiente léxico no qual ela foi declarada. Isso significa que uma função 


tem acesso a todas as variáveis e parâmetros da função externa (pai) e do escopo global, mesmo depois que a função externa já terminou sua execução.

**Exemplo:**

```javascript
function criarContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    };
}

const meuContador = criarContador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2
```

Neste exemplo, a função interna anônima "lembra" o ambiente onde foi criada, incluindo a variável `contador`, mesmo após `criarContador()` ter sido executada e retornado. Isso é uma closure.

### Manipulação do DOM (Document Object Model)

O DOM é uma interface de programação para documentos HTML e XML. Ele representa a página como uma estrutura de árvore, onde cada nó é um objeto que representa uma parte do documento (elemento, atributo, texto). O JavaScript pode usar o DOM para acessar e manipular elementos HTML, alterar estilos, adicionar ou remover elementos, e responder a eventos.

#### Selecionando Elementos

*   `document.getElementById('idDoElemento')`: Seleciona um elemento pelo seu ID.
*   `document.querySelector('seletorCSS')`: Seleciona o primeiro elemento que corresponde a um seletor CSS.
*   `document.querySelectorAll('seletorCSS')`: Seleciona todos os elementos que correspondem a um seletor CSS (retorna uma NodeList).
*   `document.getElementsByClassName('nomeDaClasse')`: Seleciona elementos por nome de classe (retorna um HTMLCollection).
*   `document.getElementsByTagName('nomeDaTag')`: Seleciona elementos por nome da tag (retorna um HTMLCollection).

**Exemplo:**

```javascript
const titulo = document.getElementById('meuTitulo');
const primeiroParagrafo = document.querySelector('p');
const todosBotoes = document.querySelectorAll('button');
```

#### Manipulando Conteúdo e Atributos

*   `element.innerHTML`: Obtém ou define o conteúdo HTML de um elemento.
*   `element.textContent`: Obtém ou define o conteúdo de texto de um elemento.
*   `element.setAttribute('atributo', 'valor')`: Define o valor de um atributo.
*   `element.getAttribute('atributo')`: Obtém o valor de um atributo.
*   `element.removeAttribute('atributo')`: Remove um atributo.

**Exemplo:**

```javascript
titulo.textContent = 'Novo Título';
primeiroParagrafo.innerHTML = 'Este é um <strong>parágrafo</strong> atualizado.';

const imagem = document.querySelector('img');
imagem.setAttribute('src', 'nova_imagem.jpg');
```

#### Manipulando Estilos

*   `element.style.propriedadeCSS`: Acessa e modifica estilos inline.
*   `element.classList.add('classe')`: Adiciona uma classe CSS.
*   `element.classList.remove('classe')`: Remove uma classe CSS.
*   `element.classList.toggle('classe')`: Adiciona/remove uma classe CSS.

**Exemplo:**

```javascript
const meuBotao = document.getElementById('meuBotao');
meuBotao.style.backgroundColor = 'green';
meuBotao.classList.add('ativo');
```

#### Eventos

Eventos são ações que acontecem na página web, como cliques do mouse, pressionamento de teclas, carregamento da página, etc. O JavaScript permite que você responda a esses eventos.

*   `element.addEventListener('evento', funcaoManipuladora)`: Anexa uma função a ser executada quando um evento específico ocorre.

**Exemplo:**

```html
<button id="meuBotao">Clique-me</button>
```
```javascript
const meuBotao = document.getElementById('meuBotao');

meuBotao.addEventListener('click', function() {
    alert('Botão clicado!');
});

// Ou com arrow function (ES6)
meuBotao.addEventListener('mouseover', () => {
    console.log('Mouse sobre o botão');
});
```

## Recursos Adicionais

*   [MDN Web Docs - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
*   [JavaScript.info](https://javascript.info/)
*   [FreeCodeCamp - JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)

---



## Semana 4: Ferramentas Essenciais e Controle de Versão

### Introdução ao Git e GitHub

**Git** é um sistema de controle de versão distribuído, amplamente utilizado para rastrear mudanças em arquivos de código-fonte durante o desenvolvimento de software. Ele permite que múltiplos desenvolvedores trabalhem no mesmo projeto sem sobrescrever o trabalho uns dos outros, além de possibilitar o retorno a versões anteriores do código.

**GitHub** é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Além de hospedar repositórios, o GitHub oferece funcionalidades de colaboração, como issues, pull requests, wikis e muito mais, tornando-o essencial para projetos de código aberto e equipes de desenvolvimento.

#### Conceitos Básicos do Git:

*   **Repositório (Repo):** O diretório do projeto onde o Git rastreia as mudanças.
*   **Commit:** Uma "fotografia" das mudanças no seu código em um determinado momento. Cada commit tem uma mensagem que descreve as alterações.
*   **Branch (Ramo):** Uma linha independente de desenvolvimento. Permite que você trabalhe em novas funcionalidades sem afetar a versão principal do projeto.
*   **Merge (Mesclagem):** Combina as mudanças de um branch em outro.
*   **Clone:** Cria uma cópia local de um repositório remoto.
*   **Pull:** Baixa as últimas mudanças de um repositório remoto para o seu repositório local.
*   **Push:** Envia as suas mudanças locais para um repositório remoto.

#### Comandos Essenciais do Git:

*   `git init`: Inicializa um novo repositório Git no diretório atual.
*   `git clone [URL]`: Clona um repositório existente de uma URL.
*   `git add .`: Adiciona todas as mudanças no diretório de trabalho para a área de staging (preparação para o commit).
*   `git commit -m "Mensagem do commit"`: Salva as mudanças preparadas com uma mensagem descritiva.
*   `git status`: Mostra o status do diretório de trabalho e da área de staging.
*   `git log`: Exibe o histórico de commits.
*   `git branch`: Lista os branches locais.
*   `git checkout [nome-do-branch]`: Troca para um branch existente.
*   `git checkout -b [novo-branch]`: Cria um novo branch e troca para ele.
*   `git merge [nome-do-branch]`: Mescla o branch especificado no branch atual.
*   `git pull origin [nome-do-branch]`: Baixa e mescla as mudanças do repositório remoto.
*   `git push origin [nome-do-branch]`: Envia as mudanças locais para o repositório remoto.

**Exemplo de Fluxo de Trabalho Básico:**

1.  `git clone <URL_do_repositorio>`
2.  `git checkout -b minha-nova-feature` (Cria um novo branch para sua funcionalidade)
3.  Faça suas alterações no código.
4.  `git add .`
5.  `git commit -m "Adiciona nova funcionalidade X"`
6.  `git push origin minha-nova-feature` (Envia seu branch para o GitHub)
7.  No GitHub, abra um Pull Request para mesclar `minha-nova-feature` em `main` (ou `master`).
8.  Após a revisão e aprovação, o Pull Request é mesclado.
9.  `git checkout main`
10. `git pull origin main` (Atualiza seu branch local `main` com as últimas mudanças).

### Linha de Comando Básica

O uso da linha de comando (terminal ou prompt de comando) é fundamental para interagir com o Git e outras ferramentas de desenvolvimento. Alguns comandos básicos:

*   `pwd` (Print Working Directory): Mostra o diretório atual.
*   `ls` (List): Lista o conteúdo do diretório atual (`ls -l` para detalhes, `ls -a` para incluir arquivos ocultos).
*   `cd [diretorio]` (Change Directory): Navega para um diretório.
    *   `cd ..`: Volta um nível no diretório.
    *   `cd ~`: Vai para o diretório home do usuário.
*   `mkdir [nome-do-diretorio]`: Cria um novo diretório.
*   `touch [nome-do-arquivo]`: Cria um novo arquivo vazio.
*   `rm [nome-do-arquivo]`: Remove um arquivo.
*   `rm -r [nome-do-diretorio]`: Remove um diretório e seu conteúdo recursivamente.
*   `cp [origem] [destino]`: Copia arquivos ou diretórios.
*   `mv [origem] [destino]`: Move ou renomeia arquivos/diretórios.

### Ambiente de Desenvolvimento: VS Code

**Visual Studio Code (VS Code)** é um editor de código-fonte leve, mas poderoso, desenvolvido pela Microsoft. É altamente personalizável e extensível, tornando-o a escolha preferida de muitos desenvolvedores front-end.

#### Recursos Chave:

*   **IntelliSense:** Autocompletar inteligente para código.
*   **Depuração Integrada:** Ferramentas para depurar seu código diretamente no editor.
*   **Terminal Integrado:** Permite executar comandos de linha de comando sem sair do editor.
*   **Controle de Versão Integrado:** Suporte nativo para Git.
*   **Extensões:** Uma vasta gama de extensões para adicionar funcionalidades, suporte a linguagens, temas, etc.

#### Extensões Úteis para Front-end:

*   **Live Server:** Lança um servidor de desenvolvimento local com recarregamento ao vivo para páginas HTML/CSS/JS.
*   **Prettier - Code formatter:** Formata seu código automaticamente para garantir consistência.
*   **ESLint:** Ajuda a identificar e corrigir problemas de linting em JavaScript/TypeScript.
*   **Bracket Pair Colorizer (ou nativo do VS Code):** Colore pares de colchetes para facilitar a leitura de código aninhado.
*   **Auto Rename Tag:** Renomeia automaticamente a tag de fechamento HTML/XML quando você renomeia a tag de abertura.
*   **Path Intellisense:** Autocompleta nomes de arquivos.

### Introdução a Ferramentas de Build (Conceitos Básicos)

À medida que os projetos front-end crescem, eles se tornam mais complexos, com muitos arquivos JavaScript, CSS, imagens e outros ativos. Ferramentas de build automatizam tarefas como:

*   **Minificação:** Reduzir o tamanho dos arquivos removendo espaços em branco e comentários.
*   **Concatenação:** Combinar vários arquivos em um único para reduzir o número de requisições HTTP.
*   **Transpilação:** Converter código JavaScript moderno (ES6+) para uma versão compatível com navegadores mais antigos (ex: Babel).
*   **Otimização de Imagens:** Reduzir o tamanho das imagens sem perder muita qualidade.
*   **Compilação de Pré-processadores CSS:** Converter SASS/LESS para CSS puro.

#### Webpack (Conceitos Básicos)

**Webpack** é um empacotador de módulos (module bundler) para JavaScript. Ele pega módulos com dependências e os transforma em ativos estáticos para o navegador. É altamente configurável e poderoso, mas pode ter uma curva de aprendizado íngreme.

**Conceitos Chave:**

*   **Entry:** O ponto de entrada do seu aplicativo.
*   **Output:** Onde o Webpack deve emitir os bundles.
*   **Loaders:** Permitem que o Webpack processe arquivos que não são JavaScript (ex: CSS, imagens, TypeScript).
*   **Plugins:** Realizam tarefas mais amplas, como otimização, gerenciamento de ativos e injeção de variáveis de ambiente.

#### Vite (Conceitos Básicos)

**Vite** é uma ferramenta de build de próxima geração que visa fornecer uma experiência de desenvolvimento front-end mais rápida e enxuta. Ele utiliza módulos ES nativos no navegador durante o desenvolvimento, o que elimina a necessidade de empacotamento durante o desenvolvimento e resulta em inicializações de servidor quase instantâneas e atualizações de módulo muito rápidas.

**Vantagens do Vite:**

*   **Inicialização Rápida:** Servidor de desenvolvimento inicia quase instantaneamente.
*   **Hot Module Replacement (HMR) Rápido:** Atualizações de código são refletidas no navegador quase que instantaneamente.
*   **Configuração Simples:** Geralmente requer menos configuração do que o Webpack para projetos básicos.

Para este curso, focaremos nos conceitos básicos e na importância dessas ferramentas, sem nos aprofundarmos em suas configurações complexas, que serão abordadas em módulos mais avançados ou em projetos específicos.

## Recursos Adicionais

*   [Git Handbook - GitHub Guides](https://guides.github.com/introduction/git-handbook/)
*   [Documentação Oficial do Git](https://git-scm.com/doc)
*   [Documentação Oficial do GitHub](https://docs.github.com/)
*   [Visual Studio Code - Documentação](https://code.visualstudio.com/docs)
*   [Webpack - Guia de Conceitos](https://webpack.js.org/concepts/)
*   [Vite - Por que Vite?](https://vitejs.dev/guide/why.html)

---

