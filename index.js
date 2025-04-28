const express = require('express');
const app = express();
const PORT = 4500;

// Dummy trainer data
const trainers = [
  { id: 1, name: 'Alex Fit', specialty: 'Strength Training', city: 'Sydney', image: '/alex.jpg' },
  { id: 2, name: 'Sara Lean', specialty: 'Weight Loss', city: 'Melbourne', image: '/sara.jpg' }
];

// Dummy about data
const about = {
  title: 'About Us',
  description: 'We are a gym dedicated to helping you achieve your fitness goals.'
};

// Setup
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req,res)=>{
  res.render('about', {about});
})
app.get('/trainers', (req, res) => {
  res.render('trainers', { trainers });
});

app.get('/trainers/:id', (req, res) => {
  const trainer = trainers.find(t => t.id == req.params.id);
  if (!trainer) return res.status(404).send('Trainer not found');
  res.render('trainer', { trainer });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
