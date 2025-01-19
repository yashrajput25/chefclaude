# Chef Claude

Chef Claude is an interactive recipe suggestion app that allows users to input a list of ingredients they have on hand. Using the power of AI, Chef Claude generates a recipe tailored to the provided ingredients. The application makes use of the Hugging Face API for generating recipes dynamically.

---

## Features

- **Ingredient Management**: Add ingredients to your list dynamically.
- **AI-Generated Recipes**: Generate recipes based on your ingredient list using the Hugging Face API.
- **Interactive UI**: View your ingredients and the generated recipe through a clean and user-friendly interface.

---

## Technologies Used

- **React**: For building the front-end of the application.
- **Hugging Face Inference API**: For AI-powered recipe generation.

---

## Installation and Setup

Follow these steps to set up and run the project on your local machine:

### Prerequisites
1. Ensure you have **Node.js** and **npm** installed.
2. Obtain an API key from Hugging Face by creating an account on their platform.
3. Clone this repository to your local machine.

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/chef-claude.git
    cd chef-claude
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your Hugging Face API key:
    ```plaintext
    HF_ACCESS_TOKEN=your_huggingface_api_key
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

---

## File Structure

```
chef-claude/
|├── public/
|├── src/
|   |├── components/
|   |   |├── Main.jsx
|   |   |├── ClaudeRecipe.jsx
|   |   |└── IngredientList.jsx
|   |├── ai.js
|   |├── recipePrompt.js
|   |└── App.css
|├── .env
|├── package.json
|└── README.md
```

---

## Usage

1. **Add Ingredients**: Enter ingredients in the text box and click `+ Add Ingredient` to add them to the list.
2. **Generate a Recipe**:
    - Once you have more than three ingredients, click "Get a Recipe".
    - View the generated recipe powered by AI.

---

## Example Screenshot

![Screenshot 2025-01-19 224010](https://github.com/user-attachments/assets/ec3ee4fb-2cfc-444b-9aba-f9e143b04041)
![Screenshot 2025-01-19 223915](https://github.com/user-attachments/assets/2430ec80-8e80-4040-a46f-2ad8fff5439e)
![Screenshot 2025-01-19 224019](https://github.com/user-attachments/assets/25aa227f-8240-43ab-8350-0a510eb1fb85)

---

## Known Issues

- Ensure the Hugging Face API key is valid, or the app may fail to generate a recipe.
- The response time depends on the API and network connection.

---

## Future Enhancements

- **User Authentication**: Save and retrieve ingredient lists for individual users.
- **Recipe Ratings**: Allow users to rate and save generated recipes.
- **Expanded Recipe Models**: Integrate additional AI models for more diverse recipes.

---

## Contributing

 If you'd like to contribute, please:

1. Fork the repository.
2. Create a feature branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature"
    ```
4. Push the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

