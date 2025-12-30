# Hawaiian New Year Jeopardy Game 🌺🎆

A modern, interactive Jeopardy game with a Hawaiian New Year party theme!

## Features

- 🏝️ Beautiful Hawaiian-themed UI with tropical colors and animations
- 🎆 Smooth animations and visual effects (fireworks, confetti)
- 👥 Support for 0-10 teams with customizable names
- 💾 Auto-save progress using localStorage
- ⌨️ Full keyboard shortcuts support
- 📱 Responsive design for mobile and desktop

## How to Play

1. Open `index.html` in your web browser
2. Select the number of teams
3. Click "Start Game!"
4. Click on any question to reveal it
5. Press `Space` to reveal the answer
6. **After revealing the answer**, click on a team to select them, then:
   - Click "✓ Correct" to add points
   - Click "✗ Wrong" to subtract points
   - Or use keyboard shortcuts (see below)
7. Press `ESC` to continue to the next question

## Keyboard Shortcuts

### In Modal (Question/Answer Screen)
- `Space` - Reveal answer
- `ESC` - Close modal / Continue
- `1-9` - Select team (after answer is revealed)
- `↑` - Add points to selected team (Correct answer)
- `↓` - Subtract points from selected team (Wrong answer)

### Anytime
- Click team names and scores to edit them directly

## How to Update Questions

All questions are stored in `questions.js` - simply edit this file to update the game content!

### Structure

```javascript
const jeopardyQuestions = {
    categories: [
        "Category 1",
        "Category 2",
        // ... up to 5 categories
    ],
    
    questions: [
        // Row 1 - 100 points
        [
            {
                category: "Category 1",
                points: 100,
                question: "Your question here",
                answer: "Your answer here"
            },
            // ... 5 questions (one per category)
        ],
        // ... up to 5 rows (100, 200, 300, 400, 500 points)
    ]
};
```

### Tips for Editing Questions

1. Keep the same structure (5 categories, 5 rows of questions)
2. Points should be: 100, 200, 300, 400, 500
3. Make sure each question's `category` matches one of the categories in the `categories` array
4. You can use HTML in questions and answers (e.g., `<br>` for line breaks)
5. Add emojis to categories for extra flair! 🎉

## Files

- `index.html` - Main game file (UI and game logic)
- `questions.js` - All questions and categories (edit this to update content)
- `2025-12-30-276.html` - Original reference file

## Customization

### Change Theme Colors

Edit the CSS variables in `index.html`:

```css
:root {
    --tropical-orange: #FF6B35;
    --ocean-blue: #004E89;
    --sunset-pink: #FF5E78;
    --palm-green: #00A878;
    --sand-yellow: #FFD23F;
    --night-purple: #3D2C8D;
    --firework-gold: #FFD700;
    --deep-ocean: #001F3F;
}
```

### Add More Teams

The game supports up to 10 teams by default. To increase this, update the team selector options in `index.html`.

## Browser Compatibility

Works best in modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

## Credits

Created with ❤️ using:
- Vanilla JavaScript
- Google Fonts (Righteous, Poppins)
- Animate.css

---

**Happy New Year! 🎊 Maligayang Bagong Taon! 🌺**

