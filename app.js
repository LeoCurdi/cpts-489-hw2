
//Email should have an '@'
//Name should be within 5 to 20 characters in length
//State should be a string of length 2 and uppercase

document.getElementById("myForm").addEventListener("submit", async function(event) {
    event.preventDefault() // prevent the form from submitting the default way

    // Get the values entered by the user
    const nameInput = document.getElementById("name").value
    const emailInput = document.getElementById("email").value
    const cityInput = document.getElementById("city").value
    const stateInput = document.getElementById("state").value

    // Validate the values
    if (!emailInput.includes("@")) {
        alert("Please enter a valid email address")
        return
    }

    if (nameInput.length < 5 || nameInput.length > 20) {
        alert("Please enter a name between 5 and 20 characters")
        return
    }

    if (stateInput.length !== 2 || stateInput !== stateInput.toUpperCase()) {
        alert("Please enter a valid state")
        return
    }

    // If valid input, create a new object to store the data
    const newSignature = {
        name: nameInput,
        email: emailInput,
        city: cityInput,
        state: stateInput
    }
    //console.log(newSignature)

    // Send the data to the server with a POST request
    const response = await fetch("http://localhost:5000/api/signatures", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSignature)
    })

    // If the server responds with a 200 status code, the data was successfully stored
    if (response.status === 200) {
        alert("Thank you for signing the petition!")
        updateSignaturesList()
    }
    else {
        alert("An error occurred.")
    }
})

const fetchSignatures = async () => {
    const response = await fetch("http://localhost:5000/api/signatures")
    const signatures = await response.json()
    //console.log("\n\nprinting signatures\n\n")
    //console.log(signatures)
    return signatures
}

const updateSignaturesList = async () => {
    const updatedSignatures = await fetchSignatures()
    const frontendSignatures = document.getElementById("signaturesList")
    frontendSignatures.innerHTML = `                
        <div class="grid grid-cols-3">
            <div class="border py-2 px-2 font-bold py-2">name</div>
            <div class="border py-2 px-2 font-bold">City</div>
            <div class="border py-2 px-2 font-bold">State</div>
        </div>
    ` // start by clearing the front end

    // Add each signature to the front end
    updatedSignatures.forEach((signature, i) => {
        const newSignatureContainer = document.createElement("div")
        newSignatureContainer.classList.add("grid", "grid-cols-3")
        if (i % 2 === 0) {
            newSignatureContainer.classList.add("bg-gray-100")
        }
        newSignatureContainer.innerHTML = `
            <div class="border py-2 px-2 ">${signature.name}</div>
            <div class="border py-2 px-2 ">${signature.city}</div>
            <div class="border py-2 px-2 ">${signature.state}</div>
        `

        frontendSignatures.appendChild(newSignatureContainer)
    })
}

updateSignaturesList() // display the initial signatures from the db when the page loads