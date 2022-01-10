//queryselector grab element by class we can also use getelement by id if we have id
const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke p");
//function to use to get content faster to users, to have something on page
document.addEventListener("DOMContentLoaded", getJock);

button.addEventListener("click", getJock);
// async function means do this in order, goes to content (await)and wait when its finished do the next thing
async function getJock() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
   //headers and accept necessary to get api from site to see which format they want
 //on the site api will say you need hearder and accept or not, check cretiries on site
   headers: {
      Accept: "application/json"
    }
  });
  //jokedata will equal what we will get from site(we took date and made jsonfile)
  const jokeObj = await jokeData.json();
  console.log(jokeObj)
  jokeDiv.innerHTML = jokeObj.joke;
  //look what is object(see structure)when we look it says id and joke that why jokeobj.joke(its a key) waht  developer used 
  console.log(jokeData);
}
//const jokegify =await fetch ....
// let params = newUrlSearchParams ({api_key: 'Q3AzY46EXkwJWP8qQgU3bee0uqidhyNI'})
// const jokeGiphy = await fetch("api.giphy.com/v1/trending/searches",

// console.log (jokeGiphy)
