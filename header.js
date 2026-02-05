<header class="mk-visual-identity">
  <nav class="mk-nav">
    <div class="mk-nav-links">
        <a href="https://www.kadrajrotam.com.tr/" class="nav-item">HOME</a>
      <a href="https://www.kadrajrotam.com.tr/premium-routes/" class="nav-item">PREMIUM ROUTES</a>
      <a href="https://www.kadrajrotam.com.tr/editorial-archive/" class="nav-item">EDITORIAL ARCHIVE</a>
      <a href="https://www.kadrajrotam.com.tr/the-way-of-seeing/" class="nav-item">The WAY of SEEING</a>
    </div>
  </nav>

  <div class="mk-branding">
    <h1 class="mk-logo-text">Kadraj Rotam</h1>
    <p class="mk-slogan">Routes remembered by light.</p>
  </div>
</header>

<style>
/* Fontları dışarıdan çağırıyoruz (Playfair Display zaten yüklü değilse) */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;500&display=swap');

.mk-visual-identity {
  width: 100%;
  padding: 30px 0 20px 0;
  text-align: center;
  background: transparent;
}

/* Menü Stilize Etme */
.mk-nav {
  margin-bottom: 50px; /* Başlıkla menü arası nefes alanı */
}

.mk-nav-links {
  display: flex;
  justify-content: center;
  gap: min(40px, 5vw);
}

.nav-item {
  font-family: 'Inter', sans-serif;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 3px;
  color: rgba(0, 0, 0, 0.4);
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.4s ease;
}

.nav-item:hover {
  color: #1a1a1a;
  letter-spacing: 4px;
}

/* Kadraj Rotam Başlık Stili */
.mk-branding {
  margin-bottom: 5px;
}

.mk-logo-text {
  font-family: 'Playfair Display', serif;
  font-size: clamp(48px, 9vw, 84px); /* Ekran boyutuna göre dinamik ölçekleme */
  font-style: italic;
  font-weight: 500;
  color: #8c9fb6; /* Mavi Kadraj'ın o imzası olan mavi tonu */
  margin: 0;
  line-height: 1;
  letter-spacing: -1px;
}

.mk-slogan {
  font-family: 'Playfair Display', serif;
  font-size: clamp(14px, 1.8vw, 19px);
  font-style: italic;
  color: rgba(0, 0, 0, 0.45);
  margin-top: 10px;
  letter-spacing: 0.5px;
}

/* Mobil İnce Ayarlar */
@media (max-width: 768px) {
  .mk-nav-links {
    gap: 15px;
  }
  .nav-item {
    font-size: 8px;
    letter-spacing: 2px;
  }
  .mk-logo-text {
    font-size: 52px;
  }
  .mk-nav {
    margin-bottom: 35px;
  }
}
</style>