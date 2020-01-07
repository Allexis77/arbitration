var countDate = new Date ('Jan 12, 2020 00:00').getTime();
function newYear() {
    var now = new Date().getTime();
        gap = countDate - now;

        var second = 1000;
        var minunate = second * 60 ;
        var hour = minunate * 60;
        var day = hour * 24;
        
        var d = Math.floor(gap / (day));
        var h = Math.floor((gap % (day)) / (hour));
        var min = Math.floor((gap % (hour)) / (minunate));
        var sec = Math.floor((gap % (minunate)) / (second));

        document.getElementById('days').innerText = d;
        document.getElementById('hours').innerText = h;
        document.getElementById('minunates').innerText = min;
        document.getElementById('seconds').innerText = sec;

    }

    setInterval(function(){
        newYear();
    }, 1000)