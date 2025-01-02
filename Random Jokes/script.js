const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke')
    const data = await res.json()
    jokeEl.innerHTML = data.setup
}
