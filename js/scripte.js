//  start move nav hiden 
const btn_nav = document.querySelector("#checkbox")
const nav_hid = document.querySelector("#hidnav")
btn_nav.addEventListener("click",()=>{
    if(!nav_hid.classList.contains("shownav")){
        nav_hid.classList.add("shownav")
    }else{
        nav_hid.classList.remove("shownav")
    }
})
//  end move nav hiden 

// start move collections

function handleScroll(btnColl, text) {
    const btnCollsetTop = btnColl.getBoundingClientRect().top
    if (!btnColl.classList.contains('shome') && btnCollsetTop > 0) {
      btnColl.classList.add("movescroll");
      text.classList.add("movescroll");
    } else {
      btnColl.classList.remove("movescroll");
      text.classList.remove("movescroll");
    }
  }
  
window.addEventListener('scroll', function() {
    const btnCol1 = this.document.querySelector('.card-col-1 .cssbuttons-io-button');
    const text1 = this.document.querySelector('.card-col-1>h1');
    handleScroll(btnCol1, text1);
  });
  
window.addEventListener('scroll', function() {
    const btnCol2 = this.document.querySelector('.card-col-2 .cssbuttons-io-button');
    const text2 = this.document.querySelector('.card-col-2>h1');
    handleScroll(btnCol2, text2);
  });
  
window.addEventListener('scroll', function() {
    const btnCol3 = this.document.querySelector('.card-col-3 .cssbuttons-io-button');
    const text3 = this.document.querySelector('.card-col-3>h1');
    handleScroll(btnCol3, text3);
  });

// end move collections



















