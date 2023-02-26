let m = [];

btn.addEventListener("click", async function (e) {
  const mov = await fetch("https://swapi.dev/api/films");
  const data = await mov.json();
  // console.log(data)
  m = data.results;
  console.log(m);

  const data_movieIndi = m
    .map((temp, key) => {
      return `<div class="newElement"><h1 class="txtH"> ${temp.title} </h1> <br> <h1> ${temp.opening_crawl} </h1> </div>`;
  })
    .join(" ");

  let movie = document.querySelector(".listMovie");
  movie.innerHTML = data_movieIndi;
});