// Objects
var famousArray = [
  {
    title: "Dr.",
    name: "Martin Luther King Jr.",
    bio: "Martin Luther King Jr. was an American Baptist minister and activist who was a leader in the African-American Civil Rights Movement.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg",
    lifespan: {
      birth: 1929,
      death: 1968
    }
  },
  {
    title: "President",
    name: "George Washington",
    bio: "George Washington was the first President of the United States, the Commander-in-Chief of the Continental Army during the American Revolutionary War, and one of the Founding Fathers of the United States.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/740px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
    lifespan: {
      birth: 1732,
      death: 1799
    }
  },
  {
    title: "Mr.",
    name: "Nikola Tesla",
    bio: "Nikola Tesla was a Serbian American inventor, electrical engineer, mechanical engineer, physicist, and futurist best known for his contributions to the design of the modern alternating current (AC) electricity supply system.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/689px-N.Tesla.JPG",
    lifespan: {
      birth: 1856,
      death: 1943
    }
  },
]

// DOM
var userInput = document.getElementById("userInput");
var container = document.getElementById("container");

famousArray.forEach(function(element) {
  container.innerHTML += `<person><header>${element.title} ${element.name}</header><br />`
  container.innerHTML += `<section>${element.bio}<br /><img src=${element.image}></section><br />`
  container.innerHTML += `<footer>${element.lifespan.birth} - ${element.lifespan.death}</footer></person><br /><br />`
});