function darkMode() {
    let bodyEle = document.body;
    let darkBtn = document.querySelector('.svg-btn');
    darkBtn.classList.toggle('toggle');
    bodyEle.classList.toggle('dark-mode');

    let buttonList = document.querySelectorAll('.more button');
    for(let i of buttonList) {
        i.classList.toggle('toggle');
    }

    let anchorList = document.getElementsByTagName('a');
    for(let i of anchorList) {
        i.classList.toggle('toggle');
    }

    let toggleList = document.querySelectorAll('.square svg')
    for(let i of toggleList) {
        console.log(i);
        i.classList.toggle('skill-toggle');
    }
}
