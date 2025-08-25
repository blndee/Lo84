// custom cursor start
function initializeCustomCursor() {
  const customCursor = document.createElement('div');
  customCursor.id = 'customCursor';
  customCursor.style.width = '9px';
  customCursor.style.height = '9px';
  customCursor.style.backgroundColor = 'black';
  customCursor.style.border = '1px solid gray';
  customCursor.style.borderRadius = '50%';
  customCursor.style.position = 'fixed';
  customCursor.style.zIndex = '10000';
  customCursor.style.pointerEvents = 'none';
  document.body.appendChild(customCursor);

  document.addEventListener('mousemove', function(event) {
      customCursor.style.left = event.clientX + 'px';
      customCursor.style.top = event.clientY + 'px';
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initializeCustomCursor();
});
// custom cursor end 

// game value & logic start
const lyricList = [
    {
      text: `Over my shoulder
  I'm dying to meet you
  But everybody says I'm wrong
  Said I'm dying to meet you, girl
  But everybody says I'm wrong
  Everybody says I'm wrong
  But we keep it going on
  Feelings coming on
  But the bullshit got too long, yeah`,
      answer: "100"
    },
    {
      text: `Wish you would
  Never met her
  Do not you wish you would
  Never
  Never met her
  Wish you would never
  Never
  Never met her
  Wish you would never
  Never
  Never met her`,
      answer: "pj harvey cover"
    },
    {
      text: `Take off
  You are never really looking without them
  Shake them off
  You are looking with you
  Clothes off, and you know what you do
  Stolen too late`,
      answer: "DASH SNOW"
    },
    {
      text: `In your eyes
  All the towers floating up across,
  across the sea
  In your eyes, in your eyes
  All the towers floating by
  Let me add you home
  To the scarlet earth horse
  In the end
  Child
  It is staring through them
  It is staring
  At your eyes
  In your eyes
  In the end
  Broken star
  In the end
  In the end`,
      answer: "Lit"
    },
    {
      text: `Bearing to cry
  Bearing to guide, you
  Stood on the other side of the road
  Walking out of your clothes
  Nothing is right when you go
  Each time I see you outside
  Lay me down against the curb
  Switch out everything you feel
  Let me down`,
      answer: "TRIPLE BEAM"
    }
  ];

const playButton = document.getElementById("playButton");
const returnButton = document.getElementById("returnButton");
const nextButton = document.getElementById("nextButton");

const menuSection = document.querySelector(".menuSection");
const gameSection = document.querySelector(".gameSection");

const lyricDisplay = document.getElementById("lyricDisplay");
const guessInput = document.getElementById("guessInput");
const feedbackDisplay = document.getElementById("feedbackDisplay");

let currentAnswer = "";

function showRandomLyric() {
  const randomIndex = Math.floor(Math.random() * lyricList.length);
  lyricDisplay.innerText = lyricList[randomIndex].text;
  currentAnswer = lyricList[randomIndex].answer.toLowerCase();
  guessInput.value = "";
  feedbackDisplay.innerText = "";
  guessInput.focus();
}

playButton.addEventListener("click", function() {
  menuSection.classList.remove("active");
  gameSection.classList.add("active");
  showRandomLyric();
});

guessInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      const guess = guessInput.value.trim().toLowerCase();

      if (guess === "") {
          feedbackDisplay.innerText = "Type something first.";
      } else if (guess === currentAnswer) {
          feedbackDisplay.innerText = "Correct!";
      } else {
          feedbackDisplay.innerText = "Wrong. The correct song was: " + currentAnswer;
      }
  }
});

returnButton.addEventListener("click", function() {
  gameSection.classList.remove("active");
  menuSection.classList.add("active");
});

nextButton.addEventListener("click", function() {
  showRandomLyric();
});
// game value & logic end
