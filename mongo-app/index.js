const mongoose = require('mongoose');

// Obviously this changed to a url in production
mongoose.connect('mongodb://localhost/playground')
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.error('Could not connnect to MongoDB', err)
  })

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const Course = mongoose.model('Course', courseSchema);
  const course = new Course({
    name: 'Node.js Course',
    author: 'Kelvan',
    tags: ['Node', 'Backend'],
    isPublished: true
  });
  const result = await course.save();
  console.log(result);
}

// Comparison operators available in MongoDB
// eq - equal
// ne - not equal
// gt - greater than
// gte - greater than or equal to
// lt - less than
// lte - less than or equal to
// in
// nin - not in

// To use regex with Mongo, we can replace a string with /^{string}/ if we want the regex to start with that string.
// If the regex is to end with that string, we can use /{string}$/
// If the regex string is somewhere in the strin but you're unsure where, we can use /.*{string}.*/

async function getCourses() {
  const res = await Course.find({
    price: { $gt: 10 } // replace the value with a $ to signify the greater than operator and the value to be used to draw the comparison.
  });
  console.log('RES', res);
}

getCourses();
