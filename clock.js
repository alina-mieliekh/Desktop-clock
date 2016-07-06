let calculateTime = function(){
    let clock = new Date();

    let oneSecond = clock.getSeconds()*360/60;
    let oneMinute = clock.getMinutes()*360/60 + oneSecond/60;
    let oneHour = (clock.getHours()%12)*360/12 + oneMinute/12;

    $('.arrow-hours').css('transform', 'rotate('+oneHour+'deg)');
    $('.arrow-minutes').css('transform', 'rotate('+oneMinute+'deg)');
    $('.arrow-seconds').css('transform', 'rotate('+oneSecond+'deg)');

};

setInterval(calculateTime, 1000);
