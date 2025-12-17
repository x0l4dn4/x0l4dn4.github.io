const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  const key = e.key.toLowerCase();


  if (document.getElementById('link-github')) {
    if (key === 'g') document.getElementById('link-github').click();
    if (key === 'l') document.getElementById('link-linkedin').click();
    if (key === 'c') document.getElementById('link-cv').click();
  }

  
  if (document.getElementById('download-cv')) {
    if (key === 'd') document.getElementById('download-cv').click();
    if (key === 'b') document.getElementById('link-back').click();
  }
});

const downloadBtn = document.getElementById('download-cv');

if (downloadBtn) {
  downloadBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('assets/cv.pdf');
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Daniel_Callejo_CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed:', err);
    }
  });
}

