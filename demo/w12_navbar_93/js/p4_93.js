const p = document.querySelector('.show-midterm-answer')
console.log('p', p)

function showMidtermPage(item) {
    switch (item) {
        case 'p1_93':
            p.innerHTML = `<iframe src='./p1_93/p1_93.html' width='100%' height='100%' />`
            break;
    }
}
