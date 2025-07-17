# Módulo 2: JavaScript Avançado e Ecossistema Front-end

## Semana 5: JavaScript Moderno (ES6+)

O ECMAScript 2015 (ES6) marcou um ponto de virada significativo na história do JavaScript, introduzindo uma série de novos recursos e melhorias que tornaram a linguagem mais poderosa, expressiva e fácil de usar. Desde então, novas versões do ECMAScript são lançadas anualmente, adicionando ainda mais funcionalidades. Esta semana abordará os recursos mais importantes do ES6 e versões posteriores que são amplamente utilizados no desenvolvimento front-end moderno.

### Arrow Functions

As Arrow Functions (`=>`) são uma sintaxe mais concisa para escrever expressões de função. Elas são especialmente úteis para funções anônimas e têm um comportamento diferente em relação ao `this`.

**Sintaxe Básica:**

```javascript
// Função tradicional
function somar(a, b) {
    return a + b;
}

// Arrow Function
const somarArrow = (a, b) => a + b;

// Com um único parâmetro, parênteses são opcionais
const dobrar = numero => numero * 2;

// Sem parâmetros, requer parênteses vazios
const saudacao = () => "Olá mundo!";

// Com bloco de código (requer return explícito)
const calcularImposto = (valor) => {
    const imposto = valor * 0.1;
    return valor + imposto;
};
```

**Comportamento do `this`:**

Uma das maiores diferenças das arrow functions é como elas lidam com o `this`. Ao contrário das funções tradicionais, as arrow functions não criam seu próprio `this` binding. Em vez disso, elas herdam o `this` do escopo pai (lexical `this`). Isso é particularmente útil em callbacks e métodos de objetos.

```javascript
const pessoa = {
    nome: "Carlos",
    saudarTradicional: function() {
        setTimeout(function() {
            // 'this' aqui se refere ao objeto global (window no navegador) ou undefined em modo estrito
            console.log(`Olá, ${this.nome}`);
        }, 1000);
    },
    saudarArrow: function() {
        setTimeout(() => {
            // 'this' aqui herda o 'this' de 'saudarArrow', que é 'pessoa'
            console.log(`Olá, ${this.nome}`);
        }, 1000);
    }
};

pessoa.saudarTradicional(); // Olá, undefined (ou erro em modo estrito)
pessoa.saudarArrow();     // Olá, Carlos
```

### Classes

ES6 introduziu a sintaxe `class` para criar objetos e lidar com herança de forma mais clara e orientada a objetos, embora internamente ainda utilize o modelo de protótipos do JavaScript. Classes são "açúcar sintático" sobre as funções construtoras e protótipos existentes.

**Sintaxe Básica:**

```javascript
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerBarulho() {
        console.log(`${this.nome} faz um barulho.`);
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome); // Chama o construtor da classe pai (Animal)
        this.raca = raca;
    }

    fazerBarulho() {
        console.log(`${this.nome} (${this.raca}) late!`);
    }

    static info() {
        console.log("Esta é uma classe de cachorro.");
    }
}

const meuCachorro = new Cachorro("Rex", "Labrador");
meuCachorro.fazerBarulho(); // Rex (Labrador) late!

Animal.info(); // Erro: info não é um método estático de Animal
Cachorro.info(); // Esta é uma classe de cachorro.
```

*   **`constructor`:** Um método especial para criar e inicializar um objeto criado com uma classe.
*   **`extends`:** Usado para criar uma subclasse de outra classe.
*   **`super()`:** Usado para chamar o construtor da classe pai.
*   **Métodos Estáticos:** Métodos que pertencem à classe em si, não às instâncias da classe. São chamados diretamente na classe (ex: `Cachorro.info()`).

### Módulos

ES6 introduziu um sistema de módulos nativo para JavaScript, permitindo organizar o código em arquivos separados e reutilizáveis. Isso ajuda a evitar conflitos de nomes e a gerenciar dependências de forma mais eficiente. Os módulos usam as palavras-chave `import` e `export`.

**Exportando (em `utils.js`):**

```javascript
// Exportação nomeada
export const PI = 3.14159;

export function somar(a, b) {
    return a + b;
}

// Exportação padrão (apenas uma por arquivo)
export default class Calculadora {
    multiplicar(a, b) {
        return a * b;
    }
}
```

**Importando (em `main.js`):**

```javascript
// Importação nomeada
import { PI, somar } from './utils.js';
console.log(PI);
console.log(somar(2, 3));

// Importação padrão (pode ter qualquer nome)
import MinhaCalculadora from './utils.js';
const calc = new MinhaCalculadora();
console.log(calc.multiplicar(4, 5));

// Importar tudo como um objeto
import * as Utils from './utils.js';
console.log(Utils.PI);
```

Para que os módulos funcionem no navegador, você precisa usar `type="module"` na tag script:

```html
<script type="module" src="main.js"></script>
```

### Promises, Async/Await para Programação Assíncrona

JavaScript é single-threaded, o que significa que ele executa uma tarefa por vez. No entanto, operações como requisições de rede ou leitura de arquivos são assíncronas, ou seja, elas não bloqueiam a execução do código. Promises e `async/await` são ferramentas modernas para lidar com operações assíncronas de forma mais organizada e legível.

#### Promises

Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. Uma Promise pode estar em um dos três estados:

*   **Pending (Pendente):** Estado inicial, nem cumprida nem rejeitada.
*   **Fulfilled (Cumprida):** A operação foi concluída com sucesso.
*   **Rejected (Rejeitada):** A operação falhou.

**Sintaxe Básica:**

```javascript
const minhaPromise = new Promise((resolve, reject) => {
    // Simula uma operação assíncrona
    setTimeout(() => {
        const sucesso = true;
        if (sucesso) {
            resolve("Dados obtidos com sucesso!");
        } else {
            reject("Erro ao obter dados.");
        }
    }, 2000);
});

minhaPromise
    .then(resultado => {
        console.log(resultado); // Dados obtidos com sucesso!
    })
    .catch(erro => {
        console.error(erro); // Erro ao obter dados.
    })
    .finally(() => {
        console.log("Operação finalizada.");
    });
```

#### Async/Await

`async/await` é uma sintaxe construída sobre Promises que torna o código assíncrono mais fácil de ler e escrever, parecendo-se mais com código síncrono. Uma função declarada com `async` sempre retorna uma Promise. A palavra-chave `await` só pode ser usada dentro de uma função `async` e faz com que a execução da função pause até que a Promise seja resolvida.

**Sintaxe Básica:**

```javascript
async function buscarDados() {
    try {
        console.log("Iniciando busca de dados...");
        const resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const dados = await resposta.json();
        console.log("Dados:", dados);
    } catch (erro) {
        console.error("Ocorreu um erro:", erro);
    } finally {
        console.log("Função buscarDados finalizada.");
    }
}

buscarDados();
```

### Desestruturação, Spread/Rest Operators

#### Desestruturação (Destructuring Assignment)

Permite extrair valores de arrays ou propriedades de objetos em variáveis separadas de forma concisa.

**Desestruturação de Objetos:**

```javascript
const usuario = {
    nome: "Alice",
    idade: 28,
    cidade: "São Paulo"
};

const { nome, idade } = usuario;
console.log(nome);  // Alice
console.log(idade); // 28

// Renomeando variáveis
const { nome: nomeCompleto, cidade } = usuario;
console.log(nomeCompleto); // Alice
console.log(cidade);      // São Paulo
```

**Desestruturação de Arrays:**

```javascript
const cores = ["vermelho", "verde", "azul"];

const [primeiraCor, segundaCor] = cores;
console.log(primeiraCor); // vermelho
console.log(segundaCor);  // verde

// Ignorando elementos
const [, , terceiraCor] = cores;
console.log(terceiraCor); // azul
```

#### Spread Operator (`...`)

O operador spread (`...`) é usado para expandir um iterável (como um array ou string) em elementos individuais, ou para expandir um objeto em pares chave-valor.

**Com Arrays:**

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinado = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

const copiaArr = [...arr1]; // Cria uma cópia rasa do array
```

**Com Objetos:**

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinadoObj = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

const copiaObj = { ...obj1 }; // Cria uma cópia rasa do objeto

// Sobrescrevendo propriedades
const novoObj = { ...obj1, b: 20 }; // { a: 1, b: 20 }
```

#### Rest Operator (`...`)

O operador rest (`...`) é usado em parâmetros de função para coletar todos os argumentos restantes em um array. Também pode ser usado na desestruturação para coletar os elementos restantes.

**Em Parâmetros de Função:**

```javascript
function somarTudo(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(somarTudo(1, 2, 3));       // 6
console.log(somarTudo(10, 20, 30, 40)); // 100
```

**Na Desestruturação:**

```javascript
const [primeiro, segundo, ...restante] = [1, 2, 3, 4, 5];
console.log(primeiro);  // 1
console.log(segundo);   // 2
console.log(restante);  // [3, 4, 5]

const { a, ...outros } = { a: 1, b: 2, c: 3 };
console.log(a);       // 1
console.log(outros);  // { b: 2, c: 3 }
```

## Recursos Adicionais

*   [ES6 Features - W3Schools](https://www.w3schools.com/js/js_es6.asp)
*   [JavaScript.info - The Modern JavaScript Tutorial](https://javascript.info/)
*   [MDN Web Docs - Arrow functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
*   [MDN Web Docs - Classes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
*   [MDN Web Docs - import](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
*   [MDN Web Docs - export](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
*   [MDN Web Docs - Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
*   [MDN Web Docs - async function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function)
*   [MDN Web Docs - Destructuring assignment](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
*   [MDN Web Docs - Spread syntax](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---



## Semana 6: Introdução a Frameworks JavaScript

À medida que as aplicações web se tornam mais complexas, o uso de JavaScript puro para manipular o DOM e gerenciar o estado da aplicação pode se tornar inviável e difícil de manter. É aí que entram os frameworks e bibliotecas JavaScript. Eles fornecem uma estrutura organizada, padrões de design e ferramentas que simplificam o desenvolvimento de interfaces de usuário interativas e escaláveis.

### Visão Geral dos Principais Frameworks (React, Angular, Vue)

Existem diversos frameworks e bibliotecas JavaScript populares no mercado, cada um com suas características, filosofias e ecossistemas. Os três mais proeminentes e amplamente utilizados são React, Angular e Vue.js.

#### React.js

*   **Tipo:** Biblioteca JavaScript para construir interfaces de usuário.
*   **Desenvolvedor:** Mantido pelo Facebook (agora Meta).
*   **Filosofia:** Focado na criação de componentes reutilizáveis e declarativos. Utiliza um "Virtual DOM" para otimizar as atualizações da interface, tornando-as muito eficientes.
*   **Curva de Aprendizado:** Relativamente fácil de começar, mas pode se tornar complexo com o gerenciamento de estado em aplicações maiores (geralmente resolvido com bibliotecas como Redux ou Context API).
*   **Ecossistema:** Possui um ecossistema vasto e vibrante, com muitas bibliotecas e ferramentas de terceiros.
*   **Casos de Uso:** Ideal para Single Page Applications (SPAs), aplicações móveis (React Native) e interfaces de usuário complexas.

**Vantagens:**
*   Componentização e reusabilidade.
*   Virtual DOM para performance.
*   Grande comunidade e muitos recursos.
*   Flexibilidade para escolher outras bibliotecas.

**Desvantagens:**
*   Não é um framework "completo" (precisa de outras bibliotecas para roteamento, gerenciamento de estado, etc.).
*   A rápida evolução pode exigir aprendizado contínuo.

#### Angular

*   **Tipo:** Framework JavaScript completo (full-fledged) para construir aplicações web complexas.
*   **Desenvolvedor:** Mantido pelo Google.
*   **Filosofia:** Baseado em TypeScript e segue uma abordagem mais opinativa e estruturada, com um conjunto de ferramentas e padrões bem definidos (MVVM - Model-View-ViewModel).
*   **Curva de Aprendizado:** Mais íngreme que o React ou Vue, devido à sua complexidade e ao uso de TypeScript e conceitos como injeção de dependência.
*   **Ecossistema:** Oferece uma solução completa "out-of-the-box" para a maioria das necessidades de desenvolvimento.
*   **Casos de Uso:** Ideal para aplicações empresariais grandes e complexas, com equipes maiores e necessidade de padronização.

**Vantagens:**
*   Framework completo com tudo incluído.
*   Forte tipagem com TypeScript, que ajuda na manutenção de código grande.
*   Suporte robusto do Google.
*   Estrutura bem definida, facilitando a colaboração em grandes equipes.

**Desvantagens:**
*   Curva de aprendizado mais alta.
*   Menos flexível que o React.
*   Pode gerar bundles maiores.

#### Vue.js

*   **Tipo:** Framework progressivo para construir interfaces de usuário.
*   **Desenvolvedor:** Criado por Evan You e mantido por uma comunidade.
*   **Filosofia:** Projetado para ser incrementalmente adotável. Você pode usá-lo para aprimorar pequenas partes de uma página ou para construir SPAs completas. Combina o melhor do React (reatividade baseada em componentes) e do Angular (estrutura e ferramentas).
*   **Curva de Aprendizado:** Considerado o mais fácil de aprender entre os três, com uma documentação excelente.
*   **Ecossistema:** Crescendo rapidamente, com ferramentas oficiais para roteamento (Vue Router) e gerenciamento de estado (Vuex).
*   **Casos de Uso:** Versátil, adequado para projetos de todos os tamanhos, desde pequenas integrações até grandes aplicações.

**Vantagens:**
*   Fácil de aprender e usar.
*   Performance otimizada.
*   Flexibilidade e incrementalidade.
*   Documentação clara e comunidade acolhedora.

**Desvantagens:**
*   Comunidade menor que React e Angular (mas em rápido crescimento).
*   Menos recursos de terceiros que o React.

### Escolha do Framework Principal para o Curso (React.js)

Para este curso, o **React.js** será o framework principal. A escolha se baseia em vários fatores:

1.  **Popularidade e Demanda de Mercado:** React é consistentemente um dos frameworks mais procurados no mercado de trabalho para desenvolvedores front-end. Aprender React abre muitas portas para oportunidades de emprego.
2.  **Flexibilidade:** Sua natureza de biblioteca permite que os alunos entendam como diferentes peças do ecossistema front-end se encaixam (roteamento, gerenciamento de estado, etc.), proporcionando uma base mais sólida para aprender outras tecnologias no futuro.
3.  **Comunidade Ativa:** A vasta comunidade React significa que há uma abundância de recursos, tutoriais, bibliotecas e suporte disponíveis, o que é crucial para o aprendizado e a resolução de problemas.
4.  **Integração com IA:** React é altamente compatível com a integração de funcionalidades de IA, seja através de bibliotecas JavaScript no navegador (como TensorFlow.js) ou consumindo APIs de IA de backend.

Embora o foco seja React, os conceitos fundamentais de componentes, estado, props e ciclo de vida são transferíveis para outros frameworks, facilitando o aprendizado futuro de Angular, Vue ou outras tecnologias.

### Configuração de um Projeto React Básico

Existem várias maneiras de iniciar um projeto React. A forma mais comum e recomendada para iniciantes é usar o `Create React App` (CRA) ou, mais recentemente, o `Vite`.

#### Usando Create React App (CRA)

O CRA é uma ferramenta oficial mantida pela equipe do React que configura um ambiente de desenvolvimento React sem a necessidade de configuração manual de ferramentas de build como Webpack ou Babel. É excelente para aprender React rapidamente.

**Passos:**

1.  **Pré-requisito:** Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.
2.  **Criar um novo projeto React:**
    ```bash
    npx create-react-app meu-primeiro-app-react
    # ou com yarn
    # yarn create react-app meu-primeiro-app-react
    ```
    Este comando criará um novo diretório `meu-primeiro-app-react` com toda a estrutura de arquivos necessária.
3.  **Navegar para o diretório do projeto:**
    ```bash
    cd meu-primeiro-app-react
    ```
4.  **Iniciar o servidor de desenvolvimento:**
    ```bash
    npm start
    # ou com yarn
    # yarn start
    ```
    Isso abrirá seu aplicativo React no navegador (geralmente em `http://localhost:3000`). O servidor de desenvolvimento possui "Hot Module Reloading" (HMR), o que significa que as alterações no seu código serão refletidas instantaneamente no navegador sem a necessidade de recarregar a página.

#### Usando Vite (Alternativa mais rápida e moderna)

O Vite é uma ferramenta de build de próxima geração que oferece uma experiência de desenvolvimento front-end muito mais rápida, especialmente para projetos maiores. Ele é agnóstico a frameworks e pode ser usado com React, Vue, Svelte, etc.

**Passos:**

1.  **Pré-requisito:** Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.
2.  **Criar um novo projeto Vite com React:**
    ```bash
    npm create vite@latest meu-vite-app -- --template react
    # ou com yarn
    # yarn create vite meu-vite-app --template react
    # ou com pnpm
    # pnpm create vite meu-vite-app --template react
    ```
    Siga as instruções no terminal para escolher o framework (React) e a variante (JavaScript ou TypeScript).
3.  **Navegar para o diretório do projeto:**
    ```bash
    cd meu-vite-app
    ```
4.  **Instalar dependências:**
    ```bash
    npm install
    # ou yarn
    # yarn
    # ou pnpm
    # pnpm install
    ```
5.  **Iniciar o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou yarn
    # yarn dev
    # ou pnpm
    # pnpm dev
    ```
    Isso também abrirá seu aplicativo React no navegador (geralmente em `http://localhost:5173`). O Vite é notavelmente mais rápido na inicialização e no HMR.

Para os projetos do curso, você pode escolher entre CRA e Vite, mas o Vite é recomendado para uma experiência de desenvolvimento mais ágil.

## Recursos Adicionais

*   [Documentação Oficial do React](https://react.dev/)
*   [Documentação Oficial do Angular](https://angular.io/)
*   [Documentação Oficial do Vue.js](https://vuejs.org/)
*   [Create React App](https://create-react-app.dev/)
*   [Vite - Guia](https://vitejs.dev/guide/)

---



## Semana 7: React.js - Componentes e Props

No coração do React está o conceito de **componentes**. Componentes são blocos de construção independentes e reutilizáveis que encapsulam sua própria lógica e UI. Eles permitem que você divida a interface do usuário em partes menores e gerenciáveis, facilitando o desenvolvimento, a manutenção e a reutilização do código.

### Conceitos de Componentes Funcionais e de Classe

Historicamente, o React tinha dois tipos principais de componentes: componentes de classe e componentes funcionais. Com a introdução dos Hooks no React 16.8, os componentes funcionais se tornaram a forma preferida de escrever componentes, pois oferecem a mesma funcionalidade dos componentes de classe de uma forma mais simples e concisa.

#### Componentes de Classe (Legacy)

*   São classes JavaScript que estendem `React.Component`.
*   Possuem um método `render()` que retorna o JSX a ser renderizado.
*   Podem ter estado interno (`this.state`) e métodos de ciclo de vida (`componentDidMount`, `componentDidUpdate`, etc.).
*   São mais verbosos e podem ser mais difíceis de ler e entender.

**Exemplo de Componente de Classe:**

```jsx
import React from 'react';

class SaudacaoClasse extends React.Component {
    render() {
        return (
            <h1>Olá, {this.props.nome}!</h1>
        );
    }
}

export default SaudacaoClasse;
```

#### Componentes Funcionais (Preferidos)

*   São funções JavaScript simples que recebem `props` como argumento e retornam JSX.
*   Inicialmente, eram chamados de "componentes sem estado" porque não podiam ter estado interno ou métodos de ciclo de vida.
*   Com a introdução dos Hooks, eles agora podem gerenciar estado e efeitos colaterais, tornando-os tão poderosos quanto os componentes de classe, mas mais fáceis de escrever e raciocinar.

**Exemplo de Componente Funcional:**

```jsx
import React from 'react';

function SaudacaoFuncional(props) {
    return (
        <h1>Olá, {props.nome}!</h1>
    );
}

export default SaudacaoFuncional;

// Ou usando Arrow Function (mais comum)
const SaudacaoArrow = (props) => {
    return (
        <h1>Olá, {props.nome}!</h1>
    );
};

export default SaudacaoArrow;
```

Para este curso, focaremos principalmente em **componentes funcionais** devido à sua simplicidade e ao uso generalizado de Hooks no desenvolvimento React moderno.

### JSX (JavaScript XML)

JSX é uma extensão de sintaxe para JavaScript que permite escrever HTML dentro do JavaScript. Ele é usado no React para descrever como a UI deve ser. Embora pareça HTML, o JSX é na verdade uma sintaxe que será transpilada para chamadas de função JavaScript (como `React.createElement()`) por ferramentas como Babel.

**Características do JSX:**

*   **Sintaxe similar ao HTML:** Facilita a visualização da estrutura da UI.
*   **Expressões JavaScript:** Você pode incorporar expressões JavaScript dentro do JSX usando chaves `{}`.
*   **Atributos de Elementos:** Atributos HTML são escritos em camelCase (ex: `className` em vez de `class`, `htmlFor` em vez de `for`).
*   **Elementos Vazios:** Elementos que não têm filhos devem ser fechados com `/>` (ex: `<img />`, `<input />`).
*   **Fragmentos:** Componentes React devem retornar um único elemento raiz. Se você precisar retornar múltiplos elementos sem adicionar um nó extra ao DOM, use `<React.Fragment>` ou a sintaxe abreviada `<></>`. `[1]`

**Exemplo de JSX:**

```jsx
import React from 'react';

function App() {
    const nome = "Mundo";
    const isLogado = true;

    return (
        <div>
            <h1>Bem-vindo, {nome}!</h1>
            {
                // Expressão JavaScript condicional dentro do JSX
                isLogado ? <p>Você está logado.</p> : <p>Por favor, faça login.</p>
            }
            <button onClick={() => alert("Botão clicado!")}>Clique-me</button>
            <img src="logo.png" alt="Logo" />
            <input type="text" placeholder="Digite algo" />
        </div>
    );
}

export default App;
```

### Props: Passando Dados entre Componentes

**Props** (abreviação de "properties") são a forma como você passa dados de um componente pai para um componente filho no React. As props são somente leitura, o que significa que um componente filho não deve modificar as props que recebeu de seu pai. Isso garante um fluxo de dados unidirecional e previsível, facilitando o rastreamento de como os dados mudam na aplicação.

#### Como Passar Props

Você passa props para um componente filho como atributos HTML ao usá-lo no JSX.

**Componente Pai (`App.js`):**

```jsx
import React from 'react';
import Saudacao from './Saudacao'; // Importa o componente filho

function App() {
    const usuario = "Alice";
    const idade = 49;

    return (
        <div>
            <Saudacao nome={usuario} />
            <Saudacao nome="Bob" />
            <Saudacao nome="Você" idade={idade} />
        </div>
    );
}

export default App;
```

#### Como Receber Props

Em um componente funcional, as props são recebidas como o primeiro argumento da função.

**Componente Filho (`Saudacao.js`):**

```jsx
import React from 'react';

const Saudacao = (props) => {
    return (
        <div>
            <h2>Olá, {props.nome}!</h2>
            {props.idade && <p>Sua idade é: {props.idade} anos.</p>}
        </div>
    );
};

export default Saudacao;
```

#### Desestruturação de Props

É uma prática comum desestruturar as props diretamente na assinatura da função para tornar o código mais limpo e legível.

```jsx
import React from 'react';

const Saudacao = ({ nome, idade }) => {
    return (
        <div>
            <h2>Olá, {nome}!</h2>
            {idade && <p>Sua idade é: {idade} anos.</p>}
        </div>
    );
};

export default Saudacao;
```

#### Props Padrão (Default Props)

Você pode definir valores padrão para as props caso elas não sejam passadas pelo componente pai. Isso é útil para garantir que seu componente sempre tenha um valor para uma prop, mesmo que ela seja opcional.

```jsx
import React from 'react';

const Saudacao = ({ nome = "Visitante" }) => {
    return (
        <h2>Olá, {nome}!</h2>
    );
};

export default Saudacao;

// No componente pai:
// <Saudacao /> // Renderiza 


Olá, Visitante!
// <Saudacao nome="Pedro" /> // Renderiza Olá, Pedro!
```

### Estado (State) e Ciclo de Vida de Componentes

#### Estado (State)

Enquanto as `props` são usadas para passar dados de um componente pai para um filho e são imutáveis para o componente filho, o **estado (state)** é um objeto JavaScript que permite que um componente gerencie seus próprios dados internos que podem mudar ao longo do tempo. Quando o estado de um componente muda, o React automaticamente re-renderiza o componente e seus filhos, refletindo as novas informações na UI.

Em componentes funcionais, o estado é gerenciado usando o Hook `useState`.

**Exemplo com `useState`:**

```jsx
import React, { useState } from 'react';

function Contador() {
    // Declara uma nova variável de estado chamada 



`count` e uma função `setCount` para atualizá-la.
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>
                Clique-me
            </button>
            <button onClick={() => setCount(0)}>
                Resetar
            </button>
        </div>
    );
}

export default Contador;
```

*   `useState(0)`: Inicializa a variável de estado `count` com o valor `0`.
*   `setCount(count + 1)`: É a função usada para atualizar o estado. Quando `setCount` é chamada, o React re-renderiza o componente `Contador` com o novo valor de `count`.

#### Ciclo de Vida de Componentes (Conceitos)

Componentes React passam por um "ciclo de vida" de montagem, atualização e desmontagem. Embora os componentes de classe tivessem métodos de ciclo de vida específicos (como `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`), em componentes funcionais, esses efeitos colaterais são gerenciados principalmente pelo Hook `useEffect` (que será abordado na próxima semana).

**Fases do Ciclo de Vida (Conceitual):**

1.  **Montagem (Mounting):** O componente é criado e inserido no DOM.
    *   Ocorre a inicialização do estado e das props.
    *   Renderização inicial do componente.
    *   Execução de efeitos que precisam ser feitos apenas uma vez após a primeira renderização (ex: requisições de dados).
2.  **Atualização (Updating):** O componente é re-renderizado devido a mudanças em suas props ou estado.
    *   Ocorre sempre que o estado ou as props do componente mudam.
    *   O React compara o Virtual DOM antigo com o novo e atualiza apenas o que mudou no DOM real.
    *   Execução de efeitos que precisam reagir a mudanças específicas.
3.  **Desmontagem (Unmounting):** O componente é removido do DOM.
    *   Ocorre quando o componente não é mais necessário.
    *   Execução de funções de limpeza (ex: remover event listeners, cancelar timers).

Entender o ciclo de vida é crucial para saber quando e onde executar certas operações (como buscar dados, configurar event listeners, limpar recursos).

## Recursos Adicionais

*   [Documentação Oficial do React - Componentes e Props](https://react.dev/learn/passing-props-to-a-component)
*   [Documentação Oficial do React - Renderizando Elementos](https://react.dev/learn/render-and-commit)
*   [Documentação Oficial do React - State: um Hook de Estado](https://react.dev/reference/react/useState)
*   [Documentação Oficial do React - Ciclo de Vida de Componentes (para referência, embora focado em classes)](https://react.dev/learn/lifecycle-of-reactive-effects)

---



## Semana 8: React.js - Hooks e Gerenciamento de Estado

Os Hooks são funções especiais que permitem que você "engate" nos recursos de estado e ciclo de vida do React a partir de componentes funcionais. Eles foram introduzidos no React 16.8 para resolver problemas como a complexidade de componentes de classe, a reutilização de lógica com estado e a dificuldade de compartilhar lógica entre componentes. Os Hooks tornam o código mais legível, conciso e fácil de testar.

### Introdução aos Hooks (useState, useEffect, useContext)

#### `useState`

Já vimos o `useState` na semana anterior. Ele permite adicionar estado a componentes funcionais. Ele retorna um par: o valor atual do estado e uma função para atualizá-lo.

**Sintaxe:** `const [estado, setEstado] = useState(valorInicial);`

**Exemplo:**

```jsx
import React, { useState } from 'react';

function ExemploUseState() {
    const [nome, setNome] = useState("Visitante");
    const [idade, setIdade] = useState(0);

    return (
        <div>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <input
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}
                placeholder="Digite seu nome"
            />
            <button onClick={() => setIdade(idade + 1)}>Aumentar Idade</button>
        </div>
    );
}

export default ExemploUseState;
```

#### `useEffect`

O `useEffect` é um Hook que permite executar "efeitos colaterais" em componentes funcionais. Efeitos colaterais são operações que não fazem parte do fluxo de renderização principal, como requisições de dados, manipulação direta do DOM, subscriptions ou timers. Ele substitui os métodos de ciclo de vida `componentDidMount`, `componentDidUpdate` e `componentWillUnmount` dos componentes de classe.

**Sintaxe:** `useEffect(() => { /* código do efeito */ }, [dependencias]);`

*   O primeiro argumento é uma função que contém o código do efeito.
*   O segundo argumento (opcional) é um array de dependências. O efeito será re-executado apenas se alguma das dependências mudar entre as renderizações.

**Casos de Uso do `useEffect`:**

1.  **Executar apenas uma vez (ao montar):** Passe um array vazio `[]` como dependência. Isso simula `componentDidMount`.
    ```jsx
    useEffect(() => {
        console.log("Componente montado!");
        // Ex: buscar dados de uma API
    }, []);
    ```
2.  **Executar a cada renderização (sem dependências):** Omita o segundo argumento. O efeito será executado após cada renderização.
    ```jsx
    useEffect(() => {
        console.log("Componente renderizado ou atualizado!");
    });
    ```
3.  **Executar quando uma dependência muda:** Inclua as variáveis no array de dependências. O efeito será re-executado quando qualquer uma delas mudar.
    ```jsx
    useEffect(() => {
        console.log(`O contador mudou para: ${count}`);
    }, [count]); // Executa sempre que 'count' muda
    ```
4.  **Limpeza (simulando `componentWillUnmount`):** Retorne uma função de limpeza do `useEffect`. Esta função será executada antes da próxima execução do efeito ou quando o componente for desmontado.
    ```jsx
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Tick");
        }, 1000);

        return () => {
            // Função de limpeza: executada ao desmontar ou antes do próximo efeito
            clearInterval(timer);
            console.log("Timer limpo!");
        };
    }, []);
    ```

**Exemplo Completo com `useEffect`:**

```jsx
import React, { useState, useEffect } from 'react';

function ExemploUseEffect() {
    const [contador, setContador] = useState(0);
    const [nome, setNome] = useState("");

    // Efeito 1: Executa apenas uma vez ao montar o componente
    useEffect(() => {
        console.log("Componente montado! Buscando dados iniciais...");
        // Simula uma chamada de API
        setTimeout(() => {
            console.log("Dados iniciais carregados.");
        }, 1000);

        return () => {
            console.log("Componente desmontado!");
        };
    }, []);

    // Efeito 2: Executa sempre que 'contador' muda
    useEffect(() => {
        document.title = `Contador: ${contador}`;
        console.log(`Título da página atualizado para: Contador: ${contador}`);
    }, [contador]);

    // Efeito 3: Executa sempre que 'nome' muda
    useEffect(() => {
        console.log(`Nome digitado: ${nome}`);
    }, [nome]);

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <input
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}
                placeholder="Digite algo"
            />
        </div>
    );
}

export default ExemploUseEffect;
```

#### `useContext`

O `useContext` é um Hook que permite que você se inscreva no contexto do React. O Context API é uma forma de compartilhar dados que podem ser considerados "globais" para uma árvore de componentes React, como o tema atual, o usuário autenticado ou as configurações de idioma, sem a necessidade de passar props manualmente em cada nível da árvore (prop drilling).

**Passos para usar `useContext`:**

1.  **Criar um Contexto:** Use `React.createContext()`.
2.  **Prover um Valor:** Use o `Provider` do Contexto para envolver os componentes que precisam acessar o valor.
3.  **Consumir o Valor:** Use o Hook `useContext()` no componente filho para acessar o valor.

**Exemplo:**

```jsx
// 1. Criar o Contexto (ThemeContext.js)
import React from 'react';

const ThemeContext = React.createContext("light"); // Valor padrão

export default ThemeContext;

// 2. Prover o Valor (App.js)
import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ComponenteFilho from './ComponenteFilho';

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
                <h1>Aplicação com Tema</h1>
                <ComponenteFilho />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;

// 3. Consumir o Valor (ComponenteFilho.js)
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ComponenteFilho() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <p>Tema atual: {theme}</p>
            <button onClick={toggleTheme}>Alternar Tema</button>
        </div>
    );
}

export default ComponenteFilho;
```

### Gerenciamento de Estado com Context API ou Redux (Conceitos Básicos)

Para aplicações maiores, o gerenciamento de estado pode se tornar complexo. O React oferece ferramentas para lidar com isso.

#### Context API

Como visto acima, o Context API é uma solução nativa do React para passar dados através da árvore de componentes sem ter que passar props manualmente em cada nível. É ideal para dados que são consumidos por muitos componentes em diferentes níveis de aninhamento.

**Vantagens:**
*   Nativo do React, não precisa instalar bibliotecas externas.
*   Simples de usar para casos de uso de estado global menos complexos.

**Desvantagens:**
*   Pode levar a re-renderizações desnecessárias se o contexto for atualizado com frequência e muitos componentes o consomem.
*   Não oferece as ferramentas de depuração e o ecossistema robusto de uma biblioteca como o Redux para estados muito complexos.

#### Redux (Conceitos Básicos)

Redux é uma biblioteca de gerenciamento de estado previsível para aplicações JavaScript. Ele é frequentemente usado com React, mas pode ser usado com qualquer framework ou biblioteca de UI. O Redux segue um padrão de arquitetura chamado "Flux" e é baseado em três princípios fundamentais:

1.  **Single source of truth:** O estado de toda a sua aplicação é armazenado em uma única "store" (loja).
2.  **State is read-only:** A única maneira de mudar o estado é emitindo uma "action" (ação), um objeto que descreve o que aconteceu.
3.  **Changes are made with pure functions:** Para especificar como a árvore de estado é transformada pelas ações, você escreve "reducers" (redutores) puros.

**Componentes Principais do Redux:**

*   **Store:** O objeto que mantém o estado da aplicação. Você só tem uma store em uma aplicação Redux.
*   **Actions:** Objetos JavaScript simples que descrevem o que aconteceu. Eles são o único modo de enviar dados para a store.
*   **Reducers:** Funções puras que recebem o estado atual e uma ação, e retornam o novo estado. Eles nunca devem modificar o estado diretamente, mas sim retornar um novo objeto de estado.
*   **Dispatch:** Método da store que envia uma action para o reducer.

**Fluxo de Dados no Redux:**

1.  A UI despacha uma **Action** (ex: `dispatch({ type: 'INCREMENT' })`).
2.  A Action chega ao **Reducer**.
3.  O Reducer, com base na Action e no **Estado** atual, calcula um **Novo Estado**.
4.  A **Store** é atualizada com o Novo Estado.
5.  A UI reage à mudança de estado e se **re-renderiza**.

**Vantagens do Redux:**
*   Estado centralizado e previsível, facilitando a depuração.
*   Ferramentas de desenvolvimento poderosas (Redux DevTools).
*   Grande ecossistema de middlewares e extensões.
*   Ideal para aplicações grandes com estado complexo e muitas interações.

**Desvantagens:**
*   Mais boilerplate (código repetitivo) e conceitos para aprender.
*   Pode ser um exagero para aplicações pequenas ou médias.

Para este curso, o foco será no `useState` e `useEffect` para gerenciamento de estado em componentes, e no `useContext` para compartilhamento de estado global simples. O Redux será apresentado conceitualmente como uma alternativa para gerenciamento de estado mais complexo, mas não será aprofundado na prática, para manter o escopo do curso focado no essencial para iniciantes.

### Roteamento com React Router

Em Single Page Applications (SPAs), o conteúdo da página é carregado dinamicamente sem a necessidade de recarregar a página inteira. Para simular a navegação entre diferentes "páginas" ou "visualizações" dentro de uma SPA, usamos bibliotecas de roteamento. O **React Router** é a solução de roteamento mais popular para React.

**Conceitos Chave:**

*   **`BrowserRouter`:** O roteador principal que usa a API de histórico do HTML5 para manter a UI sincronizada com a URL.
*   **`Routes`:** Um contêiner para um conjunto de `Route`s. Ele renderiza a primeira `Route` que corresponde ao URL atual.
*   **`Route`:** Define um caminho (`path`) e o componente a ser renderizado quando esse caminho é correspondido.
*   **`Link`:** Um componente para criar links de navegação. Ele impede o recarregamento completo da página.
*   **`useNavigate` (Hook):** Um Hook para navegação programática (ex: após um login bem-sucedido).
*   **`useParams` (Hook):** Um Hook para acessar parâmetros da URL (ex: `/produtos/:id`).

**Instalação:**

```bash
npm install react-router-dom
# ou yarn add react-router-dom
```

**Exemplo Básico:**

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

// Componentes de Página
const Home = () => <h2>Página Inicial</h2>;
const Sobre = () => <h2>Sobre Nós</h2>;
const Contato = () => <h2>Entre em Contato</h2>;

const Usuario = () => {
    const { id } = useParams(); // Acessa o parâmetro 'id' da URL
    return <h2>Perfil do Usuário: {id}</h2>;
};

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Página Não Encontrada</h2>
            <button onClick={() => navigate('/')}>Voltar para Home</button>
        </div>
    );
};

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li>
                        <Link to="/usuario/123">Usuário 123</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/usuario/:id" element={<Usuario />} />
                <Route path="*" element={<NotFound />} /> {/* Rota para 404 */}
            </Routes>
        </Router>
    );
}

export default App;
```

## Recursos Adicionais

*   [Documentação Oficial do React - Hooks](https://react.dev/reference/react)
*   [Documentação Oficial do React - useState](https://react.dev/reference/react/useState)
*   [Documentação Oficial do React - useEffect](https://react.dev/reference/react/useEffect)
*   [Documentação Oficial do React - useContext](https://react.dev/reference/react/useContext)
*   [Documentação Oficial do React Router](https://reactrouter.com/en/main)
*   [Redux - Documentação Oficial](https://redux.js.org/)

---



## Semana 9: Consumo de APIs e Requisições HTTP

Uma parte fundamental do desenvolvimento front-end moderno é a capacidade de se comunicar com servidores para buscar e enviar dados. Isso é feito principalmente através de **APIs (Application Programming Interfaces)** e **requisições HTTP**. As APIs definem como diferentes softwares devem interagir, e o HTTP (Hypertext Transfer Protocol) é o protocolo subjacente usado para essa comunicação na web.

### Entendendo APIs RESTful

**REST (Representational State Transfer)** é um estilo arquitetural para sistemas distribuídos, e **APIs RESTful** (ou REST APIs) são APIs que seguem os princípios do REST. Elas são a forma mais comum de APIs web e são baseadas em recursos (resources) que podem ser acessados e manipulados usando operações HTTP padrão.

#### Princípios Chave do REST:

*   **Cliente-Servidor:** Separação de preocupações entre a interface do usuário (cliente) e o armazenamento de dados (servidor).
*   **Stateless (Sem Estado):** Cada requisição do cliente para o servidor deve conter todas as informações necessárias para entender a requisição. O servidor não armazena nenhum contexto do cliente entre as requisições.
*   **Cacheable (Armazenável em Cache):** As respostas do servidor podem ser marcadas como armazenáveis em cache para melhorar o desempenho.
*   **Layered System (Sistema em Camadas):** Um cliente pode se conectar a um servidor intermediário, que por sua vez se conecta a outro servidor, e assim por diante, sem que o cliente precise saber disso.
*   **Uniform Interface (Interface Uniforme):** O princípio mais importante, que inclui:
    *   **Identificação de Recursos:** Recursos são identificados por URIs (Uniform Resource Identifiers), como URLs.
    *   **Manipulação de Recursos através de Representações:** O cliente interage com o recurso através de uma representação (ex: JSON, XML).
    *   **Mensagens Auto-descritivas:** Cada mensagem inclui informações suficientes para descrever como processar a mensagem.
    *   **HATEOAS (Hypermedia as the Engine of Application State):** O servidor fornece links na resposta para que o cliente possa descobrir as próximas ações possíveis.

#### Métodos HTTP Comuns em APIs RESTful:

As APIs RESTful utilizam os métodos HTTP padrão para realizar operações CRUD (Create, Read, Update, Delete) em recursos:

*   **`GET`:** Usado para **ler** (recuperar) dados de um recurso. Não deve ter efeitos colaterais no servidor.
    *   Ex: `GET /usuarios` (lista todos os usuários), `GET /usuarios/123` (recupera o usuário com ID 123).
*   **`POST`:** Usado para **criar** um novo recurso. Os dados para o novo recurso são enviados no corpo da requisição.
    *   Ex: `POST /usuarios` (cria um novo usuário).
*   **`PUT`:** Usado para **atualizar** (substituir completamente) um recurso existente. Os dados completos do recurso atualizado são enviados no corpo da requisição.
    *   Ex: `PUT /usuarios/123` (atualiza o usuário com ID 123).
*   **`PATCH`:** Usado para **atualizar** (modificar parcialmente) um recurso existente. Apenas os dados a serem alterados são enviados no corpo da requisição.
    *   Ex: `PATCH /usuarios/123` (atualiza apenas o email do usuário 123).
*   **`DELETE`:** Usado para **excluir** um recurso.
    *   Ex: `DELETE /usuarios/123` (exclui o usuário com ID 123).

#### Códigos de Status HTTP Comuns:

O servidor responde a cada requisição HTTP com um código de status que indica o resultado da operação.

*   **`200 OK`:** A requisição foi bem-sucedida.
*   **`201 Created`:** Um novo recurso foi criado com sucesso (geralmente após um `POST`).
*   **`204 No Content`:** A requisição foi bem-sucedida, mas não há conteúdo para retornar (geralmente após um `DELETE` ou `PUT` que não retorna dados).
*   **`400 Bad Request`:** A requisição do cliente está malformada ou contém erros de sintaxe.
*   **`401 Unauthorized`:** O cliente não está autenticado.
*   **`403 Forbidden`:** O cliente está autenticado, mas não tem permissão para acessar o recurso.
*   **`404 Not Found`:** O recurso solicitado não foi encontrado no servidor.
*   **`500 Internal Server Error`:** Ocorreu um erro inesperado no servidor.

### Fetch API e Axios para Requisições HTTP

No JavaScript moderno, as principais formas de fazer requisições HTTP são a `Fetch API` (nativa do navegador) e a biblioteca `Axios`.

#### Fetch API

A `Fetch API` fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, como requisições e respostas. Ela é baseada em Promises, o que a torna ideal para uso com `async/await`.

**Requisição `GET`:**

```javascript
async function getDados() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Dados obtidos:", data);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

getDados();
```

**Requisição `POST`:**

```javascript
async function postDados() {
    try {
        const novoPost = {
            title: "Meu Novo Post",
            body: "Este é o conteúdo do meu novo post.",
            userId: 1,
        };

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novoPost),
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Novo post criado:", data);
    } catch (error) {
        console.error("Erro ao criar post:", error);
    }
}

postDados();
```

**Observações sobre `Fetch`:**

*   `fetch()` retorna uma Promise que resolve para o objeto `Response`.
*   `response.json()` é um método assíncrono que lê o corpo da resposta e o analisa como JSON.
*   `fetch()` **não** lança um erro para respostas HTTP com status de erro (como 404 ou 500). Você precisa verificar `response.ok` (que é `true` para status 2xx) ou `response.status` manualmente.

#### Axios

**Axios** é uma biblioteca JavaScript popular baseada em Promises para fazer requisições HTTP a partir do navegador e do Node.js. Ela oferece uma API mais amigável e recursos adicionais em comparação com a `Fetch API` nativa.

**Instalação:**

```bash
npm install axios
# ou yarn add axios
```

**Requisição `GET` com Axios:**

```javascript
import axios from "axios";

async function getDadosAxios() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log("Dados obtidos com Axios:", response.data);
    } catch (error) {
        console.error("Erro ao buscar dados com Axios:", error);
        if (error.response) {
            // O servidor respondeu com um status de erro (4xx ou 5xx)
            console.error("Status do erro:", error.response.status);
            console.error("Dados do erro:", error.response.data);
        } else if (error.request) {
            // A requisição foi feita, mas nenhuma resposta foi recebida
            console.error("Nenhuma resposta recebida:", error.request);
        } else {
            // Algo aconteceu na configuração da requisição que disparou um erro
            console.error("Erro na configuração da requisição:", error.message);
        }
    }
}

getDadosAxios();
```

**Requisição `POST` com Axios:**

```javascript
import axios from "axios";

async function postDadosAxios() {
    try {
        const novoPost = {
            title: "Meu Novo Post com Axios",
            body: "Este é o conteúdo do meu novo post com Axios.",
            userId: 1,
        };

        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", novoPost);
        console.log("Novo post criado com Axios:", response.data);
    } catch (error) {
        console.error("Erro ao criar post com Axios:", error);
    }
}

postDadosAxios();
```

**Vantagens do Axios sobre Fetch:**

*   **Tratamento de Erros:** Axios lança erros para respostas com status 4xx/5xx automaticamente, facilitando o tratamento de erros.
*   **Transformação Automática de JSON:** Axios automaticamente transforma dados de requisição/resposta JSON.
*   **Interceptors:** Permite interceptar requisições ou respostas antes que sejam tratadas por `then` ou `catch` (útil para adicionar tokens de autenticação, log, etc.).
*   **Cancelamento de Requisições:** Suporte para cancelar requisições.
*   **Proteção XSRF:** Suporte integrado para proteção contra Cross-Site Request Forgery.

Para a maioria dos projetos React, o Axios é frequentemente preferido devido à sua API mais rica e tratamento de erros mais robusto, mas a `Fetch API` é perfeitamente utilizável e importante de conhecer por ser nativa.

### Tratamento de Dados e Exibição na Interface

Após receber os dados de uma API, o próximo passo é processá-los e exibi-los na interface do usuário. Em React, isso geralmente envolve:

1.  **Armazenar os dados no estado do componente:** Use `useState` para guardar os dados recebidos da API.
2.  **Renderizar os dados:** Mapeie ou itere sobre os dados para criar elementos JSX dinamicamente.
3.  **Tratamento de estados de carregamento e erro:** Mostrar um indicador de carregamento enquanto os dados estão sendo buscados e uma mensagem de erro se a requisição falhar.

**Exemplo de Exibição de Lista de Posts:**

```jsx
import React, { useState, useEffect } from "react";
import axios from "axios"; // Ou use fetch, a lógica é similar

function ListaPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []); // Array de dependências vazio para executar apenas uma vez ao montar

    if (loading) {
        return <div>Carregando posts...</div>;
    }

    if (error) {
        return <div>Erro ao carregar posts: {error.message}</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaPosts;
```

Neste exemplo:

*   `useState` é usado para gerenciar o array de `posts`, o estado de `loading` e o estado de `error`.
*   `useEffect` é usado para fazer a requisição de dados quando o componente é montado (`[]` como dependência).
*   Condicionais (`if (loading)`, `if (error)`) são usadas para renderizar diferentes UIs com base no estado da requisição.
*   O método `map()` é usado para iterar sobre o array de `posts` e renderizar um `<li>` para cada um. A propriedade `key` é crucial ao renderizar listas no React para ajudar o React a identificar quais itens foram alterados, adicionados ou removidos, otimizando a renderização.

## Recursos Adicionais

*   [MDN Web Docs - HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP)
*   [MDN Web Docs - Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
*   [Axios GitHub](https://github.com/axios/axios)
*   [JSONPlaceholder (API de teste)](https://jsonplaceholder.typicode.com/)

---



## Semana 10: Testes e Boas Práticas em React

Testar seu código é uma parte crucial do desenvolvimento de software. Garante que seu aplicativo funcione como esperado, ajuda a prevenir bugs e facilita a manutenção e a adição de novas funcionalidades com confiança. No desenvolvimento React, existem diferentes tipos de testes, mas focaremos nos testes unitários e de integração, que são os mais comuns para componentes.

### Introdução a Testes Unitários e de Integração (Jest, React Testing Library)

#### Testes Unitários

Testes unitários focam em testar as menores unidades de código isoladamente (ex: uma função, um componente React sem suas dependências). O objetivo é verificar se cada unidade funciona corretamente por si só.

#### Testes de Integração

Testes de integração verificam como diferentes unidades de código (ex: dois ou mais componentes React interagindo) funcionam juntas. O objetivo é garantir que as partes do seu aplicativo se comuniquem e colaborem corretamente.

#### Jest

**Jest** é um framework de teste JavaScript popular, desenvolvido pelo Facebook (Meta), que é frequentemente usado para testar aplicações React. Ele vem com um "runner" de teste, um "assertion library" (para fazer afirmações sobre o código) e um "mocking library" (para simular dependências).

**Características do Jest:**

*   **Configuração Zero:** Para a maioria dos projetos React criados com Create React App ou Vite, o Jest já vem pré-configurado.
*   **Rápido:** Projetado para ser rápido e eficiente.
*   **Isolamento de Testes:** Cada teste é executado em seu próprio ambiente isolado.
*   **Snapshot Testing:** Permite capturar a "fotografia" de um componente renderizado e compará-la com futuras renderizações para detectar mudanças inesperadas na UI.

**Exemplo Básico de Teste com Jest:**

```javascript
// funcoes.js
export function somar(a, b) {
    return a + b;
}

export function subtrair(a, b) {
    return a - b;
}
```

```javascript
// funcoes.test.js
import { somar, subtrair } from ".//funcoes";

describe("Testes para funções matemáticas", () => {
    test("deve somar dois números", () => {
        expect(somar(1, 2)).toBe(3);
    });

    test("deve subtrair dois números", () => {
        expect(subtrair(5, 2)).toBe(3);
    });

    test("deve retornar zero ao somar 0 e 0", () => {
        expect(somar(0, 0)).toBe(0);
    });
});
```

*   `describe()`: Agrupa testes relacionados.
*   `test()` ou `it()`: Define um caso de teste individual.
*   `expect()`: Cria uma expectativa para um valor.
*   `toBe()`: Um "matcher" que verifica igualdade estrita.

#### React Testing Library (RTL)

**React Testing Library** é uma biblioteca que complementa o Jest (ou qualquer outro framework de teste) para testar componentes React. Sua filosofia é testar os componentes da forma como o usuário os usaria, focando na interação com o DOM renderizado em vez de detalhes internos de implementação.

**Características da RTL:**

*   **Foco no Usuário:** Incentiva testes que se assemelham mais ao comportamento real do usuário.
*   **Acessibilidade:** Promove a escrita de código mais acessível, pois os seletores da RTL priorizam atributos de acessibilidade.
*   **Menos Acoplamento:** Testes são menos propensos a quebrar com pequenas mudanças na implementação interna do componente.

**Exemplo Básico de Teste de Componente com RTL:**

Considere um componente `BotaoContador.js`:

```jsx
import React, { useState } from 'react';

function BotaoContador() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Você clicou {count} vezes
        </button>
    );
}

export default BotaoContador;
```

Agora, o teste (`BotaoContador.test.js`):

```jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BotaoContador from './BotaoContador';

describe('BotaoContador', () => {
    test('deve renderizar com o texto inicial e incrementar ao clicar', () => {
        render(<BotaoContador />);

        // Verifica se o botão é renderizado com o texto inicial
        const buttonElement = screen.getByText(/Você clicou 0 vezes/i);
        expect(buttonElement).toBeInTheDocument();

        // Simula um clique no botão
        fireEvent.click(buttonElement);

        // Verifica se o texto do botão foi atualizado após o clique
        expect(screen.getByText(/Você clicou 1 vezes/i)).toBeInTheDocument();

        fireEvent.click(buttonElement);
        expect(screen.getByText(/Você clicou 2 vezes/i)).toBeInTheDocument();
    });
});
```

*   `render()`: Renderiza o componente em um ambiente de teste.
*   `screen`: Objeto que contém métodos de consulta para encontrar elementos no DOM renderizado.
    *   `getByText()`: Encontra um elemento pelo seu conteúdo de texto.
    *   `toBeInTheDocument()`: Matcher do Jest DOM para verificar se o elemento está no documento.
*   `fireEvent.click()`: Simula um evento de clique.

### Boas Práticas de Código e Organização de Projetos

Escrever código limpo, legível e bem organizado é tão importante quanto escrever código funcional. Boas práticas melhoram a manutenibilidade, a colaboração em equipe e a escalabilidade do projeto.

#### Convenções de Nomenclatura

*   **Componentes:** Use PascalCase (ex: `MeuComponente`, `BotaoPrimario`).
*   **Variáveis e Funções:** Use camelCase (ex: `minhaVariavel`, `calcularTotal`).
*   **Constantes:** Use UPPER_SNAKE_CASE para constantes globais (ex: `API_KEY`).
*   **Arquivos:** Use PascalCase para arquivos de componentes (ex: `MeuComponente.js`), e kebab-case ou camelCase para outros arquivos (ex: `utils.js`, `styles.css`).

#### Estrutura de Pastas

Não existe uma estrutura de pastas "perfeita", mas algumas abordagens são comuns:

*   **Por Recurso/Feature:** Agrupar arquivos relacionados a uma funcionalidade específica em uma única pasta.
    ```
    src/
    ├── components/
    │   ├── Button/
    │   │   ├── Button.js
    │   │   ├── Button.module.css
    │   │   └── Button.test.js
    │   └── Card/
    │       ├── Card.js
    │       └── Card.css
    ├── features/
    │   ├── Auth/
    │   │   ├── AuthForm.js
    │   │   ├── AuthSlice.js (Redux/Context)
    │   │   └── Auth.test.js
    │   └── Products/
    │       ├── ProductList.js
    │       ├── ProductCard.js
    │       └── productApi.js
    ├── pages/
    │   ├── HomePage.js
    │   └── AboutPage.js
    ├── hooks/
    ├── utils/
    ├── assets/
    ├── App.js
    └── index.js
    ```
*   **Por Tipo:** Agrupar arquivos pelo seu tipo (todos os componentes em uma pasta, todos os hooks em outra, etc.).

Escolha uma estrutura e seja consistente. O importante é que seja fácil para você e sua equipe encontrar os arquivos.

#### Linting e Formatação de Código

*   **ESLint:** Uma ferramenta de linting que analisa seu código JavaScript para encontrar erros, problemas de estilo e potenciais bugs. Ajuda a impor padrões de código e a manter a consistência.
*   **Prettier:** Um formatador de código opinativo que formata seu código automaticamente para um estilo consistente. Funciona bem em conjunto com o ESLint.

Configure essas ferramentas em seu editor (VS Code) para que elas funcionem automaticamente ao salvar o arquivo.

#### Comentários e Documentação

*   Escreva comentários quando o código não for autoexplicativo ou para explicar a "razão" por trás de uma decisão de design.
*   Documente componentes, funções e APIs complexas, especialmente se forem reutilizáveis.

#### Modularização e Reusabilidade

*   Divida seu código em pequenos componentes e funções reutilizáveis.
*   Evite duplicação de código (DRY - Don't Repeat Yourself).
*   Mantenha os componentes pequenos e focados em uma única responsabilidade.

#### Performance

*   **Otimização de Imagens:** Use formatos de imagem modernos (WebP) e otimize o tamanho.
*   **Lazy Loading:** Carregue componentes ou dados apenas quando forem necessários (ex: `React.lazy` e `Suspense`).
*   **Memoização:** Use `React.memo`, `useMemo` e `useCallback` para evitar re-renderizações desnecessárias de componentes e cálculos caros.

#### Tratamento de Erros

*   Use blocos `try...catch` para lidar com erros em operações assíncronas.
*   Implemente "Error Boundaries" no React para capturar erros em componentes e exibir uma UI de fallback.

#### Controle de Versão (Git)

*   Faça commits pequenos e atômicos com mensagens claras e descritivas.
*   Use branches para novas funcionalidades ou correções de bugs.
*   Faça pull requests para revisão de código.

Seguir essas boas práticas não apenas melhora a qualidade do seu código, mas também o torna um desenvolvedor mais profissional e eficiente.

## Recursos Adicionais

*   [Documentação Oficial do Jest](https://jestjs.io/pt-BR/)
*   [Documentação Oficial do React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
*   [Guia de Boas Práticas React - Kent C. Dodds](https://kentcdodds.com/blog/write-fewer-tests-get-more-coverage)
*   [ESLint](https://eslint.org/)
*   [Prettier](https://prettier.io/)

---

