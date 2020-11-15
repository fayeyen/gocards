// NO import require 
// Write JS code think in Angular way 
// use reverse gear to drive forward ;-) ~ Yen
// convert the stone age's rock into Angular gem ~ Yan
// back to the future , the future build from the past ;-)  ~ Chong
// 
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
const request = 'http://127.0.0.1:3000/cards?'

const request1 = 'http://127.0.0.1:3000/cards?_start=0&_end=5'

const request2 = 'http://127.0.0.1:3000/cards?_start=0&_end=7'

arrcards=[]

x = 3 // configable by showing the coloum
offset = x-1
let i = 0


// (click)="nextSlide()"
const nextBtn = document.querySelector('.nextBtn');
const preBtn = document.querySelector('.preBtn');
nextBtn.addEventListener('click',nextSlide);
preBtn.addEventListener('click',prevSlide);

// I like http module 
// play the code don't let the code play you
// No code is the code
// try { build_towel of babel } throw { God confused the lenguages }
// async await...god promised tomorrow never die
// history is not the past , history is happening under level
// *ngFor (let cool of code; index as i)  
// if (basic=work) { tyepescript: as hot as firebase }
// let code, let cook, let DOM as shadow
// directive | director
// I talk too much, no I type too much
// talk to server be my clients, you need my secret
// if (youcan=='read this') { robot } else { we are human }
//    (youcan=='find this') ? alert('you search git history carefully') : this.snackbar(you only care the result )

// *********** POST *********** WORK **************//
// const data = { title: 'ROBOT or Human' };

// fetch('http://127.0.0.1:3000/cards', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });



  // const url = new URL('http://127.0.0.1:3000');
  // const params = new URLSearchParams(url.search);
 
  // params.set('_start', 0);
  // params.set('_end', 7);
  // params.has('_end') === true
  // params.toString() === '_start=0&_end=7'
 

  // *********** GET *********** 

  // .fetch('db')    //db.json

  // .fetch('http://127.0.0.1:3000/cards?_start=0&_end=5', {
  //   method: 'GET', 
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   mode: 'cors',
  //   cache: 'default',
  // })

// Angular Module
// public http:HttpClient, 
// const start = 0
// const end = 8
// this.http.get('url/json?_start='+this.start+'&_end='+this.end+')


  window
  // .fetch('http://127.0.0.1:3000/cards?_start=0&_end=5')
  .fetch(request2)
  .then( async(response )=> await response.json())
  .then(
    db => {
    console.log('fetch get', db)
    ResourcesBlock({ db })
    }
  )


function ResourcesBlock({ db }) {
  // cards =  db.cards
  // cards.length ? ResourceList({ cards }) : NoResources()
  db ? ResourceList({ db }) : NoResources()
}


function NoResources() {
  return `<p>No resources found</p>`
}


function ResourceList({ db }) {
  // change the object to array
  // cards.forEach (card=> {
  //      return arrcards.push(card)
  // })
  console.log('getCards', db)
  return YenCard(db)

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

// try { to } catch { me if you can } 
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
    // Angular is shawdow DOM
    //  I like *ngFor , we live under the shawdow
    // 
    document.getElementById('goCards').innerHTML="<div class='cards row'>"+kidCards+"</div>"

    return document.getElementById('goCards').innerHTML

  }

// return {Object or soul}
