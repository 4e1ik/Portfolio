let btn = document.querySelector('.button-up')

function magic() {
  if (window.pageYOffset > 40) {
    btn.style.opacity = '1'
  } else { 
    btn.style.opacity = '0' 
  }
}

window.onscroll = magic