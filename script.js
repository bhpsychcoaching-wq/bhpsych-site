// Basic interactivity: modal popup, contact form submission to Formspree, callback form submission
document.addEventListener('DOMContentLoaded', function(){
  // Modal handling
  const modal = document.getElementById('callbackModal');
  const openButtons = [document.getElementById('requestCallbackTop'), document.getElementById('requestCallbackPanel'), document.getElementById('requestCallbackContact')];
  const closeBtn = modal.querySelector('.modal-close');
  function openModal(){ modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow='hidden'; }
  function closeModal(){ modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow=''; }
  openButtons.forEach(btn => { if(btn) btn.addEventListener('click', openModal); });
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e){ if(e.target === modal.querySelector('.modal-backdrop')) closeModal(); });

  // Contact form (simple client-side behaviour, posts to Formspree)
  const contactForm = document.getElementById('contactForm');
  const contactSent = document.getElementById('contactSent');
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(contactForm);
    // Replace FORM_ID with your Formspree form ID in README or Vercel UI after deploy
    fetch('https://formspree.io/f/maqdpbap', { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
      .then(res => { if(res.ok){ contactForm.reset(); contactSent.style.display='block'; setTimeout(()=>contactSent.style.display='none',3000); } else { alert('There was a problem sending the form.'); } })
      .catch(err => { alert('Error sending form.'); });
  });

  // Callback form
  const callbackForm = document.getElementById('callbackForm');
  const callbackSent = document.getElementById('callbackSent');
  callbackForm.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(callbackForm);
    // Append a field to indicate callback type
    data.append('subject','Callback request from website');
    // Replace FORM_ID with your Formspree form ID
    fetch('https://formspree.io/f/maqdpbap', { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
      .then(res => { if(res.ok){ callbackForm.style.display='none'; callbackSent.style.display='block'; setTimeout(()=>{ callbackSent.style.display='none'; callbackForm.reset(); callbackForm.style.display='block'; closeModal(); },3000); } else { alert('There was a problem sending the request.'); } })
      .catch(err => { alert('Error sending form.'); });
  });
});
