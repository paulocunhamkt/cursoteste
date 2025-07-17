import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award,
  CheckCircle,
  Lock,
  Play,
  Code,
  Brain,
  Zap,
  Target
} from 'lucide-react'

const CourseOverview = () => {
  const courseInfo = {
    title: "Desenvolvedor Front-end com IA: do Zero ao Emprego",
    description: "Curso completo para profissionais 50+ que querem uma nova carreira em tecnologia",
    duration: "16 semanas",
    totalLessons: 48,
    projects: 7,
    certificates: 4
  }

  const modules = [
    {
      id: 1,
      title: "Fundamentos do Desenvolvimento Web",
      description: "HTML5, CSS3, JavaScript essencial e controle de versão com Git",
      duration: "4 semanas",
      lessons: 12,
      completedLessons: 9,
      progress: 75,
      status: "in-progress",
      icon: <Code className="h-8 w-8" />,
      color: "bg-blue-500",
      topics: [
        "HTML5 semântico e estrutura",
        "CSS3 moderno e responsivo", 
        "JavaScript fundamentos",
        "Git e GitHub"
      ],
      projects: [
        "Página pessoal responsiva",
        "Calculadora interativa"
      ]
    },
    {
      id: 2,
      title: "JavaScript Avançado e Ecossistema Front-end",
      description: "ES6+, React, hooks, roteamento e consumo de APIs",
      duration: "6 semanas",
      lessons: 18,
      completedLessons: 5,
      progress: 28,
      status: "in-progress",
      icon: <Zap className="h-8 w-8" />,
      color: "bg-yellow-500",
      topics: [
        "JavaScript ES6+ avançado",
        "React e componentes",
        "Hooks e gerenciamento de estado",
        "Consumo de APIs RESTful"
      ],
      projects: [
        "Todo App com React",
        "Dashboard de notícias"
      ]
    },
    {
      id: 3,
      title: "Front-end e Inteligência Artificial",
      description: "TensorFlow.js, APIs de IA e projetos práticos com ML",
      duration: "4 semanas",
      lessons: 12,
      completedLessons: 0,
      progress: 0,
      status: "locked",
      icon: <Brain className="h-8 w-8" />,
      color: "bg-purple-500",
      topics: [
        "Introdução à IA para front-end",
        "TensorFlow.js no navegador",
        "APIs de IA em nuvem",
        "Projetos práticos com IA"
      ],
      projects: [
        "Classificador de imagens",
        "Chatbot com análise de sentimento"
      ]
    },
    {
      id: 4,
      title: "Preparação para o Mercado de Trabalho",
      description: "Portfólio, entrevistas, networking e estratégias para 50+",
      duration: "2 semanas",
      lessons: 6,
      completedLessons: 0,
      progress: 0,
      status: "locked",
      icon: <Target className="h-8 w-8" />,
      color: "bg-green-500",
      topics: [
        "Construção de portfólio profissional",
        "Preparação para entrevistas",
        "Networking estratégico",
        "Mercado de trabalho 50+"
      ],
      projects: [
        "Portfólio completo",
        "Projeto final integrado"
      ]
    }
  ]

  const getStatusBadge = (status, progress) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Concluído
          </span>
        )
      case 'in-progress':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Play className="h-3 w-3 mr-1" />
            Em andamento
          </span>
        )
      case 'locked':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <Lock className="h-3 w-3 mr-1" />
            Bloqueado
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {courseInfo.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {courseInfo.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-5 w-5 text-primary mr-1" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{courseInfo.duration}</div>
                  <div className="text-sm text-gray-600">Duração</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <BookOpen className="h-5 w-5 text-primary mr-1" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{courseInfo.totalLessons}</div>
                  <div className="text-sm text-gray-600">Aulas</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Code className="h-5 w-5 text-primary mr-1" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{courseInfo.projects}</div>
                  <div className="text-sm text-gray-600">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-5 w-5 text-primary mr-1" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{courseInfo.certificates}</div>
                  <div className="text-sm text-gray-600">Certificados</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-purple-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Seu Progresso Geral
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">25%</div>
              <Progress value={25} className="mb-4" />
              <p className="text-sm text-gray-600 mb-4">
                Você está indo muito bem! Continue assim para completar o curso.
              </p>
              <Link to="/dashboard">
                <Button className="w-full">
                  Ver Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Módulos do Curso</h2>
          
          {modules.map((module, index) => (
            <Card key={module.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`${module.color} text-white p-3 rounded-lg`}>
                      {module.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        Módulo {module.id}: {module.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-1">
                        {module.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    {getStatusBadge(module.status, module.progress)}
                    <div className="text-sm text-gray-500 mt-1">{module.duration}</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Progress and Stats */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Progresso</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Aulas concluídas</span>
                          <span>{module.completedLessons}/{module.lessons}</span>
                        </div>
                        <Progress value={(module.completedLessons / module.lessons) * 100} />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progresso geral</span>
                          <span>{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} />
                      </div>
                    </div>
                  </div>

                  {/* Topics */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Tópicos Principais</h4>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Projetos Práticos</h4>
                    <ul className="space-y-2">
                      {module.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="flex items-center text-sm text-gray-600">
                          <Code className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t">
                  <div className="text-sm text-gray-500">
                    {module.status === 'locked' 
                      ? 'Complete o módulo anterior para desbloquear'
                      : `${module.lessons} aulas • ${module.projects.length} projetos`
                    }
                  </div>
                  <Link to={`/course/module/${module.id}`}>
                    <Button 
                      variant={module.status === 'locked' ? 'outline' : 'default'}
                      disabled={module.status === 'locked'}
                    >
                      {module.status === 'locked' ? 'Bloqueado' : 
                       module.status === 'completed' ? 'Revisar' : 'Continuar'}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Benefits */}
        <Card className="mt-8 bg-gradient-to-r from-primary/10 to-purple-100 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                O que você vai conquistar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Certificação</h4>
                  <p className="text-sm text-gray-600">
                    Certificados reconhecidos pelo mercado
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Networking</h4>
                  <p className="text-sm text-gray-600">
                    Comunidade de profissionais 50+
                  </p>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900">Nova Carreira</h4>
                  <p className="text-sm text-gray-600">
                    Preparação completa para o mercado
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CourseOverview

