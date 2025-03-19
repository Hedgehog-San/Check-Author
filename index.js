const express = require('express');
const app = express();
const port = 3000;

// Author verification route
app.get('/verify-author', (req, res) => {
    const author = req.query.author;
    const validAuthor = "ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡";

    if (author === validAuthor) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

app.listen(port, () => {
    console.log(`Author verification API listening at http://localhost:${port}`);
});
