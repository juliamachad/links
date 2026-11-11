/**
 * Julia Machado | Casal Goma - Interaction Script
 */

// Set Current Year in Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Toast helper
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  
  toastMsg.textContent = message;
  toast.classList.add('show');
  
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Copy Text to Clipboard (with fallback for in-app browsers)
async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.warn('Clipboard API error, trying fallback', err);
    }
  }

  // Fallback using textarea
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error('Fallback copy failed', err);
    return false;
  }
}

// Copy Coupon Action
async function copyCoupon(code, buttonElement) {
  const success = await copyToClipboard(code);
  
  if (success) {
    showToast(`Cupom "${code}" copiado!`);
    
    // Animate button
    const originalHtml = buttonElement.innerHTML;
    buttonElement.classList.add('copied');
    buttonElement.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor" style="width:15px;height:15px;">
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
      </svg>
      <span>Copiado!</span>
    `;

    setTimeout(() => {
      buttonElement.classList.remove('copied');
      buttonElement.innerHTML = originalHtml;
    }, 2000);
  } else {
    showToast(`Código: ${code}`);
  }
}

// Copy Email Action
async function copyEmail(email, buttonElement) {
  const success = await copyToClipboard(email);
  if (success) {
    showToast('E-mail copiado para a área de transferência!');
    if (buttonElement) {
      const originalHtml = buttonElement.innerHTML;
      buttonElement.classList.add('copied');
      buttonElement.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor" style="width:15px;height:15px;">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
        <span>Copiado!</span>
      `;
      setTimeout(() => {
        buttonElement.classList.remove('copied');
        buttonElement.innerHTML = originalHtml;
      }, 2000);
    }
  }
}

// Native Share API
const shareBtn = document.getElementById('shareBtn');
if (shareBtn) {
  shareBtn.addEventListener('click', async () => {
    const shareData = {
      title: 'Julia Machado | Links & Cupons',
      text: 'Confira os cupons exclusivos da Julia Machado (Casal Goma): Caffeine Army, Insider Store e YSY!',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard(window.location.href);
          showToast('Link da página copiado!');
        }
      }
    } else {
      copyToClipboard(window.location.href);
      showToast('Link copiado para compartilhar!');
    }
  });
}

