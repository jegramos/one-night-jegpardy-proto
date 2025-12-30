# Jeopardy Game 🎆

A modern, interactive Jeopardy game!

## Features

- 🎆 Smooth animations and visual effects
- 👥 Support for 0-10 teams with customizable names
- 💾 Auto-save progress using localStorage
- 📋 Board management - create and manage multiple game boards
- 🎮 Resume game functionality
- ⌨️ Full keyboard shortcuts support
- 📱 Responsive design for mobile and desktop

## How to Play

1. Open `index.html` in your web browser
2. Select a game board from the dropdown
3. Select the number of teams
4. Click "Start Game!" (or "Resume Game" if you have a saved game)
5. Click on any question to reveal it
6. Press `Space` to reveal the answer
7. **After revealing the answer**, click on a team to select them, then:
   - Click "✓ Correct" to add points
   - Click "✗ Wrong" to subtract points
   - Or use keyboard shortcuts (see below)
8. Press `ESC` to continue to the next question

## Board Management

Click "Manage Boards" to:

- Create custom game boards
- Edit existing boards (categories and questions)
- Delete boards
- Boards are automatically saved to localStorage

**Note:** Incomplete boards (with missing questions) can be saved but won't be selectable for games until completed.

## Keyboard Shortcuts

### In Modal (Question/Answer Screen)

- `Space` - Reveal answer
- `ESC` - Close modal / Continue
- `1-9` - Select team (after answer is revealed)
- `↑` - Add points to selected team (Correct answer)
- `↓` - Subtract points from selected team (Wrong answer)

### Anytime

- Click team names and scores to edit them directly

## Files

- `index.html` - Main game file (UI and game logic)
- `seed-questions.js` - Default game boards (seeded on load)
- Custom boards are stored in browser localStorage

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
