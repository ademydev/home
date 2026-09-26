/**
 * KİŞİSEL ÇALIŞMA ARŞİVİ - VERİ DOSYASI (data.js)
 * 
 * Yeni bir çalışma eklemek istediğinizde aşağıdaki "items" dizisine yeni bir obje eklemeniz yeterlidir.
 * Başlangıçta bu dizi tamamen boştur.
 * 
 * TEK BİR ÇALIŞMA ÖRNEK YAPISI (İleride ekleyeceğiniz zaman referans olması için):
 * {
 *   id: 1,
 *   title: "Çalışma Başlığı",
 *   description: "Kısa açıklama (isteğe bağlı)",
 *   date: "2026-09-26",
 *   categories: ["matematik", "projeler"], // Birden fazla kategoriye bağlanabilir
 *   links: [
 *     { type: "pdf", title: "PDF İndir", url: "files/ornek.pdf" },
 *     { type: "github", title: "GitHub", url: "https://github.com/..." },
 *     { type: "website", title: "Web Sitesi", url: "https://..." },
 *     { type: "file", title: "Dosyayı İndir", url: "files/ornek.zip" },
 *     { type: "presentation", title: "Sunumu İndir", url: "files/sunum.pptx" }
 *   ]
 * }
 */

const ARCHIVE_DATA = {
  // 5 Ana Bölüm
  sections: [
    { id: "dersler", title: "Dersler", hasSubcategories: true },
    { id: "grup-calismalari", title: "Grup Çalışmaları", hasSubcategories: false },
    { id: "performans-odevleri", title: "Performans Ödevleri", hasSubcategories: false },
    { id: "siteler", title: "Siteler", hasSubcategories: false },
    { id: "yazilim-programlari", title: "Yazılım Programları", hasSubcategories: false }
  ],

  // Dersler bölümü altındaki 17 ders
  subjects: [
    { id: "matematik", title: "Matematik" },
    { id: "turk-dili-ve-edebiyati", title: "Türk Dili ve Edebiyatı" },
    { id: "kuran-i-kerim", title: "Kur’an-ı Kerim" },
    { id: "yabanci-dil", title: "Yabancı Dil" },
    { id: "beden-egitimi-ve-spor", title: "Beden Eğitimi ve Spor" },
    { id: "gorsel-sanatlar", title: "Görsel Sanatlar" },
    { id: "felsefe", title: "Felsefe" },
    { id: "tarih", title: "Tarih" },
    { id: "hadis", title: "Hadis" },
    { id: "cografya", title: "Coğrafya" },
    { id: "fikih", title: "Fıkıh" },
    { id: "kimya", title: "Kimya" },
    { id: "biyoloji", title: "Biyoloji" },
    { id: "arapca", title: "Arapça" },
    { id: "fizik", title: "Fizik" },
    { id: "siyer", title: "Siyer" },
    { id: "secmeli-sosyal-bilimler", title: "Seçmeli Sosyal Bilimler" }
  ],

  // Çalışmalar listesi - Başlangıçta tamamen BOŞTUR.
  items: [
    {
  id: 1,
  title: "12 Tenses in English",
  description: "The 12 English tenses are verb structures formed by combining three time frames (past, present, and future) with four aspect types (simple, continuous, perfect, and perfect continuous) to show when and how an action happens.",
  date: "2026-09-26",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["İngilizce", "siteler"], 
  links: [
    { type: "website", title: "Canlı Site", url: "https://ademydev.github.io/ingilizce/" },
  ]
},

    {
  id: 1,
  title: "CS50 directory",
  description: "The CS50 Directory is a dedicated web platform or community index where students of Harvard's popular computer science course can showcase their projects, create profiles, and connect with fellow learners.",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["CS50", "siteler"], 
  links: [
    { type: "website", title: "Canlı Site", url: "https://ademydev.github.io/cs50directory/" },
  ]
},

{
  id: 1,
  title: "Preferences Grammar Guide",
  description: "The English grammar topic of 'Preferences' explains how to express choices using the structures prefer for general habits, and would prefer or would rather for specific, situational choices.",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["Preferences", "siteler"], 
  links: [
    { type: "pdf", title: "PDF İndir", url: "files/preferences-grammar-guide.pdf" },
    { type: "website", title: "Canlı Site", url: "https://ademydev.github.io/preferences/" },
  ]
},


{
  id: 1,
  title: "Yakın Kampüs Python eğitimi",
  description: "aktif bir çalışma olduğu için sadece github linki vardır.",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["Yazılım Çalışmaları", "yazilim-programlari"], 
  links: [
    { type: "github", title: "GitHub Deposu", url: "https://github.com/ademydev/yak-n-kamp-s-python-education" },
  ]
},

{
  id: 1,
  title: "basit seviye Python eğitimi",
  description: "bu eğitim tamamlanmış bir derstir dosyaları indirme linkine ulaşabilirsiniz.",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["Yazılım Çalışmaları", "yazilim-programlari"], 
  links: [
    { type: "github", title: "GitHub Deposu", url: "https://github.com/ademydev/basiclevelpythoneducation-" },
    { type: "file", title: "Dosyaları İndir", url: "https://ademydev.github.io/home/files/basit-seviye-python-eğitimi.zip" }
  ],
},

  ]
};
