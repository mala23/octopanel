console.log('Client-side code running');

const blo1 = document.getElementById('blo1');
blo1.addEventListener('click', function(e) {

  document.getElementById("blo1").className = "blower__active"

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('blo1','active');
  } else {
    alert('local storage not supported');
  }
});

const blo2 = document.getElementById('blo2');
blo2.addEventListener('click', function(e) {

  document.getElementById("blo2").className = "blower__active"

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('blo2','active');
  } else {
    alert('local storage not supported');
  }
});

const blo3 = document.getElementById('blo3');
blo3.addEventListener('click', function(e) {

  document.getElementById("blo3").className = "blower__active"

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('blo3','active');
  } else {
    alert('local storage not supported');
  }
});

const blo4 = document.getElementById('blo4');
blo4.addEventListener('click', function(e) {

  document.getElementById("blo4").className = "blower__active"

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('blo4','active');
  } else {
    alert('local storage not supported');
  }
});

const blo5 = document.getElementById('blo5');
blo5.addEventListener('click', function(e) {

  document.getElementById("blo5").className = "blower__active"

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('blo5','active');
  } else {
    alert('local storage not supported');
  }
});

const blo6 = document.getElementById('blo6');
blo6.addEventListener('click', function(e) {

  document.getElementById("blo6").className = "blower__active"

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('blo6','active');
  } else {
    alert('local storage not supported');
  }
});

const blo7 = document.getElementById('blo7');
blo7.addEventListener('click', function(e) {

  document.getElementById("blo7").className = "blower__active"

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('blo7','active');
  } else {
    alert('local storage not supported');
  }
});

const blo8 = document.getElementById('blo8');
blo8.addEventListener('click', function(e) {

  document.getElementById("blo8").className = "blower__active"

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('blo8','active');
  } else {
    alert('local storage not supported');
  }
});

const bloall = document.getElementById('bloall');
blo8.addEventListener('click', function(e) {

  document.getElementById("bloall").className = "blower__active"

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('bloall','active');
  } else {
    alert('local storage not supported');
  }
});

/*
document.getElementById('blo1').onclick = function() {

    var className = ' ' + myButton.className + ' ';

    if ( ~className.indexOf(' active ') ) {
        this.className = className.replace(' active ', ' ');
    } else {
        this.className += ' active';
    }
}
*/
