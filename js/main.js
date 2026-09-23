// empezamos con los datos del contacto
const datosContacto = {
    whatsapp: "34600000000",
    email: "info@silviacorral.com"
};

const translations = {
    es: {
        navSobreMi: "Sobre mí",
        navServicios: "Servicios",
        navProceso: "Forma de trabajar",
        navClientes: "Clientes",
        navHablemos: "Hablemos",
        heroTitle: "TU PRÓXIMA DECISIÓN<br><span>Te ayudo a hacerla realidad.</span>",
        heroDescription: "Compra, venta y alquiler con criterio, cercanía y más de 30 años de experiencia acompañando decisiones inmobiliarias con claridad y confianza.",
        heroButton: "Cuéntame qué buscas →",
        aboutLabel: "CONOCE A SILVIA",
        aboutTitle: "No una agencia más,<br>Una asesora a tu lado.",
        aboutText: "Soy Silvia Corral, asesora inmobiliaria independiente con más de 30 años de experiencia. Comencé mi trayectoria en Argentina y, a lo largo de los años, he trabajado también en Brasil y Miami. Hoy desarrollo mi actividad en Madrid, acompañando a cada cliente con el mismo compromiso y cercanía que han marcado mi forma de trabajar desde el principio.",
        aboutExperience: "de experiencia inmobiliaria",
        aboutQuote: '"Escuchar primero. Encontrar después."',
        aboutButton: "Mi forma de trabajar",
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
        harmonyLabel: "ARMONIZA TU AMBIENTE",
        harmonyTitle: "Tu espacio también influye en tu energía.",
        harmonyFengLabel: "Equilibrio",
        harmonyFengTitle: "Feng Shui",
        harmonyFengText: "El Feng Shui busca ordenar el espacio para que la energía circule con libertad, luz y claridad. Cuando un hogar está bien equilibrado, se siente más sereno, acogedor y funcional, algo esencial para tomar decisiones con calma y confianza.",
        harmonyAccessLabel: "Flujo",
        harmonyAccessTitle: "Barra Access",
        harmonyAccessText: "La Barra Access trabaja sobre la energía del entorno para mejorar la sensación de bienestar, la conexión entre las personas y el uso del espacio. Es una forma de activar la armonía en casa o en negocio, favoreciendo ambientes más vivos, leves y positivos.",
        harmonyFaceliftLabel: "Renovación",
        harmonyFaceliftTitle: "Facelift",
        harmonyFaceliftText: "El Facelift es una transformación estética y funcional con un impacto inmediato: mejor distribución, más luz, mejores acabados y una imagen renovada. Es la forma de devolverle carácter y valor a un espacio sin perder la esencia que ya lo hace especial.",
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
        navProceso: "How I work",
        navClientes: "Clients",
        navHablemos: "Let's talk",
        heroTitle: "YOUR NEXT DECISION<br><span>I help you make it happen.</span>",
        heroDescription: "Buying, selling and renting with judgment, closeness and more than 30 years of experience guiding real-estate decisions with clarity and confidence.",
        heroButton: "Tell me what you are looking for →",
        aboutLabel: "MEET SILVIA",
        aboutTitle: "Not just another agency,<br>an advisor by your side.",
        aboutText: "I am Silvia Corral, an independent real-estate advisor with more than 30 years of experience. I began my career in Argentina and, over the years, I have also worked in Brazil and Miami. Today I work in Madrid, supporting each client with the same commitment and closeness that have marked my way of working from the beginning.",
        aboutExperience: "of real-estate experience",
        aboutQuote: '"Listen first. Find after."',
        aboutButton: "My way of working",
        servicesLabel: "HOW I CAN HELP",
        servicesTitle: "A service tailored<br>to every moment",
        serviceBuyTag: "Your next home",
        serviceBuyTitle: "Buy",
        serviceBuyText: "Careful search, contextual visits and calm negotiation until we find your place.",
        serviceSellTag: "Your home, valued",
        serviceSellTitle: "Sell",
        serviceSellText: "Price strategy, visual storytelling and selective promotion to add value to your home.",
        serviceRentTag: "Stress-free management",
        serviceRentTitle: "Rent",
        serviceRentText: "Close and rigorous management for owners and tenants, from start to finish.",
        processLabel: "A SIMPLE PROCESS",
        processTitle: "From the first conversation<br>to the decision.",
        processStep1Title: "We meet",
        processStep1Text: "A no-obligation conversation to understand your needs, timing and priorities.",
        processStep2Title: "We plan together",
        processStep2Text: "We define the strategy, the goals and the next steps.",
        processStep3Title: "We move forward together",
        processStep3Text: "I coordinate visits, paperwork, negotiation and every detail.",
        processStep4Title: "We close calmly",
        processStep4Text: "I stay by your side until the end and even after the decision is made.",
        clientsLabel: "CLIENTS",
        clientsTitle: "People behind<br>every decision.",
        clientsIntro: "Some stories that are part of many years helping people, families and professionals.",
        clientsMore: "Show more",
        harmonyLabel: "BALANCE YOUR SPACE",
        harmonyTitle: "Your space also influences your energy.",
        harmonyFengLabel: "Balance",
        harmonyFengTitle: "Feng Shui",
        harmonyFengText: "Feng Shui organizes space so energy flows with freedom, light and clarity. When a home is well balanced, it feels calmer, more welcoming and functional, which is essential for making decisions with peace and confidence.",
        harmonyAccessLabel: "Flow",
        harmonyAccessTitle: "Barra Access",
        harmonyAccessText: "Barra Access works on the energy of the environment to improve the sense of well-being, connection between people and use of space. It is a way to activate harmony at home or in the workplace, creating more vibrant, light and positive environments.",
        harmonyFaceliftLabel: "Renovation",
        harmonyFaceliftTitle: "Facelift",
        harmonyFaceliftText: "Facelift is an aesthetic and functional transformation with immediate impact: better distribution, more light, better finishes and a renewed image. It is a way to restore character and value to a space without losing the essence that makes it special.",
        client1Name: "Sandra B.",
        client1Profession: "Investment Fund Director",
        client1Detail: "Specialized advice in acquisition and positioning for investment profiles.",
        client2Name: "Gianluca M.",
        client2Profession: "Licensed calligraphy expert",
        client2Detail: "First-home sale management with market strategy and effective closing.",
        client3Name: "Sandra A.",
        client3Profession: "Spain / Argentina",
        client3Detail: "Property sale and continuous management of patrimonial administration from Argentina.",
        client4Name: "Pilar A.",
        client4Profession: "Spain / Argentina",
        client4Detail: "Residential transaction mediation and continued administrative management for more than three decades.",
        client5Name: "Cecilia G.",
        client5Profession: "Argentina",
        client5Detail: "Property sale with focus on value optimization and secure transaction.",
        client6Name: "Rafael",
        client6Profession: "Political Science graduate · Ambassador",
        client6Detail: "Residential operation closing for a family profile with focus on profitability and strategic convenience.",
        client7Name: "Dr. Anyelina",
        client7Profession: "Psychiatrist · Dominican Republic",
        client7Detail: "Home search and acquisition for a family with criteria in location, comfort and stability.",
        client8Name: "Kevin S.",
        client8Profession: "Family",
        client8Detail: "Sale of a single-family home for a family profile needing relocation.",
        client9Name: "Fedra Dos Santos",
        client9Profession: "Therapist · Brazil",
        client9Detail: "Rental management with tenant selection and supervision of the lease process.",
        contactLabel: "LET'S TALK",
        contactTitle: "Your next decision<br>can start here.",
        contactText: "Tell me what you need and we will see together how I can help. No commitment, in a calm and close way.",
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
        formError: "We could not send your message. Please try again.",
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
        navProceso: "Como trabalho",
        navClientes: "Clientes",
        navHablemos: "Fale comigo",
        heroTitle: "SUA PRÓXIMA DECISÃO<br><span>Eu te ajudo a torná-la realidade.</span>",
        heroDescription: "Compra, venda e aluguel com critério, proximidade e mais de 30 anos de experiência apoiando decisões imobiliárias com clareza e confiança.",
        heroButton: "Conte-me o que procura →",
        aboutLabel: "CONHEÇA SILVIA",
        aboutTitle: "Não é apenas outra agência,<br>uma assessora ao seu lado.",
        aboutText: "Sou Silvia Corral, assessora imobiliária independente com mais de 30 anos de experiência. Comecei minha trajetória na Argentina e, ao longo dos anos, também trabalhei no Brasil e em Miami. Hoje desenvolvo minha atividade em Madri, acompanhando cada cliente com o mesmo compromisso e proximidade que marcaram minha forma de trabalhar desde o início.",
        aboutExperience: "de experiência imobiliária",
        aboutQuote: '"Ouvir primeiro. Encontrar depois."',
        aboutButton: "Como trabalho",
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
        harmonyLabel: "HARMONIZE SEU AMBIENTE",
        harmonyTitle: "Seu espaço também influencia sua energia.",
        harmonyFengLabel: "Equilíbrio",
        harmonyFengTitle: "Feng Shui",
        harmonyFengText: "O Feng Shui organiza o espaço para que a energia circule com liberdade, luz e clareza. Quando uma casa está bem equilibrada, ela se sente mais tranquila, acolhedora e funcional, algo essencial para tomar decisões com calma e confiança.",
        harmonyAccessLabel: "Fluxo",
        harmonyAccessTitle: "Barra Access",
        harmonyAccessText: "A Barra Access atua na energia do ambiente para melhorar a sensação de bem-estar, a conexão entre as pessoas e o uso do espaço. É uma forma de ativar a harmonia em casa ou no negócio, favorecendo ambientes mais vivos, leves e positivos.",
        harmonyFaceliftLabel: "Renovação",
        harmonyFaceliftTitle: "Facelift",
        harmonyFaceliftText: "O Facelift é uma transformação estética e funcional com impacto imediato: melhor distribuição, mais luz, melhores acabamentos e uma imagem renovada. É a forma de devolver caráter e valor a um espaço sem perder a essência que já o torna especial.",
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

const navInstagram = document.querySelector("#nav-instagram");
if (navInstagram) {
    navInstagram.href = "https://www.instagram.com/silviacorral.propiedades/";
}
// aqui vamos a desarrollar la funcion del boton de email para que al hacer click en el boton se abra
// el cliente de correo predeterminado del usuario con un mensaje predefinido y el email de contacto.
const botonEmail = document.querySelector("#boton-email");
if (botonEmail) {
    botonEmail.href = `mailto:${datosContacto.email}`;
}
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