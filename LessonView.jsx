import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Play,
  Pause,
  RotateCcw,
  BookOpen,
  Code,
  FileText,
  Clock
} from 'lucide-react'

const LessonView = () => {
  const { lessonId } = useParams()
  const [isCompleted, setIsCompleted] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)
  
  // Mock data - em produção viria de uma API
  const lessonData = {
    id: parseInt(lessonId),
    title: "Funções e Escopo em JavaScript",
    description: "Aprenda sobre declaração de funções, arrow functions e como funciona o escopo em JavaScript",
    type: "video",
    duration: "50 min",
    moduleId: 1,
    moduleName: "Fundamentos do Desenvolvimento Web",
    weekNumber: 3,
    content: {
      videoUrl: "https://example.com/video.mp4", // Mock URL
      transcript: `
Nesta aula, vamos explorar um dos conceitos mais importantes do JavaScript: funções e escopo.

## O que são Funções?

Funções são blocos de código reutilizáveis que executam uma tarefa específica. Elas são fundamentais para organizar e estruturar seu código.

### Declaração de Função

\`\`\`javascript
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

console.log(saudacao("Maria")); // "Olá, Maria!"
\`\`\`

### Arrow Functions (ES6+)

\`\`\`javascript
const saudacao = (nome) => {
    return "Olá, " + nome + "!";
}

// Versão mais concisa
const saudacao = nome => "Olá, " + nome + "!";
\`\`\`

## Escopo em JavaScript

O escopo determina onde as variáveis podem ser acessadas no seu código.

### Escopo Global

\`\`\`javascript
let mensagem = "Eu sou global"; // Variável global

function mostrarMensagem() {
    console.log(mensagem); // Pode acessar a variável global
}
\`\`\`

### Escopo Local

\`\`\`javascript
function exemploEscopo() {
    let mensagemLocal = "Eu sou local"; // Só existe dentro da função
    console.log(mensagemLocal);
}

// console.log(mensagemLocal); // Erro! Variável não existe aqui
\`\`\`

## Exercício Prático

Crie uma função que calcule a área de um retângulo:

\`\`\`javascript
function calcularArea(largura, altura) {
    return largura * altura;
}

console.log(calcularArea(5, 3)); // 15
\`\`\`
      `,
      codeExamples: [
        {
          title: "Exemplo 1: Função Básica",
          code: `function cumprimentar(nome) {
    return "Olá, " + nome + "!";
}

console.log(cumprimentar("João"));`
        },
        {
          title: "Exemplo 2: Arrow Function",
          code: `const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5)); // 20`
        },
        {
          title: "Exemplo 3: Escopo",
          code: `let global = "Eu sou global";

function testeEscopo() {
    let local = "Eu sou local";
    console.log(global); // Funciona
    console.log(local);  // Funciona
}

testeEscopo();
// console.log(local); // Erro!`
        }
      ]
    },
    navigation: {
      previous: {
        id: 9,
        title: "Variáveis e Tipos de Dados"
      },
      next: {
        id: 11,
        title: "DOM e Eventos"
      }
    }
  }

  const handleCompleteLesson = () => {
    setIsCompleted(true)
    // Aqui você salvaria o progresso na API
  }

  const handleVideoProgress = (progress) => {
    setVideoProgress(progress)
    // Auto-complete quando o vídeo chegar a 90%
    if (progress >= 90 && !isCompleted) {
      setIsCompleted(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/course" className="hover:text-primary">Curso</Link>
          <span>/</span>
          <Link to={`/course/module/${lessonData.moduleId}`} className="hover:text-primary">
            Módulo {lessonData.moduleId}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{lessonData.title}</span>
        </div>

        {/* Back Button */}
        <Link 
          to={`/course/module/${lessonData.moduleId}`} 
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Módulo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Lesson Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">
                      {lessonData.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {lessonData.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    {isCompleted && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Concluída
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {lessonData.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    Semana {lessonData.weekNumber}
                  </div>
                  <div className="flex items-center">
                    <Play className="h-4 w-4 mr-1" />
                    Vídeo Aula
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Video Player */}
            <Card>
              <CardContent className="p-0">
                <div className="bg-black rounded-t-lg aspect-video flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-70" />
                    <p className="text-lg">Player de Vídeo</p>
                    <p className="text-sm opacity-70">
                      Em produção, aqui seria integrado um player real
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progresso do vídeo</span>
                    <span className="text-sm font-medium">{videoProgress}%</span>
                  </div>
                  <Progress value={videoProgress} />
                  <div className="flex items-center justify-center space-x-4 mt-4">
                    <Button variant="outline" size="sm">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reiniciar
                    </Button>
                    <Button size="sm" onClick={() => handleVideoProgress(Math.min(100, videoProgress + 10))}>
                      <Play className="h-4 w-4 mr-2" />
                      Simular Progresso
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lesson Content */}
            <Card>
              <CardHeader>
                <CardTitle>Conteúdo da Aula</CardTitle>
                <CardDescription>
                  Material de apoio e transcrição
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ 
                    __html: lessonData.content.transcript.replace(/\n/g, '<br/>') 
                  }} />
                </div>
              </CardContent>
            </Card>

            {/* Code Examples */}
            <Card>
              <CardHeader>
                <CardTitle>Exemplos de Código</CardTitle>
                <CardDescription>
                  Pratique com estes exemplos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {lessonData.content.codeExamples.map((example, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Code className="h-4 w-4 mr-2" />
                        {example.title}
                      </h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <div>
                {lessonData.navigation.previous && (
                  <Link to={`/course/lesson/${lessonData.navigation.previous.id}`}>
                    <Button variant="outline">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      {lessonData.navigation.previous.title}
                    </Button>
                  </Link>
                )}
              </div>
              
              <div>
                {lessonData.navigation.next && (
                  <Link to={`/course/lesson/${lessonData.navigation.next.id}`}>
                    <Button>
                      {lessonData.navigation.next.title}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Seu Progresso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Vídeo assistido</span>
                      <span>{videoProgress}%</span>
                    </div>
                    <Progress value={videoProgress} />
                  </div>
                  
                  {!isCompleted ? (
                    <Button 
                      className="w-full" 
                      onClick={handleCompleteLesson}
                      disabled={videoProgress < 80}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Marcar como Concluída
                    </Button>
                  ) : (
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-medium text-green-900">
                        Aula Concluída!
                      </p>
                      <p className="text-xs text-green-700">
                        Parabéns pelo progresso
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Baixar Material
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Code className="mr-2 h-4 w-4" />
                  Abrir Exercício
                </Button>
                <Link to={`/course/module/${lessonData.moduleId}`}>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Ver Módulo
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Module Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Progresso do Módulo</CardTitle>
                <CardDescription>
                  {lessonData.moduleName}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Aulas concluídas</span>
                    <span>9/12</span>
                  </div>
                  <Progress value={75} />
                  <p className="text-xs text-gray-600">
                    Você está indo muito bem! Continue assim.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonView

