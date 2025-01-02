const p = document.querySelector('.show-midterm-answer')
console.log('p', p)

function showMidtermPage(item) {
  switch (item) {
    case 'p1_xx':
      p.innerHTML = `<iframe src='./p1_xx/p1_xx.html' width='100%' height='100%' />`
      break
    case 'p2_xx':
      p.innerHTML = `<iframe src='./p2_xx/p2_xx.html' width="100%" height="100%" />`
      break
    case 'p3_xx':
      p.innerHTML = `<iframe src='./p3_xx/p3_xx.html' width="100%" height="100%" />`
      break
  }
}
