require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const API_KEY = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(API_KEY);

const generateRecipe = async(req, res) => {


    const { ingredients } = req.body;

    if(!ingredients || ingredients.length == 0){
        return res.status(400).json({ error: "No ingredients provided" });
    }

    try{
        const prompt = `I have these ingredients: ${ingredients.join(', ')}. Give me a simple recipe with steps.`;
        const model = genAI.getGenerativeModel({model: "gemini-pro"})
        const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });
        const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";
        res.json({ recipe: responseText.trim() });

    }catch(error){
        console.error('Error fetching recipe:', error.message);
        res.status(500).json({ error: 'Failed to generate recipe' })

    }
}

exports.generateRecipe = generateRecipe;