import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Alert, AlertDescription } from './ui/alert'
import { 
  User, 
  Mail, 
  Phone, 
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Edit,
  Save,
  X,
  CheckCircle,
  Settings,
  Shield,
  Bell
} from 'lucide-react'

const Profile = () => {
  const { user, updateUser } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    firstName: user?.first_name || '',
    lastName: user?.last_name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    birthDate: user?.birth_date || '',
    city: user?.city || '',
    state: user?.state || '',
    profession: user?.profession || '',
    experience: user?.experience || '',
    motivation: user?.motivation || '',
    linkedin: user?.linkedin || '',
    github: user?.github || ''
  })

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    weeklyReport: true,
    marketingEmails: false
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePreferenceChange = (preference) => {
    setPreferences({
      ...preferences,
      [preference]: !preferences[preference]
    })
  }

  const handleSave = async () => {
    setLoading(true)
    setMessage('')

    try {
      // Simular chamada à API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Atualizar contexto do usuário
      updateUser({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        birth_date: formData.birthDate,
        city: formData.city,
        state: formData.state,
        profession: formData.profession,
        experience: formData.experience,
        motivation: formData.motivation,
        linkedin: formData.linkedin,
        github: formData.github
      })

      setMessage('Perfil atualizado com sucesso!')
      setIsEditing(false)
    } catch (error) {
      setMessage('Erro ao atualizar perfil. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setFormData({
      firstName: user?.first_name || '',
      lastName: user?.last_name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      birthDate: user?.birth_date || '',
      city: user?.city || '',
      state: user?.state || '',
      profession: user?.profession || '',
      experience: user?.experience || '',
      motivation: user?.motivation || '',
      linkedin: user?.linkedin || '',
      github: user?.github || ''
    })
    setIsEditing(false)
    setMessage('')
  }

  const calculateAge = (birthDate) => {
    if (!birthDate) return null
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Meu Perfil
          </h1>
          <p className="text-gray-600">
            Gerencie suas informações pessoais e preferências
          </p>
        </div>

        {message && (
          <Alert className={`mb-6 ${message.includes('sucesso') ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
            <AlertDescription className={message.includes('sucesso') ? 'text-green-800' : 'text-red-800'}>
              {message}
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Informações Pessoais
                    </CardTitle>
                    <CardDescription>
                      Suas informações básicas e de contato
                    </CardDescription>
                  </div>
                  {!isEditing ? (
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Editar
                    </Button>
                  ) : (
                    <div className="flex space-x-2">
                      <Button size="sm" onClick={handleSave} disabled={loading}>
                        <Save className="h-4 w-4 mr-2" />
                        {loading ? 'Salvando...' : 'Salvar'}
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleCancel}>
                        <X className="h-4 w-4 mr-2" />
                        Cancelar
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    {isEditing ? (
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Seu nome"
                      />
                    ) : (
                      <p className="text-gray-900">{user?.first_name || 'Não informado'}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Sobrenome</Label>
                    {isEditing ? (
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Seu sobrenome"
                      />
                    ) : (
                      <p className="text-gray-900">{user?.last_name || 'Não informado'}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                      />
                    ) : (
                      <p className="text-gray-900 flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-gray-500" />
                        {user?.email || 'Não informado'}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                      />
                    ) : (
                      <p className="text-gray-900 flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-500" />
                        {user?.phone || 'Não informado'}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Data de Nascimento</Label>
                    {isEditing ? (
                      <Input
                        id="birthDate"
                        name="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-900 flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                        {user?.birth_date ? (
                          <>
                            {new Date(user.birth_date).toLocaleDateString('pt-BR')}
                            {calculateAge(user.birth_date) && (
                              <span className="ml-2 text-gray-500">
                                ({calculateAge(user.birth_date)} anos)
                              </span>
                            )}
                          </>
                        ) : (
                          'Não informado'
                        )}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade/Estado</Label>
                    {isEditing ? (
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Cidade"
                        />
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="Estado"
                        />
                      </div>
                    ) : (
                      <p className="text-gray-900 flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        {user?.city && user?.state 
                          ? `${user.city}, ${user.state}`
                          : user?.city || user?.state || 'Não informado'
                        }
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Informações Profissionais
                </CardTitle>
                <CardDescription>
                  Sua experiência e motivação para o curso
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="profession">Profissão Atual/Anterior</Label>
                    {isEditing ? (
                      <Input
                        id="profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleInputChange}
                        placeholder="Ex: Professor, Vendedor, Administrador"
                      />
                    ) : (
                      <p className="text-gray-900">{user?.profession || 'Não informado'}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experiência com Tecnologia</Label>
                    {isEditing ? (
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Selecione...</option>
                        <option value="nenhuma">Nenhuma experiência</option>
                        <option value="basica">Básica (uso de computador/internet)</option>
                        <option value="intermediaria">Intermediária (já programou um pouco)</option>
                        <option value="avancada">Avançada (trabalhou com tecnologia)</option>
                      </select>
                    ) : (
                      <p className="text-gray-900">
                        {user?.experience === 'nenhuma' && 'Nenhuma experiência'}
                        {user?.experience === 'basica' && 'Básica (uso de computador/internet)'}
                        {user?.experience === 'intermediaria' && 'Intermediária (já programou um pouco)'}
                        {user?.experience === 'avancada' && 'Avançada (trabalhou com tecnologia)'}
                        {!user?.experience && 'Não informado'}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Motivação para o Curso</Label>
                    {isEditing ? (
                      <textarea
                        id="motivation"
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Conte-nos por que você quer aprender desenvolvimento front-end..."
                      />
                    ) : (
                      <p className="text-gray-900">{user?.motivation || 'Não informado'}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn (opcional)</Label>
                      {isEditing ? (
                        <Input
                          id="linkedin"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/seuperfil"
                        />
                      ) : (
                        <p className="text-gray-900">{user?.linkedin || 'Não informado'}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub (opcional)</Label>
                      {isEditing ? (
                        <Input
                          id="github"
                          name="github"
                          value={formData.github}
                          onChange={handleInputChange}
                          placeholder="https://github.com/seuusuario"
                        />
                      ) : (
                        <p className="text-gray-900">{user?.github || 'Não informado'}</p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Preferências de Notificação
                </CardTitle>
                <CardDescription>
                  Configure como você quer receber atualizações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Notificações por Email</h4>
                      <p className="text-sm text-gray-600">Receba atualizações sobre o curso por email</p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('emailNotifications')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.emailNotifications ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Relatório Semanal</h4>
                      <p className="text-sm text-gray-600">Receba um resumo do seu progresso toda semana</p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('weeklyReport')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.weeklyReport ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.weeklyReport ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">SMS</h4>
                      <p className="text-sm text-gray-600">Receba lembretes importantes por SMS</p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('smsNotifications')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.smsNotifications ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Emails de Marketing</h4>
                      <p className="text-sm text-gray-600">Receba novidades sobre novos cursos e promoções</p>
                    </div>
                    <button
                      onClick={() => handlePreferenceChange('marketingEmails')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        preferences.marketingEmails ? 'bg-primary' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          preferences.marketingEmails ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {user?.first_name} {user?.last_name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {user?.profession || 'Estudante do curso'}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Membro desde Jan 2024
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      25% do curso concluído
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Segurança da Conta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Alterar Senha
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Configurar 2FA
                </Button>
                <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                  Excluir Conta
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-primary/10 to-purple-100 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Suas Conquistas
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Aulas concluídas</span>
                    <span className="font-medium">12/48</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Certificados</span>
                    <span className="font-medium">1/4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Sequência de estudos</span>
                    <span className="font-medium">7 dias 🔥</span>
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

export default Profile

