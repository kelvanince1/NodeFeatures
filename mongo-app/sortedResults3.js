const mongoose = require('mongoose');

// Obviously this changed to a url in production
mongoose.connect('mongodb://localhost/mongo-exercises')
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.error('Could not connnect to MongoDB', err)
  })

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
  return course = await Course
    .find({ isPublished: true })
    .or([
      { price: { $gte: 15 } },
      { name: /.*by.*/i }
    ])
    .sort({ name: 1 })
    .select({ name: 1, author: 1, price: -1 })
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
};

run();
