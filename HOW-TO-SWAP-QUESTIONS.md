# How to Swap Question Sets

This Jeopardy game supports multiple question sets with different numbers of categories.

## Available Question Sets

1. **questions.js** - 5 categories, 25 total questions (5 rows × 5 categories)
2. **questions-2.js** - 4 categories, 20 total questions (5 rows × 4 categories)

## How to Swap

### Method 1: Edit index.html (Recommended)

Open `index.html` and find this section near the top (around line 16-19):

```html
<!-- Questions Database -->
<!-- TO SWAP QUESTION SETS: Simply change the filename below -->
<!-- <script src="questions.js"></script> --> <!-- 5 categories, 25 questions -->
<script src="questions.js"></script>
<!-- <script src="questions-2.js"></script> --> <!-- 4 categories, 20 questions -->
```

**To use questions.js (5 categories):**
```html
<script src="questions.js"></script>
<!-- <script src="questions-2.js"></script> -->
```

**To use questions-2.js (4 categories):**
```html
<!-- <script src="questions.js"></script> -->
<script src="questions-2.js"></script>
```

Simply comment out the one you don't want and uncomment the one you want to use.

### Method 2: One-Line Change

If you want the simplest possible swap, just change line 17 from:
```html
<script src="questions.js"></script>
```
to:
```html
<script src="questions-2.js"></script>
```

## The Game Automatically Adapts!

The game board will automatically:
- ✅ Adjust the number of columns based on categories
- ✅ Calculate the correct total questions for winner detection
- ✅ Properly display all categories and questions
- ✅ Work with any number of categories (tested with 4 and 5)

## Editing Questions

### For questions.js
Edit the file `questions.js` directly. It has 5 categories.

### For questions-2.js
Edit the file `questions-2.js` directly. It has 4 categories.

Both files have the same structure:
```javascript
const jeopardyQuestions = {
    categories: [
        "Category 1",
        "Category 2",
        // ...
    ],
    questions: [
        // Row 1 - 100 points
        [
            { category: "...", points: 100, question: "...", answer: "..." },
            // ...
        ],
        // Row 2 - 200 points
        // ...
    ]
};
```

## Creating New Question Sets

To create additional question sets:

1. Copy `questions.js` or `questions-2.js` 
2. Rename it (e.g., `questions-3.js`)
3. Edit the categories and questions
4. Update the `<script src="...">` line in `index.html`

**Important:** Make sure each row has the same number of questions as you have categories!

## Notes

- The game supports any number of categories (not just 4 or 5)
- Each row should have exactly as many questions as categories
- Points typically go: 100, 200, 300, 400, 500
- The winner screen shows automatically when all questions are answered

