// NO import require 
// Write JS code think in Angular way 
// use reverse gear to drive forward ;-) ~ Yen
// convert the stone age's rock into Angular gem ~ Yan
// bact to the future , the future build from the past ;-)  ~ Chong


// http://127.0.0.1:3000/cards?_start=0&_end=5
// http://127.0.0.1:3000/cards?_start=0&_end=7

arrcards=[]

x = 5 // configable by showing the coloum
offset = x-1
let i = 0
start = 5;
end = 8

const request = new Request({
  url: 'http://127.0.0.1:3000/cards?_start=0&_end=8',
  method: 'GET'
});

// fetch(request);s
let url = new URL('http://127.0.0.1:3000/db')
url.cards = new URLSearchParams({
    _start:0,
    _end:5
})


const nextBtn = document.querySelector('.nextBtn');
const preBtn = document.querySelector('.preBtn');
nextBtn.addEventListener('click',nextSlide);
preBtn.addEventListener('click',prevSlide);
// .fetch('db')
  window
  .fetch('db')
  .then(response => response.json())
  .then(
    db => {
    console.log('fetch get', db)
    ResourcesBlock({ db })
    }
  )


function ResourcesBlock({ db }) {
  cards =  db.cards
  cards.length ? ResourceList({ cards }) : NoResources()
}


function NoResources() {
  return `<p>No resources found</p>`
}


function ResourceList({ cards }) {
  // change the object to array
  cards.forEach (card=> {
       return arrcards.push(card)
  })
  console.log('getCards', arrcards)
  return YenCard(arrcards)

}
  

function prevSlide(){
      newpush=[]
      if(i <1 ) { i = arrcards.length-offset; }
      i--
    
      for (j = i; j<arrcards.length; j++) {
        newpush.push(arrcards[j])
      }
      
      return YenCard(newpush)	 
}
  

function nextSlide(){
      newpush=[]
      if(i >= arrcards.length-x) i = -1;
      i++;
 
      for (j = i; j<arrcards.length; j++) {
        newpush.push(arrcards[j])
      }

      return YenCard(newpush)
}  


  function YenCard(cardsinfo){ 
    getcard = document.createElement('yencard')
    getcard.innerHTML=""   /// clear the stack
  
    for (let i=0 ; i<x; i++) {
      kidCards=getcard.innerHTML+=
            "<div class='card col'>"
                +"<img src=\'"+cardsinfo[i].image_url+"\'>"
                +"<h1>"+cardsinfo[i].id+" "+cardsinfo[i].title+"</h1>"+"<h2>"+cardsinfo[i].subtitle+"</h2>"
                +"<p>"+cardsinfo[i].text+"</p>"
                +"<h3>Learn More</h3>"
            +"</div>"
    
    }
    // Angular not code in this way
    //  I like *ngFor  

    document.getElementById('goCards').innerHTML="<div class='cards row'>"+kidCards+"</div>"

    return document.getElementById('goCards').innerHTML

  }


