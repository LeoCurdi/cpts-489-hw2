
import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
    const [signatures, setSignatures] = useState([])
    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [cityInput, setCityInput] = useState("")
    const [stateInput, setStateInput] = useState("")

    // Get the signatures from the server
    useEffect(() => {
        fetch("http://localhost:4000/api/signatures")
            .then(response => response.json())
            .then(data => setSignatures(data))
    }, [])

    // Make a function to handle when the user submits the form to add a signature to the server
    const handleSubmit = (event) => {
        event.preventDefault()

/*         const nameInput = event.target.name.value
        const emailInput = event.target.email.value
        const cityInput = event.target.city.value
        const stateInput = event.target.state.value */
        const newSignature = { name: nameInput, email: emailInput, city: cityInput, state: stateInput }

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
            alert("Please enter a 2 char state abbreviation in all caps")
            return
        }

        // Send the data with a post
        fetch("http://localhost:4000/api/signatures", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSignature)
        })
        // Update the front end with the new signature
        .then(response => response.json())
        .then(newSignature => {
            setSignatures([...signatures, newSignature])
            // Clear the form.
            setNameInput("")
            setEmailInput("")
            setCityInput("")
            setStateInput("")
        })
    }

  return (
    <>
        <div class="bg-gray-600">
            <div class="w-[400px] grid grid-cols-4 gap-4 mx-auto text-white py-3">
                <div class="">Home</div>
                <div class="">About</div>
                <div class="">Categories</div>
                <div class="">Contact</div>
            </div>
        </div>
        <div class="max-w-screen-md p-2 pt-4 shadow-lg rounded-lg mx-auto mt-6 bg-white shadow-gray-500">
            <div class="px-2 mx-auto">
                
                <p class="font-bold text-xl text-center text-[rgb(0,0,148)]">Move CPTS 489 to Afternoon in Winter!</p>
                
                <div class="grid grid-cols-4 gap-4 py-2 ">
                    <div class="col-span-3 text-justify">
                        The image you see on the right is a representation of our professor every morning, right before his much-needed coffee that helps thaw him out a bit. Imagine having to wake up at 4 or 5 AM in the dead of winter just to prepare for class. Technically, since the sun hasn’t even risen yet, can we really call 4 AM "morning"? The frigid cold, combined with the mental fog of early hours, is an unfair battle both for students and faculty alike. No one should have to endure sub-zero temperatures just to attend an 8 AM lecture. Morning brain freeze inevitably leads to null pointer exceptions in our heads! For these reasons, we humbly request the administration to consider shifting CPTS 489 to a more humane afternoon time slot.
                    </div>
                    <div>
                        <img src="/s-l400-2.jpg" alt="frozen guy" class="w-full h-auto rounded-lg shadow-md"></img>
                    </div>
                </div>

                <p class="font-bold text-xl text-center text-red-500 py-2">Sign the petition</p>

                <div>
                    <form method="post" id="myForm" class="" onSubmit={handleSubmit}>
                        <input id="name" name="name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="Your Name" class="border rounded px-3 py-1 my-1 w-full"></input>
                        <input id="email" name="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="Your Email" class="border rounded px-3 py-1 my-1 w-full"></input>
                        <input id="city" name="city" value={cityInput} onChange={(e) => setCityInput(e.target.value)} placeholder="City" class="border rounded px-3 py-1 my-1 w-full"></input>
                        <input id="state" name="state" value={stateInput} onChange={(e) => setStateInput(e.target.value)} placeholder="State (eg WA)" class="border rounded px-3 py-1 my-1 w-full"></input>
                        <div class="text-center py-2">
                            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-full">Sign Petition</button>
                        </div>
                    </form>
                </div>

                <p class="font-bold text-xl text-center text-red-500 py-2">Signatures</p>
                <div class="grid grid-cols-1">
                    <div class="grid grid-cols-3">
                        <div class="border py-2 px-2 font-bold py-2">name</div>
                        <div class="border py-2 px-2 font-bold">City</div>
                        <div class="border py-2 px-2 font-bold">State</div>
                    </div>
                </div>
                <div class="grid grid-cols-1" id="signaturesList">
                    {signatures.map((signature, index) => (
                        <div className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-100' : ''}`} key={index}>
                            <div class="border py-2 px-2 ">{signature.name}</div>
                            <div class="border py-2 px-2 ">{signature.city}</div>
                            <div class="border py-2 px-2 ">{signature.state}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default App;
