markdown
# 🧪 Teste Prático – Processo Seletivo Qualidade Rubeus

Este repositório contém a solução desenvolvida para o teste prático do Processo Seletivo de Qualidade da Rubeus.

O objetivo foi avaliar a qualidade de duas páginas de exemplo, identificar problemas e implementar testes automatizados para validar aspectos técnicos como SEO, estrutura e acessibilidade.

---

## 📌 Páginas Avaliadas

1. 🔗 https://qualidade.apprbs.com.br/certificacao  
2. 🔗 https://qualidade.apprbs.com.br/site  

---

# 🎯 Objetivo da Automação

A automação foi criada para validar:

- Estrutura básica da página (carregamento e renderização)
- Presença de elementos importantes para SEO
- Presença de H1
- Meta description
- Imagens sem atributo `alt`
- Problemas de acessibilidade utilizando `axe-core`

---

# 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Playwright**
- **@axe-core/playwright**
- TypeScript

---

# 🧱 Estrutura do Projeto

```

├── tests/
│   └── quality.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md

````

---

# 🚀 Como Executar o Projeto

## 1️⃣ Instalar dependências

```bash
npm install
````

## 2️⃣ Instalar navegadores do Playwright

```bash
npx playwright install
```

## 3️⃣ Executar os testes

```bash
npx playwright test
```

## 4️⃣ Executar testes visualizando o navegador

```bash
npx playwright test --headed
```

## 5️⃣ Abrir relatório HTML

```bash
npx playwright show-report
```

---

# 🔍 O que os Testes Validam

## ✅ 1. Verificação de carregamento da página

* Status HTTP
* DOM carregado
* Presença de conteúdo no body

## ✅ 2. SEO Básico

* Existência de `<title>`
* Existência de `<h1>`
* Existência de meta description

## ✅ 3. Acessibilidade

* Validação automática com `axe-core`
* Identificação de violações WCAG 2.0 / 2.1
* Imagens sem atributo `alt`

## ✅ 4. Console Errors

* Captura de erros no console da aplicação

---

# 📊 Abordagem Técnica

Foi adotada uma abordagem baseada em:

* Testes de auditoria estrutural
* Testes de validação automática
* Varredura de acessibilidade
* Validação não bloqueante para itens informativos

A automação foi construída de forma parametrizada, permitindo testar múltiplas páginas dentro do mesmo fluxo.

---

# 🧠 Classificação dos Problemas

Os problemas identificados foram classificados conforme solicitado no teste:

* **Tipo**

  * Correção
  * Melhoria
  * Nova funcionalidade

* **Classificação**

  * Utilidade
  * Usabilidade
  * Desejabilidade

* **Prioridade**

  * Alta
  * Média
  * Baixa

---

# 📈 Diferencial da Solução

* Uso de ferramenta moderna (Playwright)
* Integração com análise de acessibilidade automatizada
* Estrutura organizada
* Código reutilizável
* Relatório gerado automaticamente
* Boas práticas de organização de repositório

---

# 📌 Considerações Finais

A solução foi desenvolvida com foco em:

* Clareza
* Organização
* Cobertura técnica
* Escalabilidade da automação
* Boas práticas de QA

---

## 👤 Autor

Allan Lavorat
Engenharia de Qualidade / QA Automation


Qual estilo você quer transmitir?
```
