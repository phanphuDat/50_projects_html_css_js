const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#btn");

jokeBtn.addEventListener("click", generateJoke);

// lan fetch data dau tien
generateJoke()

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => jokeEl.innerHTML = data.joke)
}
