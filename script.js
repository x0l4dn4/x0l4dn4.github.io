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
  downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const link = document.createElement('a');
    link.href = downloadBtn.href;
    link.download = 'Daniel_Callejo_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

document.querySelectorAll('a[target="_blank"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    window.open(a.href, '_blank');
  });
});

