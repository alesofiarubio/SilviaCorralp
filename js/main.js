// empezamos con los datos del contacto
const datosContacto = {
    whatsapp: "34696042151",
    email: "mudateconsilviacorral@gmail.com"
};

const translations = {
    es: {
        navSobreMi: "Sobre mí",
        navServicios: "Servicios",
        navPropiedades: "Propiedades",
        navProceso: "Forma de trabajar",
        navClientes: "Clientes",
        navHablemos: "Hablemos",
        propertiesLabel: "DISPONIBLES",
        propertiesTitle: "Una casa para cada<br>forma de vivir.",
        propertiesIntro: "Selecciona una propiedad para consultar todos sus detalles y características.",
        propertySale: "En venta",
        propertyRent: "En alquiler",
        propertyViewDetails: "Ver especificaciones",
        propertyMoreInfo: "Más información",
        heroTitle: "TU PRÓXIMA DECISIÓN<br><span>Te ayudo a hacerla realidad.</span>",
        heroDescription: "Compra, venta y alquiler con criterio, cercanía y más de 35 años de experiencia acompañando decisiones inmobiliarias con claridad y confianza.",
        heroButton: "Cuéntame qué buscas →",
        aboutLabel: "CONOCE A SILVIA",
        aboutTitle: "No una agencia más,<br>Es una asesora a tu lado.",
        aboutText: "Soy Silvia Corral, asesora inmobiliaria independiente con más de 35 años de experiencia. Comencé mi trayectoria en Argentina y, a lo largo de los años, he trabajado también en Brasil y Miami. Hoy desarrollo mi actividad en Madrid, acompañando a cada cliente con el mismo compromiso y cercanía que han marcado mi forma de trabajar desde el principio.",
        aboutExperience: "de experiencia inmobiliaria",
        aboutQuote: '"Escuchar primero. Encontrar después."',
        aboutButton: "Mi forma de trabajar",
        purposeLabel: "LO QUE GUÍA MI TRABAJO",
        purposeTitle: "Decidir con claridad.<br>Avanzar con confianza.",
        missionLabel: "MISIÓN",
        missionTitle: "Acompañar cada decisión",
        missionText: "Ofrecer un asesoramiento inmobiliario independiente, cercano y transparente. Con más de 35 años de experiencia, acompaño a cada cliente a valorar sus opciones y avanzar con claridad, desde la búsqueda hasta el cierre.",
        visionLabel: "VISIÓN",
        visionTitle: "Un nuevo lugar, una nueva etapa",
        visionText: "Que toda decisión inmobiliaria se sienta como un paso elegido, no como una incertidumbre. Construir relaciones duraderas y ayudar a personas y familias a encontrar su lugar y comenzar una nueva etapa, entre Argentina, Miami y Madrid.",
        specialtiesLabel: "Especialidades",
        servicesLabel: "CÓMO PUEDO AYUDARTE",
        servicesTitle: "Un servicio a medida<br>de cada momento",
        serviceBuyTag: "Tu próxima casa",
        serviceBuyTitle: "Comprar",
        serviceBuyText: "Búsqueda cuidada, visitas con contexto y negociación serena hasta encontrar tu lugar.",
        serviceSellTag: "Tu vivienda, valorada",
        serviceSellTitle: "Vender",
        serviceSellText: "Estrategia de precio, narrativa visual y difusión selectiva para poner en valor tu vivienda.",
        serviceRentTag: "Gestión tranquila",
        serviceRentTitle: "Alquilar",
        serviceRentText: "Gestión cercana y rigurosa para propietarios e inquilinos, de principio a fin.",
        processLabel: "UN PROCESO SENCILLO",
        processTitle: "De la primera conversación<br>a la decisión.",
        processStep1Title: "Nos conocemos",
        processStep1Text: "Una conversación sin compromiso para entender tus necesidades, tiempos y prioridades.",
        processStep2Title: "Trazamos el plan",
        processStep2Text: "Definimos juntos la estrategia, los objetivos y los siguientes pasos.",
        processStep3Title: "Avanzamos juntos",
        processStep3Text: "Coordino visitas, documentación, negociación y todos los detalles.",
        processStep4Title: "Cerramos con calma",
        processStep4Text: "Te acompaño hasta el final y también después de tomar la decisión.",
        clientsLabel: "CLIENTES",
        clientsTitle: "Personas detrás<br>de cada decisión.",
        clientsIntro: "Algunas historias que forman parte de muchos años acompañando a personas, familias y profesionales.",
        clientsMore: "Mostrar más",
        client1Name: "Sandra B.",
        client1Profession: "Directora de fondo de inversión",
        client1Detail: "Asesoramiento especializado en adquisición y posicionamiento para perfiles de inversión.",
        client2Name: "Gianluca M.",
        client2Profession: "Lic. perito calígrafo",
        client2Detail: "Gestión de venta de primera vivienda con estrategia de mercado y cierre eficaz.",
        client3Name: "Sandra A.",
        client3Profession: "España / Argentina",
        client3Detail: "Venta de inmueble y gestión continua de administración patrimonial desde Argentina.",
        client4Name: "Pilar A.",
        client4Profession: "España / Argentina",
        client4Detail: "Intermediación en operación residencial y continuidad en gestión administrativa durante más de tres décadas.",
        client5Name: "Cecilia G.",
        client5Profession: "Argentina",
        client5Detail: "Venta de inmueble con enfoque en optimización de valor y transacción segura.",
        client6Name: "Rafael",
        client6Profession: "Lic. en Ciencias Políticas · Embajador",
        client6Detail: "Cierre de operación residencial para perfil familiar con enfoque en rentabilidad y conveniencia estratégica.",
        client7Name: "Dra. Anyelina",
        client7Profession: "Psiquiatra · República Dominicana",
        client7Detail: "Búsqueda y contratación de vivienda para familia con criterios de ubicación, confort y estabilidad.",
        client8Name: "Kevin S.",
        client8Profession: "Familia",
        client8Detail: "Intermediación en venta de vivienda unifamiliar para perfil familiar con necesidad de traslado y reubicación.",
        client9Name: "Fedra Dos Santos",
        client9Profession: "Terapeuta · Brasil",
        client9Detail: "Gestión de arrendamiento con selección de inquilino y supervisión del proceso de alquiler.",
        contactLabel: "HABLEMOS",
        contactTitle: "Tu próxima decisión<br>puede empezar aquí.",
        contactText: "Cuéntame qué necesitas y vemos juntos cómo puedo ayudarte. Sin compromiso, con calma y de forma cercana.",
        contactName: "Nombre",
        contactNamePlaceholder: "Tu nombre",
        contactEmail: "Email",
        contactEmailPlaceholder: "tu@email.com",
        contactPhone: "Teléfono",
        contactPhonePlaceholder: "Tu teléfono",
        contactMessage: "¿En qué puedo ayudarte?",
        contactMessagePlaceholder: "Cuéntame brevemente qué necesitas...",
        contactSubmit: "Enviar mensaje",
        formSending: "Enviando...",
        formSuccess: "Gracias. Tu mensaje ha sido enviado correctamente.",
        formError: "No hemos podido enviar el mensaje. Inténtalo de nuevo.",
        formRequiredName: "Por favor, introduce tu nombre.",
        formRequiredEmail: "Por favor, introduce tu email.",
        formInvalidEmail: "Introduce un email válido.",
        formRequiredMessage: "Por favor, cuéntame qué necesitas.",
        footerAbout: "Sobre mí",
        footerServices: "Servicios",
        footerProcess: "Mi forma de trabajar",
        footerClients: "Clientes",
        footerContact: "Contacto",
        footerRights: "Todos los derechos reservados"
    },
    en: {
        navSobreMi: "About me",
        navServicios: "Services",
        navPropiedades: "Properties",
        navProceso: "How I work",
        navClientes: "Clients",
        navHablemos: "Let’s talk",
        propertiesLabel: "AVAILABLE",
        propertiesTitle: "A home for every<br>way of living.",
        propertiesIntro: "Select a property to see its full details and features.",
        propertySale: "For sale",
        propertyRent: "For rent",
        propertyViewDetails: "View details",
        propertyMoreInfo: "More information",
        heroTitle: "YOUR NEXT MOVE<br><span>I help you turn it into reality.</span>",
        heroDescription: "Buying, selling and renting with sound judgement, a highly personal approach, and more than 30 years of experience guiding property decisions with clear strategy and confidence.",
        heroButton: "Tell me what you’re looking for →",
        aboutLabel: "MEET SILVIA",
        aboutTitle: "Not just another agency,<br>an advisor by your side.",
        aboutText: "I am Silvia Corral, an independent property advisor with over 30 years of experience. My career began in Argentina, and over the years I have also worked in Brazil and Miami. I now operate in Madrid, supporting each client with the same dedication and personal attention that have defined my work from the very beginning.",
        aboutExperience: "of property experience",
        aboutQuote: '"Listen first. Then find the right fit."',
        aboutButton: "My approach",
        purposeLabel: "WHAT GUIDES MY WORK",
        purposeTitle: "Clarity in every decision.<br>Confidence in every step.",
        missionLabel: "MISSION",
        missionTitle: "Guiding every decision",
        missionText: "Independent, thoughtful and transparent property guidance. With over 35 years of experience, I help each client assess their options and move forward clearly, from the search through to closing.",
        visionLabel: "VISION",
        visionTitle: "A new place, a new chapter",
        visionText: "That every property decision feels like a chosen step, not a source of uncertainty. To build lasting relationships and help people and families find their place and begin a new chapter across Argentina, Miami and Madrid.",
        specialtiesLabel: "Specialties",
        servicesLabel: "HOW I CAN HELP",
        servicesTitle: "Tailored guidance<br>for every stage",
        serviceBuyTag: "Your next home",
        serviceBuyTitle: "Buying",
        serviceBuyText: "A carefully curated search, informed viewings and calm, strategic negotiation until we find the right place for you.",
        serviceSellTag: "Your home, valued",
        serviceSellTitle: "Selling",
        serviceSellText: "Pricing strategy, visual storytelling and selective promotion designed to maximise your home’s value.",
        serviceRentTag: "Stress-free management",
        serviceRentTitle: "Renting",
        serviceRentText: "Hands-on, rigorous management for both landlords and tenants, from start to finish.",
        processLabel: "A SIMPLE PROCESS",
        processTitle: "From the first conversation<br>to the final decision.",
        processStep1Title: "We meet",
        processStep1Text: "A no-obligation conversation to understand your needs, timeline and priorities.",
        processStep2Title: "We define the plan",
        processStep2Text: "We shape the strategy together, setting clear objectives and the next steps.",
        processStep3Title: "We move forward together",
        processStep3Text: "I coordinate viewings, documentation, negotiations and every detail along the way.",
        processStep4Title: "We close with calm",
        processStep4Text: "I stay by your side until the end — and even after the decision is made.",
        clientsLabel: "CLIENTS",
        clientsTitle: "People behind<br>every decision.",
        clientsIntro: "A few stories from many years of supporting individuals, families and professionals.",
        clientsMore: "Show more",
        client1Name: "Sandra B.",
        client1Profession: "Investment Fund Director",
        client1Detail: "Specialised advice in acquisition and positioning for investment profiles.",
        client2Name: "Gianluca M.",
        client2Profession: "Calligraphy expert",
        client2Detail: "Property sales strategy with market insight and a smooth, efficient closing process.",
        client3Name: "Sandra A.",
        client3Profession: "Spain / Argentina",
        client3Detail: "Property sale and ongoing asset-management support from Argentina.",
        client4Name: "Pilar A.",
        client4Profession: "Spain / Argentina",
        client4Detail: "Residential transaction advisory and continued administrative management over more than three decades.",
        client5Name: "Cecilia G.",
        client5Profession: "Argentina",
        client5Detail: "Property sale with a focus on value optimisation and secure execution.",
        client6Name: "Rafael",
        client6Profession: "Political Science graduate · Ambassador",
        client6Detail: "Residential acquisition for a family profile, with a focus on return, timing and strategic fit.",
        client7Name: "Dr. Anyelina",
        client7Profession: "Psychiatrist · Dominican Republic",
        client7Detail: "Home search and acquisition for a family, guided by location, comfort and long-term stability.",
        client8Name: "Kevin S.",
        client8Profession: "Family",
        client8Detail: "Sale of a detached home for a family relocating and seeking a smooth, strategic transition.",
        client9Name: "Fedra Dos Santos",
        client9Profession: "Therapist · Brazil",
        client9Detail: "Rental management, tenant selection and ongoing lease oversight.",
        contactLabel: "LET'S TALK",
        contactTitle: "Your next move<br>can start here.",
        contactText: "Tell me what you need and we’ll look at how I can help. No commitment — just a calm, personal conversation.",
        contactName: "Name",
        contactNamePlaceholder: "Your name",
        contactEmail: "Email",
        contactEmailPlaceholder: "you@email.com",
        contactPhone: "Phone",
        contactPhonePlaceholder: "Your phone",
        contactMessage: "How can I help you?",
        contactMessagePlaceholder: "Briefly tell me what you need...",
        contactSubmit: "Send message",
        formSending: "Sending...",
        formSuccess: "Thank you. Your message has been sent successfully.",
        formError: "We couldn’t send your message. Please try again.",
        formRequiredName: "Please enter your name.",
        formRequiredEmail: "Please enter your email.",
        formInvalidEmail: "Please enter a valid email address.",
        formRequiredMessage: "Please tell me what you need.",
        footerAbout: "About me",
        footerServices: "Services",
        footerProcess: "How I work",
        footerClients: "Clients",
        footerContact: "Contact",
        footerRights: "All rights reserved"
    },
    pt: {
        navSobreMi: "Sobre mim",
        navServicios: "Serviços",
        navPropiedades: "Imóveis",
        navProceso: "Como trabalho",
        navClientes: "Clientes",
        navHablemos: "Fale comigo",
        propertiesLabel: "DISPONÍVEIS",
        propertiesTitle: "Um lar para cada<br>forma de viver.",
        propertiesIntro: "Selecione um imóvel para consultar todos os detalhes e características.",
        propertySale: "À venda",
        propertyRent: "Para alugar",
        propertyViewDetails: "Ver detalhes",
        propertyMoreInfo: "Mais informações",
        heroTitle: "SUA PRÓXIMA DECISÃO<br><span>Eu te ajudo a torná-la realidade.</span>",
        heroDescription: "Compra, venda e aluguel com critério, proximidade e mais de 30 anos de experiência apoiando decisões imobiliárias com clareza e confiança.",
        heroButton: "Conte-me o que procura →",
        aboutLabel: "CONHEÇA SILVIA",
        aboutTitle: "Não é apenas outra agência,<br>uma assessora ao seu lado.",
        aboutText: "Sou Silvia Corral, assessora imobiliária independente com mais de 30 anos de experiência. Comecei minha trajetória na Argentina e, ao longo dos anos, também trabalhei no Brasil e em Miami. Hoje desenvolvo minha atividade em Madri, acompanhando cada cliente com o mesmo compromisso e proximidade que marcaram minha forma de trabalhar desde o início.",
        aboutExperience: "de experiência imobiliária",
        aboutQuote: '"Ouvir primeiro. Encontrar depois."',
        aboutButton: "Como trabalho",
        purposeLabel: "O QUE ORIENTA MEU TRABALHO",
        purposeTitle: "Decidir com clareza.<br>Avançar com confiança.",
        missionLabel: "MISSÃO",
        missionTitle: "Acompanhar cada decisão",
        missionText: "Oferecer uma assessoria imobiliária independente, próxima e transparente. Com mais de 35 anos de experiência, acompanho cada cliente na avaliação das opções e em cada etapa, da busca à conclusão.",
        visionLabel: "VISÃO",
        visionTitle: "Um novo lugar, uma nova etapa",
        visionText: "Que cada decisão imobiliária seja vivida como um passo escolhido, não como uma incerteza. Construir relações duradouras e ajudar pessoas e famílias a encontrar seu lugar e começar uma nova etapa entre Argentina, Miami e Madri.",
        specialtiesLabel: "Especialidades",
        servicesLabel: "COMO POSSO AJUDAR",
        servicesTitle: "Um serviço sob medida<br>para cada momento",
        serviceBuyTag: "Sua próxima casa",
        serviceBuyTitle: "Comprar",
        serviceBuyText: "Busca cuidadosa, visitas com contexto e negociação tranquila até encontrar o seu lugar.",
        serviceSellTag: "Sua casa valorizada",
        serviceSellTitle: "Vender",
        serviceSellText: "Estratégia de preço, narrativa visual e divulgação seletiva para valorizar sua casa.",
        serviceRentTag: "Gestão tranquila",
        serviceRentTitle: "Alugar",
        serviceRentText: "Gestão próxima e rigorosa para proprietários e inquilinos, do começo ao fim.",
        processLabel: "UM PROCESSO SIMPLES",
        processTitle: "Da primeira conversa<br>à decisão.",
        processStep1Title: "Nos conhecemos",
        processStep1Text: "Uma conversa sem compromisso para entender suas necessidades, prazos e prioridades.",
        processStep2Title: "Traçamos o plano",
        processStep2Text: "Definimos juntos a estratégia, os objetivos e os próximos passos.",
        processStep3Title: "Avançamos juntos",
        processStep3Text: "Coordeno visitas, documentação, negociação e todos os detalhes.",
        processStep4Title: "Fechamos com calma",
        processStep4Text: "Te acompanho até o fim e também depois da decisão.",
        clientsLabel: "CLIENTES",
        clientsTitle: "Pessoas por trás<br>de cada decisão.",
        clientsIntro: "Algumas histórias que fazem parte de muitos anos acompanhando pessoas, famílias e profissionais.",
        clientsMore: "Mostrar mais",
        client1Name: "Sandra B.",
        client1Profession: "Diretora de fundo de investimento",
        client1Detail: "Assessoria especializada em aquisição e posicionamento para perfis de investimento.",
        client2Name: "Gianluca M.",
        client2Profession: "Lic. perito calígrafo",
        client2Detail: "Gestão de venda de primeira residência com estratégia de mercado e fechamento eficaz.",
        client3Name: "Sandra A.",
        client3Profession: "Espanha / Argentina",
        client3Detail: "Venda de imóvel e gestão contínua de administração patrimonial desde a Argentina.",
        client4Name: "Pilar A.",
        client4Profession: "Espanha / Argentina",
        client4Detail: "Mediação em operação residencial e continuidade na gestão administrativa por mais de três décadas.",
        client5Name: "Cecilia G.",
        client5Profession: "Argentina",
        client5Detail: "Venda de imóvel com foco em otimização de valor e transação segura.",
        client6Name: "Rafael",
        client6Profession: "Lic. em Ciências Políticas · Embaixador",
        client6Detail: "Encerramento de operação residencial para perfil familiar com foco em rentabilidade e conveniência estratégica.",
        client7Name: "Dra. Anyelina",
        client7Profession: "Psiquiatra · República Dominicana",
        client7Detail: "Busca e contratação de imóvel para família com critérios de localização, conforto e estabilidade.",
        client8Name: "Kevin S.",
        client8Profession: "Família",
        client8Detail: "Mediação na venda de casa unifamiliar para perfil familiar com necessidade de mudança e realocação.",
        client9Name: "Fedra Dos Santos",
        client9Profession: "Terapeuta · Brasil",
        client9Detail: "Gestão de arrendamento com seleção de inquilino e supervisão do processo de aluguel.",
        contactLabel: "FALE CONOSCO",
        contactTitle: "Sua próxima decisão<br>pode começar aqui.",
        contactText: "Conte-me o que você precisa e veremos juntos como posso ajudar. Sem compromisso, com calma e proximidade.",
        contactName: "Nome",
        contactNamePlaceholder: "Seu nome",
        contactEmail: "E-mail",
        contactEmailPlaceholder: "seu@email.com",
        contactPhone: "Telefone",
        contactPhonePlaceholder: "Seu telefone",
        contactMessage: "Em que posso ajudar?",
        contactMessagePlaceholder: "Conte-me em poucas palavras o que você precisa...",
        contactSubmit: "Enviar mensagem",
        formSending: "Enviando...",
        formSuccess: "Obrigado. Sua mensagem foi enviada com sucesso.",
        formError: "Não foi possível enviar sua mensagem. Tente novamente.",
        formRequiredName: "Por favor, digite seu nome.",
        formRequiredEmail: "Por favor, digite seu e-mail.",
        formInvalidEmail: "Digite um e-mail válido.",
        formRequiredMessage: "Por favor, conte-me o que você precisa.",
        footerAbout: "Sobre mim",
        footerServices: "Serviços",
        footerProcess: "Como trabalho",
        footerClients: "Clientes",
        footerContact: "Contato",
        footerRights: "Todos os direitos reservados"
    }
};

const localeOrder = ["es", "en", "pt"];
const langToggle = document.querySelector("#lang-toggle");
const langMenu = document.querySelector("#lang-menu");
const langOptions = document.querySelectorAll(".lang-option");
const formulario = document.querySelector("#formulario-contacto");
const mensajeFormulario = document.querySelector("#mensaje-formulario");

const setFieldValidationMessage = (field, message) => {
    if (!field) return;
    field.setCustomValidity(message || "");
    field.classList.toggle("invalid", Boolean(message));
    field.setAttribute("aria-invalid", message ? "true" : "false");
};

const getFieldValidationMessage = (field, langData) => {
    if (!field) return "";

    const value = field.value.trim();

    if (field.name === "nombre" && !value) {
        return langData.formRequiredName;
    }

    if (field.name === "email") {
        if (!value) {
            return langData.formRequiredEmail;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return langData.formInvalidEmail;
        }
    }

    if (field.name === "mensaje" && !value) {
        return langData.formRequiredMessage;
    }

    return "";
};

const setLanguage = (locale) => {
    const safeLocale = localeOrder.includes(locale) ? locale : "es";
    const langData = translations[safeLocale];

    document.documentElement.lang = safeLocale;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        const key = element.dataset.i18nHtml;
        if (langData[key]) {
            element.innerHTML = langData[key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.dataset.i18nPlaceholder;
        if (langData[key]) {
            element.placeholder = langData[key];
        }
    });

    const clientesMas = document.querySelector("#clientes-mas");
    if (clientesMas) {
        clientesMas.innerHTML = `${langData.clientsMore} <span>→</span>`;
    }

    langOptions.forEach((option) => {
        const isActive = option.dataset.lang === safeLocale;
        option.classList.toggle("active", isActive);
    });

    if (langToggle) {
        langToggle.textContent = safeLocale.toUpperCase();
    }

    const currentLanguage = safeLocale === "es" ? "ES" : safeLocale === "en" ? "EN" : "PT";
    if (langToggle) {
        langToggle.setAttribute("aria-label", `Idioma actual: ${currentLanguage}`);
    }

    const langSwitcher = document.querySelector(".lang-switcher");
    if (langSwitcher) {
        langSwitcher.classList.remove("open");
    }
};

if (langToggle && langMenu) {
    langToggle.addEventListener("click", () => {
        const langSwitcher = document.querySelector(".lang-switcher");
        if (langSwitcher) {
            const isOpen = langSwitcher.classList.toggle("open");
            langToggle.setAttribute("aria-expanded", String(isOpen));
        }
    });

    document.addEventListener("click", (event) => {
        const langSwitcher = document.querySelector(".lang-switcher");
        if (!langSwitcher) return;
        if (!langSwitcher.contains(event.target)) {
            langSwitcher.classList.remove("open");
            langToggle.setAttribute("aria-expanded", "false");
        }
    });
}

langOptions.forEach((option) => {
    option.addEventListener("click", () => {
        setLanguage(option.dataset.lang);
    });
});

setLanguage("es");

const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dot");
let heroIndex = 0;

if (heroSlides.length > 1) {
    const mostrarSlide = (index) => {
        heroIndex = (index + heroSlides.length) % heroSlides.length;

        heroSlides.forEach((slide, slideIndex) => {
            slide.classList.toggle("active", slideIndex === heroIndex);
        });

        heroDots.forEach((dot, dotIndex) => {
            const isActive = dotIndex === heroIndex;
            dot.classList.toggle("active", isActive);
            dot.setAttribute("aria-pressed", String(isActive));
        });
    };

    heroDots.forEach((dot, index) => {
        dot.addEventListener("click", () => mostrarSlide(index));
    });

    setInterval(() => {
        mostrarSlide(heroIndex + 1);
    }, 5000);
}

// aqui vamos a desarrollar la funcion del boton de whatsapp para que al hacer click en el boton se abra 
// la aplicacion de whatsapp con un mensaje predefinido y el numero de telefono de contacto.
const mensajeWhatsapp =
    "Hola Silvia, he visto tu web y me gustaría recibir información.";

const botonWhatsapp = document.querySelector("#boton-whatsapp");
if (botonWhatsapp) {
    botonWhatsapp.href =
        `https://wa.me/${datosContacto.whatsapp}?text=${encodeURIComponent(mensajeWhatsapp)}`;
}

const navWhatsapp = document.querySelector("#nav-whatsapp");
if (navWhatsapp) {
    navWhatsapp.href =
        `https://wa.me/${datosContacto.whatsapp}?text=${encodeURIComponent(mensajeWhatsapp)}`;
}

document.querySelectorAll("[data-propiedad-contacto]").forEach((enlace) => {
    const nombrePropiedad = enlace.dataset.propiedadContacto;
    const mensaje = `Hola Silvia, me gustaría recibir más información sobre ${nombrePropiedad}.`;
    enlace.href = `https://wa.me/${datosContacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;
    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";
});

const fotosPorPropiedad = {
    "piso-1": ["puertaPiso1.jpeg"],
    "piso-2": ["piso2.jpeg", "piso2.JPG"],
    "piso-3": [
        "piso3.jpeg",
        "piso3 (1).JPG",
        "piso3 (2).JPG",
        "piso3 (3).JPG",
        "piso3 (4).JPG",
        "piso3 (5).JPG",
        "piso3 (6).JPG",
        "piso3 (7).JPG",
        "piso3 (8).JPG",
        "piso3 (9).JPG"
    ],
    "piso-4": [
        "piso4 (9).jpeg",
        "piso4 (10).jpeg",
        "piso4 (11).jpeg",
        "piso4 (12).jpeg",
        "piso4 (13).jpeg",
        "piso4 (14).jpeg",
        "piso4 (15).jpeg",
        "piso4 (16).jpeg"
    ],
    "piso-5": [
        "piso5 (1).jpeg",
        "piso5 (2).jpeg",
        "piso5 (3).jpeg",
        "piso5 (4).jpeg",
        "piso5 (5).jpeg",
        "piso5 (6).jpeg",
        "piso5 (7).jpeg",
        "piso5 (8).jpeg",
        "piso5 (9).jpeg"
    ]
};

const lightbox = document.querySelector("#property-lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCount = document.querySelector("#lightbox-count");
const lightboxPrevious = document.querySelector("#lightbox-prev");
const lightboxNext = document.querySelector("#lightbox-next");
const lightboxClose = document.querySelector("#lightbox-close");
let lightboxPhotos = [];
let lightboxPropertyId = "";
let lightboxIndex = 0;

const updateLightbox = () => {
    if (!lightbox || !lightboxImage || !lightboxPhotos.length) return;

    lightbox.dataset.propertyId = lightboxPropertyId;
    lightboxImage.src = `img/${lightboxPhotos[lightboxIndex]}`;
    lightboxImage.alt = lightboxPropertyId === "piso-1"
        ? "Puerta de acceso al edificio, sin mostrar interiores ni el número del portal."
        : `Fotografía ${lightboxIndex + 1} de la propiedad`;
    lightboxCount.textContent = `${lightboxIndex + 1} / ${lightboxPhotos.length}`;
    lightboxPrevious.disabled = lightboxIndex === 0;
    lightboxNext.disabled = lightboxIndex === lightboxPhotos.length - 1;
};

const openLightbox = (propertyId, photos, index) => {
    if (!lightbox) return;

    lightboxPropertyId = propertyId;
    lightboxPhotos = photos;
    lightboxIndex = index;
    updateLightbox();
    document.documentElement.classList.add("property-lightbox-open");
    document.body.classList.add("property-lightbox-open");
    lightbox.showModal();
};

if (lightboxClose) {
    lightboxClose.addEventListener("click", () => lightbox.close());
}

if (lightboxPrevious && lightboxNext) {
    lightboxPrevious.addEventListener("click", () => {
        if (lightboxIndex > 0) {
            lightboxIndex -= 1;
            updateLightbox();
        }
    });

    lightboxNext.addEventListener("click", () => {
        if (lightboxIndex < lightboxPhotos.length - 1) {
            lightboxIndex += 1;
            updateLightbox();
        }
    });
}

if (lightbox) {
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.close();
        }
    });

    lightbox.addEventListener("cancel", (event) => {
        event.preventDefault();
        lightbox.close();
    });

    lightbox.addEventListener("close", () => {
        lightboxImage.removeAttribute("src");
        lightbox.removeAttribute("data-property-id");
        document.documentElement.classList.remove("property-lightbox-open");
        document.body.classList.remove("property-lightbox-open");
    });

    document.addEventListener("keydown", (event) => {
        if (!lightbox.open) return;

        if (event.key === "Escape") {
            event.preventDefault();
            lightbox.close();
        } else if (event.key === "ArrowLeft" && lightboxIndex > 0) {
            event.preventDefault();
            lightboxIndex -= 1;
            updateLightbox();
        } else if (event.key === "ArrowRight" && lightboxIndex < lightboxPhotos.length - 1) {
            event.preventDefault();
            lightboxIndex += 1;
            updateLightbox();
        }
    });
}

const paginaPropiedad = document.querySelector("#property-page");
if (paginaPropiedad) {
    const propiedadId = new URLSearchParams(window.location.search).get("id");
    const fichasPropiedad = paginaPropiedad.querySelectorAll("[data-property-id]");
    const fichaSeleccionada = [...fichasPropiedad].find(
        (ficha) => ficha.dataset.propertyId === propiedadId
    );

    if (fichaSeleccionada) {
        fichaSeleccionada.hidden = false;
        const tituloPropiedad = fichaSeleccionada.querySelector("h2");
        document.title = `${tituloPropiedad.textContent} | Silvia Corral Propiedades`;

        const galeria = fichaSeleccionada.querySelector("[data-property-gallery]");
        const fotos = fotosPorPropiedad[propiedadId] || [];
        if (fotos.length === 1) {
            galeria.classList.add("property-gallery--single");
        }

        const marco = document.createElement("div");
        marco.className = "property-carousel-frame";

        const visor = document.createElement("div");
        visor.className = "property-carousel-viewport";
        visor.setAttribute("aria-label", "Carrusel de fotos; desliza o usa las flechas para cambiar de imagen");

        const tira = document.createElement("div");
        tira.className = "property-carousel-track";

        let indiceActivo = 0;
        const contador = document.createElement("span");
        contador.className = "property-carousel-count";

        const actualizarCarrusel = () => {
            const ancho = Math.max(visor.clientWidth, 1);
            indiceActivo = Math.min(fotos.length - 1, Math.round(visor.scrollLeft / ancho));
            anterior.disabled = indiceActivo === 0;
            siguiente.disabled = indiceActivo === fotos.length - 1;
            contador.textContent = `${indiceActivo + 1} / ${fotos.length}`;
        };

        const cambiarFoto = (indice) => {
            indiceActivo = Math.max(0, Math.min(fotos.length - 1, indice));
            const fotoActual = tira.children[indiceActivo]?.querySelector("img");
            if (fotoActual) fotoActual.loading = "eager";
            visor.scrollTo({ left: indiceActivo * visor.clientWidth, behavior: "smooth" });
            actualizarCarrusel();
        };

        const anterior = document.createElement("button");
        anterior.type = "button";
        anterior.className = "property-carousel-control property-carousel-prev";
        anterior.setAttribute("aria-label", "Foto anterior");
        anterior.textContent = "‹";
        anterior.addEventListener("click", () => cambiarFoto(indiceActivo - 1));

        const siguiente = document.createElement("button");
        siguiente.type = "button";
        siguiente.className = "property-carousel-control property-carousel-next";
        siguiente.setAttribute("aria-label", "Foto siguiente");
        siguiente.textContent = "›";
        siguiente.addEventListener("click", () => cambiarFoto(indiceActivo + 1));

        fotos.forEach((archivo, index) => {
            const diapositiva = document.createElement("button");
            diapositiva.type = "button";
            diapositiva.className = "property-carousel-slide";
            diapositiva.setAttribute("aria-label", `Ampliar fotografía ${index + 1} de ${fotos.length}`);

            const imagen = document.createElement("img");
            imagen.src = `img/${archivo}`;
            imagen.alt = propiedadId === "piso-1"
                ? "Puerta de acceso al edificio; no se muestran interiores ni el número del portal."
                : `${tituloPropiedad.textContent}, fotografía ${index + 1}`;
            imagen.loading = index === 0 ? "eager" : "lazy";
            imagen.decoding = "async";
            diapositiva.append(imagen);
            diapositiva.addEventListener("click", () => openLightbox(propiedadId, fotos, index));
            tira.append(diapositiva);
        });

        visor.append(tira);
        marco.append(visor, anterior, siguiente, contador);
        galeria.append(marco);
        visor.addEventListener("scroll", () => window.requestAnimationFrame(actualizarCarrusel), { passive: true });
        actualizarCarrusel();
    } else {
        window.location.replace("index.html#propiedades");
    }
}

const navInstagram = document.querySelector("#nav-instagram");
if (navInstagram) {
    navInstagram.href = "https://www.instagram.com/silviacorral.propiedades/";
}
// aqui vamos a desarrollar la funcion del boton de email para que al hacer click en el boton se abra
// el cliente de correo predeterminado del usuario con un mensaje predefinido y el email de contacto.
const botonEmail = document.querySelector("#boton-email");
if (botonEmail) {
    botonEmail.href = `mailto:${datosContacto.email}`;
    botonEmail.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = `mailto:${datosContacto.email}`;
    });
}

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = link.href;
    });
});
// =========================
// CLIENTES INTERACTIVOS
// // =========================
const clientes = document.querySelectorAll(".cliente");
const botonMostrarMas = document.querySelector("#clientes-mas");
let mostrandoTodosClientes = false;

const actualizarClientesTablet = () => {
    if (window.innerWidth <= 1024 && window.innerWidth >= 769) {
        clientes.forEach((cliente, index) => {
            const oculto = index >= 3 && !mostrandoTodosClientes;
            cliente.classList.toggle("oculto-tablet", oculto);
        });

        if (botonMostrarMas) {
            botonMostrarMas.style.display = "inline-flex";
            botonMostrarMas.textContent = mostrandoTodosClientes ? "Mostrar menos" : "Mostrar más";
            botonMostrarMas.innerHTML = mostrandoTodosClientes
                ? 'Mostrar menos <span>↑</span>'
                : 'Mostrar más <span>→</span>';
            botonMostrarMas.setAttribute("aria-expanded", String(mostrandoTodosClientes));
        }
    } else {
        clientes.forEach((cliente) => {
            cliente.classList.remove("oculto-tablet");
        });

        if (botonMostrarMas) {
            botonMostrarMas.style.display = "none";
            botonMostrarMas.setAttribute("aria-expanded", "false");
        }
    }
};

if (botonMostrarMas) {
    botonMostrarMas.addEventListener("click", () => {
        mostrandoTodosClientes = !mostrandoTodosClientes;
        actualizarClientesTablet();
    });
}

window.addEventListener("resize", () => {
    actualizarClientesTablet();
});

clientes.forEach((cliente) => {

    cliente.addEventListener("click", () => {

        // Si ya está abierto, lo cerramos
        if (cliente.classList.contains("activo")) {
            cliente.classList.remove("activo");
            return;
        }

        // Cerramos cualquier otra tarjeta abierta
        clientes.forEach((otroCliente) => {
            otroCliente.classList.remove("activo");
        });

        // Abrimos la tarjeta seleccionada
        cliente.classList.add("activo");

    });

});

actualizarClientesTablet();

// =========================
// MENÚ HAMBURGUESA MOBILE
// =========================
const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

if (menuToggle && navMenu) {
    const cerrarMenu = () => {
        navMenu.classList.remove("open");
        menuToggle.classList.remove("activo");
        menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        menuToggle.classList.toggle("activo", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                cerrarMenu();
            }
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            cerrarMenu();
        }
    });
}

// =========================
// FORMULARIO DE CONTACTO
// =========================

const validarCampoFormulario = (campo) => {
    const langData = translations[document.documentElement.lang] || translations.es;
    const mensaje = getFieldValidationMessage(campo, langData);
    setFieldValidationMessage(campo, mensaje);
    return !mensaje;
};

if (formulario && mensajeFormulario) {
    formulario.querySelectorAll("input, textarea").forEach((campo) => {
        campo.addEventListener("invalid", (event) => {
            event.preventDefault();
            event.stopPropagation();
        });

        campo.addEventListener("input", () => {
            const langData = translations[document.documentElement.lang] || translations.es;
            const mensaje = getFieldValidationMessage(campo, langData);
            setFieldValidationMessage(campo, mensaje);

            if (!mensaje && mensajeFormulario.classList.contains("error")) {
                mensajeFormulario.textContent = "";
                mensajeFormulario.classList.remove("error");
            }
        });

        campo.addEventListener("blur", () => {
            const langData = translations[document.documentElement.lang] || translations.es;
            const mensaje = getFieldValidationMessage(campo, langData);
            setFieldValidationMessage(campo, mensaje);

            if (mensaje) {
                mensajeFormulario.textContent = mensaje;
                mensajeFormulario.classList.add("error");
            } else {
                mensajeFormulario.textContent = "";
                mensajeFormulario.classList.remove("error");
            }
        });
    });

    formulario.addEventListener("submit", async (event) => {

        event.preventDefault();

        const langData = translations[document.documentElement.lang] || translations.es;
        const campos = formulario.querySelectorAll("input, textarea");
        let formularioValido = true;
        let primerMensaje = "";

        campos.forEach((campo) => {
            const mensaje = getFieldValidationMessage(campo, langData);
            setFieldValidationMessage(campo, mensaje);

            if (mensaje && !primerMensaje) {
                primerMensaje = mensaje;
            }

            if (mensaje) {
                formularioValido = false;
            }
        });

        if (!formularioValido) {
            mensajeFormulario.textContent = primerMensaje;
            mensajeFormulario.classList.add("error");
            return;
        }

        mensajeFormulario.textContent = langData.formSending;
        mensajeFormulario.className = "mensaje-formulario";

        const telefonoInput = formulario.querySelector("#telefono");
        const prefijoTelefono = formulario.querySelector("#prefijo-telefono");

        if (telefonoInput) {
            const valorTelefono = telefonoInput.value.trim();
            const prefijo = prefijoTelefono ? prefijoTelefono.value : "+34";
            telefonoInput.value = valorTelefono ? `${prefijo} ${valorTelefono}` : "";
        }

        const datos = new FormData(formulario);
        datos.append("lang", document.documentElement.lang || "es");

        try {

            const respuesta = await fetch("backend/contacto.php", {
                method: "POST",
                body: datos
            });

            const resultado = await respuesta.json();

            if (resultado.ok) {

                mensajeFormulario.textContent = langData.formSuccess;

                mensajeFormulario.classList.add("exito");

                formulario.reset();

            } else {

                mensajeFormulario.textContent =
                    resultado.mensaje || langData.formError;

                mensajeFormulario.classList.add("error");
            }

        } catch (error) {

            console.error("Error:", error);

            mensajeFormulario.textContent = langData.formError;

            mensajeFormulario.classList.add("error");
        }
    });
}