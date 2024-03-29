import { idea, preview, working, done, trainer, pizza } from '../assets'

export const navLinks = [
    {
        id: "about",
        title: "O nas",
        href: "about"
    },
    {
        id: "pricing",
        title: "Oferta",
        href: "pricing"
    },
    // {
    //     id: "portfolio",
    //     title: "Portfolio",
    //     href: "portfolio"
    // },
    {
        id: "contact",
        title: "Kontakt",
        href: "contact"
    }
]

export const about = [
    {
        title: "Strony na wymiar",
        description: "Twój pomysł + nasze wykonanie = Strona idealnie skrojona pod Ciebie!",
    },
    {
        title: "Pozycjonowanie",
        description: "Zadbamy o to, żeby Twoja strona była widoczna w sieci!",
    },
    {
        title: "Wsparcie",
        description: "Na każdym etapie tworzenia strony otrzymasz nasze pełne wsparcie!",
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
        desc: "Strona-wizytówka w najlepszej proporcji jakości do ceny",
        price: "od " + 1299,
        discount: 0,
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
        desc: "Propozycja dla małych biznesów, które potrzebują większej ilości treści na stronie",
        price: "od " + 1899,
        discount: 0,
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
        desc: "Okazała strona dla małych i średnich biznesów oraz długoterminowe wsparcie",
        price: "od " + 2499,
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

export const sale = {
        isActive: true,
        title: "SPRING SALE",
        desc: "Unikatowy pakiet tylko dla kolejnych 5 klientów:",
        price: 749,
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
                feature: "Single-page"
            },
            {
                feature: "Podstawowe SEO"
            },
            {
                feature: "Wsparcie miesiąc GRATIS"
            },
        ]
}

export const portfolio = [
    // {
    //     title:"Spartan Trener",
    //     desc: "Landing site dla trenera personalnego",
    //     img:trainer,
    //     link:"https://spartan-trener.online/",
    //     features:[
    //         'Landing site',
    //         'Animowane zdjęcia',
    //         'Sekcja oferty',
    //         'Formularz kontaktowy'
    //     ]
    // },
    // {
    //     title:"Pizza Eccezionale",
    //     desc: "Strona internetowa pizzerii z kilkoma podstronami",
    //     img:pizza,
    //     link:"https://pizzaeccezionale.online/",
    //     features:[
    //         '3 podstrony',
    //         'Sekcja ocen',
    //         'Formularz kontaktowy',
    //         'Menu',
    //         'Sekcja z animowanym losowaniem'
    //     ]
    // },
]

