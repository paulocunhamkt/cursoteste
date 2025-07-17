# Planejamento do Site do Curso - Frontend com IA

## 🎯 Visão Geral

Site completo para o curso "Desenvolvedor Front-end com IA: do Zero ao Emprego" com sistema de cadastro, login, acompanhamento de progresso e emissão de certificados.

## 🏗️ Arquitetura do Sistema

### Frontend (React)
- Interface moderna e responsiva
- Dashboard do aluno
- Visualização do conteúdo do curso
- Sistema de progresso
- Área de certificados

### Backend (Flask)
- API RESTful
- Autenticação JWT
- Banco de dados SQLite
- Geração de certificados PDF
- Sistema de progresso

## 📱 Funcionalidades Principais

### 1. Landing Page
- Apresentação do curso
- Depoimentos e benefícios
- Call-to-action para cadastro
- Informações sobre o instrutor

### 2. Sistema de Autenticação
- Cadastro de novos alunos
- Login/logout
- Recuperação de senha
- Perfil do usuário

### 3. Dashboard do Aluno
- Visão geral do progresso
- Acesso aos módulos
- Estatísticas de aprendizado
- Próximas atividades

### 4. Conteúdo do Curso
- 4 módulos organizados
- 16 semanas de conteúdo
- Projetos práticos
- Recursos adicionais

### 5. Sistema de Progresso
- Marcação de lições concluídas
- Barra de progresso visual
- Certificação por módulo
- Certificado final

### 6. Área de Certificados
- Visualização de certificados
- Download em PDF
- Verificação de autenticidade
- Compartilhamento social

## 🎨 Design e UX

### Paleta de Cores
- Primária: #4f46e5 (Indigo)
- Secundária: #7c3aed (Purple)
- Accent: #06b6d4 (Cyan)
- Neutros: Tons de cinza

### Tipografia
- Headings: Inter (bold)
- Body: Inter (regular)
- Code: JetBrains Mono

### Componentes
- Cards modernos com sombras
- Botões com hover effects
- Modais para interações
- Animações suaves

## 🗄️ Estrutura do Banco de Dados

### Tabela: users
```sql
- id (PRIMARY KEY)
- email (UNIQUE)
- password_hash
- first_name
- last_name
- phone
- created_at
- updated_at
```

### Tabela: progress
```sql
- id (PRIMARY KEY)
- user_id (FOREIGN KEY)
- module_id
- lesson_id
- completed
- completed_at
```

### Tabela: certificates
```sql
- id (PRIMARY KEY)
- user_id (FOREIGN KEY)
- certificate_type (module/final)
- module_id
- issued_at
- certificate_hash
```

## 🔧 Tecnologias Utilizadas

### Frontend
- React 18
- React Router
- Tailwind CSS
- Lucide Icons
- Axios
- React Hook Form

### Backend
- Flask
- Flask-JWT-Extended
- Flask-CORS
- SQLAlchemy
- Werkzeug
- ReportLab (PDF)

### Banco de Dados
- SQLite (desenvolvimento)
- PostgreSQL (produção)

## 📄 Estrutura de Páginas

### Públicas
- `/` - Landing page
- `/login` - Página de login
- `/register` - Página de cadastro
- `/about` - Sobre o curso

### Privadas (Autenticadas)
- `/dashboard` - Dashboard principal
- `/course` - Visão geral do curso
- `/course/module/:id` - Módulo específico
- `/course/lesson/:id` - Lição específica
- `/progress` - Progresso detalhado
- `/certificates` - Certificados
- `/profile` - Perfil do usuário

## 🚀 Fluxo do Usuário

### 1. Primeiro Acesso
1. Usuário acessa landing page
2. Clica em "Começar Agora"
3. Preenche formulário de cadastro
4. Recebe email de confirmação
5. Faz login no sistema

### 2. Experiência de Aprendizado
1. Acessa dashboard
2. Visualiza progresso atual
3. Clica em módulo/lição
4. Estuda o conteúdo
5. Marca como concluído
6. Progride para próxima lição

### 3. Certificação
1. Completa módulo/curso
2. Sistema gera certificado
3. Usuário visualiza certificado
4. Pode baixar PDF
5. Compartilha conquista

## 📊 Métricas e Analytics

### Dados Coletados
- Tempo gasto por lição
- Taxa de conclusão por módulo
- Pontos de abandono
- Feedback dos usuários

### Dashboard Admin (Futuro)
- Estatísticas de uso
- Progresso dos alunos
- Certificados emitidos
- Relatórios de engajamento

## 🔒 Segurança

### Autenticação
- Senhas hasheadas (bcrypt)
- JWT tokens com expiração
- Refresh tokens
- Rate limiting

### Autorização
- Middleware de autenticação
- Verificação de permissões
- Proteção de rotas sensíveis

### Dados
- Validação de entrada
- Sanitização de dados
- Proteção contra SQL injection
- HTTPS obrigatório

## 📱 Responsividade

### Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

### Adaptações Mobile
- Menu hamburger
- Cards empilhados
- Botões touch-friendly
- Navegação simplificada

## 🎓 Sistema de Certificados

### Tipos de Certificados
1. **Certificado por Módulo**
   - Emitido ao completar cada módulo
   - 4 certificados no total
   - Design específico por módulo

2. **Certificado Final**
   - Emitido ao completar todo o curso
   - Design especial e detalhado
   - Inclui todas as competências

### Informações no Certificado
- Nome completo do aluno
- Nome do curso/módulo
- Data de conclusão
- Carga horária
- Competências adquiridas
- Assinatura digital
- QR Code para verificação

### Verificação de Autenticidade
- Hash único por certificado
- Página de verificação pública
- QR Code com link de verificação
- Banco de dados de certificados válidos

## 🚀 Roadmap de Desenvolvimento

### Fase 1: MVP (Semana 1)
- Landing page
- Sistema de cadastro/login
- Dashboard básico
- Estrutura do curso

### Fase 2: Conteúdo (Semana 2)
- Todos os módulos
- Sistema de progresso
- Navegação entre lições

### Fase 3: Certificação (Semana 3)
- Geração de certificados
- Download de PDFs
- Sistema de verificação

### Fase 4: Polimento (Semana 4)
- Testes completos
- Otimizações
- Deploy em produção

## 📈 Futuras Melhorias

### Funcionalidades Avançadas
- Fórum de discussão
- Chat ao vivo
- Videoaulas
- Exercícios interativos
- Gamificação

### Integrações
- Pagamento online
- Email marketing
- Analytics avançado
- CRM integration

### Mobile App
- App nativo
- Notificações push
- Offline mode
- Sincronização

Este planejamento serve como base para o desenvolvimento do site completo do curso, garantindo uma experiência profissional e engajante para os alunos.

