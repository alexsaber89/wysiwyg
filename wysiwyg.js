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

var counter = 0;
for (; counter < famousArray.length; counter++) {
  // Give each person element a unique identifier
  var people = `<person class="person__container" id="person--${counter}"><header>${famousArray[counter].title} ${famousArray[counter].name}</header><br />`
  people += `<section>${famousArray[counter].bio}<br /><br /><img src=${famousArray[counter].image}></section><br />`
  people += `<footer>${famousArray[counter].lifespan.birth} - ${famousArray[counter].lifespan.death}</footer></person><br /><br />`
  container.innerHTML += people;
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person__container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", borderFunction);
};

function borderFunction(element) {
  console.log("test");
}
