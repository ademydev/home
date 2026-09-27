# Archive — Kişisel Çalışma Arşivi

**Archive**, derslerimi, grup çalışmalarımı, performans ödevlerimi, web sitelerimi ve yazılım çalışmalarımı tek bir yerde düzenli şekilde saklamak için oluşturduğum kişisel dijital çalışma arşividir.

Site; sade bir arayüz, kategori tabanlı gezinme, çalışma kayıtları, dosya indirme bağlantıları ve açık/koyu tema desteği ile kişisel bir akademik arşiv olarak tasarlanmıştır.

## Özellikler

- 📚 Derslere göre düzenlenmiş çalışma arşivi
- 🗂️ Grup çalışmaları ve performans ödevleri için ayrı bölümler
- 🌐 Hazırlanan web sitelerine doğrudan erişim
- 💻 Yazılım çalışmaları ve GitHub depolarına bağlantılar
- 📄 PDF, sunum ve diğer dosyaları indirme
- 🔗 GitHub ve harici web sitesi bağlantıları
- 🌙 Açık / koyu tema desteği
- 📱 Mobil ve tablet uyumlu tasarım
- 🧭 Breadcrumb tabanlı gezinme
- 🔐 Şifre korumalı giriş ekranı
- 💾 Tema tercihinin tarayıcıda saklanması
- 🛡️ Dinamik içerik oluşturulurken HTML kaçışlama

## Arşiv Yapısı

Ana sayfada beş temel bölüm bulunur:

1. **Dersler**
2. **Grup Çalışmaları**
3. **Performans Ödevlerim**
4. **Sitelerim**
5. **Yazılım Programlarım**

### Dersler

Dersler bölümünde 17 farklı ders kategorisi bulunur:

- Matematik
- Türk Dili ve Edebiyatı
- Kur’an-ı Kerim
- Yabancı Dil
- Beden Eğitimi ve Spor
- Görsel Sanatlar
- Felsefe
- Tarih
- Hadis
- Coğrafya
- Fıkıh
- Kimya
- Biyoloji
- Arapça
- Fizik
- Siyer
- Seçmeli Sosyal Bilimler

## Proje Yapısı

```text
/
├── index.html
├── style.css
├── script.js
├── data.js
├── images.png
├── files/
│   └── ...
└── README.md
```

### `index.html`

Sitenin temel HTML yapısını oluşturur. Header, breadcrumb navigasyonu, ana içerik alanı ve footer burada bulunur. `data.js` ve `script.js` dosyaları da bu dosyadan yüklenir.

### `style.css`

Sitenin tüm görsel tasarımından sorumludur.

İçerisinde:

- Açık tema
- Koyu tema
- Kart tasarımları
- Arşiv listeleri
- Butonlar
- Breadcrumb
- Şifre ekranı
- Responsive mobil düzen

gibi bölümler bulunur.

### `script.js`

Sitenin çalışma mantığını yönetir.

Başlıca görevleri:

- Şifre doğrulama
- SHA-256 ile girilen şifrenin özetini oluşturma
- Açık/koyu tema yönetimi
- Hash tabanlı sayfa yönlendirmesi
- Breadcrumb oluşturma
- Ders ve kategori sayfalarını oluşturma
- Çalışma kartlarını oluşturma
- PDF, dosya, GitHub ve web sitesi bağlantılarını yönetme
- Bulunamayan sayfalar için hata görünümü oluşturma

### `data.js`

Arşivin içerik ve kategori verilerinin tutulduğu ana dosyadır.

Yeni bir çalışma eklemek için temel olarak `items` dizisine yeni bir kayıt eklemek yeterlidir.

Örnek yapı:

```js
{
  id: 1,
  title: "Çalışma Başlığı",
  description: "Kısa açıklama",
  date: "2026-09-26",
  categories: ["matematik", "projeler"],
  links: [
    {
      type: "pdf",
      title: "PDF İndir",
      url: "files/ornek.pdf"
    },
    {
      type: "github",
      title: "GitHub",
      url: "https://github.com/..."
    },
    {
      type: "website",
      title: "Web Sitesi",
      url: "https://..."
    }
  ]
}
```

Bir çalışma birden fazla kategoriye bağlanabilir. Böylece aynı çalışma birden fazla arşiv bölümünde görüntülenebilir.

## Bağlantı Türleri

Arşiv sistemi farklı bağlantı türlerini destekler:

| Tür | Kullanım |
|---|---|
| `pdf` | PDF dosyaları |
| `file` | ZIP ve diğer indirilebilir dosyalar |
| `presentation` | Sunum dosyaları |
| `github` | GitHub depoları |
| `website` | Canlı web siteleri |

Harici GitHub ve web sitesi bağlantıları yeni sekmede açılır. PDF, dosya ve sunum bağlantıları ise indirilebilir olarak işaretlenir.

## Mevcut Çalışmalardan Örnekler

Arşivde şu anda çeşitli web ve yazılım çalışmaları bulunmaktadır:

- **12 Tenses in English**
- **CS50 Directory**
- **MEKKE’NİN TARİHÎ ÖNEMİ**
- **Fıkıh Usulü**
- **Preferences Grammar Guide**
- **Yakın Kampüs Python Eğitimi**
- **basit seviye Python Eğitimi**
- **Piton Aram Python Eğitimi**
- **Siyer Dersi Performans Ödevi - Sayfa 22**

## Tema Sistemi

Site varsayılan olarak sistemin işletim sistemi temasını algılar.

Kullanıcı tema düğmesi üzerinden:

- Açık tema
- Koyu tema

arasında geçiş yapabilir.

Seçilen tema `localStorage` içerisinde saklandığı için sayfa yeniden açıldığında tercih korunur.

## Şifre Koruması

Site açıldığında arşiv içeriğinden önce bir şifre ekranı görüntülenir. Girilen şifre SHA-256 ile özetlenerek JavaScript içerisinde bulunan doğrulama özetiyle karşılaştırılır.

> **Not:** Bu sistem, özellikle kişisel kullanım için hazırlanmış istemci taraflı bir erişim ekranıdır. GitHub Pages gibi statik hosting ortamlarında JavaScript ile yapılan şifre koruması gerçek bir sunucu taraflı güvenlik sistemi değildir. Hassas veya gerçekten gizli dosyalar için sunucu taraflı kimlik doğrulama ve erişim kontrolü kullanılmalıdır.

## Tasarım

Arayüz sade ve akademik bir arşiv anlayışıyla hazırlanmıştır.

Temel tasarım özellikleri:

- Maksimum içerik genişliği: `1040px`
- Açık ve koyu tema
- Kart tabanlı kategori sistemi
- Minimal renk paleti
- Mavi vurgu rengi
- Responsive grid yapısı
- Mobil ekranlar için özel düzen
- Hover ve geçiş animasyonları

## Teknolojiler

Proje herhangi bir framework kullanmadan hazırlanmıştır.

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
- **Web Crypto API**
- **LocalStorage**
- **GitHub Pages**

## Yeni Çalışma Eklemek

Yeni bir çalışma eklemek için `data.js` içerisindeki `ARCHIVE_DATA.items` dizisine yeni bir nesne eklenir.

Dosya veya web sitesi bağlantısı da aynı kayıt içerisinde tanımlanabilir.

Örneğin:

```text
Başlık
    ↓
Açıklama
    ↓
Kategori
    ↓
PDF / Dosya / Sunum / GitHub / Web Sitesi bağlantısı
```

Bu yapı sayesinde sitenin HTML kodunu değiştirmeden yeni arşiv kayıtları eklenebilir.

## Amaç

Bu proje; okul çalışmalarını, kişisel projeleri, hazırlanan web sitelerini ve yazılım çalışmalarını zaman içerisinde tek bir dijital arşiv altında toplamak amacıyla geliştirilmiştir.

**Archive**, çalışmaların yalnızca saklandığı bir klasör yapısı yerine, kategoriler ve bağlantılar üzerinden erişilebilen kişisel bir çalışma kütüphanesi olarak kullanılmak üzere tasarlanmıştır.

---

### Geliştirici

**Adem Yavuz ÇAKIR**

Kişisel çalışma arşivi — 2026
