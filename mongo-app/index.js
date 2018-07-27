const mongoose = require('mongoose');

// Obviously this changed to a url in production
mongoose.connect('mongodb://localhost/playground')
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.error('Could not connnect to MongoDB', err)
  })
