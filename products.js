/* ============================================================
   NovoFood — script.js
   Full SPA Business Logic — Production Ready
   ============================================================ */
'use strict';
/* ══════════════════════════════════════════════════════════
   A. DATABASE
══════════════════════════════════════════════════════════ */
export const products = [
  /* ── IQ Pizza ── */
  {
    id: 1, name: 'Маргарита Класична', partner: 'iq', partnerName: 'IQ Pizza',
    category: 'pizza', price: 195, description: 'Томатний соус, моцарела, свіжий базилік. Справжня неаполітанська класика.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80',
    rating: 4.8, workingHours: { open: 10, close: 22 }, customizable: true,
  },
  {
    id: 2, name: 'Піца Пепероні', partner: 'iq', partnerName: 'IQ Pizza',
    category: 'pizza', price: 235, description: 'Гостра пепероні, моцарела, томатний соус, орегано.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80',
    rating: 4.9, workingHours: { open: 10, close: 22 }, customizable: true,
  },
  {
    id: 3, name: 'Чотири Сири', partner: 'iq', partnerName: 'IQ Pizza',
    category: 'pizza', price: 255, description: 'Моцарела, горгонзола, пармезан, чеддер — справжній парад смаків.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80',
    rating: 4.7, workingHours: { open: 10, close: 22 }, customizable: true,
  },
  {
    id: 4, name: 'Бургер Подвійний Смак', partner: 'iq', partnerName: 'IQ Pizza',
    category: 'burger', price: 175, description: 'Подвійна яловича котлета, бекон, чеддер, соус BBQ.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
    rating: 4.6, workingHours: { open: 10, close: 22 }, customizable: true,
  },

  /* ── Osama Sushi ── */
  {
    id: 5, name: 'Філадельфія Класична', partner: 'osama', partnerName: 'Osama Sushi',
    category: 'sushi', price: 245, description: 'Лосось, вершковий сир Філадельфія, огірок, авокадо.',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&q=80',
    rating: 4.9, workingHours: { open: 11, close: 23 }, customizable: false,
  },
  {
    id: 6, name: 'Дракон Ролл', partner: 'osama', partnerName: 'Osama Sushi',
    category: 'sushi', price: 285, description: 'Темпура з креветкою, вугор, авокадо, тобіко.',
    image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=500&q=80',
    rating: 4.8, workingHours: { open: 11, close: 23 }, customizable: false,
  },
  {
    id: 7, name: 'Каліфорнія', partner: 'osama', partnerName: 'Osama Sushi',
    category: 'sushi', price: 225, description: 'Краб, авокадо, огірок, тобіко, кунжут.',
    image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=500&q=80',
    rating: 4.7, workingHours: { open: 11, close: 23 }, customizable: false,
  },
  {
    id: 8, name: 'Wok з лососем', partner: 'osama', partnerName: 'Osama Sushi',
    category: 'salad', price: 195, description: 'Локшина удон, лосось, соєвий соус, кунжут, зелена цибуля.',
    image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=500&q=80',
    rating: 4.6, workingHours: { open: 11, close: 23 }, customizable: false,
  },

  /* ── АТБ ── */
  {
    id: 9, name: 'Набір для сніданку', partner: 'atb', partnerName: 'АТБ',
    category: 'breakfast', price: 120, description: 'Яйця, тост, масло, сир, молоко. Усе для гарного ранку.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&q=80',
    rating: 4.3, workingHours: { open: 8, close: 21 }, customizable: false,
  },
  {
    id: 10, name: 'Фруктовий кошик', partner: 'atb', partnerName: 'АТБ',
    category: 'dessert', price: 150, description: 'Сезонні фрукти: яблука, банани, апельсини, виноград.',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&q=80',
    rating: 4.4, workingHours: { open: 8, close: 21 }, customizable: false,
  },
  {
    id: 11, name: 'Свіжий салат Цезар', partner: 'atb', partnerName: 'АТБ',
    category: 'salad', price: 95, description: 'Листя ромен, пармезан, крутони, соус Цезар.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80',
    rating: 4.2, workingHours: { open: 8, close: 21 }, customizable: false,
  },
  {
    id: 12, name: 'Йогурт з гранолою', partner: 'atb', partnerName: 'АТБ',
    category: 'breakfast', price: 75, description: 'Грецький йогурт, домашня гранола, мед, ягоди.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&q=80',
    rating: 4.5, workingHours: { open: 8, close: 21 }, customizable: false,
  },

  /* ── ToSim ── */
  {
    id: 13, name: 'Шаурма Класична', partner: 'tosim', partnerName: 'ToSim',
    category: 'burger', price: 115, description: 'Куряче філе, овочі, соус часниковий, лаваш.',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=500&q=80',
    rating: 4.5, workingHours: { open: 10, close: 23 }, customizable: true,
  },
  {
    id: 14, name: 'Бургер Стріт', partner: 'tosim', partnerName: 'ToSim',
    category: 'burger', price: 135, description: 'Куряча котлета, маринований огірок, томат, фірмовий соус.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80',
    rating: 4.4, workingHours: { open: 10, close: 23 }, customizable: true,
  },
  {
    id: 15, name: 'Картопля Фрі з сиром', partner: 'tosim', partnerName: 'ToSim',
    category: 'burger', price: 85, description: 'Хрустка картопля, плавлений чеддер, зелена цибуля.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80',
    rating: 4.6, workingHours: { open: 10, close: 23 }, customizable: false,
  },
  {
    id: 16, name: 'Млинці з вишнею', partner: 'tosim', partnerName: 'ToSim',
    category: 'dessert', price: 95, description: 'Ніжні млинці, вишневий конфітюр, збиті вершки.',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&q=80',
    rating: 4.7, workingHours: { open: 10, close: 23 }, customizable: false,
  },

  /* ── Baza Restaurant ── */
  {
    id: 17, name: 'Стейк Рібай', partner: 'baza', partnerName: 'Baza',
    category: 'salad', price: 495, description: 'Соковитий рібай 350г, запечені овочі, соус Bernaise.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=500&q=80',
    rating: 4.9, workingHours: { open: 12, close: 23 }, customizable: false,
  },
  {
    id: 18, name: 'Бургер Baza Special', partner: 'baza', partnerName: 'Baza',
    category: 'burger', price: 265, description: 'Яловича котлета Black Angus, трюфельний майонез, руккола.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80',
    rating: 4.8, workingHours: { open: 12, close: 23 }, customizable: true,
  },
  {
    id: 19, name: 'Тірамісу', partner: 'baza', partnerName: 'Baza',
    category: 'dessert', price: 145, description: 'Класичний тірамісу з маскарпоне та кавою еспресо.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80',
    rating: 4.9, workingHours: { open: 12, close: 23 }, customizable: false,
  },
  {
    id: 20, name: 'Грецький салат', partner: 'baza', partnerName: 'Baza',
    category: 'salad', price: 175, description: 'Томати, огірки, перець, фета, маслини, оливкова олія.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80',
    rating: 4.6, workingHours: { open: 12, close: 23 }, customizable: false,
  },

  /* ── Фелічіта ── */
  {
    id: 21, name: 'Pizza Diavola', partner: 'felicita', partnerName: 'Фелічіта',
    category: 'pizza', price: 275, description: 'Гостра салямі, пепперончіні, оливки, томатний соус.',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80',
    rating: 4.8, workingHours: { open: 11, close: 22 }, customizable: true,
  },
  {
    id: 22, name: 'Паста Карбонара', partner: 'felicita', partnerName: 'Фелічіта',
    category: 'salad', price: 215, description: 'Спагетті, гуанчале, яєчний жовток, пармезан, чорний перець.',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&q=80',
    rating: 4.7, workingHours: { open: 11, close: 22 }, customizable: false,
  },
  {
    id: 23, name: 'Тортелліні з сиром', partner: 'felicita', partnerName: 'Фелічіта',
    category: 'pizza', price: 195, description: 'Ніжні тортелліні зі шпинатом і рікотою у вершковому соусі.',
    image: 'https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=500&q=80',
    rating: 4.6, workingHours: { open: 11, close: 22 }, customizable: false,
  },
  {
    id: 24, name: 'Панна Котта', partner: 'felicita', partnerName: 'Фелічіта',
    category: 'dessert', price: 115, description: 'Ніжна панна котта з ягідним кулі та м', ятою, : ., ",": image, 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80': ,
    rating: 4.9, workingHours: { open: 11, close: 22 }, customizable: false,
  },
  {
    id: 25, name: 'Капрезе', partner: 'felicita', partnerName: 'Фелічіта',
    category: 'salad', price: 155, description: 'Томати Чері, буфала моцарела, базилік, крем-бальзамік.',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&q=80',
    rating: 4.7, workingHours: { open: 11, close: 22 }, customizable: false,
  },
];
