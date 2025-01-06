
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/coursework', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
   .then(() => console.log('MongoDB connected'))
   .catch((err) => console.error(err));

// Routes
app.use('/api/items', itemRoutes);

app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
});

