function first() {
  var dots1 = document.getElementById('dots1');
  var moreText = document.getElementById('more1');
  var btnText = document.getElementById('myBtn1');

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText.innerHTML = "+";
    moreText.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText.innerHTML = "-";
    moreText.style.display = "inline";
  }
}

function myFunction() {
    var dots = document.getElementById('dots');
    var moreText = document.getElementById('more');
    var btnText = document.getElementById('myBtn');
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "+";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "-";
      moreText.style.display = "inline";
    }
  }



  function second() {
    var dots2 = document.getElementById('dots2');
    var moreText = document.getElementById('more2');
    var btnText = document.getElementById('myBtn2');
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText.innerHTML = "+";
      moreText.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText.innerHTML = "-";
      moreText.style.display = "inline";
    }
  }


  function fifth() {
    var dots5 = document.getElementById('dots5');
    var moreText = document.getElementById('more5');
    var btnText = document.getElementById('myBtn5');
  
    if (dots5.style.display === "none") {
      dots5.style.display = "inline";
      btnText.innerHTML = "+";
      moreText.style.display = "none";
    } else {
      dots5.style.display = "none";
      btnText.innerHTML = "-";
      moreText.style.display = "inline";
    }
  }

  function fourth() {
    var dots4 = document.getElementById('dots4');
    var moreText = document.getElementById('more4');
    var btnText = document.getElementById('myBtn4');
  
    if (dots4.style.display === "none") {
      dots4.style.display = "inline";
      btnText.innerHTML = "+";
      moreText.style.display = "none";
    } else {
      dots4.style.display = "none";
      btnText.innerHTML = "-";
      moreText.style.display = "inline";
    }
  }

  function sixth() {
    var dots6 = document.getElementById('dots6');
    var moreText = document.getElementById('more6');
    var btnText = document.getElementById('myBtn6');
  
    if (dots6.style.display === "none") {
      dots6.style.display = "inline";
      btnText.innerHTML = "+";
      moreText.style.display = "none";
    } else {
      dots6.style.display = "none";
      btnText.innerHTML = "-";
      moreText.style.display = "inline";
    }
  }
  function seventh() {
    var dots7 = document.getElementById('dots7');
    var moreText = document.getElementById('more7');
    var btnText = document.getElementById('myBtn7');
  
    if (dots7.style.display === "none") {
      dots7.style.display = "inline";
      btnText.innerHTML = "+";
      moreText.style.display = "none";
    } else {
      dots7.style.display = "none";
      btnText.innerHTML = "-";
      moreText.style.display = "inline";
    }
  }
  function eighth() {
    var dots8 = document.getElementById('dots8');
    var moreText = document.getElementById('more8');
    var btnText = document.getElementById('myBtn8');
  
    if (dots8.style.display === "none") {
      dots8.style.display = "inline";
      btnText.innerHTML = "+";
      moreText.style.display = "none";
    } else {
      dots8.style.display = "none";
      btnText.innerHTML = "-";
      moreText.style.display = "inline";
    }
  }
  function ninth() {
    var dots9 = document.getElementById('dots9');
    var moreText = document.getElementById('more9');
    var btnText = document.getElementById('myBtn9');
  
    if (dots9.style.display === "none") {
      dots9.style.display = "inline";
      btnText.innerHTML = "+";
      moreText.style.display = "none";
    } else {
      dots9.style.display = "none";
      btnText.innerHTML = "-";
      moreText.style.display = "inline";
    }
  }
  function tenth() {
    var dots10 = document.getElementById('dots10');
    var moreText = document.getElementById('more10');
    var btnText = document.getElementById('myBtn10');
  
    if (dots10.style.display === "none") {
      dots10.style.display = "inline";
      btnText.innerHTML = "+";
      moreText.style.display = "none";
    } else {
      dots10.style.display = "none";
      btnText.innerHTML = "-";
      moreText.style.display = "inline";
    }
  }

  










  let span = document.getElementsByClassName('arrow');
	let product = document.getElementsByClassName('card')
	let product_page = Math.ceil(card.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// // mobile_view	
	// let mob_view = window.matchMedia("(max-width: 768px)");
	// if (mob_view.matches)
	//  {
	//  	movePer = 50.36;
	//  	maxMove = 504;
	//  }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}