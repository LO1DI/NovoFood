// --- 1. MOCK DATABASE AND LOCATIONS ---
const u = (id) => `https://images.unsplash.com/photo-${id}?w=400&q=80`;

const products = [
    // --- PIZZA (15 Items) ---
    { id: 101, name: "Піца Маргарита", price: 150, category: "Pizza", partner: "IQ Pizza", description: "Класична піца з томатним соусом, сиром моцарела та свіжим базиліком.", img: u('1574071318508-1cdbab80d002') },
    { id: 102, name: "Піца Пепероні", price: 180, category: "Pizza", partner: "IQ Pizza", description: "Піца з пікантною ковбасою пепероні, сиром моцарела та томатним соусом.", img: u('1628840042765-356cda07504e') },
    { id: 103, name: "Піца 4 Сири", price: 210, category: "Pizza", partner: "IQ Pizza", description: "Піца на вершковій основі з сирами: моцарела, пармезан, горгонзола, дорблю.", img: u('1513104890138-7c749659a591') },
    { id: 104, name: "Піца Гавайська", price: 190, category: "Pizza", partner: "IQ Pizza", description: "Піца з курячим філе, соковитими ананасами та сиром моцарела.", img: u('1564936281291-294551497d81') },
    { id: 105, name: "Піца М'ясна", price: 240, category: "Pizza", partner: "IQ Pizza", description: "Ситна піца з беконом, салямі, шинкою та мисливськими ковбасками.", img: u('1565299624946-b28f40a0ae38') },
    { id: 106, name: "Піца Баварська", price: 220, category: "Pizza", partner: "IQ Pizza", description: "Піца з мисливськими ковбасками, маринованими огірками та гірчичним соусом.", img: u('1590947132387-155cc02f3212') },
    { id: 107, name: "Піца Капрічоза", price: 210, category: "Pizza", partner: "Фелічіта", description: "Ситна піца з шинкою, грибами, артишоками, маслинами та моцарелою.", img: u('1534308983496-4f4dccefae0f') },
    { id: 108, name: "Піца з куркою та грибами", price: 200, category: "Pizza", partner: "IQ Pizza", description: "Класичне поєднання курячого філе, печериць та вершкового соусу.", img: u('1585238342024-78d387f4a707') },
    { id: 109, name: "Піца Вегетаріанська", price: 170, category: "Pizza", partner: "Фелічіта", description: "Томатний соус, моцарела, перець, кукурудза, помідори чері, маслини.", img: u('1604382355076-af4b0eb60143') },
    { id: 110, name: "Піца Цезар", price: 230, category: "Pizza", partner: "Фелічіта", description: "Куряче філе, бекон, салат айсберг, пармезан, помідори чері та соус Цезар.", img: u('1571095992776-560ca4a956be') },
    { id: 111, name: "Піца Маргарита класична", price: 210, category: "Pizza", partner: "Фелічіта", description: "Справжня неаполітанська Маргарита на тонкому тісті з моцарелою буфало.", img: u('1574071318508-1cdbab80d002') },
    { id: 112, name: "Піца Діабола", price: 230, category: "Pizza", partner: "Фелічіта", description: "Пікантна піца з гострою салямі, перцем чилі та моцарелою.", img: u('1628840042765-356cda07504e') },
    { id: 113, name: "Піца 4 М'яса", price: 290, category: "Pizza", partner: "Фелічіта", description: "Шинка, салямі, бекон, мисливські ковбаски на томатній основі.", img: u('1565299624946-b28f40a0ae38') },
    { id: 114, name: "Піца Прошуто", price: 310, category: "Pizza", partner: "Фелічіта", description: "Італійське прошуто, свіжа рукола, пармезан та бальзамічний крем.", img: u('1534308983496-4f4dccefae0f') },
    { id: 115, name: "Піца Сирна Курка", price: 215, category: "Pizza", partner: "IQ Pizza", description: "Курка, кукурудза, багато сиру та вершковий соус.", img: u('1513104890138-7c749659a591') },

    // --- BURGERS & FASTFOOD (16 Items) ---
    { id: 201, name: "Бургер з яловичиною", price: 190, category: "Burger", partner: "Baza", description: "Фірмовий бургер з яловичою котлетою, сиром чеддер та соусом BBQ.", img: u('1568901346375-23c9450c58cd') },
    { id: 202, name: "Чізбургер класичний", price: 160, category: "Burger", partner: "Baza", description: "Класичний чізбургер з яловичою котлетою, сиром, огірком та кетчупом.", img: u('1586190848861-99aa4a171e90') },
    { id: 203, name: "Бургер з куркою", price: 170, category: "Burger", partner: "Baza", description: "Бургер з курячим стейком на грилі, свіжими овочами та білим соусом.", img: u('1615719413546-198b25453f85') },
    { id: 204, name: "Дабл Чізбургер", price: 240, category: "Burger", partner: "Baza", description: "Дві соковиті котлети, подвійний сир чеддер.", img: u('1594212691516-4af5c108061a') },
    { id: 205, name: "Чізбургер ToSim", price: 120, category: "Burger", partner: "ToSim", description: "Соковита котлета, сир чеддер та фірмовий соус.", img: u('1568901346375-23c9450c58cd') },
    { id: 206, name: "Дабл Біф", price: 180, category: "Burger", partner: "ToSim", description: "Подвійна яловича котлета, хрусткий бекон.", img: u('1594212691516-4af5c108061a') },
    { id: 207, name: "Чікенбургер", price: 140, category: "Burger", partner: "ToSim", description: "Хрустка курка, салат айсберг, соус тартар.", img: u('1615719413546-198b25453f85') },
    { id: 208, name: "Картопля фрі", price: 65, category: "Burger", partner: "IQ Pizza", description: "Хрустка картопля фрі. Подається з соусом на вибір.", img: u('1576107232684-1279f390859f') },
    { id: 209, name: "Батат Фрі", price: 95, category: "Burger", partner: "Baza", description: "Солодка картопля фрі (батат) із сирним соусом.", img: u('1576107232684-1279f390859f') },
    { id: 210, name: "Картопля по-селянськи", price: 75, category: "Burger", partner: "ToSim", description: "Картопляні дольки зі спеціями та часником.", img: u('1534939561126-855b8675edd7') },
    { id: 211, name: "Нагетси курячі", price: 110, category: "Burger", partner: "IQ Pizza", description: "Соковиті шматочки курки в хрусткій паніровці (9 шт).", img: u('1562967914-01efa7e87832') },
    { id: 212, name: "Курячі крильця", price: 140, category: "Burger", partner: "IQ Pizza", description: "Пікантні курячі крильця в соусі BBQ (6 шт).", img: u('1527477396000-e27163b481c2') },
    { id: 213, name: "Сирні кульки", price: 125, category: "Burger", partner: "IQ Pizza", description: "Хрусткі сирні кульки з моцарелою у фритюрі.", img: u('1534939561126-855b8675edd7') },
    { id: 214, name: "Цибулеві кільця", price: 95, category: "Burger", partner: "Baza", description: "Хрусткі кільця цибулі, обсмажені у фритюрі.", img: u('1534939561126-855b8675edd7') },
    { id: 215, name: "Хот-дог класичний", price: 90, category: "Burger", partner: "ToSim", description: "Булочка, молочна сосиска, кетчуп, гірчиця.", img: u('1590947132387-155cc02f3212') },
    { id: 216, name: "Хот-дог французький", price: 80, category: "Burger", partner: "ToSim", description: "Хрусткий багет з мисливською ковбаскою.", img: u('1590947132387-155cc02f3212') },

    // --- SUSHI (15 Items) ---
    { id: 301, name: "Рол Філадельфія", price: 250, category: "Sushi", partner: "Osama Sushi", description: "Класичний рол з лососем, крем-сиром Філадельфія та огірком.", img: u('1579871494447-9811cf80d66c') },
    { id: 302, name: "Рол Каліфорнія", price: 220, category: "Sushi", partner: "Osama Sushi", description: "Рол з м'ясом краба, авокадо, японським майонезом та ікрою тобіко.", img: u('1611143669185-af224c5e3252') },
    { id: 303, name: "Рол Зелений Дракон", price: 280, category: "Sushi", partner: "Osama Sushi", description: "Рол з вугром, крем-сиром, огірком, вкритий авокадо та соусом унагі.", img: u('1553621042-f6e147245754') },
    { id: 304, name: "Рол Червоний Дракон", price: 290, category: "Sushi", partner: "Osama Sushi", description: "Рол з вугром, крем-сиром, вкритий свіжим лососем.", img: u('1579871494447-9811cf80d66c') },
    { id: 305, name: "Рол Золотий Дракон", price: 310, category: "Sushi", partner: "Osama Sushi", description: "Рол з лососем, крем-сиром, вкритий вугром та кунжутом.", img: u('1553621042-f6e147245754') },
    { id: 306, name: "Макі з лососем", price: 120, category: "Sushi", partner: "Osama Sushi", description: "Традиційний моно-рол з лососем.", img: u('1583623025817-d180a2221d0a') },
    { id: 307, name: "Макі з тунцем", price: 130, category: "Sushi", partner: "Osama Sushi", description: "Традиційний моно-рол з тунцем.", img: u('1579584425555-c3ce17fd4351') },
    { id: 308, name: "Макі з огірком", price: 80, category: "Sushi", partner: "Osama Sushi", description: "Традиційний моно-рол зі свіжим огірком.", img: u('1563612116625-3012372fcec4') },
    { id: 309, name: "Макі з вугром", price: 160, category: "Sushi", partner: "Osama Sushi", description: "Традиційні макі з вугром та соусом унагі.", img: u('1563612116625-3012372fcec4') },
    { id: 310, name: "Нігірі з лососем", price: 60, category: "Sushi", partner: "Osama Sushi", description: "Грудочка рису, вкрита скибочкою свіжого лосося. (1 шт)", img: u('1558985250-27a406d64cb3') },
    { id: 311, name: "Гункан з ікрою Тобіко", price: 80, category: "Sushi", partner: "Osama Sushi", description: "Кошик з норі, наповнений рисом та ікрою тобіко. (1 шт)", img: u('1558985250-27a406d64cb3') },
    { id: 312, name: "Сет Самурай", price: 680, category: "Sushi", partner: "Osama Sushi", description: "Сет: Каліфорнія, Філадельфія, Макі з лососем.", img: u('1617196034738-26c5f7c977ce') },
    { id: 313, name: "Запечений Рол", price: 270, category: "Sushi", partner: "Osama Sushi", description: "Теплий рол з лососем, сирною шапкою та соусом спайсі.", img: u('1583337130417-3346a1be7dee') },
    { id: 314, name: "Рол Сирний", price: 240, category: "Sushi", partner: "Osama Sushi", description: "Рол у сирній обгортці з куркою, крем-сиром та огірком.", img: u('1579871494447-9811cf80d66c') },
    { id: 315, name: "Нігірі Сет", price: 320, category: "Sushi", partner: "Osama Sushi", description: "Асорті нігірі: лосось, тунець, вугор (6 шт).", img: u('1558985250-27a406d64cb3') },

    // --- GROCERY, DINNER, DESSERT (19 Items) ---
    { id: 401, name: "Хліб білий", price: 25, category: "Grocery", partner: "АТБ", description: "Свіжоспечений пшеничний білий хліб", img: u('1509440159596-0249088772ff') },
    { id: 402, name: "Молоко 2.5%", price: 42, category: "Grocery", partner: "АТБ", description: "Натуральне коров'яче молоко", img: u('1550583724-b2692b85b150') },
    { id: 403, name: "Кефір 2.5%", price: 45, category: "Grocery", partner: "АТБ", description: "Корисний кефір", img: u('1528750711928-8772591605e5') },
    { id: 404, name: "Яйця (10 шт)", price: 65, category: "Grocery", partner: "АТБ", description: "Яйця курячі С0", img: u('1587486913049-53fc88980cfc') },
    { id: 405, name: "Ковбаса варена", price: 140, category: "Grocery", partner: "АТБ", description: "Лікарська ковбаса", img: u('1550508827-0c7f7bc9e05f') },
    { id: 406, name: "Салямі", price: 210, category: "Grocery", partner: "АТБ", description: "Копчена салямі", img: u('1621217036365-98ea2e0a29f4') },
    { id: 407, name: "Сосиски молочні", price: 130, category: "Grocery", partner: "АТБ", description: "Молочні сосиски", img: u('1621217036365-98ea2e0a29f4') },
    { id: 408, name: "Куряче філе", price: 180, category: "Grocery", partner: "АТБ", description: "Філе охолоджене 1кг", img: u('1604503468506-a8da13d82791') },
    { id: 409, name: "Картопля", price: 20, category: "Grocery", partner: "АТБ", description: "Картопля 1кг", img: u('1518977676601-b53f82aba655') },
    { id: 410, name: "Помідори", price: 80, category: "Grocery", partner: "АТБ", description: "Томати червоні 1кг", img: u('1592924357228-91a4daadcfea') },
    { id: 411, name: "Банани", price: 60, category: "Grocery", partner: "АТБ", description: "Еквадор 1кг", img: u('1571501679680-de32f1e7aad4') },
    { id: 412, name: "Кока-Кола 1.5л", price: 45, category: "Grocery", partner: "АТБ", description: "Напій Coca-Cola", img: u('1622483767028-3f66f32aef97') },
    { id: 413, name: "Сік Апельсиновий 1л", price: 55, category: "Grocery", partner: "ToSim", description: "Натуральний апельсиновий сік", img: u('1600271886742-f049cd451bba') },
    { id: 414, name: "Багет французький", price: 35, category: "Grocery", partner: "ToSim", description: "Хрусткий свіжоспечений багет", img: u('1509440159596-0249088772ff') },
    { id: 415, name: "Круасан", price: 25, category: "Grocery", partner: "ToSim", description: "Класичний круасан", img: u('1555507036-ab1f40ce88cb') },
    { id: 416, name: "Шоколад чорний", price: 50, category: "Grocery", partner: "ToSim", description: "Шоколад 72%", img: u('1548907040-4c42bf7d863c') },
    { id: 417, name: "Тірамісу", price: 160, category: "Dessert", partner: "Фелічіта", description: "Класичний італійський десерт з маскарпоне", img: u('1571115177098-24ec42ed204d') },
    { id: 418, name: "Панна Котта", price: 140, category: "Dessert", partner: "Фелічіта", description: "Вершковий десерт з ягідним соусом", img: u('1533134242443-d4fd215305ad') },
    { id: 419, name: "Чізкейк Нью-Йорк", price: 150, category: "Dessert", partner: "Фелічіта", description: "Класичний сирний пиріг", img: u('1533134242443-d4fd215305ad') },

    // --- PROMOS (3 Items) ---
    { id: 901, name: "Комбо Ситний", price: 290, oldPrice: 420, category: "Burger", partner: "ToSim", isPromo: true, description: "Дабл Біф, Фрі, Кола", img: u('1568901346375-23c9450c58cd') },
    { id: 902, name: "М'ясний Бум", price: 890, oldPrice: 1250, category: "Dinner", partner: "Baza", isPromo: true, description: "Стейки та реберця", img: u('1544025162-d76694265947') },
    { id: 903, name: "Кілограм Ролів", price: 850, oldPrice: 1100, category: "Sushi", partner: "Osama Sushi", isPromo: true, description: "Великий сет ролів", img: u('1617196034738-26c5f7c977ce') }
];

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
let currentModalQty = 1;
let deliveryFee = 50; 
let discountApplied = 0;
let currentSort = 'default';

// --- 3. DOM Elements ---
const overlay = document.getElementById('overlay');
const cartSidebar = document.getElementById('cart-sidebar');
const header = document.getElementById('main-header');
const themeToggleBtn = document.getElementById('theme-toggle');

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
    if (savedCart) cart = JSON.parse(savedCart);
    
    const savedHistory = localStorage.getItem('novo_history');
    if (savedHistory) orderHistory = JSON.parse(savedHistory);
    
    const savedProfile = localStorage.getItem('novo_profile');
    if (savedProfile) userProfile = JSON.parse(savedProfile);
    
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

// --- 13. TRACKING & ORDER FINALIZATION ---
let trackingTimeouts = [];
let activeTrackingOrder = null;
let currentTrackingStep = 1;

function startTracking(orderObj) {
    activeTrackingOrder = orderObj;
    currentTrackingStep = 1;
    
    // Показуємо плаваючу кнопку відстеження
    document.getElementById('active-tracking-btn').classList.add('visible');
    
    // Очищуємо попередні таймери, якщо є
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
        
        // Зберігаємо замовлення в історію
        orderHistory.unshift(orderObj);
        saveStateToStorage();

        // Ховаємо кнопку відстеження через 10 секунд після доставки
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
    
    // Оновлюємо стан кроків
    for (let i = 1; i <= 4; i++) {
        const step = document.getElementById(`step-${i}`);
        step.className = 'track-step'; // Скидаємо класи
        if (i < currentTrackingStep) {
            step.classList.add('done');
        } else if (i === currentTrackingStep) {
            step.classList.add('active');
        }
    }

    statusText.style.color = "var(--text-main)"; // Скидаємо колір

    // Оновлюємо текст статусу
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

// --- 14. AUTH & PROFILE ---
function handleAuthClick() {
    if(currentUser) openProfile();
    else openModal('auth-modal');
}

function initAuth() {
    const btnLogin = document.getElementById('tab-login');
    const btnReg = document.getElementById('tab-register');
    const nameInput = document.getElementById('auth-name');
    const submitBtn = document.getElementById('auth-submit-btn');

    btnLogin.addEventListener('click', () => {
        btnLogin.classList.add('active'); btnReg.classList.remove('active');
        nameInput.classList.add('hidden');
        submitBtn.innerText = "Увійти";
        document.getElementById('auth-title').innerText = "Вхід";
    });

    btnReg.addEventListener('click', () => {
        btnReg.classList.add('active'); btnLogin.classList.remove('active');
        nameInput.classList.remove('hidden');
        submitBtn.innerText = "Зареєструватися";
        document.getElementById('auth-title').innerText = "Реєстрація";
    });

    document.getElementById('auth-form').addEventListener('submit', (e) => {
        e.preventDefault();
        currentUser = document.getElementById('auth-name').value || "Користувач";
        userProfile.name = currentUser;
        userProfile.phone = document.getElementById('auth-phone').value;
        saveStateToStorage();
        
        document.getElementById('auth-btn-main').innerText = `👤 Профіль`;
        closeModal('auth-modal');
        showToast(`Вітаємо, ${currentUser}! Ви успішно увійшли.`);
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