const p = document.querySelector('.show-classdemo')
console.log('p', p)

function showClassDemo(item) {
  switch (item) {
    case 'w02_intro_xx':
      p.innerHTML = `<iframe src='./demo/w02_intro_xx/index.html' width='100%' height='100%' />`
      break
    case 'w03_card_xx':
      p.innerHTML = `<iframe src='./demo/w03_card_xx/' width="100%" height="100%" />`
      break
    case 'w06_blog_xx':
      p.innerHTML = `<iframe src='./demo/w06_blog_xx/' width="100%" height="100%" />`
      break
  }
}
