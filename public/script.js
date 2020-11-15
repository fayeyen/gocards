arrcards=[]

x = 3 // configable by showing the coloum
offset = x-1
let i = 0

const nextBtn = document.querySelector('.nextBtn');
const preBtn = document.querySelector('.preBtn');
nextBtn.addEventListener('click',nextSlide);
preBtn.addEventListener('click',prevSlide);

  window
  .fetch('db')
  .then(async (response) => await response.json())
  .then(
    db => ResourcesBlock({ db })
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

    document.getElementById('goCards').innerHTML="<div class='row cards'>"+kidCards+"</div>"

    return document.getElementById('goCards').innerHTML

  }