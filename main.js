// ============ MOBİL MENÜ ============
function openMobileNav(){
  const m = document.getElementById('mobileNav');
  if(m) m.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav(){
  const m = document.getElementById('mobileNav');
  if(m) m.classList.remove('open');
  document.body.style.overflow = '';
}

// ============ SSS AKORDEON ============
function initFaq(){
  document.querySelectorAll('.faq-item').forEach(item=>{
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if(!q || !a) return;
    q.addEventListener('click', ()=>{
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el=>{
        if(el !== item){
          el.classList.remove('open');
          el.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      if(isOpen){
        item.classList.remove('open');
        a.style.maxHeight = null;
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
}

// ============ GOOGLE ADS / GA4 DÖNÜŞÜM TAKİBİ (TODO) ============
// Bu site bir servis/kayıt formu içermez. Tek dönüşüm noktaları:
// telefon tıklaması ve WhatsApp tıklaması. GA4 / Google Ads ID'leri
// tanımlandığında aşağıdaki fonksiyonlar gtag() çağrılarını tetikleyecek
// şekilde doldurulabilir.
//
// Örnek (ID'ler girildikten sonra aktif edin):
// gtag('event', 'conversion', {'send_to': 'GOOGLE_ADS_CONVERSION_ID/GOOGLE_ADS_CONVERSION_LABEL'});
function trackCallClick(){
  if (typeof gtag === 'function') {
    // gtag('event', 'conversion', {'send_to': 'GOOGLE_ADS_CONVERSION_ID/GOOGLE_ADS_CONVERSION_LABEL'});
    // gtag('event', 'phone_click');
  }
}
function trackWhatsappClick(){
  if (typeof gtag === 'function') {
    // gtag('event', 'conversion', {'send_to': 'GOOGLE_ADS_CONVERSION_ID/GOOGLE_ADS_CONVERSION_LABEL'});
    // gtag('event', 'whatsapp_click');
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  initFaq();
  document.querySelectorAll('a[href^="tel:"]').forEach(a=> a.addEventListener('click', trackCallClick));
  document.querySelectorAll('a[href^="https://wa.me"]').forEach(a=> a.addEventListener('click', trackWhatsappClick));
});
