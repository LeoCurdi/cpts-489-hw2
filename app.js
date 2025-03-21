
//Email should have an '@'
//Name should be within 5 to 20 characters in length
//State should be a string of length 2 and uppercase

document.getElementById("myForm").addEventListener("submit", function(event) { 
    const emailInput = document.getElementById("email").value
    const nameInput = document.getElementById("name").value
    const stateInput = document.getElementById("state").value
/*         alert("Email: " + emailInput)
    alert("Name: " + nameInput)
    alert("State: " + stateInput) */

    if (!emailInput.includes("@")) {
        alert("Please enter a valid email address")
        event.preventDefault() // prevent the form submission
    }

    if (nameInput.length < 5 || nameInput.length > 20) {
        alert("Please enter a name between 5 and 20 characters")
        event.preventDefault()
    }

    if (stateInput.length !== 2 || stateInput !== stateInput.toUpperCase()) {
        alert("Please enter a valid state")
        event.preventDefault()
    }

})