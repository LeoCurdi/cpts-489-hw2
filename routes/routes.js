const express = require("express");
const router = express.Router();
const { signature } = require("../models")

// Get all signatures
router.get("/", async (req, res) => {
    try {
        const signatures = await signature.findAll();
        res.json(signatures);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Create a signature
router.post("/", async (req, res) => {
    try {
        const {name, email, city, state} = req.body;
        const newSignature = await signature.create({name, email, city, state});
        res.json(newSignature);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router; // Need to export the router, not an object