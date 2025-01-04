const technologiesImg = {
    html: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    css: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    js: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    ts: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    node: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white",
    react: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    express: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    py: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    php: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
}

const cardContent = [
    {
        title: "Tela de cadastro",
        img: "assets/images/projects-images/gerenciador-de-links-template.png",
        technologies: [ technologiesImg.html, technologiesImg.css, technologiesImg.js ],
        description: "React.js: Biblioteca JavaScript para criação de interfaces de usuário interativas. Baseada em componentes reutilizáveis e usa o conceito de Virtual DOM para otimizar o desempenho.JavaScript (ES6): Linguagem principal usada no desenvolvimento web. Recursos modernos como const, let, arrow functions e useState (hook de estado) foram utilizados.Hooks (useState): Hook nativo do React para gerenciamento de estado local em componentes funcionais. Permite o controle do valor do contador de forma simples e direta. CSS Inline Styling:Utilizado para estilizar elementos diretamente no componente com o atributo style.",
        link: "https://github.com/Anaglebia/tela-cadastro"
    },
    {
        title: "Formulario - Crud",
        img: "assets/images/projects-images/api-tickets-de-suporte.png",
        technologies: [ technologiesImg.node, technologiesImg.js ],
        description: "React.js: Biblioteca JavaScript para criação de interfaces de usuário interativas. Baseada em componentes reutilizáveis e usa o conceito de Virtual DOM para otimizar o desempenho.JavaScript (ES6): Linguagem principal usada no desenvolvimento web. Recursos modernos como const, let, arrow functions e useState (hook de estado) foram utilizados.Hooks (useState): Hook nativo do React para gerenciamento de estado local em componentes funcionais. Permite o controle do valor do contador de forma simples e direta. CSS Inline Styling:Utilizado para estilizar elementos diretamente no componente com o atributo style.",
        link: "https://github.com/Anaglebia/formulario-crud"
    },
    {
        title: "Firebase -auth-Login",
        img: "assets/images/projects-images/travelgram-galeria.png",
        technologies: [ technologiesImg.html, technologiesImg.css ],
        description: 'Angular Framework: Framework TypeScript para desenvolvimento web moderno. Oferece arquitetura baseada em componentes e vinculação de dados bidirecional (two-way data binding). TypeScript: Superconjunto do JavaScript usado no Angular. Fornece tipagem estática e recursos modernos para facilitar o desenvolvimento. Angular CLI: Ferramenta de linha de comando para criação e gerenciamento de projetos Angular. Facilita a geração de componentes, módulos e serviços.Angular Forms: Utilizado para criação e validação de formulários reativos e baseados em templates.Angular Router: Gerenciamento de rotas para navegação entre as páginas, como login e dashboard. Backend: Firebase AuthenticationFirebase Authentication Serviço do Firebase para autenticação de usuários. Suporta login por e-mail/senha, Google, Facebook, GitHub, entre outros. Firebase SDK (AngularFire): Biblioteca oficial para integração do Firebase com Angular. Facilita operações como autenticação e gerenciamento de usuários. Outras Ferramentas: Node.js e NPM: e.js é utilizado como runtime para executar o Angular CLI. NPM (Node Package Manager) gerencia as dependências do projeto. Firestore (Opcional): Banco de dados NoSQL em tempo real, caso seja necessário armazenar informações adicionais do usuário. VS Code: Editor de código popular, amplamente usado para desenvolvimento em Angular e Firebase. Git e GitHub: Controle de versão e colaboração no desenvolvimento.',
        link: "https://github.com/Anaglebia/firebase-auth-loginp"
    },
]

projectsArea = document.querySelector('.projects-area')

for(const card of cardContent){
    const elementCard = document.createElement('div')
    elementCard.classList.add('card')
    elementCard.setAttribute('data-aos', "fade-up")
    elementCard.setAttribute('data-aos-duration', "1000")

    const header = document.createElement('header')
    const h3 = document.createElement('h3')
    h3.innerHTML = card.title
    header.append(h3)
    elementCard.append(header)

    const previewProject = document.createElement('div')
    previewProject.classList.add('preview-project')
    const previewImage = document.createElement('img')
    previewImage.setAttribute('src', card.img)
    previewProject.append(previewImage)
    elementCard.append(previewProject)

    const technologiesIconsList = document.createElement('ul')
    technologiesIconsList.classList.add('technologies-icons')
    const cardTechnologies = card.technologies
    for (const techs of cardTechnologies) {
        const technologiesLi = document.createElement('li')
        const technologiesImages = document.createElement('img')
        technologiesImages.setAttribute('src', techs)
        technologiesLi.append(technologiesImages)
        technologiesIconsList.append(technologiesLi)
    }
    elementCard.append(technologiesIconsList)

    const description = document.createElement('div')
    description.classList.add('description-project')
    const descriptionParagraph = document.createElement('p')
    descriptionParagraph.innerHTML = card.description
    description.append(descriptionParagraph)
    elementCard.append(description)

    const preview = document.createElement('div')
    preview.classList.add('preview')
    const linkPreview = document.createElement('a')
    linkPreview.setAttribute('href', card.link)
    linkPreview.setAttribute('target', '_blank')
    preview.append(linkPreview)
    const btnPreview = document.createElement('button')
    btnPreview.textContent = "Visualizar"
    linkPreview.append(btnPreview)
    elementCard.append(preview)
    


    projectsArea.append(elementCard)
}