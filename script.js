
$(function () {
    var currentDay = dayjs().format('MMM DD, YYYY')
    $('#currentDay').append(currentDay);
    now = Number((dayjs().format('H')));
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


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    container.on('click', '.saveBtn', function () {
        var currentEl = $(this).prev('textarea').val();
        var hour = (Number($(this).parent()[0].id));
        if(hour > 12){hour = hour - 12;}
        hour = 'Hour-' + hour;
        localStorage.setItem(hour, JSON.stringify(currentEl));
    })

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
});
