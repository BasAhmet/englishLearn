// words.js - Tüm oyunların kullanacağı merkezi kelime deposu

const wordCategories = {
    animals: {
        id: "animals",
        name: "Hayvanlar",
        words: [
            { word: "CAT", tr: "Kedi", icon: "🐱" },
            { word: "DOG", tr: "Köpek", icon: "🐶" },
            { word: "BIRD", tr: "Kuş", icon: "🐦" },
            { word: "FISH", tr: "Balık", icon: "🐟" },
            { word: "MONKEY", tr: "Maymun", icon: "🐵" },
            { word: "LION", tr: "Aslan", icon: "🦁" },
            { word: "BEAR", tr: "Ayı", icon: "🐻" },
            { word: "HORSE", tr: "At", icon: "🐴" },
            { word: "COW", tr: "İnek", icon: "🐮" },
            { word: "SHEEP", tr: "Koyun", icon: "🐑" }
        ]
    },
    colors: {
        id: "colors",
        name: "Renkler",
        words: [
            { word: "RED", tr: "Kırmızı", icon: "🔴" },
            { word: "BLUE", tr: "Mavi", icon: "🔵" },
            { word: "GREEN", tr: "Yeşil", icon: "🟢" },
            { word: "YELLOW", tr: "Sarı", icon: "🟡" },
            { word: "BLACK", tr: "Siyah", icon: "⚫" },
            { word: "WHITE", tr: "Beyaz", icon: "⚪" },
            { word: "PINK", tr: "Pembe", icon: "🌸" },
            { word: "PURPLE", tr: "Mor", icon: "🟣" }
        ]
    },
    school: {
        id: "school",
        name: "Okul Eşyaları",
        words: [
            { word: "BOOK", tr: "Kitap", icon: "📚" },
            { word: "PEN", tr: "Tükenmez Kalem", icon: "🖊️" },
            { word: "PENCIL", tr: "Kurşun Kalem", icon: "✏️" },
            { word: "BAG", tr: "Çanta", icon: "🎒" },
            { word: "DESK", tr: "Sıra/Masa", icon: "🪑" },
            { word: "ERASER", tr: "Silgi", icon: "🧼" },
            { word: "RULER", tr: "Cetvel", icon: "📏" }
        ]
    },
    body: {
        id: "body",
        name: "Vücudumuz",
        words: [
            { word: "HEAD", tr: "Baş", icon: "👤" },
            { word: "EYE", tr: "Göz", icon: "👁️" },
            { word: "EAR", tr: "Kulak", icon: "👂" },
            { word: "NOSE", tr: "Burun", icon: "👃" },
            { word: "MOUTH", tr: "Ağız", icon: "👄" },
            { word: "HAND", tr: "El", icon: "🖐️" },
            { word: "FOOT", tr: "Ayak", icon: "🦶" }
        ]
    },
    food: {
        id: "food",
        name: "Yiyecekler",
        words: [
            { word: "APPLE", tr: "Elma", icon: "🍎" },
            { word: "BANANA", tr: "Muz", icon: "🍌" },
            { word: "ORANGE", tr: "Portakal", icon: "🍊" },
            { word: "WATER", tr: "Su", icon: "💧" },
            { word: "MILK", tr: "Süt", icon: "🥛" },
            { word: "BREAD", tr: "Ekmek", icon: "🍞" },
            { word: "EGG", tr: "Yumurta", icon: "🥚" },
            { word: "CHEESE", tr: "Peynir", icon: "🧀" }
        ]
    },
    actions: {
        id: "actions",
        name: "Eylemler",
        words: [
            { word: "RUN", tr: "Koşmak", icon: "🏃" },
            { word: "JUMP", tr: "Zıplamak", icon: "🦘" },
            { word: "SWIM", tr: "Yüzmek", icon: "🏊" },
            { word: "FLY", tr: "Uçmak", icon: "🦅" },
            { word: "READ", tr: "Okumak", icon: "📖" },
            { word: "WRITE", tr: "Yazmak", icon: "✍️" }
        ]
    }
};

// Aktif oynanacak kategoriyi tutan değişken (Varsayılan olarak hayvanlar)
let currentCategory = "animals"; 

// Oyunların çağıracağı yardımcı fonksiyon
function getWords() {
    return wordCategories[currentCategory].words;
}
