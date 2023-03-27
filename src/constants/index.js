import { pozycjonowanie, customoweStrony, supportt, gotowe, pracaWToku, briefcase, diamond, heart, edit, paper, idea, preview, working, done } from '../assets'

export const navLinks = [
    {
        id: "about",
        title: "Web-Masters",
    },
    {
        id: "portfolio",
        title: "Portfolio",
    },
    {
        id: "pricing",
        title: "Cennik",
    },
    {
        id: "contact",
        title: "Kontakt",
    }
]

export const aboutUs = [
    {
        name: "Mateusz",
        position: "Backend and SEO Expert",
        description: "Mateusz is good and makes good stuff",
    },
    {
        name: "Witold",
        position: "Frontend and Styling Expert",
        description: "Witold is good and makes good visuals",
    }
]

export const headings = [
    {
        
    }
]

export const about = [
    {
        title: "Strony na wymiar",
        description: "Twój pomysł + nasze wykonanie = Strona idealnie skrojona pod Ciebie!",
        img: customoweStrony,
    },
    {
        title: "Pozycjonowanie",
        description: "Zadbamy o to, żeby Twoja strona była widoczna w sieci!",
        img: pozycjonowanie,
    },
    {
        title: "Wsparcie",
        description: "Na każdym etapie tworzenia strony otrzymasz nasze pełne wsparcie!",
        img: supportt,
    },
]

export const howItsDone = [
    {
        title: "Przedstawiasz swój pomysł",
        description: "Konsultujemy się z Tobą i uważnie słuchamy Twoich potrzeb jakie masz względem swojej strony. Doradzamy również jakie rozwiązania mogą zostać zaimplementowane, żeby Twoja strona internetowa była stworzona idealnie pod Ciebie i Twoich klientów!",
        img: idea
    },
    {
        title: "Tworzymy wizualizację",
        description: "Posługując się najnowszymi technologiami upewniamy się, że produkt, który będzie dla Ciebie tworzony, spełni wszystkie Twoje wymagania i będziesz miło zaskoczony finalnym wyglądem oraz funkcjonalnością Twojej witryny internetowej.",
        img: preview
    },
    {
        title: "Pracujemy nad Twoją stroną",
        description: "Wracasz do swojej pracy, w której jesteś ekspertem, a w międzyczasie powstaje twoja indywidualna strona internetowa, która wypozycjonuje Twój biznes w Google, oraz przekaże potencjalnym klientom wszystkie potrzebne informacje do kontaktu z Tobą.",
        img: working
    },
    {
        title: "Gotowe!",
        description: "Twój biznes jest już widoczny w sieci! Twoja strona jest wizytówką Twojego biznesu, którą możesz się posługiwać w internecie oraz poza nim. Dzięki nowoczesnemu wyglądowi oraz funkcjonalności Twojej witryny masz pewność, że jesteś odbierany jako ekspert i profesjonalista w swojej branży!",
        img: done
    },
]

export const pricing = [
    {
        title: "Edycja Strony",
        img: edit,
        desc: "Masz już stronę, którą należy usprawnić, lub zmodernizować? Ta oferta jest dla Ciebie",
        price: "Wycena indywidualna",
        discount: 0,
        features: [
            {
                feature: "Edycja strony według potrzeb"
            },
            {
                feature: "Optymalizacja treści"
            },
            {
                feature: "Podstawowe SEO"
            },
            {
                feature: "Google Analytics"
            },
            {
                feature: "Wsparcie przez miesiąc GRATIS"
            },
        ]
    }, 
    {
        title: "Basic Plan",
        img: paper,
        desc: "Strona-wizytówka w najlepszej proporcji jakości do ceny",
        price: 1300,
        discount: 25,
        features: [
            {
                feature: "Własna Domena"
            },
            {
                feature: "Roczny hosting i certyfikat SSL"
            },
            {
                feature: "Firmowy mail"
            },
            {
                feature: "Bez podstron"
            },
            {
                feature: "Podstawowe SEO"
            },
            {
                feature: "Google Analytics"
            },
            {
                feature: "Wsparcie miesiąc GRATIS"
            },
        ]
    }, 
    {
        title: "Standard Plan",
        img: briefcase,
        desc: "Propozycja dla małych biznesów, które potrzebują większej ilości treści na stronie",
        price: 1900,
        discount: 10,
        features: [
            {
                feature: "Własna domena"
            },
            {
                feature: "Roczny hosting i certyfikat SSL"
            },
            {
                feature: "5 firmowych maili"
            },
            {
                feature: "Do pięciu podstron"
            },
            {
                feature: "Podstawowe SEO"
            },
            {
                feature: "Google Analytics"
            },
            {
                feature: "Wsparcie 2 miesiące GRATIS"
            },
            {
                feature: "Formularz kontaktowy"
            },
        ]
    }, 
    {
        title: "Premium Plan",
        img: diamond,
        desc: "Okazała strona dla małych i średnich biznesów oraz długoterminowe wsparcie",
        price: 2500,
        discount: 0,
        features: [
            {
                feature: "Własna domena"
            },
            {
                feature: "Roczny hosting i certyfikat SSL"
            },
            {
                feature: "Dowolna ilość firmowych maili"
            },
            {
                feature: "Bez limitu podstron"
            },
            {
                feature: "Podstawowe SEO"
            },
            {
                feature: "Google Analytics"
            },
            {
                feature: "Wsparcie 6 miesięcy GRATIS"
            },
            {
                feature: "Formularz kontaktowy"
            },
            {
                feature: "Anglojęzyczna wersja strony"
            },
            {
                feature: "Zintegrowany Facebook chat"
            },
        ]
    }, 
]