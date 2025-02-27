const express = require('express')
const axios = require('axios')
const cors = require('cors')
const { GoogleGenerativeAI } = require('@google/generative-ai')

const app = express()
app.use(express.json())
app.use(cors())


const genAI = new GoogleGenerativeAI(API_KEY)

app.post('/generate-recipe', async(req, res) => {

    const { ingredients } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    if(!ingredients || ingredients.length === 0){
        return res.status(400).json({error: "error"})
    }

    try{
        const prompt = `I have these ingredients: ${ingredients.join(', ')}. Give me a simple recipe with steps.`;
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        res.json({ text });

}catch(error){
    console.error('Error fetching recipe:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate recipe' });
}});


app.listen(5000, console.log("server is running"));
