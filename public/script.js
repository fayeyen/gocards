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
  var Arrcards=[];
  for (let i = 0; i<cards.length; i++) {
    
    const domcard=document.getElementById('yencard').innerHTML=
        "<h1>"+cards[i].title+"</h1>"+"<h2>"+cards[i].subtitle+"</h2>"
        +"<p>"+cards[i].text+"</p>"
    Arrcards.push(domcard)
        
  }  
  console.log("arrcards", Arrcards)
}
  

function NoResources() {
    return `<p>No resources found</p>`
  }
  
  const nextBtn = document.querySelector('.nextBtn');
  const preBtn = document.querySelector('.preBtn');
  const container = document.querySelector('.cardjs');
  
  let counter = 0;
  
  nextBtn.addEventListener('click',nextSlide);
  preBtn.addEventListener('click',prevSlide);
  
  function nextSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}]
      ,{duration:1000,fill:'forwards'});
    if(counter === 3)
    {
      counter = -1;
    }
  
    counter++;
  
    container.style.backgroundImage = `url(img/bcg-${counter}.png)`
  }
  
  function prevSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}]
      ,{duration:1000,fill:'forwards'});
    if(counter === 0)
    {
      counter = 4;
    }
  
    counter--;
  
    container.style.backgroundImage = `url(img/bcg-${counter}.png)`
  }  

  


