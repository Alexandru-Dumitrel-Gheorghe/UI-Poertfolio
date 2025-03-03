// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  de: {
    translation: {
      welcome: "Willkommen",
      navbar: {
        home: "Startseite",
        about: "Über mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt"
      },
      hero: {
        frontend: "FRONT END WEB DEVELOPER",
        uiux: "UI/UX DESIGNER",
        nameAndDate: "Alexandru Gheorghe<br />{{date}}",
        profileAlt: "Profilfoto",
        title: "PORTFOLIO",
        tagline: "Crafting Digital Experiences with Passion and Precision.",
        description: "Leidenschaft für moderne Webtechnologien und die Erstellung benutzerfreundlicher, responsiver Lösungen.",
        projectsButton: "Projekten",
        cvButton: "Lebenslauf📄"
      },
      about: {
        introTitle: "Introduction",
        paragraph1: "Hallo! Ich bin Alexandru, ein leidenschaftlicher Front-End Developer mit einem Auge für UI/UX. Ich liebe es, moderne und ansprechende Weboberflächen zu gestalten und neue Technologien auszuprobieren.",
        paragraph2: "In meiner Freizeit genieße ich das Lernen neuer Frameworks, das Experimentieren mit Design-Tools und die Teilnahme an Entwickler-Communities. Dabei lege ich großen Wert auf benutzerfreundliche, effiziente und ästhetisch ansprechende Lösungen, die das digitale Erlebnis für alle verbessern.",
        paragraph3: "Mein Ziel ist es, Webseiten und Anwendungen zu schaffen, die nicht nur funktional, sondern auch inspirierend sind. Ich glaube daran, dass Technologie Menschen zusammenbringt und Innovation fördert."
      },

      skills: {
        sectionTitle: "PERSONAL SKILLS",
        items: [
          {
            title: "FRONT END WEB DEVELOPER",
            description:
              "Ich bin ein leidenschaftlicher Front-End Developer mit einem Fokus auf die Entwicklung benutzerfreundlicher und ansprechender Webseiten. Mit umfassenden Kenntnissen in HTML, CSS, JavaScript und React."
          },
          {
            title: "UI/UX DESIGN",
            description:
              "Als UI/UX Designer gestalte ich benutzerzentrierte digitale Erlebnisse, die sowohl ästhetisch ansprechend als auch funktional sind."
          }
        ]
      },
      titleProject: {
        defaultTitle: "Projekte",
        defaultSubtitle: "Projekte, die mit Leidenschaft umgesetzt wurden"
      },
      weddingPhotography: {
        title: "Portfolio",
        description:
          "Eine Website für Hochzeitsfotografie-Dienstleistungen mit Portfolios, Leistungspaketen und Kundenbewertungen.",
        technologies: "Technologien:",
        features: "Funktionen:",
        liveDemoButton: "Live Demo",
        githubButton: "GitHub",
        responsiveDesign: "Responsives Design",
        interactiveGallery: "Interaktive Galerie",
        contactForm: "Kontaktformular",
        servicePackages: "Servicepakete"
      },
      projectTaskTimer: {
        title: "Task Timer",
        description:
          "Das Product Timer Dashboard ist eine Webanwendung, die Ihnen hilft, die Zeit für verschiedene Aufgaben zu verfolgen. Im Front-End kommen <strong>React</strong> und <strong>CSS Modules</strong> zum Einsatz, während im Back-End <strong>Node.js</strong> und <strong>MongoDB</strong> verwendet werden.",
        technologies: "Technologien:",
        features: "Funktionen:",
        liveDemoButton: "Live Demo",
        githubButton: "GitHub",
        timer: "Echtzeit-Timer: Start, Pause, Stopp",
        categories: "Kategorien: Aufgaben nach Kategorien sortieren",
        reports: "Tägliche, wöchentliche und monatliche Berichte",
        pdfExport: "PDF-Export",
        darkMode: "Dark Mode",
        responsiveDesign: "Responsives Design"
      },
      education: {
        left: {
          heading: "Webentwicklung, Frontend-Entwicklung",
          subHeading: "IT School | 2023-2024",
          paragraph: "Ich habe als Front-End Web Developer an der IT School umfassende Kenntnisse in der Entwicklung benutzerfreundlicher Webseiten erworben. Ich beherrsche die Grundlagen von HTML, CSS und JavaScript (ES6+) und habe praktische Erfahrung mit modernen Frameworks und Bibliotheken wie React und Bootstrap. Zudem verfüge ich über Kenntnisse in API-Integration, um dynamische Webanwendungen zu entwickeln. Ein weiterer Fokus meiner Arbeit liegt auf SEO (Suchmaschinenoptimierung) und responsivem Design, um moderne und performante Webseiten optimal zu gestalten."
        },
        right: {
          heading: "UI/UX Design",
          subHeading: "IT School | 2024 - Heute",
          paragraph: "Als UI/UX Designer entwickle ich benutzerzentrierte digitale Erlebnisse, die nicht nur funktional, sondern auch ästhetisch ansprechend sind. Ich arbeite mit Tools wie Figma und Miro, um intuitive und ansprechende Interfaces zu gestalten. Dabei erstelle ich interaktive Prototypen, optimiere User Flows und teste Usability, um eine bestmögliche Nutzererfahrung zu gewährleisten. Zusätzlich befasse ich mich mit Design-Prinzipien, Typografie, Farbpsychologie und Barrierefreiheit, um inklusive und zugängliche Designs zu schaffen. Brainstorming-Sitzungen, SEO-Anpassungen und die Implementierung von Responsive Design gehören ebenfalls zu meinen Aufgaben."
        },
        verticalTitle: "EDUCATION"
      },
      
      githubProjects: {
        heading: "Neueste GitHub-Projekte",
        loader: "Lade Projekte...",
        error: "Fehler: {{error}}",
        repoLinkText: "Auf GitHub ansehen",
        noDescription: "Keine Beschreibung verfügbar."
      },
      
      contact: {
        letsWork: "Let's work",
        together: "TOGETHER",
        ready: "Bereit, deine Ideen zum Leben zu erwecken? Schick mir eine Nachricht!",
        projects: "Projekten",
        resume: "Lebenslauf",
        contactForm: "Kontaktformular",
        name: "Name",
        email: "E-Mail",
        message: "Nachricht",
        send: "Senden"
      },
      footer: {
        nav: {
          home: "Startseite",
          about: "Über mich",
          skills: "Fähigkeiten",
          projects: "Projekte",
          contact: "Kontakt"
        },
        copyright:
          "Developed & Designed by Alexandru Gheorghe © {{year}}"
      },

      chatbot: {
        title: "Chatbot",
        initialMessage: "Hallo! Wie kann ich dir heute helfen?",
        thinking: "Denke nach...",
        errorResponse: "Fehler in der Antwort.",
        errorMessage: "Ups! Etwas ist schief gelaufen. Bitte versuche es erneut.",
        inputPlaceholder: "Schreibe eine Nachricht...",
        inputAria: "Nachricht eingeben",
        sendAria: "Nachricht senden",
        openAria: "Chatbot öffnen",
        closeAria: "Chatbot schließen",
        info: "Dieser Chatbot wurde mit der OpenAI API erstellt und bietet Echtzeit-Unterstützung. Er ist in mein Portfolio integriert, um meine Fähigkeiten in der Entwicklung interaktiver Webanwendungen zu demonstrieren."
      },
      
      projectTetris: {
        title: "Tetris Game",
        description:
          "Ein klassisches Tetris-Spiel mit React. Ordnen Sie fallende Tetrominos so an, dass ganze Reihen entstehen, um Punkte zu sammeln.",
        technologies: "TECHNOLOGIEN",
        features: "FUNKTIONEN",
        bulletPoints: {
          multipleLevels: "Mehrere Level",
          increasingSpeed: "Steigende Geschwindigkeit",
          responsiveDesign: "Responsives Design",
          intuitiveControls: "Intuitive Steuerung",
          soundEffects: "Soundeffekte"
        },
        liveDemoButton: "Live Demo",
        githubButton: "GitHub"
      }
    }
  },

  en: {
    translation: {
      welcome: "Welcome",
      navbar: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        frontend: "FRONT END WEB DEVELOPER",
        uiux: "UI/UX DESIGNER",
        nameAndDate: "Alexandru Gheorghe<br />{{date}}",
        profileAlt: "Profile Photo",
        title: "PORTFOLIO",
        tagline: "Crafting Digital Experiences with Passion and Precision.",
        description: "Passion for modern web technologies and creating user-friendly, responsive solutions.",
        projectsButton: "Projects",
        cvButton: "CV📄"
      },
      about: {
        introTitle: "Introduction",
        paragraph1: "Hello! I'm Alexandru, a passionate Front-End Developer with an eye for UI/UX. I love designing modern and appealing web interfaces and experimenting with new technologies.",
        paragraph2: "In my free time, I enjoy learning new frameworks, experimenting with design tools, and participating in developer communities. I value user-friendly, efficient, and aesthetically pleasing solutions that enhance digital experiences for everyone.",
        paragraph3: "My goal is to create websites and applications that are not only functional but also inspiring. I believe that technology brings people together and fosters innovation."
      },
      skills: {
        sectionTitle: "PERSONAL SKILLS",
        items: [
          {
            title: "FRONT END WEB DEVELOPER",
            description:
              "I am a passionate Front-End Developer focused on building user-friendly and engaging websites, proficient in HTML, CSS, JavaScript, and React."
          },
          {
            title: "UI/UX DESIGN",
            description:
              "As a UI/UX Designer, I create user-centric digital experiences that are both aesthetically pleasing and functional."
          }
        ]
      },
      titleProject: {
        defaultTitle: "Projects",
        defaultSubtitle: "Projects created with passion"
      },
      weddingPhotography: {
        title: "Wedding Portfolio",
        description:
          "A website for wedding photography services featuring portfolios, service packages, and customer reviews.",
        technologies: "Technologies:",
        features: "Features:",
        liveDemoButton: "Live Demo",
        githubButton: "GitHub",
        responsiveDesign: "Responsive Design",
        interactiveGallery: "Interactive Gallery",
        contactForm: "Contact Form",
        servicePackages: "Service Packages"
      },
      projectTaskTimer: {
        title: "Task Timer",
        description:
          "The Product Timer Dashboard is a web application that helps you track time for different tasks. On the front-end, <strong>React</strong> and <strong>CSS Modules</strong> are used, while on the back-end <strong>Node.js</strong> and <strong>MongoDB</strong> are utilized.",
        technologies: "Technologies:",
        features: "Features:",
        liveDemoButton: "Live Demo",
        githubButton: "GitHub",
        timer: "Real-time Timer: Start, Pause, Stop",
        categories: "Categories: Sort tasks by categories",
        reports: "Daily, weekly, and monthly reports",
        pdfExport: "PDF Export",
        darkMode: "Dark Mode",
        responsiveDesign: "Responsive Design"
      },

      education: {
        left: {
          heading: "Web Development, Frontend Development",
          subHeading: "IT School | 2023-2024",
          paragraph: "I have acquired comprehensive skills as a Front-End Web Developer at IT School, mastering the basics of HTML, CSS, and JavaScript (ES6+). I have hands-on experience with modern frameworks and libraries like React and Bootstrap, and I also have knowledge in API integration to develop dynamic web applications. Additionally, I focus on SEO and responsive design to create modern, high-performing websites."
        },
        right: {
          heading: "UI/UX Design",
          subHeading: "IT School | 2024 - Present",
          paragraph: "As a UI/UX Designer, I develop user-centric digital experiences that are both functional and aesthetically pleasing. I work with tools like Figma and Miro to create intuitive and attractive interfaces, develop interactive prototypes, optimize user flows, and test usability to ensure the best possible experience. I also focus on design principles, typography, color psychology, and accessibility to craft inclusive designs. Brainstorming sessions, SEO adjustments, and implementing responsive design are also part of my responsibilities."
        },
        verticalTitle: "EDUCATION"
      },

      githubProjects: {
        heading: "Latest GitHub Projects",
        loader: "Loading projects...",
        error: "Error: {{error}}",
        repoLinkText: "View on GitHub",
        noDescription: "No description available."
      },
      
      contact: {
        letsWork: "Let's work",
        together: "TOGETHER",
        ready: "Ready to bring your ideas to life? Send me a message!",
        projects: "Projects",
        resume: "Resume",
        contactForm: "Contact Form",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "SEND"
      },
footer: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    copyright:
      "Developed & Designed by Alexandru Gheorghe © {{year}}"
  },  

  chatbot: {
    title: "Chatbot",
    initialMessage: "Hello! How can I help you today?",
    thinking: "Thinking...",
    errorResponse: "Error in response.",
    errorMessage: "Oops! Something went wrong. Please try again.",
    inputPlaceholder: "Type a message...",
    inputAria: "Enter message",
    sendAria: "Send message",
    openAria: "Open Chatbot",
    closeAria: "Close Chatbot",
    info: "This chatbot is built using the OpenAI API and provides real-time support. It is integrated into my portfolio to showcase my skills in developing interactive web applications."
  },

      projectTetris: {
        title: "Tetris Game",
        description:
          "A classic Tetris game built with React. Arrange falling tetrominoes to form complete lines and earn points.",
        technologies: "TECHNOLOGIES",
        features: "FEATURES",
        bulletPoints: {
          multipleLevels: "Multiple Levels",
          increasingSpeed: "Increasing Speed",
          responsiveDesign: "Responsive Design",
          intuitiveControls: "Intuitive Controls",
          soundEffects: "Sound Effects"
        },
        liveDemoButton: "Live Demo",
        githubButton: "GitHub"
      }
    }
  },

  ro: {
    translation: {
      welcome: "Bine ai venit",
      navbar: {
        home: "Acasă",
        about: "Despre mine",
        skills: "Abilități",
        projects: "Proiecte",
        contact: "Contact"
      },
      hero: {
        frontend: "DEZVOLTATOR WEB FRONT END",
        uiux: "UI/UX DESIGNER",
        nameAndDate: "Alexandru Gheorghe<br />{{date}}",
        profileAlt: "Fotografie de profil",
        title: "PORTOFOLIU",
        tagline: "Crearea de experiențe digitale cu pasiune și precizie.",
        description: "Pasiune pentru tehnologiile web moderne și realizarea de soluții responsive, ușor de utilizat.",
        projectsButton: "Proiecte",
        cvButton: "CV📄"
      },
      about: {
        introTitle: "Introducere",
        paragraph1: "Bună! Sunt Alexandru, un dezvoltator Front-End pasionat, cu un ochi pentru UI/UX. Îmi place să proiectez interfețe web moderne și atrăgătoare și să experimentez cu tehnologii noi.",
        paragraph2: "În timpul liber, îmi place să învăț noi framework-uri, să experimentez cu unelte de design și să particip la comunități de dezvoltatori. Apreciez soluțiile prietenoase pentru utilizatori, eficiente și estetic plăcute, care îmbunătățesc experiența digitală pentru toți.",
        paragraph3: "Scopul meu este să creez site-uri și aplicații care nu sunt doar funcționale, ci și inspiratoare. Cred că tehnologia aduce oamenii împreună și stimulează inovația."
      },
      skills: {
        sectionTitle: "ABILITĂȚI PERSONALE",
        items: [
          {
            title: "DEZVOLTATOR WEB FRONT END",
            description:
              "Sunt un dezvoltator Front-End pasionat, concentrat pe crearea de site-uri web prietenoase și atractive, cu cunoștințe solide în HTML, CSS, JavaScript și React."
          },
          {
            title: "UI/UX DESIGN",
            description:
              "Ca designer UI/UX, creez experiențe digitale centrate pe utilizator, care sunt atât estetice, cât și funcționale."
          }
        ]
      },
      titleProject: {
        defaultTitle: "Proiecte",
        defaultSubtitle: "Proiecte realizate cu pasiune"
      },
      weddingPhotography: {
        title: "Portofoliu",
        description:
          "Un site pentru servicii de fotografie de nuntă, cu portofolii, pachete de servicii și recenzii ale clienților.",
        technologies: "Tehnologii:",
        features: "Funcționalități:",
        liveDemoButton: "Live Demo",
        githubButton: "GitHub",
        responsiveDesign: "Design Responsiv",
        interactiveGallery: "Galerie Interactivă",
        contactForm: "Formular de Contact",
        servicePackages: "Pachete de Servicii"
      },
      projectTaskTimer: {
        title: "Task Timer",
        description:
          "Product Timer Dashboard este o aplicație web care te ajută să urmărești timpul pentru diferite sarcini. În partea de front-end se folosesc <strong>React</strong> și <strong>CSS Modules</strong>, iar în back-end se utilizează <strong>Node.js</strong> și <strong>MongoDB</strong>.",
        technologies: "Tehnologii:",
        features: "Funcționalități:",
        liveDemoButton: "Live Demo",
        githubButton: "GitHub",
        timer: "Timer în timp real: Start, Pauză, Stop",
        categories: "Categorii: Sortează sarcinile pe categorii",
        reports: "Rapoarte zilnice, săptămânale și lunare",
        pdfExport: "Export PDF",
        darkMode: "Mod întunecat",
        responsiveDesign: "Design responsive"
      },

      education: {
        left: {
          heading: "Dezvoltare Web, Dezvoltare Frontend",
          subHeading: "IT School | 2023-2024",
          paragraph: "Am dobândit cunoștințe cuprinzătoare ca dezvoltator Front-End la IT School, stăpânind bazele HTML, CSS și JavaScript (ES6+). Am experiență practică cu framework-uri și biblioteci moderne, precum React și Bootstrap, și dispun de cunoștințe în integrarea API-urilor pentru a dezvolta aplicații web dinamice. Un alt accent al muncii mele este pus pe SEO și design responsive pentru a crea site-uri web moderne și performante."
        },
        right: {
          heading: "UI/UX Design",
          subHeading: "IT School | 2024 - Prezent",
          paragraph: "Ca designer UI/UX, dezvolt experiențe digitale centrate pe utilizator, care sunt atât funcționale, cât și estetice. Lucrez cu unelte precum Figma și Miro pentru a crea interfețe intuitive și atrăgătoare, dezvolt prototipuri interactive, optimizez fluxurile de utilizare și testez usability-ul pentru a asigura cea mai bună experiență posibilă. De asemenea, mă ocup de principii de design, tipografie, psihologia culorilor și accesibilitate pentru a crea designuri incluzive. Ședințele de brainstorming, ajustările SEO și implementarea designului responsive fac, de asemenea, parte din responsabilitățile mele."
        },
        verticalTitle: "EDUCATION"
      } ,
      githubProjects: {
        heading: "Ultimele proiecte GitHub",
        loader: "Se încarcă proiectele...",
        error: "Eroare: {{error}}",
        repoLinkText: "Vezi pe GitHub",
        noDescription: "Descriere indisponibilă."
      },
      contact: {
        letsWork: "Hai să lucrăm",
        together: "ÎMPREUNĂ",
        ready: "Ești gata să dai viață ideilor tale? Trimite-mi un mesaj!",
        projects: "Proiecte",
        resume: "CV",
        contactForm: "Formular de Contact",
        name: "Nume",
        email: "Email",
        message: "Mesaj",
        send: "Trimite"
      },
      footer: {
        nav: {
          home: "Acasă",
          about: "Despre mine",
          skills: "Abilități",
          projects: "Proiecte",
          contact: "Contact"
        },
        copyright:
          "Dezvoltat & Creat de Alexandru Gheorghe © {{year}}"
      },      
      chatbot: {
        title: "Chatbot",
        initialMessage: "Bună! Cum te pot ajuta astăzi?",
        thinking: "Gândesc...",
        errorResponse: "Eroare în răspuns.",
        errorMessage: "Ups! Ceva nu a mers bine. Te rog încearcă din nou.",
        inputPlaceholder: "Scrie un mesaj...",
        inputAria: "Introdu mesajul",
        sendAria: "Trimite mesajul",
        openAria: "Deschide Chatbot-ul",
        closeAria: "Închide Chatbot-ul",
        info: "Acest chatbot este construit folosind API-ul OpenAI și oferă suport în timp real. Este integrat în portofoliul meu pentru a demonstra abilitățile mele în dezvoltarea de aplicații web interactive."
      },
      
      projectTetris: {
        title: "Tetris Game",
        description:
          "Un joc Tetris clasic construit cu React. Aranjează tetromino-urile care cad pentru a forma linii complete și a obține puncte.",
        technologies: "TEHNOLOGII",
        features: "FUNCȚIONALITĂȚI",
        bulletPoints: {
          multipleLevels: "Mai multe niveluri",
          increasingSpeed: "Viteză în creștere",
          responsiveDesign: "Design Responsiv",
          intuitiveControls: "Control Intuitiv",
          soundEffects: "Efecte Sonore"
        },
        liveDemoButton: "Live Demo",
        githubButton: "GitHub"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "de",       // Limba implicită (Germană)
    fallbackLng: "en", // Fallback la engleză
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
