$(function () {
    var currentDay = dayjs().format('MMM DD, YYYY')
    $('#currentDay').append(currentDay);
    var now = Number((dayjs().format('H')));
    console.log( now)
    var container = $('.container-lg');
    for (var i = 9; i < 18; i++) {
        // Creating elements 
        var hourBlock = JSON.parse(localStorage.getItem(`Hour-${i}`));
        var timeLongFormat = (dayjs().hour(i).format('H'));
        var timeBlockDiv = $('<div>').addClass('row time-block future').attr('id', timeLongFormat);
        var hourInfoSection = $('<textarea>').addClass('col-8 col-md-10 description').text(hourBlock);
        var hourTextArea = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(dayjs().hour(i).format('hA')).attr('id', i);
        var saveBtn = $('<button>').addClass('btn saveBtn col-2 col-md-1');
        var icon = $('<i>').addClass('fas fa-save');
        // append elements
        timeBlockDiv.append(hourTextArea);
        timeBlockDiv.append(hourInfoSection);
        timeBlockDiv.append(saveBtn);
        saveBtn.append(icon);
        container.append(timeBlockDiv);
        
        if (i < now) {
            console.log(i + "<" + now + "" + "past")
            timeBlockDiv.removeClass('future present');
            timeBlockDiv.addClass('past');
        } else if (i > now) {
            console.log(i + ">" + now + "" + "future")
            timeBlockDiv.removeClass('past present');
            timeBlockDiv.addClass('future');
        } else {
            console.log("current")
            timeBlockDiv.removeClass('past future');
            timeBlockDiv.addClass('present');
        }
    }
    container.on('click', '.saveBtn', function () {
        var currentEl = $(this).prev('hourInfoSection').val();
        var hour = (Number($(this).parent()[0].id));
        if (hour > 12) { hour = hour - 12; }
        hour = 'Hour-' + hour;
        localStorage.setItem(hour, JSON.stringify(currentEl));
    })
});
