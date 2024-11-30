const p = document.querySelector('.show-midterm-answer')
console.log('p', p)

function showMidtermPage(item) {
    switch (item) {
        case 'p1_93':
            p.innerHTML = `<iframe src='./p1_93/p1_93.html' width='100%' height='100%' />`
            break;
    }
    switch (item) {
        case 'p2_93':
            p.innerHTML = `<iframe src='./p2_93/p2_93.html' width='100%' height='100%' />`
            break;
    }
    switch (item) {
        case 'p3_93':
            p.innerHTML = `<iframe src='./p3_93/p3_93.html' width='100%' height='100%' />`
            break;
    }

}
