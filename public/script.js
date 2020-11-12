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
    document.getElementById('yenblock').innerHTML+=
    "<p>"+cards[i].id+" "+ cards[i].title+" "+cards[i].text+"</p>"
  }  
}
  
function NoResources() {
    return `<p>No resources found</p>`
  }
  
  const nextBtn = document.querySelector('.nextBtn');
  const preBtn = document.querySelector('.preBtn');
  const container = document.querySelector('.cards');
  
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

  


