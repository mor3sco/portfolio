/* ════════════════════════════════════════════════
   Evandro Moresco — Portfolio
   js/i18n.js  —  Português / English toggle
   ════════════════════════════════════════════════ */

const translations = {
  pt: {
    /* ── nav ── */
    "nav.about":      "sobre",
    "nav.skills":     "skills",
    "nav.experience": "experiência",
    "nav.projects":   "projetos",
    "nav.certs":      "certs",
    "nav.contact":    "contato",
    "nav.cta":        "Contato",

    /* ── hero ── */
    "hero.available": "Disponível para oportunidades CLT/PJ remoto",
    "hero.role.dev":  "Developer",
    "hero.role.fs":   "Full Stack",
    "hero.badge1":    "Analista de TI",
    "hero.badge2":    "Cibersegurança",
    "hero.badge3":    "Founder Oggi Sec",
    "hero.subtitle":  "Construo aplicações do front ao servidor com visão real de segurança.",
    "hero.btn1":      "Ver Projetos",
    "hero.btn2":      "Entre em Contato",
    "hero.stat1.label": "Anos em TI",
    "hero.stat2.label": "Oggi Sec",
    "hero.stat3.label": "Certs",
    "hero.scroll":    "Scroll para explorar",
    "hero.photo.badge": "Full Stack Dev",

    /* ── about ── */
    "about.label":    "whoami",
    "about.title":    "Dev que entende<br><em>cada camada</em> do sistema",
    "about.p1":       "Comecei na TI fazendo manutenção de hardware e redes, passei pelo Exército Brasileiro administrando sistemas Linux em infraestrutura crítica, e hoje construo aplicações full stack com visão real de segurança — do código ao servidor.",
    "about.p2":       "Sou fundador da <strong>Oggi Sec</strong>, empresa de segurança da informação e gestão de TI em Piraju-SP, onde aplico diariamente a combinação de desenvolvimento e cibersegurança que poucos profissionais realmente possuem.",
    "about.h1.title": "Exército Brasileiro",
    "about.h1.text":  "Administração de sistemas Linux em infraestrutura crítica nacional.",
    "about.h2.title": "Founder · Oggi Sec (2019)",
    "about.h2.text":  "Segurança da informação e gestão de TI com foco em OWASP, Pentest e DevSecOps.",
    "about.h3.title": "Engenharia de Software · UNICESUMAR",
    "about.h3.text":  "Base sólida aliada à prática de 7+ anos no mercado real.",
    "about.terminal.looking": "CLT Full Stack",
    "about.terminal.status":  "disponível ✓",

    /* ── skills ── */
    "skills.label":   "stack técnica",
    "skills.title":   "O que eu <em>sei fazer</em>",
    "skills.fe.sub":  "Interfaces & UX",
    "skills.be.sub":  "APIs & Servidores",
    "skills.sec.sub": "Ofensivo & Defensivo",
    "skills.inf.sub": "Servidores & Redes",
    "skills.ai.sub":  "Produtividade & Automação",
    "skills.soft.sub":"Liderança & Gestão",
    "skills.soft.t1": "Liderança Técnica",
    "skills.soft.t2": "Gestão de Projetos",
    "skills.soft.t3": "Comunicação",
    "skills.soft.t4": "Resolução de Problemas",
    "skills.soft.t5": "Autodidatismo",
    "skills.soft.t6": "Documentação",

    /* ── experience ── */
    "exp.label":  "trajetória",
    "exp.title":  "Onde construí<br><em>experiência real</em>",
    "exp.tab0":   "Oggi Sec",
    "exp.tab1":   "Exército Brasileiro",
    "exp.tab2":   "TI Generalista",
    "exp.tab3":   "Freelancer Dev",
    "exp.0.role":    "Fundador & Analista Sênior",
    "exp.0.company": "Oggi Sec — Piraju, SP",
    "exp.0.period":  "2019 — Presente · 5+ anos",
    "exp.0.desc":    "Fundei e opero a Oggi Sec, empresa especializada em segurança da informação e gestão de TI para empresas da região. Responsável por toda a operação técnica, comercial e estratégica do negócio.",
    "exp.0.a1": "Condução de pentests e análises de vulnerabilidade com base em OWASP Top 10",
    "exp.0.a2": "Implementação de políticas de segurança, controle de acesso e monitoramento (SOC)",
    "exp.0.a3": "Desenvolvimento de sistemas web para clientes utilizando React, Node.js, JavaScript, Bootstrap e PHP",
    "exp.0.a4": "Consultoria em infraestrutura Linux, redes e hardening de servidores",
    "exp.0.a5": "Gestão completa do negócio: vendas, proposta técnica, entrega e suporte pós-venda",
    "exp.1.role":    "Administrador de Sistemas Linux",
    "exp.1.company": "Exército Brasileiro",
    "exp.1.period":  "Serviço Militar · Infraestrutura Crítica",
    "exp.1.desc":    "Responsável pela administração de servidores Linux em missão crítica nacional. Experiência com disciplina operacional, segurança de dados governamentais e alta disponibilidade.",
    "exp.1.a1": "Administração e manutenção de servidores Linux (Debian/Ubuntu) em infraestrutura crítica",
    "exp.1.a2": "Gerenciamento de backups, atualizações e patches de segurança em ambiente controlado",
    "exp.1.a3": "Configuração de redes, firewalls e protocolos de acesso seguro (SSH, VPN)",
    "exp.1.a4": "Trabalho sob pressão em contextos de missão crítica com zero margem para erros",
    "exp.2.role":    "Analista de TI & Suporte N2/N3",
    "exp.2.company": "Atuação como Técnico Generalista",
    "exp.2.period":  "2017 — 2019 · 2+ anos",
    "exp.2.desc":    "Início de carreira com base sólida em hardware, redes corporativas, suporte a servidores e implantação de sistemas ERP em empresas locais.",
    "exp.2.a1": "Manutenção e configuração de redes LAN/WAN, switches, roteadores e pontos de acesso",
    "exp.2.a2": "Suporte técnico N2/N3 para estações Windows e servidores Linux",
    "exp.2.a3": "Implantação e configuração de sistemas ERP para PMEs",
    "exp.2.a4": "Montagem, manutenção preventiva e corretiva de equipamentos de TI",
    "exp.3.role":    "Desenvolvedor Freelancer",
    "exp.3.company": "Projetos Independentes · Remote",
    "exp.3.period":  "2021 — Presente · Projetos variados",
    "exp.3.desc":    "Desenvolvimento de sistemas e landing pages para clientes e projetos pessoais. Foco em React, JavaScript moderno e Python.",
    "exp.3.a1": "Criação de sistemas CRUD completos com cadastro de clientes, tarefas e gestão de dados",
    "exp.3.a2": "Desenvolvimento de landing pages responsivas com Bootstrap 5 e CSS avançado",
    "exp.3.a3": "Scripts Python para automação e reconhecimento facial com OpenCV",
    "exp.3.a4": "Projetos open source publicados no GitHub com documentação profissional",

    /* ── projects ── */
    "proj.label":  "portfólio",
    "proj.title":  "Projetos que<br><em>eu construí</em>",
    "proj.filter.all":      "Todos",
    "proj.filter.web":      "Web Dev",
    "proj.filter.security": "Segurança",
    "proj.filter.python":   "Python",
    "proj.0.title": "Oggi Sec — Website Institucional",
    "proj.0.desc":  "Website institucional completo da Oggi Sec com design moderno, apresentação de serviços de segurança e gestão de TI. Bootstrap 5 + JS puro.",
    "proj.1.title": "Reconhecimento Facial",
    "proj.1.desc":  "Script Python com reconhecimento facial em tempo real usando OpenCV, face_recognition, dlib e threading para processamento paralelo.",
    "proj.2.title": "Lista de Tarefas App",
    "proj.2.desc":  "Aplicação de gerenciamento de tarefas com interface responsiva, persistência de dados e organização por prioridade e status.",
    "proj.3.title": "CRUD de Clientes",
    "proj.3.desc":  "Sistema completo de cadastro de clientes com CRUD, validação de formulários, busca e filtros. Interface limpa e funcional.",
    "proj.4.title": "Landing Page — Academia",
    "proj.4.desc":  "Landing page profissional com Bootstrap 5, seções de serviços, planos, depoimentos e formulário de contato. Totalmente responsiva.",
    "proj.5.title": "Jogo da Multiplicação",
    "proj.5.desc":  "Jogo educativo para ensino de tabuada com níveis de dificuldade progressivos, pontuação e feedback visual para estudantes.",
    "proj.github":  "Ver todos no GitHub →",

    /* ── certs ── */
    "certs.label": "certificações",
    "certs.title": "Conhecimento<br><em>validado</em>",

    /* ── contact ── */
    "contact.label":    "contato",
    "contact.title":    "Vamos <em>trabalhar</em><br>juntos?",
    "contact.subtitle": "Estou em busca de uma oportunidade CLT/PJ remoto.<br>Se você procura alguém que combina desenvolvimento com visão real de segurança, vamos conversar.",
    "contact.or":       "Ou me chame diretamente em →",

    /* ── footer ── */
    "footer.copy":  "© 2025 Evandro Moresco · Todos os direitos reservados",
    "footer.built": "GitHub Pages",
  },

  en: {
    /* ── nav ── */
    "nav.about":      "about",
    "nav.skills":     "skills",
    "nav.experience": "experience",
    "nav.projects":   "projects",
    "nav.certs":      "certs",
    "nav.contact":    "contact",
    "nav.cta":        "Contact",

    /* ── hero ── */
    "hero.available": "Available for full-time opportunities",
    "hero.role.dev":  "Developer",
    "hero.role.fs":   "Full Stack",
    "hero.badge1":    "IT Analyst",
    "hero.badge2":    "Cybersecurity",
    "hero.badge3":    "Founder Oggi Sec",
    "hero.subtitle":  "I build applications from front to server with a real security mindset.",
    "hero.btn1":      "View Projects",
    "hero.btn2":      "Get in Touch",
    "hero.stat1.label": "Years in IT",
    "hero.stat2.label": "Oggi Sec",
    "hero.stat3.label": "Certs",
    "hero.scroll":    "Scroll to explore",
    "hero.photo.badge": "Full Stack Dev",

    /* ── about ── */
    "about.label":    "whoami",
    "about.title":    "Dev who understands<br><em>every layer</em> of the stack",
    "about.p1":       "I started in IT doing hardware and network maintenance, went through the Brazilian Army administering Linux systems on critical infrastructure, and today I build full stack applications with a genuine security perspective — from code to server.",
    "about.p2":       "I'm the founder of <strong>Oggi Sec</strong>, a cybersecurity and IT management company in Piraju-SP, Brazil, where I daily apply the combination of development and cybersecurity that few professionals truly possess.",
    "about.h1.title": "Brazilian Army",
    "about.h1.text":  "Linux systems administration on national critical infrastructure.",
    "about.h2.title": "Founder · Oggi Sec (2019)",
    "about.h2.text":  "Information security and IT management focused on OWASP, Pentest and DevSecOps.",
    "about.h3.title": "Software Engineering · UNICESUMAR",
    "about.h3.text":  "Solid academic foundation paired with 7+ years of real-world practice.",
    "about.terminal.looking": "Full Stack CLT",
    "about.terminal.status":  "available ✓",

    /* ── skills ── */
    "skills.label":   "tech stack",
    "skills.title":   "What I <em>know how to do</em>",
    "skills.fe.sub":  "Interfaces & UX",
    "skills.be.sub":  "APIs & Servers",
    "skills.sec.sub": "Offensive & Defensive",
    "skills.inf.sub": "Servers & Networks",
    "skills.ai.sub":  "Productivity & Automation",
    "skills.soft.sub":"Leadership & Management",
    "skills.soft.t1": "Technical Leadership",
    "skills.soft.t2": "Project Management",
    "skills.soft.t3": "Communication",
    "skills.soft.t4": "Problem Solving",
    "skills.soft.t5": "Self-taught",
    "skills.soft.t6": "Documentation",

    /* ── experience ── */
    "exp.label":  "career",
    "exp.title":  "Where I built<br><em>real experience</em>",
    "exp.tab0":   "Oggi Sec",
    "exp.tab1":   "Brazilian Army",
    "exp.tab2":   "IT Generalist",
    "exp.tab3":   "Freelancer Dev",
    "exp.0.role":    "Founder & Senior Analyst",
    "exp.0.company": "Oggi Sec — Piraju, SP",
    "exp.0.period":  "2019 — Present · 5+ years",
    "exp.0.desc":    "I founded and operate Oggi Sec, a company specializing in information security and IT management for regional businesses. Responsible for the entire technical, commercial and strategic operation.",
    "exp.0.a1": "Conducting pentests and vulnerability assessments based on OWASP Top 10",
    "exp.0.a2": "Implementing security policies, access control and monitoring (SOC) in critical environments",
    "exp.0.a3": "Developing web systems for clients using HTML, CSS, JS, Bootstrap and PHP",
    "exp.0.a4": "Consulting on Linux infrastructure, networking and server hardening",
    "exp.0.a5": "Full business management: sales, technical proposals, delivery and post-sale support",
    "exp.1.role":    "Linux Systems Administrator",
    "exp.1.company": "Brazilian Army",
    "exp.1.period":  "Military Service · Critical Infrastructure",
    "exp.1.desc":    "Responsible for administering Linux servers in a national critical mission environment. Real experience with operational discipline, government data security and high availability.",
    "exp.1.a1": "Administration and maintenance of Linux servers (Debian/Ubuntu) on critical infrastructure",
    "exp.1.a2": "Managing backups, updates and security patches in a controlled environment",
    "exp.1.a3": "Configuring networks, firewalls and secure access protocols (SSH, VPN)",
    "exp.1.a4": "Working under pressure in mission-critical contexts with zero margin for error",
    "exp.2.role":    "IT Analyst & Support N2/N3",
    "exp.2.company": "IT Generalist Role",
    "exp.2.period":  "2017 — 2019 · 2+ years",
    "exp.2.desc":    "Career start with a solid foundation in hardware, corporate networking, server support and ERP deployment at local companies.",
    "exp.2.a1": "Maintenance and configuration of LAN/WAN networks, switches, routers and access points",
    "exp.2.a2": "N2/N3 technical support for Windows workstations and Linux servers",
    "exp.2.a3": "Deployment and configuration of ERP systems for SMBs",
    "exp.2.a4": "Assembly, preventive and corrective maintenance of IT equipment",
    "exp.3.role":    "Freelance Developer",
    "exp.3.company": "Independent Projects · Remote",
    "exp.3.period":  "2021 — Present · Various projects",
    "exp.3.desc":    "Development of systems and landing pages for clients and personal projects. Focus on React, modern JavaScript and Python.",
    "exp.3.a1": "Building full CRUD systems for client management, task tracking and data handling",
    "exp.3.a2": "Developing responsive landing pages with Bootstrap 5 and advanced CSS",
    "exp.3.a3": "Python scripts for automation and facial recognition with OpenCV",
    "exp.3.a4": "Open source projects published on GitHub with professional documentation",

    /* ── projects ── */
    "proj.label":  "portfolio",
    "proj.title":  "Projects I<br><em>built</em>",
    "proj.filter.all":      "All",
    "proj.filter.web":      "Web Dev",
    "proj.filter.security": "Security",
    "proj.filter.python":   "Python",
    "proj.0.title": "Oggi Sec — Institutional Website",
    "proj.0.desc":  "Complete institutional website for Oggi Sec with modern design, cybersecurity and IT management service showcase. Bootstrap 5 + vanilla JS.",
    "proj.1.title": "Facial Recognition",
    "proj.1.desc":  "Python script with real-time facial recognition using OpenCV, face_recognition, dlib and threading for parallel processing.",
    "proj.2.title": "Task Manager App",
    "proj.2.desc":  "Task management application with responsive UI, data persistence and organization by priority and status.",
    "proj.3.title": "Client CRUD System",
    "proj.3.desc":  "Full client registration system with CRUD operations, form validation, search and filters. Clean and functional interface.",
    "proj.4.title": "Landing Page — Gym",
    "proj.4.desc":  "Professional landing page with Bootstrap 5, service sections, plans, testimonials and contact form. Fully responsive.",
    "proj.5.title": "Multiplication Game",
    "proj.5.desc":  "Educational interactive game for multiplication tables with progressive difficulty levels, scoring and visual feedback.",
    "proj.github":  "View all on GitHub →",

    /* ── certs ── */
    "certs.label": "certifications",
    "certs.title": "Validated<br><em>knowledge</em>",

    /* ── contact ── */
    "contact.label":    "contact",
    "contact.title":    "Let's <em>work</em><br>together?",
    "contact.subtitle": "I am looking for a full-time or contract job opportunity.<br>If you're looking for someone who combines development with real security expertise, let's talk.",
    "contact.or":       "Or reach me directly at →",

    /* ── footer ── */
    "footer.copy":  "© 2025 Evandro Moresco · All rights reserved",
    "footer.built": "GitHub Pages",
  }
};

/* ── ENGINE ── */
let currentLang = localStorage.getItem('lang') || 'pt';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  const t = translations[lang];

  /* All data-i18n elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  /* data-i18n-html for innerHTML (rich text) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* Update button label */
  const btn = document.getElementById('lang-btn');
  if (btn) {
    btn.innerHTML = lang === 'pt'
      ? `<span class="lang-flag">🇺🇸</span><span class="lang-text">EN</span>`
      : `<span class="lang-flag">🇧🇷</span><span class="lang-text">PT</span>`;
    btn.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para Português');
  }

  /* Update page title */
  document.title = lang === 'pt'
    ? 'Evandro Moresco — Full Stack Developer'
    : 'Evandro Moresco — Full Stack Developer';

  /* Re-sync typed roles */
  if (window.updateTypedRoles) window.updateTypedRoles(lang);
}

function toggleLang() {
  applyLang(currentLang === 'pt' ? 'en' : 'pt');
}

/* Run on load */
document.addEventListener('DOMContentLoaded', () => applyLang(currentLang));

window.toggleLang = toggleLang;
