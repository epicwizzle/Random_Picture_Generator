/**
 * This JavaScript file is used to generate random images to the index. html 
 * @author Esenwa Michael
 * Date: 30th Febuary, 2023
 * 
 */

// This is the array that holds a set of 2D images
const images = [];
images[0] = ["./img/1.jpg", "./img/2.jpg", "./img/3.png"]; //Starwars https://www.starwars.com/games-apps/star-wars-card-trader
images[1] = ["./img/4.jpg", "./img/5.jpg", "./img/6.jpg"]; //DC https://dcdualforce.com/
images[2] = ["./img/7.jpg", "./img/8.jpg", "./img/9.jpg"]; // Marvel https://marvelsnap.io/card-database/?&sort=name&limit=20&offset=40

let interval;
var time = 10000; //initial time the countdown will start (10secs)
console.log("time start  " + time);

/**
 * This function is used to set the time
 * 
 */

function intervalSetter() {
  // make_primes() example
  time = document.getElementById("time").value;

  if (!isNaN(time)) {
    if (time >= 500 && time <= 10000) {
      console.log("timex" + time);
      restartTime(); // This function restarts the countdown 
    }
    else if (time == null || isNaN(time) || time < 500 || time > 10000) {
      //w3schools.com
      alert("Input must be between 500 & 10000 inclusively")
      restartTime();
    }
  }

}
/**
 * This function is used to start the Countdown .
 * @interval Used to set the speed of the countdown. 
 */
function startCountdownInterval() {
  console.log("start");
  interval = setInterval(countDown, 100);
}
startCountdownInterval();


let countdown = time / 1000;
/**
 * This function begins the coundown 
 */
function countDown() {
  countdown -= 0.1;
  let x = Math.round(countdown * 10) / 10;
  console.log("this is countdown " + x);
  document.getElementById("countdown").innerHTML = x + "s";

  if (countdown <= 0.1) {
    clearInterval(interval);
    console.log("end");
    randomizeImages(); // function calls to radomizeImages at 0

  }
  // At approxiately 3 intervals, background color of countdown will change from green to red 
  if (x > (time/1000)/1.3) { 
    document.getElementById("countdown").style.backgroundColor = "green";
    document.getElementById("countdown").style.color = "white";
  }
  else if (x >= (time/1000)/2.2 && x <= (time/1000)/1.3) {
    document.getElementById("countdown").style.backgroundColor = "yellow";
    document.getElementById("countdown").style.color = "black";
  }
  else if (x < (time/1000)/2.2) {
    document.getElementById("countdown").style.backgroundColor = "red";
    document.getElementById("countdown").style.color = "white";
  }
}

let count = 0;
//https://stackoverflow.com/questions/25798958/iterate-through-2-dimensional-array
/**
 * This function is used with the onclick function to randomize images in img tag 
 */
function img1Change() {
  let allImages = []; // An empty list to hold all the images 
  for (let i = 0; i < images.length; i++) { // Iterating the nested list
    for (let j = 0; j < images[i].length; j++) {
      allImages.push(images[i][j]); // Add all the images to the empty list
    }
  }

  for (let i = 0; i < allImages.length; i++) { //Iterating the new list 
    let random = Math.floor(Math.random() * allImages.length); //Randomizing the images 
    allImages[i] = allImages[random];
    let img1 = document.getElementById("img1");
    img1.src = allImages[i];
  }

  // Update the counter
  count++;
  document.getElementById("counter").innerHTML = count;
  // Reset the countdown and start the timer again
  restartTime();
}
/**
 * This function is used with the onclick function to randomize images in img tag 
 */
function img2Change() {
  let allImages = []; // An empty list to hold all the images 
  for (let i = 0; i < images.length; i++) { // Iterating the nested list
    for (let j = 0; j < images[i].length; j++) {
      allImages.push(images[i][j]); // Add all the images to the empty list
    }
  }

  for (let i = 0; i < allImages.length; i++) { //Iterating the new list 
    let random = Math.floor(Math.random() * allImages.length); //Randomizing the images 
    allImages[i] = allImages[random];
    let img2 = document.getElementById("img2");
    img2.src = allImages[i];
  }
  // Update the counter
  count++;
  document.getElementById("counter").innerHTML = count;
  // Reset the countdown and start the timer again
  restartTime();
}
/**
 * This function is used with the onclick function to randomize images in img tag 
 */
function img3Change() {
  let allImages = []; // An empty list to hold all the images 
  for (let i = 0; i < images.length; i++) { // Iterating the nested list
    for (let j = 0; j < images[i].length; j++) {
      allImages.push(images[i][j]); // Add all the images to the empty list
    }
  }

  for (let i = 0; i < allImages.length; i++) { //Iterating the new list 
    let random = Math.floor(Math.random() * allImages.length); //Randomizing the images 
    allImages[i] = allImages[random];
    let img3 = document.getElementById("img3");
    img3.src = allImages[i];
  }
  // Update the counter
  count++;
  document.getElementById("counter").innerHTML = count;
  // Reset the countdown and start the timer again
  restartTime();

}
/**
 * This function randomizes img1Change() img2Change() and img3Change() functions 
 * together 
 */
function randomizeImages() {
  img1Change();
  img2Change();
  img3Change();

  // Update the counter
  document.getElementById("counter").innerHTML = count;

  // Reset the countdown and start the timer again
  restartTime();
}

function restartTime() {
  clearInterval(interval);
  time = document.getElementById("time").value;
  if (time == null || isNaN(time) || time < 500 || time > 10000){
    clearInterval(interval);
    time = 10000;
  }
  console.log("time in restart" + time);
  countdown = time / 1000;
  startCountdownInterval();
}




/**
 * This function is used to animate the images.
 * It was copied from the author
 * @author Steve Adams
 * 
 */
function do_animation(event) {
  target = event.srcElement;
  target.classList.remove('animate');
  setTimeout(() => { target.classList.add('animate'); }, 0);
}

/**
 * This function displays the dc() marvel() and marvel function
 */
function displayImage() {
  dc();
  marvel();
  starWars();
}
displayImage();

/**
 * This function is used to randomize the images in the StarWars() function
 */
function starWars() {
  const starWars = ["./img/1.jpg", "./img/2.jpg", "./img/3.png"];
  //https://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=10
  let random = Math.floor(Math.random() * starWars.length);
  document.getElementById("img1").src = starWars[random];
}

/**
 * This function is used to randomize the images in the dc() function
 */
function dc() {
  const dc = ["./img/4.jpg", "./img/5.jpg", "./img/6.jpg"];
  //https://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=10
  let random = Math.floor(Math.random() * dc.length);
  document.getElementById("img2").src = dc[random];
}

/**
 * This function is used to randomize the images in the marvel() function
 */
function marvel() {
  const marvel = ["./img/7.jpg", "./img/8.jpg", "./img/9.jpg"];
  //https://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=10
  let random = Math.floor(Math.random() * marvel.length);
  document.getElementById("img3").src = marvel[random];
}







