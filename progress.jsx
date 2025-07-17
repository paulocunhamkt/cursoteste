import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Progress as ProgressBar } from './ui/progress'
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Award,
  CheckCircle,
  Calendar,
  BarChart3
} from 'lucide-react'

const Progress = () => {
  // Mock data - em produção viria de uma API
  const progressData = {
    overall: {
      percentage: 25,
      completedLessons: 12,
      totalLessons: 48,
      hoursStudied: 24,
      studyStreak: 7,
      certificatesEarned: 1
    },
    modules: [
      {
        id: 1,
        name: "Fundamentos Web",
        progress: 75,
        completedLessons: 9,
        totalLessons: 12,
        timeSpent: 18,
        status: "in-progress"
      },
      {
        id: 2,
        name: "JavaScript Avançado",
        progress: 28,
        completedLessons: 5,
        totalLessons: 18,
        timeSpent: 6,
        status: "in-progress"
      },
      {
        id: 3,
        name: "Frontend com IA",
        progress: 0,
        completedLessons: 0,
        totalLessons: 12,
        timeSpent: 0,
        status: "locked"
      },
      {
        id: 4,
        name: "Mercado de Trabalho",
        progress: 0,
        completedLessons: 0,
        totalLessons: 6,
        timeSpent: 0,
        status: "locked"
      }
    ],
    weeklyActivity: [
      { week: "Sem 1", hours: 8 },
      { week: "Sem 2", hours: 12 },
      { week: "Sem 3", hours: 6 },
      { week: "Sem 4", hours: 10 }
    ],
    recentAchievements: [
      {
        id: 1,
        title: "Primeira Página Web",
        description: "Criou sua primeira página HTML",
        date: "2024-01-15",
        type: "milestone"
      },
      {
        id: 2,
        title: "CSS Master",
        description: "Completou todas as aulas de CSS",
        date: "2024-01-20",
        type: "completion"
      },
      {
        id: 3,
        title: "Sequência de 7 dias",
        description: "Estudou por 7 dias consecutivos",
        date: "2024-01-25",
        type: "streak"
      }
    ]
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600'
      case 'in-progress':
        return 'text-blue-600'
      case 'locked':
        return 'text-gray-400'
      default:
        return 'text-gray-600'
    }
  }

  const getAchievementIcon = (type) => {
    switch (type) {
      case 'milestone':
        return <Target className="h-5 w-5 text-blue-500" />
      case 'completion':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'streak':
        return <Calendar className="h-5 w-5 text-orange-500" />
      default:
        return <Award className="h-5 w-5 text-purple-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Relatório de Progresso
          </h1>
          <p className="text-gray-600">
            Acompanhe sua evolução no curso e celebre suas conquistas
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progresso Geral</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {progressData.overall.percentage}%
              </div>
              <ProgressBar value={progressData.overall.percentage} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">
                {progressData.overall.completedLessons} de {progressData.overall.totalLessons} aulas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Horas Estudadas</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressData.overall.hoursStudied}h</div>
              <p className="text-xs text-muted-foreground">
                Média de 6h por semana
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sequência</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressData.overall.studyStreak}</div>
              <p className="text-xs text-muted-foreground">
                dias consecutivos 🔥
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificados</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progressData.overall.certificatesEarned}</div>
              <p className="text-xs text-muted-foreground">
                de 4 disponíveis
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Module Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Progresso por Módulo</CardTitle>
                <CardDescription>
                  Veja como você está se saindo em cada módulo do curso
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {progressData.modules.map((module) => (
                    <div key={module.id} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Módulo {module.id}: {module.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {module.completedLessons}/{module.totalLessons} aulas • {module.timeSpent}h estudadas
                          </p>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${getStatusColor(module.status)}`}>
                            {module.progress}%
                          </div>
                        </div>
                      </div>
                      <ProgressBar value={module.progress} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Activity Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Atividade Semanal</CardTitle>
                <CardDescription>
                  Horas de estudo nas últimas semanas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {progressData.weeklyActivity.map((week, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-16 text-sm text-gray-600">{week.week}</div>
                      <div className="flex-1">
                        <div className="bg-gray-200 rounded-full h-4 relative">
                          <div 
                            className="bg-primary rounded-full h-4 transition-all duration-300"
                            style={{ width: `${(week.hours / 15) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="w-12 text-sm font-medium text-gray-900">
                        {week.hours}h
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-900">
                      Média semanal: 9 horas
                    </span>
                  </div>
                  <p className="text-xs text-blue-700 mt-1">
                    Você está mantendo um ritmo consistente de estudos!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Performance Insights */}
            <Card>
              <CardHeader>
                <CardTitle>Insights de Performance</CardTitle>
                <CardDescription>
                  Análise do seu desempenho e sugestões
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-900">Excelente Consistência</h4>
                        <p className="text-sm text-green-700">
                          Você tem estudado regularmente e mantido uma boa sequência. Continue assim!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-blue-900">Próximo Objetivo</h4>
                        <p className="text-sm text-blue-700">
                          Complete mais 3 aulas para finalizar o Módulo 1 e ganhar seu primeiro certificado!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-900">Dica de Estudo</h4>
                        <p className="text-sm text-yellow-700">
                          Tente dedicar pelo menos 30 minutos por dia aos exercícios práticos para fixar melhor o conteúdo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Conquistas Recentes</CardTitle>
                <CardDescription>
                  Suas últimas realizações no curso
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {progressData.recentAchievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-start space-x-3">
                      {getAchievementIcon(achievement.type)}
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">
                          {achievement.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {achievement.description}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(achievement.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Study Goals */}
            <Card>
              <CardHeader>
                <CardTitle>Metas de Estudo</CardTitle>
                <CardDescription>
                  Objetivos para esta semana
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Aulas desta semana</span>
                    <span className="text-sm font-medium">3/5</span>
                  </div>
                  <ProgressBar value={60} />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Horas de estudo</span>
                    <span className="text-sm font-medium">8/10h</span>
                  </div>
                  <ProgressBar value={80} />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Exercícios práticos</span>
                    <span className="text-sm font-medium">2/3</span>
                  </div>
                  <ProgressBar value={67} />
                </div>
              </CardContent>
            </Card>

            {/* Motivation */}
            <Card className="bg-gradient-to-br from-primary/10 to-purple-100 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Você está no caminho certo!
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Com {progressData.overall.percentage}% do curso concluído, você está mais próximo de sua nova carreira em tecnologia.
                  </p>
                  <div className="text-xs text-gray-500">
                    Tempo estimado para conclusão: <strong>12 semanas</strong>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress

