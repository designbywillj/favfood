// Container holding emoji character
var emoji = document.getElementById('emoji')

// Wrapper holding buttons
var btnWrapper = document.getElementById('btn-wrapper')

// Store list of selections
var selections = {
    steak: '🥩',
    sushi: '🍣',
    pizza: '🍕',
    spaghetti: '🍝'
}

// Store keys and values from 'selections' object
var selectionsKeys = Object.keys(selections)
var selectionsValues = Object.values(selections)

// Generate buttons from 'selections' object
function generateBtns() {
    for (i = 0; i < selectionsKeys.length; i++) {
        var btn = document.createElement('button')
        btn.type = 'button'
        btn.id = selectionsKeys[i]
        btn.innerText = selectionsKeys[i]
        btn.className = 'btn'
        btnWrapper.appendChild(btn)
    }
}
generateBtns()

// Event listener for buttons
btnWrapper.addEventListener('click', function(e) {
    // Stores targeted button
    target = e.target;
    
    // Stores ID of targeted button
    targetId = target.id;

    // Conditional statement for changing emoji based on selection
    switch (targetId) {
        case 'steak':
            emoji.innerText = selections.steak
            break;
        case 'sushi':
            emoji.innerText = selections.sushi
            break;
        case 'pizza':
            emoji.innerText = selections.pizza
            break;
        case 'spaghetti':
            emoji.innerText = selections.spaghetti
            break;
    }
})