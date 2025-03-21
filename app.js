
//Email should have an '@'
//Name should be within 5 to 20 characters in length
//State should be a string of length 2 and uppercase

document.getElementById("myForm").addEventListener("submit", function(event) { 
    const emailInput = document.getElementById("email").value
    const nameInput = document.getElementById("name").value
    const stateInput = document.getElementById("state").value

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

const fetchSignatures = async () => {
    const response = await fetch("http://localhost:5000/api/signatures")
    const signatures = await response.json()
    console.log("\n\nprinting signatures\n\n")
    console.log(signatures)
}
fetchSignatures()