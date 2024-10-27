const p = document.querySelector('.show-classdemo');
console.log('show-classdemo', p);

function showDemo(item) {
  switch (item) {
    case 'w02_intro_93':
      p.innerHTML = `<iframe src='./demo/w07/w02_intro_93/index.html' width="100%" height="100%"></iframe>`;
      break;
    case 'w03_card_93':
      p.innerHTML = `<iframe src='./demo/w07/w03_card_93/index.html' width="100%" height="100%"></iframe>`;
      break;
    case 'w06_blog_93':
      p.innerHTML = `<iframe src='./demo/w07/w06_blog_93/index.html' width="100%" height="100%"></iframe>`;
      break;
  }
}
