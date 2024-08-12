import express from 'express';
import mysql from 'mysql2';
const app = express();
import cors from 'cors';
import methodOverride from 'method-override';

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const PORT = 5000;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'flash',
    password: 'sans',
    multipleStatements: true,
});
app.use(cors()); // allow cross origin resource sharing

app.get("/", (req, res) => {
    const q = 'SELECT * FROM flashcards';
    connection.query(q, (err, query_response) => {
        if (err) {
            req.flash('error', 'Error querying');
            return res.redirect('/');
        }
        res.send(query_response);
    })
})

// extract ques, ans from form and store in database
app.post("/add", (req, res) => {
    const { question, answer } = req.body;
    const q = 'INSERT INTO flashcards (question, answer) VALUES (?, ?)';
    connection.query(q, [question, answer], (err, result) => {
        if (err) {
            console.error('Error inserting into database:', err);
            return res.status(500).send('Error inserting into database');
        }
        res.status(201).send('Flashcard added successfully');
    });
});

// update any flash card's ques and ans
app.put("/:id", (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;
    const q = 'UPDATE flashcards SET question = ?, answer = ? WHERE id = ?';
    connection.query(q, [question, answer, id], (err, result) => {
        if (err) {
            console.error('Error updating database:', err);
            return res.status(500).send('Error updating database');
        }
        res.send('Flashcard updated successfully');
    });
});

// delete the card with id = id in route
app.delete("/:id", (req, res) => {
    const { id } = req.params;
    const q = 'DELETE FROM flashcards WHERE id = ?';
    connection.query(q, [id], (err, result) => {
        if (err) {
            console.error('Error deleting from database:', err);
            return res.status(500).send('Error deleting from database');
        }
        res.send('Flashcard deleted successfully');
    });
});

app.listen(PORT, () => {
    console.log("server is listening to port 5000");
})