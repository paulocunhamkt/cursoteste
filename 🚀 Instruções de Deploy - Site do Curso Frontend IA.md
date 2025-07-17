# 🚀 Instruções de Deploy - Site do Curso Frontend IA

## 📦 **ARQUIVOS PRONTOS PARA DEPLOY**

### 🎨 **Frontend (Produção)**
- **Localização**: `/home/ubuntu/curso-frontend-ia/dist/`
- **Status**: ✅ Build concluído com sucesso
- **Tamanho**: ~350KB (otimizado)
- **Tecnologia**: React + Vite (otimizado para produção)

### ⚙️ **Backend (API)**
- **Localização**: `/home/ubuntu/curso-backend-api/`
- **Status**: ✅ Funcionando na porta 5001
- **Tecnologia**: Flask + SQLite
- **Dependências**: Listadas em `requirements.txt`

---

## 🌐 **OPÇÕES DE DEPLOY**

### 🎯 **Opção 1: Deploy Automático (Recomendado)**
Posso fazer o deploy automático para você usando os serviços integrados:

```bash
# Frontend: Deploy automático para produção
# Backend: Deploy automático da API
```

### 🛠️ **Opção 2: Deploy Manual**

#### **Frontend (Sites Estáticos)**
- **Netlify**: Arraste a pasta `dist/` para netlify.com/drop
- **Vercel**: `vercel --prod` na pasta do projeto
- **GitHub Pages**: Commit da pasta `dist/`

#### **Backend (Serviços de API)**
- **Heroku**: `git push heroku main`
- **Railway**: Conectar repositório GitHub
- **DigitalOcean**: Deploy via Docker

---

## 🔧 **CONFIGURAÇÕES NECESSÁRIAS**

### 🌍 **Variáveis de Ambiente**
```bash
# Backend
FLASK_ENV=production
DATABASE_URL=sqlite:///curso.db
SECRET_KEY=sua_chave_secreta_aqui

# Frontend (build time)
VITE_API_URL=https://sua-api.herokuapp.com
```

### 🔗 **URLs de Produção**
Após o deploy, você terá:
- **Site Principal**: `https://seu-curso.netlify.app`
- **API Backend**: `https://sua-api.herokuapp.com`

---

## 📋 **CHECKLIST PRÉ-DEPLOY**

### ✅ **Frontend**
- [x] Build de produção criado
- [x] Assets otimizados
- [x] Rotas configuradas
- [x] API URLs configuradas
- [x] Responsividade testada

### ✅ **Backend**
- [x] API funcionando localmente
- [x] CORS configurado
- [x] Banco de dados inicializado
- [x] Rotas de autenticação testadas
- [x] Dependências listadas

### ✅ **Integração**
- [x] Frontend conecta com backend
- [x] Autenticação funcionando
- [x] Dados persistindo
- [x] Certificados gerando

---

## 🎯 **PRÓXIMOS PASSOS**

1. **Escolher serviços de hospedagem**
2. **Configurar domínio personalizado** (opcional)
3. **Configurar SSL/HTTPS** (automático na maioria dos serviços)
4. **Testar em produção**
5. **Configurar monitoramento**

---

## 📞 **SUPORTE PÓS-DEPLOY**

Após o deploy, você terá:
- Site funcionando 24/7
- Cadastro de alunos ativo
- Sistema de certificados operacional
- Dashboard administrativo
- Backup automático dos dados

**Seu curso estará online e pronto para receber alunos!** 🎓

