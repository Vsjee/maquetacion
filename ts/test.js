const imgHolder = document.getElementById('catt')
const phrase = document.getElementById('phrase')
const btn = document.getElementById('btn')

// live_m5RIi2IQFYPIxTyGOtonqvTHkSBCvIqYPYwMGAWn9QnEhfgSEcrjrFVtMSlfUzVR
let URL = 'https://api.thecatapi.com/v1/images/search?api_key=live_m5RIi2IQFYPIxTyGOtonqvTHkSBCvIqYPYwMGAWn9QnEhfgSEcrjrFVtMSlfUzVR'

const somePhrases = [
  'q me mira jum',
  'q se hace',
  'si soy',
  'ojo q lloro',
  'aaaaaaaaaaaa'
]

function randomNumber(max) {
  return Math.floor(Math.random() * max)
}

const callCatsApi = async (num) => {
  const data = await fetch(URL)
  const getData = await data.json()
  const img = getData[0].url

  imgHolder.setAttribute('src', `${img}`)
  phrase.innerHTML = somePhrases[num]
}
callCatsApi(somePhrases.length - 1)

btn.addEventListener('click', () => {
  const r = randomNumber(somePhrases.length)
  callCatsApi(r)
})
