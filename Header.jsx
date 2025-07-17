import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Button } from './ui/button'
import { 
  Menu, 
  X, 
  User, 
  LogOut, 
  BookOpen, 
  Award, 
  BarChart3,
  Brain
} from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-900">
              Frontend<span className="text-primary">IA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="text-gray-700 hover:text-primary transition-colors flex items-center space-x-1"
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <Link 
                  to="/course" 
                  className="text-gray-700 hover:text-primary transition-colors flex items-center space-x-1"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Curso</span>
                </Link>
                <Link 
                  to="/certificates" 
                  className="text-gray-700 hover:text-primary transition-colors flex items-center space-x-1"
                >
                  <Award className="h-4 w-4" />
                  <span>Certificados</span>
                </Link>
                <div className="flex items-center space-x-4">
                  <Link 
                    to="/profile"
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span>{user?.first_name}</span>
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-primary"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="ghost">Entrar</Button>
                </Link>
                <Link to="/register">
                  <Button>Começar Agora</Button>
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="h-4 w-4" />
                      <span>Dashboard</span>
                    </div>
                  </Link>
                  <Link 
                    to="/course" 
                    className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span>Curso</span>
                    </div>
                  </Link>
                  <Link 
                    to="/certificates" 
                    className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4" />
                      <span>Certificados</span>
                    </div>
                  </Link>
                  <Link 
                    to="/profile" 
                    className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Perfil</span>
                    </div>
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <LogOut className="h-4 w-4" />
                      <span>Sair</span>
                    </div>
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    Entrar
                  </Link>
                  <Link 
                    to="/register" 
                    className="block px-3 py-2"
                    onClick={closeMenu}
                  >
                    <Button className="w-full">Começar Agora</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

