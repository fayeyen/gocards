// Write JS code think in Angular way
// use reverse gear to drive forward, are you kidding me ;-) ~ Yen
// convert the stone age's rock into Angular gem ~ Yan

// const title;
// const subtitle;
// const text;
arrcards=[]
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
    // db => ( document.getElementById('resources').innerHTML = ResourcesBlock({ db })  )
  )



function ResourcesBlock({ db }) {
  cards =  db.cards
  cards.length ? ResourceList({ cards }) : NoResources()
  console.log('db',  db)
}

function ResourceList({ cards }) {
  cards.forEach (card=> {
       arrcards.push(card)
  })
  arrcards.forEach((card)=>{
    document.getElementById('yencard').innerHTML+=
    "<h1>"+card.title+"</h1>"+"<h2>"+card.subtitle+"</h2>"
    +"<p>"+card.text+"</p>"
  })
  // document.getElementById('yencard').innerHTML=
  // "<h1>"+arrcards[2].title+"</h1>"+"<h2>"+arrcards[2].subtitle+"</h2>"
  // +"<p>"+arrcards[2].text+"</p>"

  console.log('be array', arrcards)
  return arrcards
}
  

function NoResources() {
    return `<p>No resources found</p>`
}


function nextSlide(){
      if(i <= 0) i = arrcards.length;	
      i--;
      console.log('Arrcards', arrcards[i])
      item= arrcards[i]
      // newpush.push()
      YenCard(item)
      return 		 
}
  

function prevSlide(){
      if(i >= arrcards.length-1) i = -1;
      i++;
      console.log('Arrcards', arrcards[i])
      item= arrcards[i]
      // newpush.push()
      YenCard(item)
      return 
}  


  const getcard= document.getElementById('resources')

  // // const container = document.querySelector('.cardjs');
  // // // const yenslider = document.querySelector('.yenslider')
  // const newcard = document.createElement("div");
  
  // // const yenslider = document.querySelectorAll('.yencard')
  // let i = 0;
  

  function YenCard(item){
    console.log('item', item)
    console.log('item title', item.title)
    document.getElementById('yencard').innerHTML=
    "<h1>"+item.title+"</h1>"+"<h2>"+item.subtitle+"</h2>"
    +"<p>"+item.text+"</p>"
    // const domcard=document.getElementById('yencard').innerHTML=
    // "<h1>"+cards[i].title+"</h1>"+"<h2>"+cards[i].subtitle+"</h2>"
    // +"<p>"+cards[i].text+"</p>"
    // console.log('Arrcards[i]', getcard)
    
    // // console.log('newcard',newcard)
    //   newcard.appendChild(getcard)
    //   // container=newcard
    //   // return container
    //  const currentArray = document.getElementById("yencard")
    // // console.log('currentArray',currentArray)
    //   return document.body.insertBefore(newcard, currentArray);

    
  }


