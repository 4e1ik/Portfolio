let btn = document.querySelector('.button-up')
//
function magic() {
  if (window.pageYOffset > 40) {
    btn.style.opacity = '1'
  } else { 
    btn.style.opacity = '0' 
  }

  if (window.pageYOffset < 40) {
    btn.style.opacity = '0'
  } else { 
    btn.style.opacity = '1' 
  }
}
//
// btn.onclick = function () {
// 	window.scrollTo(0,0)
// }

// When scrolling, we run the function
window.onscroll = magic