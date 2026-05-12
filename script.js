/* STREAMING_CHUNK:Initializing mock database and global state variables... */
// --- 1. MOCK DATABASE AND LOCATIONS ---

// МАСИВ З УСІМА ТОВАРАМИ
const products = [
    // --- АТБ (Grocery) ---
    { id: 1001, name: "Хліб білий", price: 25, category: "Grocery", partner: "АТБ", description: "Свіжоспечений пшеничний білий хліб", img: "images/Хліб білий.jpg" },
    { id: 1002, name: "Хліб чорний", price: 28, category: "Grocery", partner: "АТБ", description: "Житній хліб з солодом", img: "images/Хліб чорний.jpg" },
    { id: 1003, name: "Молоко 2.5%", price: 42, category: "Grocery", partner: "АТБ", description: "Натуральне коров'яче молоко", img: "images/Молоко 2.5.jpg" },
    { id: 1004, name: "Кефір 2.5%", price: 45, category: "Grocery", partner: "АТБ", description: "Корисний кефір", img: "images/Кефір 2.5.jpg" },
    { id: 1005, name: "Сметана 20%", price: 55, category: "Grocery", partner: "АТБ", description: "Густа сметана", img: "images/Сметана 20.jpg" },
    { id: 1006, name: "Сир твердий", price: 120, category: "Grocery", partner: "АТБ", description: "Сир Голландський", img: "images/сир твердий.jpg" },
    { id: 1007, name: "Яйця (10 шт)", price: 65, category: "Grocery", partner: "АТБ", description: "Яйця курячі С0", img: "images/Яйця (10 шт).jpg" },
    { id: 1008, name: "Ковбаса варена", price: 140, category: "Grocery", partner: "АТБ", description: "Лікарська ковбаса", img: "images/Ковбаса варена.jpg" },
    { id: 1009, name: "Куряче філе", price: 180, category: "Grocery", partner: "АТБ", description: "Філе охолоджене 1кг", img: "images/Куряче філе.jpg" },
    { id: 1010, name: "Картопля", price: 20, category: "Grocery", partner: "АТБ", description: "Картопля 1кг", img: "images/Картопля.jpg" },
    { id: 1011, name: "Помідори", price: 80, category: "Grocery", partner: "АТБ", description: "Томати 1кг", img: "images/Помідори.jpg" },
    { id: 1012, name: "Банани", price: 60, category: "Grocery", partner: "АТБ", description: "Еквадор 1кг", img: "images/Банани.jpg" },
    { id: 1013, name: "Кока-Кола 1.5л", price: 45, category: "Grocery", partner: "АТБ", description: "Напій Coca-Cola", img: "images/Кока-Кола 1.5л.jpg" },
    
    // --- IQ Pizza (Pizza & Fastfood) ---
    { id: 2001, name: "Піца Маргарита", price: 150, category: "Pizza", partner: "IQ Pizza", description: "Томатний соус, моцарела", img: "images/Піца Маргарита.jpg" },
    { id: 2002, name: "Піца Пепероні", price: 180, category: "Pizza", partner: "IQ Pizza", description: "Пепероні, сир моцарела", img: "images/Піца Пепероні.jpg" },
    { id: 2003, name: "Піца 4 Сири", price: 210, category: "Pizza", partner: "IQ Pizza", description: "Моцарела, пармезан, горгонзола, дорблю", img: "images/Піца 4 Сири.jpg" },
    { id: 2004, name: "Піца Гавайська", price: 190, category: "Pizza", partner: "IQ Pizza", description: "Курка, ананас, сир", img: "images/Піца Гавайська.jpg" },
    { id: 2005, name: "Піца М'ясна", price: 240, category: "Pizza", partner: "IQ Pizza", description: "Бекон, салямі, шинка", img: "images/Піца М'ясна.jpg" },
    { id: 2006, name: "Піца Сирна", price: 170, category: "Pizza", partner: "IQ Pizza", description: "Багато сиру моцарела", img: "images/Піца Сирна.jpg" },
    { id: 2007, name: "Піца Баварська", price: 220, category: "Pizza", partner: "IQ Pizza", description: "Мисливські ковбаски, огірки, гірчиця", img: "images/Піца Баварська.jpg" },
    { id: 2011, name: "Піца Діабола", price: 230, category: "Pizza", partner: "IQ Pizza", description: "Гостра салямі, чилі, моцарела", img: "images/Піца Діабола.jpg" },
    { id: 2012, name: "Піца Сирна Курка", price: 215, category: "Pizza", partner: "IQ Pizza", description: "Курка, кукурудза, багато сиру", img: "images/Піца Сирна Курка.jpg" },
    { id: 2008, name: "Картопля фрі", price: 65, category: "Burger", partner: "IQ Pizza", description: "Хрустка фрі", img: "images/Картопля фрі.jpg" },
    { id: 2009, name: "Нагетси курячі", price: 110, category: "Burger", partner: "IQ Pizza", description: "Нагетси (9 шт)", img: "images/Нагетси курячі.jpg" },
    { id: 2010, name: "Курячі крильця", price: 140, category: "Burger", partner: "IQ Pizza", description: "Крильця BBQ (6 шт)", img: "images/Реберця.jpg" },
    { id: 2013, name: "Сирні кульки", price: 125, category: "Burger", partner: "IQ Pizza", description: "Кульки з моцарелою у фритюрі", img: "images/Сирні кульки.jpg" },

    // --- Osama Sushi ---
    { id: 3001, name: "Рол Філадельфія", price: 250, category: "Sushi", partner: "Osama Sushi", description: "Лосось, крем-сир", img: "images/Рол Філадельфія.jpg" },
    { id: 3002, name: "Рол Каліфорнія", price: 220, category: "Sushi", partner: "Osama Sushi", description: "Краб, авокадо, тобіко", img: "images/Рол Каліфорнія.jpg" },
    { id: 3003, name: "Рол Зелений Дракон", price: 280, category: "Sushi", partner: "Osama Sushi", description: "Вугор, авокадо", img: "images/Рол Зелений Дракон.jpg" },
    { id: 3004, name: "Макі з лососем", price: 120, category: "Sushi", partner: "Osama Sushi", description: "Традиційний моно-рол", img: "images/Макі з лососем.jpg" },
    { id: 3009, name: "Сет Самурай", price: 680, category: "Sushi", partner: "Osama Sushi", description: "Каліфорнія, Філадельфія, Макі", img: "images/Сет Самурай.jpg" },
    { id: 3010, name: "Запечений Рол", price: 270, category: "Sushi", partner: "Osama Sushi", description: "Теплий рол з лососем та сирною шапкою", img: "images/Запечений Рол.jpg" },
    { id: 3011, name: "Нігірі Сет", price: 320, category: "Sushi", partner: "Osama Sushi", description: "Асорті нігірі з лососем, тунцем, вугром", img: "images/Нігірі Сет.jpg" },
    { id: 3012, name: "Макі з вугром", price: 160, category: "Sushi", partner: "Osama Sushi", description: "Традиційні макі з вугром та унагі", img: "images/Макі з вугром.jpg" },

    // --- ToSim (Grocery & Fastfood) ---
    { id: 4001, name: "Багет французький", price: 35, category: "Grocery", partner: "ToSim", description: "Хрусткий свіжоспечений багет", img: "images/Багет французький.jpg" },
    { id: 4002, name: "Круасан", price: 25, category: "Grocery", partner: "ToSim", description: "Класичний круасан", img: "images/Круасан.jpg" },
    { id: 4003, name: "Салямі", price: 250, category: "Grocery", partner: "ToSim", description: "Салямі х/к", img: "images/Салямі.jpg" },
    { id: 4004, name: "Шоколад чорний", price: 50, category: "Grocery", partner: "ToSim", description: "Шоколад 72%", img: "images/Шоколад чорний.jpg" },
    { id: 4005, name: "Сік Сандора 1л", price: 55, category: "Grocery", partner: "ToSim", description: "Апельсиновий сік", img: "images/Сік Сандора 1л.jpg" },
    { id: 4006, name: "Чізбургер ToSim", price: 120, category: "Burger", partner: "ToSim", description: "Соковита котлета, сир чеддер", img: "images/Чізбургер ToSim.jpg" },
    { id: 4007, name: "Картопля по-селянськи", price: 75, category: "Burger", partner: "ToSim", description: "Спеції, часник", img: "images/Картопля по-селянськи.jpg" },
    { id: 4008, name: "Чікенбургер", price: 140, category: "Burger", partner: "ToSim", description: "Хрустка курка, айсберг, соус", img: "images/Чікенбургер.jpg" },

    // --- Baza (Burger & Dinner) ---
    { id: 5001, name: "Бургер з яловичиною", price: 190, category: "Burger", partner: "Baza", description: "Фірмовий бургер", img: "images/Бургер з яловичиною.jpg" },
    { id: 5002, name: "Бургер з куркою", price: 170, category: "Burger", partner: "Baza", description: "Куряча котлета, білий соус", img: "images/Бургер з куркою.jpg" },
    { id: 5007, name: "Дабл Чізбургер", price: 240, category: "Burger", partner: "Baza", description: "Дві котлети, подвійний чеддер", img: "images/Дабл Чізбургер.jpg" },
    { id: 5008, name: "Батат Фрі", price: 95, category: "Burger", partner: "Baza", description: "Солодка картопля фрі з соусом", img: "images/Батат Фрі.jpg" },
    { id: 5003, name: "Стейк свинячий", price: 280, category: "Dinner", partner: "Baza", description: "Стейк на грилі", img: "images/Стейк свинячий.jpg" },
    { id: 5004, name: "Салат Цезар", price: 210, category: "Dinner", partner: "Baza", description: "Цезар з куркою", img: "images/Салат Цезар.jpg" },

    // --- Фелічіта (Pizza, Dinner, Dessert) ---
    { id: 6001, name: "Піца Маргарита", price: 210, category: "Pizza", partner: "Фелічіта", description: "Італійська піца", img: "images/Піца Маргарита.jpg" },
    { id: 6002, name: "Піца Прошуто", price: 310, category: "Pizza", partner: "Фелічіта", description: "Італійське прошуто, рукола, пармезан", img: "images/Піца Прошуто.jpg" },
    { id: 6004, name: "Піца 4 Сири", price: 260, category: "Pizza", partner: "Фелічіта", description: "Горгонзола, пармезан, дорблю", img: "images/Піца 4 Сирии.jpg" },
    { id: 6007, name: "Піца 4 М'яса", price: 290, category: "Pizza", partner: "Фелічіта", description: "Шинка, салямі, бекон, мисливські ковбаски", img: "images/Піца 4 М'яса.jpg" },
    { id: 6003, name: "Паста Болоньєзе", price: 210, category: "Dinner", partner: "Фелічіта", description: "Паста з м'ясним рагу", img: "images/Паста Болоньєзе.jpg" },
    { id: 6005, name: "Тірамісу", price: 160, category: "Dessert", partner: "Фелічіта", description: "Класичний десерт", img: "images/Тірамісу.jpg" },

    // --- Promos (Акційні сети) ---
    { id: 901, name: "Комбо Ситний", price: 290, oldPrice: 420, category: "Burger", partner: "ToSim", isPromo: true, description: "Дабл Біф, Фрі, Кола", img: "images/Комбо Ситний.jpg" },
    { id: 904, name: "Сет для двох", price: 450, oldPrice: 600, category: "Burger", partner: "ToSim", isPromo: true, description: "2 Чізбургери, 2 Фрі, 2 Коли, Нагетси", img: "images/Сет для двох.jpg" },
    { id: 905, name: "Мега Паті Сет", price: 790, oldPrice: 1100, category: "Burger", partner: "ToSim", isPromo: true, description: "4 Бургери, Відро фрі, 20 нагетсів", img: "images/Мега Паті Сет.jpg" },
    { id: 902, name: "М'ясний Бум", price: 890, oldPrice: 1250, category: "Dinner", partner: "Baza", isPromo: true, description: "Стейки, реберця, овочі гриль", img: "images/М'ясний Бум.jpg" },
    { id: 906, name: "Пивний Безліміт", price: 550, oldPrice: 750, category: "Dinner", partner: "Baza", isPromo: true, description: "Крильця BBQ, сирні палички, кільця цибулі", img: "images/Пивний Безліміт.jpg" },
    { id: 907, name: "Сет Гриль MAX", price: 1200, oldPrice: 1600, category: "Dinner", partner: "Baza", isPromo: true, description: "Шашлик, ковбаски, ребра, печена картопля", img: "images/Сет Гриль MAX.jpg" },
    { id: 903, name: "Кілограм Ролів", price: 850, oldPrice: 1100, category: "Sushi", partner: "Osama Sushi", isPromo: true, description: "Великий сет ролів (Філадельфія, Каліфорнія, Макі)", img: "images/Кілограм Ролів.jpg" },
    { id: 908, name: "Сет Драконів", price: 950, oldPrice: 1300, category: "Sushi", partner: "Osama Sushi", isPromo: true, description: "Зелений, Червоний та Золотий дракони", img: "images/Сет Драконів.jpg" },
    { id: 909, name: "Романтік Сет", price: 650, oldPrice: 850, category: "Sushi", partner: "Osama Sushi", isPromo: true, description: "Філадельфія з лососем, Нігірі, 2 келихи вина", img: "images/Романтік Сет.jpg" }
];

// Оновлені точні адреси згідно скріншотів
const partnerLocations = {
    "Фелічіта": [{ addr: "бул. Шевченка, 8", x: 0, y: 0.1 }],
    "IQ Pizza": [
        { addr: "просп. Перемоги, 2А", x: 1, y: -0.5 },
        { addr: "15-й мкрн., 19", x: 2.5, y: 1.5 }
    ],
    "АТБ": [
        { addr: "просп. Перемоги, 16А", x: 1.5, y: -0.8 },
        { addr: "просп. Дружби, 6а", x: -0.8, y: 0.5 },
        { addr: "15-й мкрн., 19", x: 2.5, y: 1.5 }
    ],
    "ToSim": [
        { addr: "Шахтарський мкрн., 38", x: -1.5, y: -1.5 },
        { addr: "просп. Перемоги, 2А", x: 1, y: -0.5 },
        { addr: "бул. Шевченка, 9", x: 0, y: 0 },
        { addr: "вул. Шухевича, 3а", x: 0, y: 1.2 },
        { addr: "5-й мкрн., 9", x: 2, y: -1 }
    ],
    "Baza": [{ addr: "бул. Шевченка, 9", x: 0, y: 0 }],
    "Osama Sushi": [{ addr: "вул. Кобзаря, 29а", x: -0.5, y: -0.2 }] 
};

// --- 2. GLOBAL STATE ---
let cart = [];
let currentUser = null;
let userProfile = { name: '', phone: '', street: '', house: '', apt: '' };
let orderHistory = [];
let currentProduct = null;
let currentBasePrice = 0;
let currentModalQty = 1; // Нова змінна для лічильника кількості
let deliveryFee = 50; 
let discountApplied = 0;
let currentSort = 'default';

// --- 3. DOM Elements ---
const overlay = document.getElementById('overlay');
const cartSidebar = document.getElementById('cart-sidebar');
const header = document.getElementById('main-header');
const themeToggleBtn = document.getElementById('theme-toggle');

/* STREAMING_CHUNK:Setting up initialization and event listeners... */
// --- 4. INIT & LOCAL STORAGE ---
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerText = '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerText = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerText = '☀️';
        }
    });

    loadStateFromStorage();
    renderMenu(products.filter(p => !p.isPromo));
    initFilters();
    initFAQ();
    initMainTabs();
    initAuth();
    initCheckout();
    initDistanceSearch();
    initWelcomeModal();
    initProductSearch();
    
    window.addEventListener('scroll', () => {
        if(window.scrollY > 10) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
        
        const floatingCart = document.getElementById('floating-cart');
        if(cart.length > 0 && window.scrollY > 200) {
            floatingCart.classList.add('visible');
        } else {
            floatingCart.classList.remove('visible');
        }
        
        const sections = document.querySelectorAll('section[id], div[id="home"]');
        const navLinks = document.querySelectorAll('.nav-links a');
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 100)) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
});

/* STREAMING_CHUNK:Defining UI helper functions and modals... */
function initWelcomeModal() {
    setTimeout(() => { openModal('welcome-modal'); }, 800);
}

function closeWelcomeModal() {
    closeModal('welcome-modal');
}

function selectWelcomeCategory(cat) {
    const searchInput = document.getElementById('product-search-input');
    if(searchInput) searchInput.value = '';

    const filtered = products.filter(p => p.category === cat && !p.isPromo);
    const catNames = { 'Pizza': 'Піца', 'Sushi': 'Суші', 'Burger': 'Бургери та Фастфуд', 'Grocery': 'Продукти' };
    
    document.getElementById('menu-title').innerText = `Ви обрали: ${catNames[cat]}`;
    renderMenu(filtered);
    closeModal('welcome-modal');
    setTimeout(() => { document.getElementById('menu').scrollIntoView({behavior: 'smooth', block: 'start'}); }, 300);
}

function saveStateToStorage() {
    localStorage.setItem('novo_cart', JSON.stringify(cart));
    localStorage.setItem('novo_history', JSON.stringify(orderHistory));
    localStorage.setItem('novo_profile', JSON.stringify(userProfile));
    if(currentUser) localStorage.setItem('novo_user', currentUser);
    else localStorage.removeItem('novo_user');
}

function loadStateFromStorage() {
    const savedCart = localStorage.getItem('novo_cart');
    if (savedCart) {
        try { cart = JSON.parse(savedCart); } catch(e){}
    }
    
    const savedHistory = localStorage.getItem('novo_history');
    if (savedHistory) {
        try { orderHistory = JSON.parse(savedHistory); } catch(e){}
    }
    
    const savedProfile = localStorage.getItem('novo_profile');
    if (savedProfile) {
        try { userProfile = JSON.parse(savedProfile); } catch(e){}
    }
    
    currentUser = localStorage.getItem('novo_user') || null;
    if (currentUser) {
        document.getElementById('auth-btn-main').innerText = `👤 Профіль`;
    }

    if(orderHistory.length > 0) {
        const statEl = document.getElementById('stat-delivered');
        if(statEl) statEl.innerText = 1204 + orderHistory.length;
    }
    updateCartUI();
}

function showToast(message, isError = false) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${isError ? 'error' : ''}`;
    toast.innerHTML = `<span>${isError ? '❌' : '✅'}</span> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* STREAMING_CHUNK:Implementing search, filtering and distances logic... */
function initDistanceSearch() {
    const searchBtn = document.getElementById('hero-search-btn');
    searchBtn.addEventListener('click', calculateDistances);
    document.getElementById('hero-address-input').addEventListener('keypress', (e) => {
        if(e.key === 'Enter') calculateDistances();
    });
}

function getMockCoords(address) {
    const addr = address.toLowerCase();
    
    // Райони та мікрорайони
    if (addr.includes('15') || addr.includes("п'ятнадцятий")) return { x: 2.5, y: 1.5 };
    if (addr.includes('5') || addr.includes("п'ятий")) return { x: 2, y: -1 };
    if (addr.includes('6') || addr.includes("шостий")) return { x: 1.8, y: -0.5 };
    if (addr.includes('шахтарський')) return { x: -1.5, y: -1.5 };
    if (addr.includes('центр')) return { x: 0.2, y: 0.2 };
    if (addr.includes('сірка') || addr.includes('сірку')) return { x: 0.5, y: 0.8 };

    // Вулиці Нововолинська
    if (addr.includes('володимира') || addr.includes('святого')) return { x: -0.5, y: 0.2 };
    if (addr.includes('шевченка')) return { x: 0, y: 0 };
    if (addr.includes('перемоги')) return { x: 1.2, y: -0.6 };
    if (addr.includes('дружби')) return { x: -0.8, y: 0.5 };
    if (addr.includes('шухевича')) return { x: 0, y: 1.2 };
    if (addr.includes('мазепи')) return { x: 1.0, y: 0.5 };
    if (addr.includes('лесі українки') || addr.includes('українки')) return { x: 0.3, y: -0.3 };
    if (addr.includes('стуса')) return { x: -0.2, y: 0.9 };
    if (addr.includes('луцька')) return { x: 1.5, y: 0.2 };
    if (addr.includes('кобзаря')) return { x: -0.5, y: -0.2 };
    
    // Default
    let hash = 0;
    for (let i = 0; i < addr.length; i++) hash = addr.charCodeAt(i) + ((hash << 5) - hash);
    return { x: ((hash % 10) / 3) - 1.5, y: ((hash % 8) / 3) - 1.5 };
}

function selectDistrict(districtName) {
    document.getElementById('top-bar-address').innerText = districtName;
    document.getElementById('hero-address-input').value = districtName;
    closeModal('district-modal');
    calculateDistances();
}

function calculateDistances() {
    const input = document.getElementById('hero-address-input').value;
    if(!input.trim()) return showToast("Введіть назву вулиці чи району!", true);

    const userCoords = getMockCoords(input);
    document.getElementById('top-bar-address').innerText = input.length > 20 ? input.substring(0, 20) + '...' : input;

    document.querySelectorAll('.partner-card').forEach(card => {
        const partnerName = card.getAttribute('data-partner');
        if(!partnerName) return;

        const locs = partnerLocations[partnerName] || [{addr: "Нововолинськ", x:0, y:0}];
        let minDist = Infinity;
        let nearestAddr = "";

        locs.forEach(loc => {
            let dist = Math.sqrt(Math.pow(loc.x - userCoords.x, 2) + Math.pow(loc.y - userCoords.y, 2));
            // Додаємо невеликий рандом, якщо координати співпадають
            if (dist === 0) dist = 0.1 + (Math.random() * 0.2);
            dist = dist * 1.2;

            if(dist < minDist) {
                minDist = dist;
                nearestAddr = loc.addr;
            }
        });

        let km = minDist.toFixed(1);
        if (parseFloat(km) < 0.2) km = (0.2 + (Math.random() * 0.2)).toFixed(1);
        
        // Час = 5 хв на 1 км + 15 хв приготування + рандомні затори
        let time = Math.round((parseFloat(km) * 5) + 15 + (Math.random() * 5));

        const distBadge = card.querySelector('.partner-dist-badge');
        const addrLabel = card.querySelector('.partner-nearest-addr');
        
        if(distBadge && addrLabel) {
            distBadge.innerHTML = `📍 ${km} км • ⏱ ${time} хв`;
            distBadge.classList.remove('hidden');
            addrLabel.innerText = nearestAddr;
            addrLabel.classList.remove('hidden');
        }
        card.setAttribute('data-dist', km);
    });

    const container = document.getElementById('partners-row-container');
    const cards = Array.from(container.children);
    cards.sort((a, b) => parseFloat(a.getAttribute('data-dist')) - parseFloat(b.getAttribute('data-dist')));
    cards.forEach(c => container.appendChild(c));

    document.getElementById('menu').scrollIntoView({behavior: 'smooth', block: 'start'});
}

function applySort(val) {
    currentSort = val;
    const searchInput = document.getElementById('product-search-input');
    const event = new Event('input', { bubbles: true });
    if (searchInput && searchInput.value) {
        searchInput.dispatchEvent(event);
    } else {
        const title = document.getElementById('menu-title').innerText;
        if (title.includes('закладу')) {
            filterByPartner(title.split(': ')[1]);
        } else if (title.includes('Ви обрали')) {
            const catMapRev = {'Піца': 'Pizza', 'Суші': 'Sushi', 'Бургери та Фастфуд': 'Burger', 'Продукти': 'Grocery'};
            const catName = title.split(': ')[1];
            renderMenu(products.filter(p => p.category === catMapRev[catName] && !p.isPromo));
        } else {
            renderMenu(products.filter(p => !p.isPromo));
        }
    }
}

function initProductSearch() {
    const searchInput = document.getElementById('product-search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (!query) {
            document.getElementById('menu-title').innerText = 'Всі страви';
            renderMenu(products.filter(p => !p.isPromo));
            return;
        }

        const catMap = {
            'піца': 'pizza', 'піц': 'pizza',
            'суші': 'sushi', 'рол': 'sushi',
            'бургер': 'burger', 'фастфуд': 'burger',
            'продукт': 'grocery', 'овоч': 'grocery', 'фрукт': 'grocery',
            'десерт': 'dessert', 'солодк': 'dessert',
            'вечер': 'dinner', 'гаряч': 'dinner'
        };

        const filtered = products.filter(p => {
            if (p.isPromo) return false;
            const matchName = p.name.toLowerCase().includes(query);
            const matchPartner = p.partner.toLowerCase().includes(query);
            const matchDesc = p.description ? p.description.toLowerCase().includes(query) : false;
            
            let translatedCatMatch = false;
            for (const [ua, en] of Object.entries(catMap)) {
                if (ua.includes(query) && p.category.toLowerCase() === en) translatedCatMatch = true;
            }
            return matchName || matchPartner || matchDesc || translatedCatMatch;
        });

        document.getElementById('menu-title').innerText = `Пошук: "${e.target.value}"`;
        renderMenu(filtered);
    });
}

function filterByPartner(partnerName) {
    const searchInput = document.getElementById('product-search-input');
    if(searchInput) searchInput.value = '';

    const filtered = products.filter(p => p.partner === partnerName && !p.isPromo);
    document.getElementById('menu-title').innerText = `Меню закладу: ${partnerName}`;
    renderMenu(filtered);
    document.getElementById('menu').scrollIntoView({behavior: 'smooth', block: 'start'});
}

/* STREAMING_CHUNK:Implementing menu rendering and product modal logic... */
function renderMenu(items) {
    const container = document.getElementById('menu-grid-container');
    container.innerHTML = '';
    
    let itemsToRender = [...items];
    if (currentSort === 'price-asc') itemsToRender.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-desc') itemsToRender.sort((a, b) => b.price - a.price);
    
    if (itemsToRender.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-gray); border-radius: var(--radius-lg);">
                <div style="font-size: 3rem; margin-bottom: 16px;">🍽️</div>
                <h3 class="font-bold text-xl mb-2">На жаль, за цим запитом нічого не знайдено.</h3>
                <p class="text-gray">Спробуйте змінити пошуковий запит або обрати іншу категорію.</p>
            </div>`;
        return;
    }
    
    itemsToRender.forEach(p => {
        container.innerHTML += `
            <div class="product-card" onclick="openProductModal(${p.id})">
                <img src="${p.img}" alt="${p.name}" class="product-img">
                <div class="product-partner">${p.partner}</div>
                <div class="product-title">${p.name}</div>
                <div class="product-footer">
                    <span class="product-price">${p.price} ₴</span>
                    <button class="add-btn">+</button>
                </div>
            </div>
        `;
    });
}

function initFilters() {
    document.querySelectorAll('.category-card[data-cat]').forEach(card => {
        card.addEventListener('click', (e) => {
            const searchInput = document.getElementById('product-search-input');
            if(searchInput) searchInput.value = '';

            const cat = e.currentTarget.getAttribute('data-cat');
            const filtered = products.filter(p => p.category === cat);
            document.getElementById('menu-title').innerText = e.currentTarget.querySelector('.category-name').innerText;
            renderMenu(filtered);
            document.getElementById('menu').scrollIntoView({behavior: 'smooth', block: 'start'});
        });
    });
}

function openModal(id) {
    overlay.style.display = 'block';
    document.getElementById(id).style.display = 'block';
    setTimeout(() => {
        overlay.classList.add('show');
        document.getElementById(id).classList.add('show');
    }, 10);
}

function closeModal(id) {
    overlay.classList.remove('show');
    document.getElementById(id).classList.remove('show');
    setTimeout(() => {
        overlay.style.display = 'none';
        document.getElementById(id).style.display = 'none';
    }, 300);
}

overlay.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach(m => closeModal(m.id));
    closeCart();
});

function openLeadModal(type) {
    document.getElementById('lead-title').innerText = type === 'partner' ? "Стати партнером" : "Стати кур'єром";
    openModal('lead-modal');
}

function submitLeadForm(e) {
    e.preventDefault();
    showToast('Заявку успішно відправлено! Ми зв\'яжемось з вами.');
    closeModal('lead-modal');
    e.target.reset();
}

function openPromo(partner) {
    document.getElementById('promo-modal-title').innerText = `Ексклюзивні Сети: ${partner}`;
    const container = document.getElementById('promo-items-container');
    container.innerHTML = '';
    
    const promoItems = products.filter(p => p.partner === partner && p.isPromo);
    
    if(promoItems.length === 0) {
        container.innerHTML = '<p class="text-center text-gray" style="grid-column: 1 / -1; padding: 20px;">Наразі немає активних сетів для цього закладу.</p>';
    } else {
        promoItems.forEach(p => {
            container.innerHTML += `
                <div class="promo-list-card">
                    <img src="${p.img}" alt="${p.name}" style="width: 100px; height: 100px; border-radius: var(--radius-sm); object-fit: cover;">
                    <div style="flex: 1;">
                        <div class="font-bold mb-1" style="font-size: 1.1rem;">${p.name}</div>
                        <div class="text-xs text-gray mb-2" style="line-height: 1.3;">${p.description}</div>
                        <div class="flex justify-between items-end mt-2">
                            <div>
                                <div style="text-decoration: line-through; color: #EF4444; font-size: 0.8rem;">${p.oldPrice} ₴</div>
                                <div class="font-bold text-green" style="font-size: 1.25rem; line-height: 1;">${p.price} ₴</div>
                            </div>
                            <button class="btn btn-primary" style="padding: 6px 14px; font-size: 0.875rem;" onclick="addPromoToCart(${p.id})">В кошик</button>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    openModal('promo-modal');
}

function addPromoToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push({ ...product, finalPrice: Number(product.price), cartId: Date.now(), mods: ["Акційний Сет"] });
    
    updateCartUI();
    saveStateToStorage();
    closeModal('promo-modal');
    showToast(`${product.name} додано в кошик`);
}

function updateModalQty(delta) {
    currentModalQty += delta;
    if (currentModalQty < 1) currentModalQty = 1;
    if (currentModalQty > 99) currentModalQty = 99;
    document.getElementById('modal-qty-val').innerText = currentModalQty;
    calcPrice();
}

function openProductModal(id) {
    currentProduct = products.find(p => p.id === id);
    currentBasePrice = Number(currentProduct.price);
    currentModalQty = 1; // Скидаємо лічильник
    
    document.getElementById('pm-title').innerText = currentProduct.name;
    document.getElementById('pm-desc').innerText = `Заклад: ${currentProduct.partner}`;
    
    const modDiv = document.getElementById('pm-modifiers');
    let contentHTML = '';

    if (currentProduct.img) {
        contentHTML += `
            <div style="margin-bottom: 16px; text-align: center;">
                <img src="${currentProduct.img}" alt="${currentProduct.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-md); box-shadow: var(--shadow);">
            </div>
        `;
    }

    if (currentProduct.description) {
        contentHTML += `
            <div style="background: var(--bg-gray); padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); margin-bottom: 24px;">
                <p class="text-sm text-gray" style="line-height: 1.5; margin: 0;">📋 <span class="font-semibold text-main" style="color: var(--text-main);">Склад / Опис:</span> ${currentProduct.description}</p>
            </div>`;
    }

    const nameLower = currentProduct.name.toLowerCase();

    if (currentProduct.category === 'Pizza') {
        contentHTML += `
            <div class="mod-group">
                <div class="mod-title">Розмір</div>
                <label class="mod-label"><div class="flex items-center"><input type="radio" name="mod-size" value="0" data-name="Стандарт (30 см)" checked onchange="calcPrice()"> Стандарт (30 см)</div></label>
                <label class="mod-label"><div class="flex items-center"><input type="radio" name="mod-size" value="50" data-name="XL 40 см" onchange="calcPrice()"> XL 40 см</div> <span class="mod-price">+50 ₴</span></label>
            </div>
            <div class="mod-group">
                <div class="mod-title">Додатки</div>
                <label class="mod-label"><div class="flex items-center"><input type="checkbox" class="mod-cb" value="40" data-name="Сирний бортик" onchange="calcPrice()"> Сирний бортик</div> <span class="mod-price">+40 ₴</span></label>
                <label class="mod-label"><div class="flex items-center"><input type="checkbox" class="mod-cb" value="20" data-name="Подвійний сир" onchange="calcPrice()"> Подвійний сир</div> <span class="mod-price">+20 ₴</span></label>
            </div>
        `;
    } else if (nameLower.includes('бургер')) {
        contentHTML += `
            <div class="mod-group">
                <div class="mod-title">М'ясо</div>
                <label class="mod-label"><div class="flex items-center"><input type="radio" name="mod-size" value="0" data-name="Стандартна котлета" checked onchange="calcPrice()"> Стандарт</div></label>
                <label class="mod-label"><div class="flex items-center"><input type="radio" name="mod-size" value="60" data-name="Подвійна котлета" onchange="calcPrice()"> Подвійна котлета</div> <span class="mod-price">+60 ₴</span></label>
            </div>
            <div class="mod-group">
                <div class="mod-title">Додатки</div>
                <label class="mod-label"><div class="flex items-center"><input type="checkbox" class="mod-cb" value="20" data-name="Бекон" onchange="calcPrice()"> Бекон</div> <span class="mod-price">+20 ₴</span></label>
                <label class="mod-label"><div class="flex items-center"><input type="checkbox" class="mod-cb" value="15" data-name="Халапеньо" onchange="calcPrice()"> Халапеньо</div> <span class="mod-price">+15 ₴</span></label>
            </div>
        `;
    } else if (nameLower.includes('хот-дог')) {
        contentHTML += `
            <div class="mod-group">
                <div class="mod-title">Додатки до хот-дога</div>
                <label class="mod-label"><div class="flex items-center"><input type="checkbox" class="mod-cb" value="25" data-name="Додаткова сосиска" onchange="calcPrice()"> Додаткова сосиска</div> <span class="mod-price">+25 ₴</span></label>
                <label class="mod-label"><div class="flex items-center"><input type="checkbox" class="mod-cb" value="15" data-name="Сирний соус" onchange="calcPrice()"> Сирний соус</div> <span class="mod-price">+15 ₴</span></label>
                <label class="mod-label"><div class="flex items-center"><input type="checkbox" class="mod-cb" value="15" data-name="Халапеньо" onchange="calcPrice()"> Халапеньо</div> <span class="mod-price">+15 ₴</span></label>
            </div>
        `;
    } else if (['фрі', 'нагетси', 'крильця', 'кульки', 'кільця', 'батат'].some(w => nameLower.includes(w))) {
        contentHTML += `
            <div class="mod-group">
                <div class="mod-title">Соуси на вибір</div>
                <label class="mod-label"><div class="flex items-center"><input type="checkbox" class="mod-cb" value="15" data-name="Кетчуп" onchange="calcPrice()"> Кетчуп</div> <span class="mod-price">+15 ₴</span></label>
                <label class="mod-label"><div class="flex items-center"><input type="checkbox" class="mod-cb" value="20" data-name="Сирний соус" onchange="calcPrice()"> Сирний соус</div> <span class="mod-price">+20 ₴</span></label>
                <label class="mod-label"><div class="flex items-center"><input type="checkbox" class="mod-cb" value="20" data-name="Соус BBQ" onchange="calcPrice()"> Соус BBQ</div> <span class="mod-price">+20 ₴</span></label>
                <label class="mod-label"><div class="flex items-center"><input type="checkbox" class="mod-cb" value="20" data-name="Часниковий соус" onchange="calcPrice()"> Часниковий соус</div> <span class="mod-price">+20 ₴</span></label>
            </div>
        `;
    }

    contentHTML += `
        <div class="mod-group" style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border-color);">
            <div class="mod-title">Кількість:</div>
            <div style="display: flex; align-items: center; gap: 16px; background: var(--bg-gray); padding: 8px 16px; border-radius: var(--radius-pill); width: fit-content;">
                <button type="button" style="width: 32px; height: 32px; border-radius: 50%; background: var(--bg-card); border: 1px solid var(--border-color); font-size: 1.2rem; display: flex; align-items: center; justify-content: center; font-weight: bold; cursor: pointer; color: var(--text-main);" onclick="updateModalQty(-1)">−</button>
                <span id="modal-qty-val" style="font-weight: 700; font-size: 1.1rem; min-width: 24px; text-align: center; color: var(--text-main);">1</span>
                <button type="button" style="width: 32px; height: 32px; border-radius: 50%; background: var(--bg-card); border: 1px solid var(--border-color); font-size: 1.2rem; display: flex; align-items: center; justify-content: center; font-weight: bold; cursor: pointer; color: var(--text-main);" onclick="updateModalQty(1)">+</button>
            </div>
        </div>
    `;

    modDiv.innerHTML = contentHTML;
    calcPrice();
    openModal('product-modal');
    document.getElementById('pm-add-btn').onclick = addToCart;
}

function calcPrice() {
    let basePrice = Number(currentBasePrice);
    let additions = 0;
    
    const sizeRadio = document.querySelector('input[name="mod-size"]:checked');
    if (sizeRadio) additions += Number(sizeRadio.value);
    
    document.querySelectorAll('.mod-cb:checked').forEach(cb => {
        additions += Number(cb.value);
    });
    
    let mult = typeof currentModalQty !== 'undefined' ? currentModalQty : 1;
    let finalPrice = (basePrice + additions) * mult;
    
    document.getElementById('pm-price').innerText = `${Math.round(finalPrice)} ₴`;
    currentProduct.finalPrice = Math.round(finalPrice);
}

function addToCart() {
    let mods = [];
    
    const sizeRadio = document.querySelector('input[name="mod-size"]:checked');
    if(sizeRadio && Number(sizeRadio.value) > 0) {
        mods.push(sizeRadio.getAttribute('data-name') || "Збільшена порція");
    }
    
    document.querySelectorAll('.mod-cb:checked').forEach(cb => {
        mods.push(cb.getAttribute('data-name'));
    });

    if (currentModalQty > 1) {
        mods.push(`Кількість: ${currentModalQty} шт`);
    }

    cart.push({ ...currentProduct, cartId: Date.now(), mods: mods, finalPrice: Number(currentProduct.finalPrice) });
    
    updateCartUI();
    saveStateToStorage();
    closeModal('product-modal');
    showToast(`${currentProduct.name} додано в кошик`);
}

/* STREAMING_CHUNK:Implementing cart and checkout logic... */
// --- 11. CART UI & PROMO ---
function openCart() { overlay.style.display = 'block'; setTimeout(()=>overlay.classList.add('show'),10); cartSidebar.classList.add('open'); }
function closeCart() { overlay.classList.remove('show'); setTimeout(()=>overlay.style.display='none',300); cartSidebar.classList.remove('open'); }

function applyPromo() {
    const input = document.getElementById('promo-input').value.trim().toUpperCase();
    const msg = document.getElementById('promo-message');
    if (input === 'NOVO5') {
        discountApplied = 0.05; // 5%
        msg.innerText = "Знижка 5% застосована!";
        msg.classList.remove('hidden');
        msg.className = "text-sm text-green mb-2 font-semibold";
        msg.style.color = "var(--green)";
    } else {
        discountApplied = 0;
        msg.innerText = "Невірний промокод";
        msg.classList.remove('hidden');
        msg.className = "text-sm mb-2 font-semibold";
        msg.style.color = "#EF4444";
    }
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cart-items');
    container.innerHTML = '';
    let subtotal = 0;
    
    if(cart.length === 0) {
        container.innerHTML = '<div class="text-center text-gray mt-10">Кошик порожній</div>';
        document.getElementById('cart-total-price').innerText = `0 ₴`;
        document.getElementById('top-cart-info').innerText = `0 товарів | 0 ₴`;
        document.getElementById('floating-cart').classList.remove('visible');
        document.getElementById('checkout-btn').onclick = () => showToast("Кошик порожній!", true);
        return;
    } 
    
    cart.forEach(item => {
        subtotal += Number(item.finalPrice);
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    ${item.mods.length > 0 ? `<div class="cart-item-mods">${item.mods.join(', ')}</div>` : ''}
                    <div class="cart-item-price">${item.finalPrice} ₴</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.cartId})" title="Видалити">×</button>
            </div>
        `;
    });
    
    let finalPrice = subtotal;
    if (discountApplied > 0) {
        finalPrice = Math.round(subtotal * (1 - discountApplied));
        document.getElementById('cart-total-price').innerHTML = `<span style="text-decoration: line-through; font-size: 1rem; color: var(--text-gray); margin-right: 8px;">${subtotal} ₴</span>${finalPrice} ₴`;
    } else {
        document.getElementById('cart-total-price').innerText = `${finalPrice} ₴`;
    }
    
    document.getElementById('top-cart-info').innerText = `${cart.length} товарів | ${finalPrice} ₴`;
    
    document.getElementById('floating-cart-info').innerText = `${finalPrice} ₴`;
    document.getElementById('floating-cart-badge').innerText = cart.length;
    const floatingCart = document.getElementById('floating-cart');
    if(cart.length > 0 && window.scrollY > 200) {
        floatingCart.classList.add('visible');
    } else {
        floatingCart.classList.remove('visible');
    }
    
    document.getElementById('checkout-btn').onclick = () => {
        if(!currentUser) {
            closeCart();
            openModal('auth-modal');
            return;
        }
        closeCart();
        openCheckout(finalPrice);
    };
}

function removeFromCart(id) {
    cart = cart.filter(i => i.cartId !== id);
    updateCartUI();
    saveStateToStorage();
}

// --- 12. CHECKOUT ---
function initCheckout() {
    const streetInput = document.getElementById('checkout-street');
    const notice = document.getElementById('delivery-fee-notice');
    const changeInput = document.getElementById('cash-change');
    
    streetInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        
        let subtotal = cart.reduce((sum, item) => sum + Number(item.finalPrice), 0);
        let currentSubtotal = discountApplied > 0 ? Math.round(subtotal * (1 - discountApplied)) : subtotal;
        
        if (val.includes('шахтарський')) {
            deliveryFee = 70;
            notice.innerText = "📍 Доставка на м-н Шахтарський: тариф +20 ₴";
        } else {
            deliveryFee = 50;
            notice.innerText = "📍 Стандартний тариф доставки: 50 ₴";
        }
        document.getElementById('final-total').innerText = currentSubtotal + deliveryFee;
    });

    document.querySelectorAll('input[name="payment"]').forEach(r => r.addEventListener('change', (e) => {
        if (e.target.value === 'cash') changeInput.classList.remove('hidden');
        else changeInput.classList.add('hidden');
    }));

    document.getElementById('confirm-order-btn').addEventListener('click', () => {
        const street = document.getElementById('checkout-street').value.trim();
        const house = document.getElementById('checkout-house').value.trim();
        const phone = document.getElementById('checkout-phone').value.trim();
        const apt = document.getElementById('checkout-apt').value.trim();
        
        if(!street || !house || !phone) {
            return showToast("Будь ласка, заповніть вулицю, будинок та телефон!", true);
        }
        
        const total = parseInt(document.getElementById('final-total').innerText);
        const fullAddress = `${street}, буд. ${house}${apt ? ', кв. '+apt : ''}`;
        
        const newOrder = {
            id: Math.floor(1000 + Math.random() * 9000),
            date: new Date().toLocaleDateString('uk-UA') + " " + new Date().toLocaleTimeString('uk-UA', {hour: '2-digit', minute:'2-digit'}),
            items: cart.map(i => i.name).join(', '),
            fullCart: [...cart],
            total: total,
            address: fullAddress
        };
        
        cart = [];
        discountApplied = 0;
        document.getElementById('promo-input').value = "";
        document.getElementById('promo-message').classList.add("hidden");
        
        updateCartUI();
        saveStateToStorage();
        closeModal('checkout-modal');
        startTracking(newOrder);
    });
}

function openCheckout(finalSubtotal) {
    deliveryFee = 50; 
    document.getElementById('checkout-street').value = userProfile.street || '';
    document.getElementById('checkout-house').value = userProfile.house || '';
    document.getElementById('checkout-apt').value = userProfile.apt || '';
    document.getElementById('checkout-phone').value = userProfile.phone || '';
    document.getElementById('checkout-code').value = '';
    document.getElementById('cash-change').value = '';
    
    if(userProfile.street) {
        const event = new Event('input', { bubbles: true });
        document.getElementById('checkout-street').dispatchEvent(event);
    } else {
        document.getElementById('delivery-fee-notice').innerText = "📍 Стандартний тариф доставки: 50 ₴";
        document.getElementById('final-total').innerText = finalSubtotal + deliveryFee;
    }
    
    openModal('checkout-modal');
}

/* STREAMING_CHUNK:Implementing tracking, auth and profile logic... */
// --- 13. TRACKING & ORDER FINALIZATION ---
let trackingTimeouts = [];
let activeTrackingOrder = null;
let currentTrackingStep = 1;

function startTracking(orderObj) {
    activeTrackingOrder = orderObj;
    currentTrackingStep = 1;
    
    document.getElementById('active-tracking-btn').classList.add('visible');
    
    trackingTimeouts.forEach(clearTimeout);
    trackingTimeouts = [];

    updateTrackingModalUI();
    openModal('tracking-modal');

    let t1 = setTimeout(() => {
        currentTrackingStep = 2;
        updateTrackingModalUI();
    }, 4000);

    let t2 = setTimeout(() => {
        currentTrackingStep = 3;
        updateTrackingModalUI();
    }, 8000);

    let t3 = setTimeout(() => {
        currentTrackingStep = 4;
        updateTrackingModalUI();
        showToast(`Замовлення #${orderObj.id} успішно доставлено!`);
        
        orderHistory.unshift(orderObj);
        saveStateToStorage();

        setTimeout(() => {
            document.getElementById('active-tracking-btn').classList.remove('visible');
            activeTrackingOrder = null;
        }, 10000);

    }, 13000);

    trackingTimeouts.push(t1, t2, t3);
}

function updateTrackingModalUI() {
    if (!activeTrackingOrder) return;
    
    document.getElementById('track-order-id').innerText = activeTrackingOrder.id;
    const statusText = document.getElementById('tracking-status');
    
    for (let i = 1; i <= 4; i++) {
        const step = document.getElementById(`step-${i}`);
        step.className = 'track-step';
        if (i < currentTrackingStep) {
            step.classList.add('done');
        } else if (i === currentTrackingStep) {
            step.classList.add('active');
        }
    }

    statusText.style.color = "var(--text-main)";

    if (currentTrackingStep === 1) {
        statusText.innerText = "Заклад прийняв замовлення";
    } else if (currentTrackingStep === 2) {
        statusText.innerText = "Ваша їжа готується...";
    } else if (currentTrackingStep === 3) {
        statusText.innerText = "Кур'єр вже в дорозі!";
    } else if (currentTrackingStep === 4) {
        statusText.innerText = "Смачного! Замовлення доставлено.";
        statusText.style.color = "var(--green)";
    }
}

function openTracking() {
    if (activeTrackingOrder) {
        updateTrackingModalUI();
        openModal('tracking-modal');
    }
}

// --- 14. AUTH & PROFILE WITH REFERRAL LOGIC ---
function handleAuthClick() {
    if(currentUser) openProfile();
    else openModal('auth-modal');
}

function initAuth() {
    const btnLogin = document.getElementById('tab-login');
    const btnReg = document.getElementById('tab-register');
    const nameInput = document.getElementById('auth-name');
    const submitBtn = document.getElementById('auth-submit-btn');
    const refWrap = document.getElementById('referral-wrap');

    btnLogin.addEventListener('click', () => {
        btnLogin.classList.add('active'); btnReg.classList.remove('active');
        nameInput.classList.add('hidden');
        if (refWrap) refWrap.classList.add('hidden'); 
        submitBtn.innerText = "Увійти";
        document.getElementById('auth-title').innerText = "Вхід";
    });

    btnReg.addEventListener('click', () => {
        btnReg.classList.add('active'); btnLogin.classList.remove('active');
        nameInput.classList.remove('hidden');
        if (refWrap) refWrap.classList.remove('hidden'); 
        submitBtn.innerText = "Зареєструватися";
        document.getElementById('auth-title').innerText = "Реєстрація";
    });

    document.getElementById('auth-form').addEventListener('submit', (e) => {
        e.preventDefault();
        currentUser = document.getElementById('auth-name').value || "Користувач";
        userProfile.name = currentUser;
        userProfile.phone = document.getElementById('auth-phone').value;
        
        const isReg = btnReg.classList.contains('active');
        const refInput = document.getElementById('auth-ref-code');
        const refCode = refInput ? refInput.value.trim() : '';
        let extraToast = "";
        
        if (isReg && refCode.length > 0) {
            extraToast = "<br>🎁 Реферальний код застосовано! Ви отримали безкоштовне замовлення.";
        }

        saveStateToStorage();
        
        document.getElementById('auth-btn-main').innerText = `👤 Профіль`;
        closeModal('auth-modal');
        showToast(`Вітаємо, ${currentUser}! Ви успішно увійшли.${extraToast}`);
    });
}

function switchProfileTab(tab) {
    document.getElementById('tab-prof-history').classList.remove('active');
    document.getElementById('tab-prof-data').classList.remove('active');
    document.getElementById('profile-history-content').classList.add('hidden');
    document.getElementById('profile-data-content').classList.add('hidden');
    
    if(tab === 'history') {
        document.getElementById('tab-prof-history').classList.add('active');
        document.getElementById('profile-history-content').classList.remove('hidden');
    } else {
        document.getElementById('tab-prof-data').classList.add('active');
        document.getElementById('profile-data-content').classList.remove('hidden');
        
        document.getElementById('prof-name').value = userProfile.name || currentUser || '';
        document.getElementById('prof-phone').value = userProfile.phone || '';
        document.getElementById('prof-street').value = userProfile.street || '';
        document.getElementById('prof-house').value = userProfile.house || '';
        document.getElementById('prof-apt').value = userProfile.apt || '';
    }
}

function saveProfileData(e) {
    e.preventDefault();
    userProfile.name = document.getElementById('prof-name').value;
    userProfile.phone = document.getElementById('prof-phone').value;
    userProfile.street = document.getElementById('prof-street').value;
    userProfile.house = document.getElementById('prof-house').value;
    userProfile.apt = document.getElementById('prof-apt').value;
    
    if(userProfile.name) currentUser = userProfile.name;
    
    saveStateToStorage();
    showToast('Особисті дані збережено!');
}

function repeatOrder(orderId) {
    const order = orderHistory.find(o => o.id === orderId);
    if(!order || !order.fullCart) return showToast('Неможливо повторити старе замовлення', true);
    
    cart = order.fullCart.map(item => ({...item, cartId: Date.now() + Math.random()}));
    updateCartUI();
    saveStateToStorage();
    closeModal('profile-modal');
    openCart();
    showToast('Товари з історії додано в кошик!');
}

function openProfile() {
    switchProfileTab('history'); 
    const list = document.getElementById('order-history-list');
    list.innerHTML = '';
    
    if(orderHistory.length === 0) {
        list.innerHTML = "<p class='text-gray text-center p-4'>У вас ще немає замовлень.</p>";
    } else {
        orderHistory.forEach(order => {
            list.innerHTML += `
                <div style="background:var(--bg-gray); padding:16px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-sm font-semibold text-primary">#${order.id}</span>
                        <span class="text-xs text-gray">${order.date}</span>
                    </div>
                    <div class="mb-2 text-sm">${order.items}</div>
                    <div class="flex justify-between items-center mt-3 pt-3" style="border-top: 1px solid var(--border-color);">
                        <div class="font-bold text-dark">Сума: ${order.total} ₴</div>
                        ${order.fullCart ? `<button class="btn btn-primary btn-sm" style="padding: 6px 12px; font-size: 0.8rem;" onclick="repeatOrder(${order.id})">Повторити</button>` : ''}
                    </div>
                </div>
            `;
        });
    }
    openModal('profile-modal');
}

function logout() {
    currentUser = null;
    userProfile = { name: '', phone: '', street: '', house: '', apt: '' }; 
    saveStateToStorage();
    document.getElementById('auth-btn-main').innerText = "👤 Увійти / Реєстрація";
    closeModal('profile-modal');
    showToast('Ви вийшли з акаунта');
}

/* STREAMING_CHUNK:Implementing FAQ and main tabs initialization... */
// --- 15. FAQ & MAIN TABS LOGIC ---
function initMainTabs() {
    const topTabs = document.querySelectorAll('.faq-top-tab');
    const mainPanes = document.querySelectorAll('.main-tab-content');

    topTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            topTabs.forEach(t => t.classList.remove('active'));
            mainPanes.forEach(p => {
                p.classList.remove('active');
                p.style.display = 'none'; 
            });
            
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            
            targetPane.style.display = 'flex';
            targetPane.classList.add('active');
        });
    });
    document.getElementById('tab-faq').style.display = 'flex';
}

function initFAQ() {
    const btns = document.querySelectorAll('.faq-q-btn');
    const panes = document.querySelectorAll('.faq-pane');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            panes.forEach(p => p.classList.add('hidden'));
            
            btn.classList.add('active');
            document.getElementById(btn.getAttribute('data-target')).classList.remove('hidden');
        });
    });
}