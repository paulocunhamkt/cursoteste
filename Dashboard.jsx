import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Progress } from './ui/progress'
import { 
  BookOpen, 
  Award, 
  Clock, 
  TrendingUp, 
  Play,
  CheckCircle,
  Target,
  Calendar,
  Brain,
  Code,
  Zap
} from 'lucide-react'

const Dashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState({
    totalProgress: 25,
    completedLessons: 12,
    totalLessons: 48,
    studyStreak: 7,
    certificatesEarned: 1,
    hoursStudied: 24
  })

  const modules = [
    {
      id: 1,
      title: "Fundamentos do Desenvolvimento Web",
      description: "HTML, CSS, JavaScript e Git",
      progress: 75,
      lessons: 12,
      completedLessons: 9,
      duration: "4 semanas",
      icon: <Code className="h-6 w-6" />,
      color: "bg-blue-500",
      status: "in-progress"
    },
    {
      id: 2,
      title: "JavaScript Avançado e React",
      description: "ES6+, React, Hooks e APIs",
      progress: 30,
      lessons: 18,
      completedLessons: 5,
      duration: "6 semanas",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-yellow-500",
      status: "in-progress"
    },
    {
      id: 3,
      title: "Front-end com Inteligência Artificial",
      description: "TensorFlow.js, APIs de IA",
      progress: 0,
      lessons: 12,
      completedLessons: 0,
      duration: "4 semanas",
      icon: <Brain className="h-6 w-6" />,
      color: "bg-purple-500",
      status: "locked"
    },
    {
      id: 4,
      title: "Preparação para o Mercado",
      description: "Portfólio, entrevistas, networking",
      progress: 0,
      lessons: 6,
      completedLessons: 0,
      duration: "2 semanas",
      icon: <Target className="h-6 w-6" />,
      color: "bg-green-500",
      status: "locked"
    }
  ]

  const recentActivities = [
    {
      id: 1,
      type: "lesson_completed",
      title: "JavaScript - Funções e Escopo",
      time: "2 horas atrás",
      icon: <CheckCircle className="h-4 w-4 text-green-500" />
    },
    {
      id: 2,
      type: "project_started",
      title: "Projeto: Página Pessoal Responsiva",
      time: "1 dia atrás",
      icon: <Play className="h-4 w-4 text-blue-500" />
    },
    {
      id: 3,
      type: "certificate_earned",
      title: "Certificado: Fundamentos HTML/CSS",
      time: "3 dias atrás",
      icon: <Award className="h-4 w-4 text-yellow-500" />
    }
  ]

  const upcomingTasks = [
    {
      id: 1,
      title: "Completar projeto de Calculadora",
      dueDate: "Amanhã",
      priority: "high"
    },
    {
      id: 2,
      title: "Assistir aula sobre React Hooks",
      dueDate: "2 dias",
      priority: "medium"
    },
    {
      id: 3,
      title: "Fazer exercícios de JavaScript",
      dueDate: "1 semana",
      priority: "low"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Olá, {user?.first_name}! 👋
          </h1>
          <p className="text-gray-600">
            Continue sua jornada para se tornar um desenvolvedor front-end com IA
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progresso Geral</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProgress}%</div>
              <Progress value={stats.totalProgress} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aulas Concluídas</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats.completedLessons}/{stats.totalLessons}
              </div>
              <p className="text-xs text-muted-foreground">
                {Math.round((stats.completedLessons / stats.totalLessons) * 100)}% completo
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sequência de Estudos</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.studyStreak} dias</div>
              <p className="text-xs text-muted-foreground">
                Continue assim! 🔥
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Horas Estudadas</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.hoursStudied}h</div>
              <p className="text-xs text-muted-foreground">
                Este mês
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Modules */}
            <Card>
              <CardHeader>
                <CardTitle>Módulos do Curso</CardTitle>
                <CardDescription>
                  Acompanhe seu progresso em cada módulo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {modules.map((module) => (
                  <div key={module.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`${module.color} text-white p-2 rounded-lg`}>
                          {module.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{module.title}</h3>
                          <p className="text-sm text-gray-600">{module.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-500">{module.duration}</span>
                        <div className="text-xs text-gray-400">
                          {module.completedLessons}/{module.lessons} aulas
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progresso</span>
                        <span>{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} />
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center space-x-2">
                        {module.status === 'completed' && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Concluído
                          </span>
                        )}
                        {module.status === 'in-progress' && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <Play className="h-3 w-3 mr-1" />
                            Em andamento
                          </span>
                        )}
                        {module.status === 'locked' && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            Bloqueado
                          </span>
                        )}
                      </div>
                      
                      <Link to={`/course/module/${module.id}`}>
                        <Button 
                          variant={module.status === 'locked' ? 'outline' : 'default'}
                          size="sm"
                          disabled={module.status === 'locked'}
                        >
                          {module.status === 'locked' ? 'Bloqueado' : 'Continuar'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
                <CardDescription>
                  Suas últimas ações no curso
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3">
                      {activity.icon}
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.title}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/course" className="block">
                  <Button className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Ver Curso Completo
                  </Button>
                </Link>
                <Link to="/certificates" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Award className="mr-2 h-4 w-4" />
                    Meus Certificados
                  </Button>
                </Link>
                <Link to="/progress" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Relatório de Progresso
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Próximas Tarefas</CardTitle>
                <CardDescription>
                  Mantenha-se organizado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        task.priority === 'high' ? 'bg-red-500' :
                        task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {task.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          Prazo: {task.dueDate}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Motivation Card */}
            <Card className="bg-gradient-to-br from-primary/10 to-purple-100 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Você está indo muito bem!
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Já completou {stats.totalProgress}% do curso. Continue assim e logo estará pronto para o mercado de trabalho!
                  </p>
                  <Button size="sm" className="w-full">
                    Continuar Estudando
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

export default Dashboard

