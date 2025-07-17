import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { 
  Award, 
  Download, 
  Share2, 
  CheckCircle, 
  Lock,
  Calendar,
  User,
  ExternalLink
} from 'lucide-react'

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  // Mock data - em produção viria de uma API
  const certificatesData = {
    earned: [
      {
        id: 1,
        title: "Fundamentos HTML e CSS",
        description: "Certificado de conclusão do módulo básico de HTML5 e CSS3",
        moduleId: 1,
        moduleName: "Fundamentos do Desenvolvimento Web",
        earnedDate: "2024-01-20",
        credentialId: "FIA-HTML-CSS-2024-001",
        skills: ["HTML5", "CSS3", "Design Responsivo", "Semântica Web"],
        verificationUrl: "https://certificates.frontendIA.com/verify/FIA-HTML-CSS-2024-001"
      }
    ],
    available: [
      {
        id: 2,
        title: "JavaScript Avançado e React",
        description: "Certificado de conclusão do módulo de JavaScript ES6+ e React",
        moduleId: 2,
        moduleName: "JavaScript Avançado e Ecossistema Front-end",
        requiredProgress: 100,
        currentProgress: 28,
        skills: ["JavaScript ES6+", "React", "Hooks", "APIs RESTful"],
        estimatedCompletion: "2024-03-15"
      },
      {
        id: 3,
        title: "Front-end com Inteligência Artificial",
        description: "Certificado de especialização em IA para desenvolvimento front-end",
        moduleId: 3,
        moduleName: "Front-end e Inteligência Artificial",
        requiredProgress: 100,
        currentProgress: 0,
        skills: ["TensorFlow.js", "APIs de IA", "Machine Learning", "Projetos com IA"],
        estimatedCompletion: "2024-05-01"
      },
      {
        id: 4,
        title: "Desenvolvedor Front-end Completo",
        description: "Certificado final de conclusão do curso completo",
        moduleId: 4,
        moduleName: "Certificação Final",
        requiredProgress: 100,
        currentProgress: 0,
        skills: ["Desenvolvimento Completo", "Portfólio Profissional", "Preparação para Mercado"],
        estimatedCompletion: "2024-06-15"
      }
    ]
  }

  const handleDownloadCertificate = (certificate) => {
    // Em produção, isso geraria e baixaria o PDF do certificado
    console.log('Baixando certificado:', certificate.title)
    alert('Em produção, o certificado seria baixado como PDF')
  }

  const handleShareCertificate = (certificate) => {
    // Em produção, isso abriria opções de compartilhamento
    const shareData = {
      title: `Certificado: ${certificate.title}`,
      text: `Acabei de conquistar o certificado "${certificate.title}" no curso Frontend com IA!`,
      url: certificate.verificationUrl
    }
    
    if (navigator.share) {
      navigator.share(shareData)
    } else {
      // Fallback para navegadores que não suportam Web Share API
      navigator.clipboard.writeText(shareData.url)
      alert('Link do certificado copiado para a área de transferência!')
    }
  }

  const CertificatePreview = ({ certificate, isEarned = false }) => (
    <div className="bg-gradient-to-br from-primary/10 to-purple-100 border-2 border-primary/20 rounded-lg p-6 text-center">
      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
        <Award className="h-8 w-8 text-primary" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Certificado de Conclusão
      </h3>
      
      <div className="text-lg font-semibold text-primary mb-4">
        {certificate.title}
      </div>
      
      <div className="space-y-2 text-sm text-gray-700 mb-6">
        <p>Este certificado atesta que</p>
        <p className="text-lg font-semibold text-gray-900">João Silva</p>
        <p>completou com sucesso o módulo</p>
        <p className="font-medium">{certificate.moduleName}</p>
        {isEarned && (
          <p className="text-gray-600">
            em {new Date(certificate.earnedDate).toLocaleDateString('pt-BR')}
          </p>
        )}
      </div>
      
      <div className="border-t pt-4">
        <div className="flex justify-between items-center text-xs text-gray-600">
          <span>FrontendIA</span>
          {isEarned && <span>ID: {certificate.credentialId}</span>}
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Meus Certificados
          </h1>
          <p className="text-gray-600">
            Acompanhe seus certificados conquistados e veja os próximos objetivos
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Certificados Conquistados</p>
                  <p className="text-2xl font-bold text-green-600">
                    {certificatesData.earned.length}
                  </p>
                </div>
                <Award className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Próximo Certificado</p>
                  <p className="text-2xl font-bold text-blue-600">28%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Disponível</p>
                  <p className="text-2xl font-bold text-primary">4</p>
                </div>
                <Lock className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Earned Certificates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-green-600" />
                  Certificados Conquistados
                </CardTitle>
                <CardDescription>
                  Certificados que você já conquistou no curso
                </CardDescription>
              </CardHeader>
              <CardContent>
                {certificatesData.earned.length > 0 ? (
                  <div className="space-y-6">
                    {certificatesData.earned.map((certificate) => (
                      <div key={certificate.id} className="border rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4">
                            <div className="bg-green-100 p-3 rounded-lg">
                              <Award className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">
                                {certificate.title}
                              </h3>
                              <p className="text-gray-600 mb-2">
                                {certificate.description}
                              </p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {new Date(certificate.earnedDate).toLocaleDateString('pt-BR')}
                                </div>
                                <div className="flex items-center">
                                  <User className="h-4 w-4 mr-1" />
                                  ID: {certificate.credentialId}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              onClick={() => handleDownloadCertificate(certificate)}
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Baixar
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleShareCertificate(certificate)}
                            >
                              <Share2 className="h-4 w-4 mr-2" />
                              Compartilhar
                            </Button>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-900 mb-2">
                            Habilidades Certificadas:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {certificate.skills.map((skill, index) => (
                              <span 
                                key={index}
                                className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t">
                          <a 
                            href={certificate.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:text-primary/80 flex items-center"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Verificar Autenticidade
                          </a>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setSelectedCertificate(certificate)}
                          >
                            Visualizar Certificado
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Nenhum certificado conquistado ainda
                    </h3>
                    <p className="text-gray-600">
                      Complete os módulos do curso para ganhar seus certificados
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Available Certificates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-blue-600" />
                  Próximos Certificados
                </CardTitle>
                <CardDescription>
                  Certificados disponíveis para conquistar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {certificatesData.available.map((certificate) => (
                    <div key={certificate.id} className="border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <Lock className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {certificate.title}
                            </h3>
                            <p className="text-gray-600 mb-2">
                              {certificate.description}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                Previsão: {new Date(certificate.estimatedCompletion).toLocaleDateString('pt-BR')}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progresso do Módulo</span>
                          <span>{certificate.currentProgress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${certificate.currentProgress}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">
                          Habilidades que você vai certificar:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {certificate.skills.map((skill, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <Button 
                          variant="outline" 
                          className="w-full"
                          disabled={certificate.currentProgress === 0}
                        >
                          {certificate.currentProgress === 0 
                            ? 'Módulo Bloqueado' 
                            : 'Continuar Módulo'
                          }
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Certificate Preview */}
            {selectedCertificate ? (
              <Card>
                <CardHeader>
                  <CardTitle>Visualização do Certificado</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedCertificate(null)}
                  >
                    Fechar
                  </Button>
                </CardHeader>
                <CardContent>
                  <CertificatePreview certificate={selectedCertificate} isEarned={true} />
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Próximo Objetivo</CardTitle>
                  <CardDescription>
                    Seu próximo certificado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      JavaScript Avançado e React
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Complete mais 72% do módulo para conquistar este certificado
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div className="bg-blue-600 h-2 rounded-full w-[28%]" />
                    </div>
                    <Button size="sm" className="w-full">
                      Continuar Estudando
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Benefits */}
            <Card className="bg-gradient-to-br from-primary/10 to-purple-100 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Benefícios dos Certificados
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Reconhecimento profissional no mercado</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Validação de habilidades técnicas</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Diferencial no currículo</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Verificação online de autenticidade</span>
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

export default Certificates

