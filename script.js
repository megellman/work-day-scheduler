$(function () {
    var currentDay = dayjs().format('MMM DD, YYYY')
    $('#currentDay').append(currentDay);
    var now = Number((dayjs().format('H')));
    var container = $('.container-lg');
    for (var i = 9; i < 18; i++) {
        // Creating elements 
        var time = (dayjs().hour(i).format('H'));
        var timeBlockDiv = $('<div>').addClass('row time-block future').attr('id', time);
        var textArea = $('<textarea>').addClass('col-8 col-md-10 description');
        var hour = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(dayjs().hour(i).format('hA')).attr('id', i);
        var saveBtn = $('<button>').addClass('btn saveBtn col-2 col-md-1');
        var icon = $('<i>').addClass('fas fa-save');
        timeBlockDiv.append(hour);
        timeBlockDiv.append(textArea);
        timeBlockDiv.append(saveBtn);
        saveBtn.append(icon);
        container.append(timeBlockDiv);
        // Variable for testing time class change 
        // sampleTime = Number(dayjs().second(1673129942).format('H'));
            if (hour.attr('id') < now) {
                timeBlockDiv.removeClass('future present');
                timeBlockDiv.addClass('past');
            } else if (hour.attr('id') > now) {
                timeBlockDiv.removeClass('past present');
                timeBlockDiv.addClass('future');
            } else {
                timeBlockDiv.removeClass('past future');
                timeBlockDiv.addClass('present');
            }
    }
    container.on('click', '.saveBtn', function () {
        var currentEl = $(this).prev('textarea').val();
        var hour = (Number($(this).parent()[0].id));
        if(hour > 12){hour = hour - 12;}
        hour = 'Hour-' + hour;
        localStorage.setItem(hour, JSON.stringify(currentEl));
    })
});
