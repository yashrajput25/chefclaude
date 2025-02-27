require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { generateRecipe } = require('./controllers/generateRecipe');

const app = express();
app.use(express.json());
app.use(cors())

const API_KEY = process.env.GEMINI_API_KEY

app.post('/generate-recipe', generateRecipe );

app.listen(5000, console.log("server is running"));

