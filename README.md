
# AcessoFácil

Sistema web simples para cadastro e listagem de usuários com acessibilidade integrada.

## 📋 Descrição

Este projeto foi desenvolvido como parte de uma atividade avaliativa. Ele permite:
- Cadastrar, editar e remover usuários
- Alternar entre tema claro e escuro (salvo em localStorage)
- Alternar entre idiomas Português e Inglês (salvo em cookies)
- Interface responsiva e acessível com menu fixo

## 🚀 Tecnologias utilizadas

- React (Vite)
- HTML e CSS puro
- useMemo e useCallback
- localStorage e Cookies API
- Sem dependências externas

## 🔧 Instalação e uso

```bash
# Clone o repositório
git clone https://github.com/cristiancruvinel/acesso-facil

# Acesse a pasta
cd acesso-facil

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

## ✅ Funcionalidades

- [x] Cadastro de usuário com nome e e-mail
- [x] Listagem de usuários
- [x] Edição e remoção
- [x] Tema claro/escuro
- [x] Idiomas: português / inglês
- [x] Armazenamento persistente (localStorage e cookies)

## 📁 Estrutura de pastas

```
src/
├── components/
│   ├── AccessibilityMenu.jsx
│   ├── UserForm.jsx
│   └── UserList.jsx
├── context/
│   ├── LanguageContext.jsx
│   └── ThemeContext.jsx
├── pages/
│   └── Home.jsx
├── utils/
│   └── texts.js
├── App.jsx
├── main.jsx
└── index.css
```

## 📄 Licença

Este projeto é apenas educacional e sem fins lucrativos.

---

### 🧠 Autor

Feito por Cristian Cauê Faria Cruvinel
