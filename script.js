document.addEventListener('DOMContentLoaded', () => {
    const greenInput  = document.getElementById('greenColor');
    const whiteInput  = document.getElementById('whiteColor');
    const redInput    = document.getElementById('redColor');
  
    const greenStripe = document.getElementById('greenStripe');
    const whiteStripe = document.getElementById('whiteStripe');
    const redStripe   = document.getElementById('redStripe');
  
    const greenHex    = document.getElementById('greenHex');
    const whiteHex    = document.getElementById('whiteHex');
    const redHex      = document.getElementById('redHex');
  
    function updateColors() {
      const g = greenInput.value;
      const w = whiteInput.value;
      const r = redInput.value;
  
      greenStripe.style.background = g;
      whiteStripe.style.background = w;
      redStripe.style.background   = r;
  
      greenHex.textContent = g.toUpperCase();
      whiteHex.textContent = w.toUpperCase();
      redHex.textContent   = r.toUpperCase();
    }
  
    greenInput.addEventListener('input', updateColors);
    whiteInput.addEventListener('input', updateColors);
    redInput.addEventListener('input', updateColors);
  
    updateColors();
  });