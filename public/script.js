// Write Javascript code!
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

  for (let i = 0; i<cards.length; i++) {
    
    const domcard=document.getElementById('yencard').innerHTML=
        "<h1>"+cards[i].title+"</h1>"+"<h2>"+cards[i].subtitle+"</h2>"
        +"<p>"+cards[i].text+"</p>"
    this.Arrcards.push(domcard)
        
  }  
  console.log("arrcards", this.Arrcards)
}
  

function NoResources() {
    return `<p>No resources found</p>`
  }
  
  Arrcards=[]
  const nextBtn = document.querySelector('.nextBtn');
  const preBtn = document.querySelector('.preBtn');
  const container = document.querySelector('.cardjs');
  const yenslider = document.querySelector('cards')
  
  let i = 0;
  
  nextBtn.addEventListener('click',nextSlide);
  preBtn.addEventListener('click',prevSlide);
  
  function nextSlide(){
      if(i <= 0) i = Arrcards.length;	
      i--;
      console.log('Arrcards', Arrcards[i])
      return YenCard();			 
  }
  
  function prevSlide(){
      if(i >= Arrcards.length-1) i = -1;
      i++;
      console.log('Arrcards', Arrcards[i])
      return YenCard();	
  }  

  function YenCard(){
    return container.setAttribute('div', Arrcards[i]);
    
  }


