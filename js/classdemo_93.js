const p = document.querySelector('.show-classdemo')
console.log('p', p)

function showClassDemo(item) {
    switch (item) {
        case 'w02_intro_93':
            p.innerHTML = `<iframe src='./demo/w02_intro_93/index.html' width='100%' height='100%' />`
            break;
    }
    switch (item) {
        case 'w03_card_93':
            p.innerHTML = `<iframe src='./demo/w03_card_93/index.html' width='100%' height='100%' />`
            break;
    }
    switch (item) {
        case 'w06_blog_93':
            p.innerHTML = `<iframe src='./demo/w06_blog_93/index.html' width='100%' height='100%' />`
            break;
    }

}
