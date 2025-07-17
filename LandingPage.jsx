import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { 
  Brain, 
  Code, 
  Zap, 
  Users, 
  Award, 
  CheckCircle, 
  Star,
  ArrowRight,
  Clock,
  Target,
  TrendingUp
} from 'lucide-react'

const LandingPage = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "IA Integrada",
      description: "Aprenda a integrar inteligência artificial em aplicações front-end modernas"
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Projetos Reais",
      description: "Desenvolva 7 projetos práticos para construir um portfólio profissional"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Para 50+",
      description: "Metodologia especialmente adaptada para profissionais maduros"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Certificação",
      description: "Certificados reconhecidos pelo mercado ao completar cada módulo"
    }
  ]

  const modules = [
    {
      number: "01",
      title: "Fundamentos Web",
      duration: "4 semanas",
      topics: ["HTML5", "CSS3", "JavaScript", "Git"]
    },
    {
      number: "02", 
      title: "React & Ecossistema",
      duration: "6 semanas",
      topics: ["React", "Hooks", "Router", "APIs"]
    },
    {
      number: "03",
      title: "Frontend com IA",
      duration: "4 semanas", 
      topics: ["TensorFlow.js", "APIs de IA", "ML no Browser"]
    },
    {
      number: "04",
      title: "Mercado de Trabalho",
      duration: "2 semanas",
      topics: ["Portfólio", "Entrevistas", "Networking"]
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      age: 52,
      role: "Ex-Professora, agora Desenvolvedora Frontend",
      content: "Aos 52 anos consegui minha primeira vaga em tech! O curso me deu toda a base necessária.",
      rating: 5
    },
    {
      name: "João Santos", 
      age: 47,
      role: "Ex-Vendedor, agora em uma Startup",
      content: "A metodologia é perfeita para quem está mudando de carreira. Muito prático e direto ao ponto.",
      rating: 5
    },
    {
      name: "Ana Costa",
      age: 55,
      role: "Ex-Administradora, agora Freelancer",
      content: "O foco em IA me diferenciou no mercado. Já estou trabalhando com projetos incríveis!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-purple-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Transforme sua carreira aos 49 anos!
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Desenvolvedor
                <span className="text-primary block">Frontend com IA</span>
                <span className="text-2xl lg:text-3xl text-gray-600 block mt-2">
                  Do Zero ao Emprego
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                O único curso que combina desenvolvimento front-end moderno com 
                inteligência artificial, especialmente criado para profissionais 
                experientes que querem uma nova carreira em tecnologia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Começar Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Ver Conteúdo do Curso
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  16 semanas
                </div>
                <div className="flex items-center">
                  <Target className="h-4 w-4 mr-1" />
                  7 projetos
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  Certificado
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-primary to-purple-600 rounded-lg p-6 text-white mb-6">
                  <Code className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Projeto Final</h3>
                  <p className="text-primary-foreground/80">
                    App de recomendação com IA integrada
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>React + TensorFlow.js</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>Deploy em produção</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>Portfólio profissional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher nosso curso?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvido especificamente para profissionais experientes que 
              querem uma transição de carreira bem-sucedida para a tecnologia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Conteúdo do Curso
            </h2>
            <p className="text-xl text-gray-600">
              4 módulos estruturados para levar você do zero ao emprego
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-primary">
                      {module.number}
                    </span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {module.duration}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Profissionais que transformaram suas carreiras conosco
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.age} anos • {testimonial.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para transformar sua carreira?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a centenas de profissionais que já mudaram suas vidas 
            com nosso curso. Sua nova carreira em tecnologia começa agora!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Começar Agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
              Falar com Consultor
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              95% de satisfação
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              500+ alunos
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-1" />
              Certificado reconhecido
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage

