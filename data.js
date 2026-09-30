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
    { id: "performans-odevleri", title: "Performans Ödevlerim", hasSubcategories: false },
    { id: "siteler", title: "Sitelerim", hasSubcategories: false },
    { id: "yazilim-programlari", title: "Yazılım Programlarım", hasSubcategories: false }
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
  id: 2,
  title: "CS50 Directory",
  description: "The CS50 Directory is a dedicated web platform or community index where students of Harvard's popular computer science course can showcase their projects, create profiles, and connect with fellow learners.",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["CS50", "siteler"], 
  links: [
    { type: "website", title: "Canlı Site", url: "https://ademydev.github.io/cs50directory/" },
  ]
},

    {
  id: 3,
  title: "MEKKE’NİN TARİHÎ ÖNEMİ",
  description: "Bu web sitesi, Mekke'nin tarihi ve İslam peygamberi Hz. Muhammed'in hayatını (Siyer-i Nebi) detaylı ve kronolojik bir şekilde ele alan dijital bir bilgi platformudur.",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["Mekke Tarihi", "siteler"], 
  links: [
    { type: "website", title: "Canlı Site", url: "https://ademydev.github.io/mekketarihisiyer/" },
  ]
},

    {
  id: 4,
  title: "Fıkıh Usulü",
  description: "Bu web sitesi, İslâm hukukunun delil, yöntem ve kurallar çerçevesinde anlaşılmasını sağlayan fıkıh usulü ilmini tanımı, amacı, temel kaynakları ve metodolojisiyle ele alan dijital bir bilgi platformudur",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["Fıkıh Usulü", "siteler"], 
  links: [
    { type: "website", title: "Canlı Site", url: "https://ademydev.github.io/fikihusulu/" },
  ]
},

{
  id: 5,
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
  id: 6,
  title: "Yakın Kampüs Python Eğitimi",
  description: "Aktif olarak devam etmektedir - Yakın Kampüs platformundaki Python programlama dili eğitimine ait ders içeriklerini, uygulama projelerini ve kaynak kodları barındıran açık kaynaklı GitHub deposudur.",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["Yazılım Çalışmaları", "yazilim-programlari"], 
  links: [
    { type: "github", title: "GitHub Deposu", url: "https://github.com/ademydev/yak-n-kamp-s-python-education" },
  ]
},

{
  id: 7,
  title: "basit seviye Python Eğitimi",
  description: "Python programlama diline yeni başlayanlar için hazırlanan bu tamamlanmış eğitim setinde, derslere ait temel kaynak kodlara ve doğrudan indirilebilir tüm çalışma dosyalarına ulaşabilirsiniz",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["Yazılım Çalışmaları", "yazilim-programlari"], 
  links: [
    { type: "github", title: "GitHub Deposu", url: "https://github.com/ademydev/basiclevelpythoneducation-" },
    { type: "file", title: "Dosyaları İndir", url: "https://ademydev.github.io/home/files/basit-seviye-python-eğitimi.zip" }
  ],
},

{
  id: 8,
  title: "Piton Aram Python Eğitimi",
  description: "Aktif olarak devam etmektedir - Piton Aram Python Eğitimi kapsamındaki ders içeriklerini, temel programlama uygulamalarını ve kaynak kodları barındıran açık kaynaklı GitHub deposudur",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["Yazılım Çalışmaları", "yazilim-programlari"], 
  links: [
    { type: "github", title: "GitHub Deposu", url: "https://github.com/ademydev/piton-arm-python-education-" },
  ]
},

{
  id: 9,
  title: "Siyer Dersi Performans Ödevi - Sayfa 22",
  description: "Sayfa 22 - (Adem Yavuz ÇAKIR - Abdüssamet Karisli - Ahmet Eymen KOSMANA)",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["Performans Görevi ve Grup Çalışması", "..." ,"performans-odevleri", "grup-calismalari", "siyer"], 
  links: [
    { type: "file", title: "PDF ve Sunum İndir", url: "files/sayfa22-siyer-performans.zip" },
    { type: "website", title: "Canlı Site", url: "https://ademydev.github.io/mekketarihisiyer/" }
  ]
},

{
  id: 10,
  title: "1 saatte HTML Kavax",
  description: "HTML’de temel web sayfası yapısını ve kullanılan başlıca HTML etiketlerini öğrenmeyi amaçlayan bir eğitim.",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["Yazılım Çalışmaları", "yazilim-programlari"], 
  links: [
    { type: "github", title: "GitHub Deposu", url: "https://github.com/ademydev/one-time-html-kavax" },
  ]
},

{
  id: 11,
  title: "Günlük Program Programı",
  description: "Bu Program Aktif Olarak Kullanılmamaktadır - Sunuc açıldığı zaman kullanıma açılacak ve şifrelenecektir.",
  date: "2026-09-26",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["Büyük Yazılım Projesi", "..." ,"sitelerde", "yazilim-programlari"], 
  links: [
    { type: "github", title: "GitHub Deposu", url: "https://github.com/ademydev/gunluk-program-programi" },
    { type: "website", title: "Canlı Site", url: "https://ademydev.github.io/gunluk-program-programi/" },
  ]
},

{
  id: 12,
  title: "kişisel ders programı",
  description: "Kişisel Ders Programı, derslerini, çalışma planını ve akademik hedeflerini düzenli bir şekilde yönetmeni sağlayan modern ve bulut destekli bir planlama uygulamasıdır.",
  date: "2026-09-26",
  // Bir çalışma birden fazla kategoriye aynı anda bağlanabilir:
  categories: ["Büyük Yazılım Projesi 2", "..." ,"sitelerde", "yazilim-programlari"], 
  links: [
    { type: "github", title: "GitHub Deposu", url: "https://github.com/ademydev/kisisel-ders-programi" },
    { type: "website", title: "Canlı Site", url: "https://ademydev.github.io/kisisel-ders-programi/" },
  ]
}

  ]
};



