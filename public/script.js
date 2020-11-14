// Write JS code think in Angular way
// use reverse gear to drive forward, are you kidding me ;-) ~ Yen
// convert the stone age's rock into Angular gem ~ Yan
// bact to the future 

arrcards=[]

x = 5 // configable by showing the coloum
offset = x-1
let i = 0

const nextBtn = document.querySelector('.nextBtn');
const preBtn = document.querySelector('.preBtn');
nextBtn.addEventListener('click',nextSlide);
preBtn.addEventListener('click',prevSlide);

  window
  .fetch('db')
  .then(response => response.json())
  .then(
    db => ResourcesBlock({ db })
  )


function ResourcesBlock({ db }) {
  cards =  db.cards
  cards.length ? ResourceList({ cards }) : NoResources()
}

function ResourceList({ cards }) {
  // change the object to array
  cards.forEach (card=> {
       return arrcards.push(card)
  })
  

  for (let i=0 ; i<x; i++) {
      document.getElementById('yencard').innerHTML+=
      "<div class=card>"
          +"<h1>"+arrcards[i].id+" "+arrcards[i].title+"</h1>"+"<h2>"+arrcards[i].subtitle+"</h2>"
          +"<p>"+arrcards[i].text+"</p>"+
      "</div>"
  }
  // console.log('be array', arrcards)

  return arrcards

}
  

function NoResources() {
    return `<p>No resources found</p>`
}


function prevSlide(){
      newpush=[]
      if(i <1 ) { i = arrcards.length-offset; }
      console.log('prev', i)	
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


  function YenCard(newpush){
    document.getElementById('yencard').innerHTML=""   /// clear the stack

    for (let i=0 ; i<x; i++) {
    document.getElementById('yencard').innerHTML+=
    "<div class='col' >  "
        +"<h1>"+newpush[i].id+" "+newpush[i].title+"</h1>"+"<h2>"+newpush[i].subtitle+"</h2>"
        +"<p>"+newpush[i].text+"</p>"+
    "</div>"
    }

  }


