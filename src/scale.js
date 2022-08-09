"use strict";
function progress () {
    let elem1 = document.getElementById('html');
    let elem2 = document.getElementById('css');
    let elem3 = document.getElementById('javascript');
    let elem4 = document.getElementById('php');
    let width = 1;
    let id = setInterval(progressStatus, 20);
    let id1 = setInterval(progressStatusJS, 15);
    
    function progressStatus () {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem1.style.width = width + '%';
            elem2.style.width = width + '%';
            elem4.style.width = width + '%';
        }
    }

    function progressStatusJS () {
        if (width >= 60) {
            clearInterval(id1);
        } else {
            width++;
            elem3.style.width = width + '%';
        }
    }
}

// progress();

let elem = document.getElementById('skills-block');

// console.log(getScale(elem));
// console.log(elem.getBoundingClientRect());

// function getScale(elem) {
//     let scale = elem.getBoundingClientRect();

//     return {
//         top: scale.top + window.pageYOffset,
//         left: scale.left + window.pageXOffset

//         // top: window.pageYOffset,
//         // left: window.pageXOffset

//         // top: scale.top,
//         // left: scale.left
//     };
// }

// progress();

let rect = elem.getBoundingClientRect();

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

// console.log(getOffset(elem).top);
// console.log(window.scrollY);

// document.documentElement.clientHeight + 150
              
window.addEventListener('scroll', ()=>{
    const documentRect = document.documentElement.getBoundingClientRect();
    console.log(documentRect.top);
    if (documentRect.bottom < getOffset(elem).top+750){
        console.log('dsfdg');
        progress();

        progress = function () {
            return false
        }

        
    }

    
    
});