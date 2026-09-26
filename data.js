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
    { id: "projeler", title: "Projeler", hasSubcategories: false },
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
  description: "this web site teaches 12 tenses in English",
  date: "2026-09-26",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["İngilizce", "projeler"], 
  links: [
    { type: "github", title: "GitHub Deposu", url: "https://github.com/kullanici/proje" },
    { type: "website", title: "Canlı Site", url: "https://github.com/ademydev/ingilizce" },
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
    { type: "file", title: "Dosyaları İndir", url: "files/basit-seviye-python-egitimi.zip" }
  ]
},

  ]
};
