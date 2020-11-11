// Write Javascript code!
window
.fetch('db')
.then(response => response.json())
.then(
  db => ResourcesBlock({ db })
)

function ResourcesBlock({ db }) {
  cards = db.cards
  Object.keys(db).length ? ResourceList({ cards}) : NoResources()
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
  

  

  


