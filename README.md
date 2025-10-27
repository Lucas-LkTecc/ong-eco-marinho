Projeto EcoMarinho - Website Institucional
Este repositório contém o código-fonte completo do website institucional da EcoMarinho, uma organização (hipotética) focada na conservação dos oceanos. O projeto foi desenvolvido "do zero" (from scratch), partindo de um layout criado no Figma e implementado com HTML5, CSS3 e JavaScript puro (Vanilla JS).

O objetivo principal foi criar um site moderno, visualmente atraente e 100% responsivo, garantindo uma experiência de usuário consistente em todos os dispositivos.

Status do Projeto: Concluído (Versão 1.0)

✨ Features Principais
O site é uma Aplicação de Múltiplas Páginas (MPA) e inclui as seguintes seções e funcionalidades:

Design Responsivo (Mobile-First): O layout foi construído pensando primeiro nos dispositivos móveis e depois adaptado para tablets e desktops.

Menu de Navegação Interativo:

Menu desktop com alinhamento e botão de destaque.

Menu mobile "hambúrguer" totalmente funcional, que desliza como um painel lateral, implementado com JavaScript.

Cabeçalho Híbrido: O cabeçalho se comporta de forma diferente dependendo da página e do dispositivo:

Mobile: Sólido e fixo (position: sticky) para fácil acesso.

Desktop (Páginas Internas): Transparente e sobreposto (position: absolute) à imagem hero, criando um efeito visual moderno.

Páginas Desenvolvidas:

Home: Apresentação principal com seções de impacto, cards de valores e "Quem Faz".

Sobre: Página com layout de 3 colunas (grid) para os pilares da organização.

Projetos: Vitrine de projetos em formato de card.

Blog: Grade de posts com informações de autor e paginação.

Doações: Formulário de doação completo com seleção de valores e botões de tipo.

Cadastro: Formulário avançado com agrupamento lógico (fieldset) e validação de dados.

Formulários Avançados:

Validação de formulário nativa do HTML5 (required, pattern, type="email").

Máscaras de input com JavaScript para campos de CPF, Telefone e CEP, melhorando a UX.

🛠️ Tecnologias Utilizadas
Este projeto foi construído sem o uso de frameworks CSS ou JS, focando nos fundamentos da web:

HTML5: Utilização de tags semânticas (<header>, <main>, <section>, <article>, <nav>, <fieldset>).

CSS3:

CSS Grid e Flexbox para a criação de todos os layouts complexos.

Variáveis CSS (Custom Properties) para gerenciamento centralizado do tema (cores, fontes).

Media Queries para a implementação da responsividade (Mobile-First).

Pseudo-elementos (::before) para criar os overlays das seções hero.

JavaScript (ES6+):

Manipulação direta do DOM (querySelector, addEventListener).

Uso de classList.toggle() para o menu mobile.

Scripts de máscara de input para formatação de formulários.

📁 Estrutura de Arquivos
A estrutura do projeto foi organizada para separar claramente o conteúdo, os estilos e os scripts.

/projeto-ecomarinho
│
│
├── assets/
│ ├── css/
│ │ ├── global.css 
│ │ ├── index.css
│ │ ├── projetos.css
│ │ ├── sobre.css
│ │ ├── blog.css
│ │ ├── doacoes.css
│ │ └── cadastro.css
│ │
│ ├── js/
│ │ ├── main.js       (Controla o menu mobile)
│ │ └── masks.js      (Controla as máscaras dos formulários)
│ │────
│ │   ├── index.html
│ │   ├── sobre.html
│ │   ├── projetos.html
│ │   ├── blog.html
│ │   ├── doacoes.html
│ │   ├── cadastro.html
│ │
│ └── images/
│     ├── logo.png
│     ├── icons/
│     ├── blog/
│     ├── projetos/
│     └── ...
│
└── README.md

💡 Pontos-Chave de Desenvolvimento
Como desenvolvedor, alguns dos principais desafios e soluções implementadas foram:

CSS Global (global.css): O maior desafio foi criar um global.css que fosse ao mesmo tempo robusto e flexível. Ele centraliza 100% dos estilos do header, footer, variáveis de cor e tipografia. Isso foi crucial para manter a consistência visual em todas as 6 páginas.

Conflitos de CSS na Responsividade: Durante a implementação do menu mobile, ocorreram conflitos entre as regras @media (especificamente display: none vs display: flex). O problema foi resolvido unificando todas as regras de responsividade mobile em um único bloco no global.css, eliminando regras duplicadas nos arquivos de páginas específicas (como index.css).

Lógica do Header: Implementar o header que é sticky e sólido no mobile, mas absolute e transparente no desktop, exigiu uma lógica cuidadosa de sobrescrita de regras usando min-width para o desktop, garantindo que a base (mobile) não fosse afetada.