// Write JS code think in Angular way
// use reverse gear to drive forward, are you kidding me ;-) ~ Yen
// convert the stone age's rock into Angular gem ~ Yan

arrcards=[]
x= 3 // configable by showing the coloum

const nextBtn = document.querySelector('.nextBtn');
const preBtn = document.querySelector('.preBtn');
nextBtn.addEventListener('click',nextSlide);
preBtn.addEventListener('click',prevSlide);

const container = document.querySelector('.cardjs');
const yenslider = document.querySelector('cards')

let i = 0;

  window
  .fetch('db')
  .then(response => response.json())
  .then(
    db => ResourcesBlock({ db })

  )


function ResourcesBlock({ db }) {
  cards =  db.cards
  cards.length ? ResourceList({ cards }) : NoResources()
  console.log('db',  db)
}

function ResourceList({ cards }) {
  // change the object to array
  cards.forEach (card=> {
       arrcards.push(card)
  })
 

  for (let i=0 ; i<x; i++) {
      document.getElementById('yencard').innerHTML+=
      "<div class=card>"
          +"<h1>"+arrcards[i].id+" "+arrcards[i].title+"</h1>"+"<h2>"+arrcards[i].subtitle+"</h2>"
          +"<p>"+arrcards[i].text+"</p>"+
      "</div>"
  }
  console.log('be array', arrcards)
  return arrcards
}
  

function NoResources() {
    return `<p>No resources found</p>`
}


function prevSlide(){
      if(i <= 0) { i = arrcards.length; }	
      i--
      console.log('Arrcards', arrcards[i])
    
      newpush=[]
      count = 1
      console.log('x',x)

      for (j = i; j<arrcards.length; j++) {
        console.log('j', j)
        newpush.push(arrcards[j])
      }

      console.log('newpush', newpush)
      YenCard(newpush)
      return 		 
}
  

function nextSlide(){
      if(i >= arrcards.length-1) i = -1;
      i++;
      console.log('Arrcards', arrcards[i])
      item= arrcards[i]
      newpush=[]

      console.log('x',x)
      for (j = i; j<arrcards.length; j++) {

        console.log('j', j)
        newpush.push(arrcards[j])

      }

      YenCard(newpush)
      return 
}  


  function YenCard(newpush){
    console.log('item', item)
    showcard =[]
    console.log('item title', item.title)

    document.getElementById('yencard').innerHTML=""
    for (let i=0 ; i<x; i++) {
    document.getElementById('yencard').innerHTML+=
    "<div class=card>"
        +"<h1>"+newpush[i].id+" "+newpush[i].title+"</h1>"+"<h2>"+newpush[i].subtitle+"</h2>"
        +"<p>"+newpush[i].text+"</p>"+
    "</div>"
    }

  }


