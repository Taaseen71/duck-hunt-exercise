//TODO:
//?
//*
//!

window.onload = function () {
  let body = document.body;




  function createDuck() {


    function append(component1, component2) {
      component1.appendChild(component2);
    }

    // TODO: 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step

    //TODO: 1. create the element
    let duck1 = document.createElement("div");



    //TODO:   2. add a class to the element
    duck1.className += ('duck'); //Created Class Duck
    // console.log(duck1);
    body = document.getElementsByTagName("body")[0];
    //Created Body Variable

    //TODO:   3. append the element to the body )
    append(body, duck1);

    console.log("duck1 = ", duck1)

    console.log("body = ", body);






    //Attributes can be set to duck1 duck.setAttirbute('style', 'background-color:skyblue;')
    //or duck1.style.top = 2em

    // console.log(body.innerHTML);






    //TODO: 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
    //TODO: https://www.w3schools.com/jsref/met_win_setinterval.asp

    const flap = () => {
      this.setInterval(function () {
        duck1.classList.toggle('flap')

      }, 250);
    }


    flap();

    //I needed help with this one. Asked Joshua for help for the flaps

    //TODO: 3. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
    //TODO: a function `moveDuck` that takes a duck object as an argument and sets the
    //TODO: "top" and "left" CSS properties.
    //TODO: HINT: Use Math.random() * window.innerWidth    for "left"
    //TODO:       And Math.random() * window.innerHeight   for "top"


    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    function moveDuck(duck) {

      duck.style.top = `${Math.random() * window.innerHeight}px`;
      duck.style.left = `${Math.random() * window.innerWidth}px`;
      // console.log("top and left values are = ", (duck.style.top), (duck.style.left));  //*remove this

      return duck.style.top, duck.style.left;
    }
    // //*Ducks are teleporting

    //TODO: 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)
    moveDuck(duck1);

    let randomPosition = () => {
      setInterval(function () {
        moveDuck(duck1);
      }, 1000);
    }

    return randomPosition()










    //moveDuck(body, 'black', 'green');  works when replaced top with background, and set x and y arguments for top and left
    // let x = document.getElementsByTagName("H1")[0];
    // x.setAttribute("class", "democlass");





    //TODO: 5. Congratulations! Move on to part 2!

    // ---------------------------- PART 2 ---------------------------------

    //TODO: 6. Things are getting a bit messy. Let's create
    //TODO:    a "function" called createDuck() that does everything in 1-4
    //TODO:    and "returns" the duck object

  }







  //TODO: 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //TODO:    using our fancy new createDuck() function

  function multipleDuck() {
    let array = []
    for (let i = 0; i < 10; i++) {
      array.push(createDuck());
    }

    return array;
  }

  multipleDuck(createDuck());

  //TODO: 8. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //TODO:    it creates a duck, it appears in a random location
  //TODO: HINT: You may want to create a `randomPosition()` function that you can use
  //TODO:       to set the ducks' initial locations and in your `moveDuck()` function;
  //TODO:   function randomPosition() {

  //? BUT it already spawns at a random position?!? did i do it already?

  // 

  //TODO: 9. Keep going! Move onto part 3!

  //TODO: --------------------------- PART 3 ------------------------------------

  //TODO: 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //TODO:     the duck when you click on it!

  let pewPEW = [];

  // document.getElementsByClassName('duck')[0]
  //   .addEventListener('click', function (event) {
  //     alert('hi');
  //   });
  // document.getElementsByClassName('duck')[1]
  //   .addEventListener('click', function (event) {
  //     alert('hi');
  //   });
  // document.getElementsByClassName('duck')[2]
  //   .addEventListener('click', function (event) {
  //     alert('hi');
  //   });
  // document.getElementsByClassName('duck')[3]
  //   .addEventListener('click', function (event) {
  //     alert('hi');
  //   });
  // document.getElementsByClassName('duck')[4]
  //   .addEventListener('click', function (event) {
  //     alert('hi');
  //   });
  // document.getElementsByClassName('duck')[5]
  //   .addEventListener('click', function (event) {
  //     alert('hi');
  //   });
  // let bOOM = this.document.className += ('shot');
  // console.log(bOOM);

  for (let j = 0; j < 11; j++) {
    pewPEW.push(document.getElementsByClassName('duck')[j]);
    //? iterate through the ducks and add to pew pew
  }
  for (let k = 0; k < 11; k++) {
    pewPEW[k].addEventListener('click', function (event) {
      //pewPEW[k].setAttribute('class', 'shot') //? Joshua helped me with setAttribute
      // console.log("BOOM");

      //* OMG IT WORKS OMGOMGOMGOMGOMGOMGOMGOMGOMGOMGOMGOMGOMGOMGOMGOMG
      //? add event listeners to each of the ones, and add to class=shot
      //TODO: 12. After a duck has been clicked on, remove it from the DOM after
      setTimeout(function () { pewPEW[k].setAttribute('class', 'shot'); }, 1000)



    })
  }









  //TODO:     a short delay (1 second) Hint Hint...use setTimeout
  //TODO:     as for removing the element check out https://dzone.com/articles/removing-element-plain

  // TODO:13. Create a new function named checkForWinner() that reads the DOM
  //TODO:     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"

  //TODO: 14. BONUS: The ducks are moving pretty erratically, can you think
  //TODO:     of a way to adjust the ducks speed based on how far needs to move?

  //TODO: 15. BONUS: Add the "left" and "right" class to the duck based on the
  //TODO:     direction the duck is flying and change the way the duck is facing

  //TODO: FIN. You win 1 trillion tokens.  Play the day away!
}



