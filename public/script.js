// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Yen Cards</h1>`;

function ResourceItem( name) {
  console.log("forEach",name);
   // Resources
  //  document.getElementById('ntitle').innerHTML+= name.title
  //  document.getElementById('cardId').innerHTML+= name.id
  //  document.getElementById('text').innerHTML+= name.text
   
   document.getElementById('yenblock2').innerHTML+=
   "Block 2<p>"+name.id+""+name.title+""+name.text+"</p>"    
  }
  
function ResourceList({ db }) {
  //  const cards = Object.keys(db)
 
  for (let i = 0; i<db.cards.length; i++) {
    console.log('title', db.cards[i].title)
   
    // document.getElementById('yenblock').innerHTML+=
    // "Yenblock1<p>"+db.cards[i].id+""+db.cards[i].title+""+db.cards[i].text+"</p>"
    ResourceItem( db.cards[i] )
  }  
  // db.cards.forEach (arr=> {
  //    console.log('name',arr.title )
  //   //  document.getElementById('title').innerHTML+= arr.title 
  //    ResourceItem( arr )
  //    })

  }
  
  function NoResources() {
    return `<p>No resources found</p>`
  }
  
  function ResourcesBlock({ db }) {
    Object.keys(db).length ? ResourceList({ db }) : NoResources()
  
  }
  
  window
    .fetch('db')
    .then(response => response.json())
    .then(
      db => ResourcesBlock({ db })
        // (document.getElementById('resources').innerHTML = ResourcesBlock({ db }))
    )
  
  


