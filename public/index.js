const date = new Date()

const newYearsEve = function() {
    // let message = 'Today is New Years Eve';
    // if (date.getDate() === 31 && date.getMonth() === 11)
    //     return message
    // message = 'Today is not New Years Eve';
    // return message;

    const weekdays = [
        { name: 'sunday', number: 0, weekend: true, workDay: false },
        { name: 'monday', number: 1, weekend: false, workDay: true },
        { name: 'tuesday', number: 2, weekend: false, workDay: true },
        { name: 'wednesday', number: 3, weekend: false, workDay: true },
        { name: 'thursday', number: 4, weekend: false, workDay: true },
        { name: 'friday', number: 5, weekend: false, workDay: true },
        { name: 'saturday', number: 6, weekend: true, workDay: false },
    ];

    return `Today is ${weekdays[date.getDay()].name}`;

}

const day = newYearsEve();


// const answer = document.createElement('h1');
// answer.textContent = newYearsEve();
// document.body.append(answer.textContent);

// document.body.appendChild(answer);