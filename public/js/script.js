console.log('Client-side code running');

const blo1 = document.getElementById('blo1');
blo1.addEventListener('click', function(e) {
  document.getElementById("blo1").className = "blower__active"
});

document.getElementById('myButton').onclick = function() {

    var className = ' ' + myButton.className + ' ';

    if ( ~className.indexOf(' active ') ) {
        this.className = className.replace(' active ', ' ');
    } else {
        this.className += ' active';
    }              
}
