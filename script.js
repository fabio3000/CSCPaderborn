$('.subscribtion').click(function(){
  
  if($(this).hasClass('active')) {
    
    $(this).removeClass('active');
    $('.form').removeClass('active');
    
    if($(this).hasClass('free')) {
      $('.family').removeClass('hidden');
      $('.premium').removeClass('hidden');
      $('.free-form').removeClass('hidden');
      $('.free-button').removeClass('active');
    }
    if($(this).hasClass('family')) {
      $('.free').removeClass('hidden');
      $('.premium').removeClass('hidden');
    }
    if($(this).hasClass('premium')) {
      $('.free').removeClass('hidden');
      $('.family').removeClass('hidden');
    }
    
  }
  else {
    $(this).addClass('active');
    
    if($(this).hasClass('free')) {
      $('.family').addClass('hidden');
      $('.premium').addClass('hidden');
      $('.free-form').addClass('hidden');
      $('.free-button').addClass('active');
    }
    if($(this).hasClass('family')) {
      $('.free').addClass('hidden');
      $('.premium').addClass('hidden');
    }
    if($(this).hasClass('premium')) {
      $('.free').addClass('hidden');
      $('.family').addClass('hidden');
    }
    
    $('.form').addClass('active');
  }
  
});

$('.payment-btn').click(function(){
  
  if( $(this).hasClass('active') ) {
    $(this).removeClass('active');
  }
  else {
    $('.payment-btn').removeClass('active');
    $(this).addClass('active');
  }
  
})


const freeDiv = document.querySelector('.subscribtion.free');
const familyDiv = document.querySelector('.subscribtion.family');
const premiumDiv = document.querySelector('.subscribtion.premium');
const auswahlElement = document.querySelector('#auswahl');

function setAuswahl(value) {
  auswahlElement.value = value;
}

freeDiv.addEventListener('click', () => {
  setAuswahl(1);
  console.log('Auswahl auf "Option 1" gesetzt');
});

familyDiv.addEventListener('click', () => {
  setAuswahl(2);
  console.log('Auswahl auf "Option 2" gesetzt');
});

premiumDiv.addEventListener('click', () => {
  setAuswahl(3);
  console.log('Auswahl auf "Option 3" gesetzt');
});


const form = document.querySelector('#form');
const subscriptionElements = document.querySelectorAll('.subscribtion.free, .subscribtion.family, .subscribtion.premium');

subscriptionElements.forEach(element => {
  element.addEventListener('click', () => {
    if (form.style.display === 'block') {
      form.style.display = 'none';
    } else {
      form.style.display = 'block';
    }
  });
});


