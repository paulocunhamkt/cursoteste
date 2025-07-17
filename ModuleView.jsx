import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { 
  ArrowLeft,
  Play,
  CheckCircle,
  Clock,
  FileText,
  Code,
  Download,
  ExternalLink
} from 'lucide-react'

const ModuleView = () => {
  const { moduleId } = useParams()
  
  // Mock data - em produção viria de uma API
  const moduleData = {
    1: {
      id: 1,
      title: "Fundamentos do Desenvolvimento Web",
      description: "Aprenda HTML5, CSS3, JavaScript e Git para criar suas primeiras páginas web",
      duration: "4 semanas",
      progress: 75,
      completedLessons: 9,
      totalLessons: 12,
      weeks: [
        {
          id: 1,
          title: "Semana 1: HTML - A Estrutura da Web",
          description: "Fundamentos do HTML5 e estruturação semântica",
          lessons: [
            {
              id: 1,
              title: "Introdução ao HTML5",
              duration: "45 min",
              type: "video",
              completed: true,
              description: "Conceitos básicos e estrutura de documentos HTML"
            },
            {
              id: 2,
              title: "Tags Semânticas",
              duration: "30 min", 
              type: "video",
              completed: true,
              description: "Header, nav, main, section, article e footer"
            },
            {
              id: 3,
              title: "Formulários e Tabelas",
              duration: "40 min",
              type: "video",
              completed: true,
              description: "Criando formulários interativos e tabelas estruturadas"
            },
            {
              id: 4,
              title: "Exercício: Estrutura HTML",
              duration: "60 min",
              type: "exercise",
              completed: false,
              description: "Pratique criando a estrutura HTML de uma página pessoal"
            }
          ]
        },
        {
          id: 2,
          title: "Semana 2: CSS - Estilizando a Web",
          description: "CSS3 moderno, layouts responsivos e animações",
          lessons: [
            {
              id: 5,
              title: "CSS Básico e Seletores",
              duration: "50 min",
              type: "video",
              completed: true,
              description: "Sintaxe CSS, seletores e propriedades fundamentais"
            },
            {
              id: 6,
              title: "Box Model e Layout",
              duration: "45 min",
              type: "video",
              completed: true,
              description: "Entendendo margin, padding, border e display"
            },
            {
              id: 7,
              title: "Flexbox e Grid",
              duration: "60 min",
              type: "video",
              completed: true,
              description: "Layouts modernos e responsivos"
            },
            {
              id: 8,
              title: "Projeto: Página Responsiva",
              duration: "120 min",
              type: "project",
              completed: false,
              description: "Crie uma página pessoal completamente responsiva"
            }
          ]
        },
        {
          id: 3,
          title: "Semana 3: JavaScript Essencial",
          description: "Fundamentos da programação com JavaScript",
          lessons: [
            {
              id: 9,
              title: "Variáveis e Tipos de Dados",
              duration: "40 min",
              type: "video",
              completed: true,
              description: "Let, const, var e tipos primitivos"
            },
            {
              id: 10,
              title: "Funções e Escopo",
              duration: "50 min",
              type: "video",
              completed: false,
              description: "Declaração de funções, arrow functions e escopo"
            },
            {
              id: 11,
              title: "DOM e Eventos",
              duration: "55 min",
              type: "video",
              completed: false,
              description: "Manipulação do DOM e tratamento de eventos"
            },
            {
              id: 12,
              title: "Projeto: Calculadora",
              duration: "90 min",
              type: "project",
              completed: false,
              description: "Desenvolva uma calculadora interativa"
            }
          ]
        }
      ],
      resources: [
        {
          title: "Guia de Referência HTML",
          type: "pdf",
          url: "#"
        },
        {
          title: "Cheat Sheet CSS",
          type: "pdf", 
          url: "#"
        },
        {
          title: "Exercícios Extras JavaScript",
          type: "link",
          url: "#"
        }
      ]
    }
  }

  const module = moduleData[moduleId] || moduleData[1]

  const getLessonIcon = (type, completed) => {
    if (completed) {
      return <CheckCircle className="h-5 w-5 text-green-500" />
    }
    
    switch (type) {
      case 'video':
        return <Play className="h-5 w-5 text-blue-500" />
      case 'exercise':
        return <FileText className="h-5 w-5 text-yellow-500" />
      case 'project':
        return <Code className="h-5 w-5 text-purple-500" />
      default:
        return <FileText className="h-5 w-5 text-gray-500" />
    }
  }

  const getLessonTypeLabel = (type) => {
    switch (type) {
      case 'video':
        return 'Vídeo'
      case 'exercise':
        return 'Exercício'
      case 'project':
        return 'Projeto'
      default:
        return 'Conteúdo'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/course" className="hover:text-primary">
            Curso
          </Link>
          <span>/</span>
          <span className="text-gray-900">Módulo {module.id}</span>
        </div>

        {/* Back Button */}
        <Link to="/course" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Curso
        </Link>

        {/* Module Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl mb-2">
                  Módulo {module.id}: {module.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {module.description}
                </CardDescription>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">{module.duration}</div>
                <div className="text-xs text-gray-400 mt-1">
                  {module.completedLessons}/{module.totalLessons} aulas
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progresso do Módulo</span>
                  <span>{module.progress}%</span>
                </div>
                <Progress value={module.progress} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{module.totalLessons}</div>
                  <div className="text-sm text-gray-600">Aulas Total</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{module.completedLessons}</div>
                  <div className="text-sm text-gray-600">Concluídas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{module.duration}</div>
                  <div className="text-sm text-gray-600">Duração</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {module.weeks.map((week) => (
              <Card key={week.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{week.title}</CardTitle>
                  <CardDescription>{week.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {week.lessons.map((lesson) => (
                      <div 
                        key={lesson.id}
                        className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                          lesson.completed 
                            ? 'bg-green-50 border-green-200' 
                            : 'bg-white border-gray-200 hover:border-primary/30'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {getLessonIcon(lesson.type, lesson.completed)}
                          <div>
                            <h4 className={`font-medium ${
                              lesson.completed ? 'text-green-900' : 'text-gray-900'
                            }`}>
                              {lesson.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {lesson.description}
                            </p>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-xs text-gray-500 flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {lesson.duration}
                              </span>
                              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                {getLessonTypeLabel(lesson.type)}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {lesson.completed ? (
                            <Button variant="outline" size="sm">
                              Revisar
                            </Button>
                          ) : (
                            <Link to={`/course/lesson/${lesson.id}`}>
                              <Button size="sm">
                                {lesson.type === 'video' ? 'Assistir' : 
                                 lesson.type === 'exercise' ? 'Fazer' : 'Desenvolver'}
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Estatísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Progresso</span>
                  <span className="text-sm font-medium">{module.progress}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Aulas restantes</span>
                  <span className="text-sm font-medium">
                    {module.totalLessons - module.completedLessons}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Tempo estimado</span>
                  <span className="text-sm font-medium">2 semanas</span>
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Recursos Adicionais</CardTitle>
                <CardDescription>
                  Materiais complementares para este módulo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {module.resources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {resource.type === 'pdf' ? (
                          <Download className="h-4 w-4 text-red-500" />
                        ) : (
                          <ExternalLink className="h-4 w-4 text-blue-500" />
                        )}
                        <span className="text-sm text-gray-900">{resource.title}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        {resource.type === 'pdf' ? 'Baixar' : 'Acessar'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Próximos Passos
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Continue com a próxima aula ou revise o conteúdo já estudado.
                </p>
                <div className="space-y-2">
                  <Button className="w-full" size="sm">
                    Continuar Próxima Aula
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    Ver Progresso Geral
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModuleView

