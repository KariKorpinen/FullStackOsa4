const mongoose = require('mongoose')

//const url = 'mongodb://fullstack:fullstack@ds211088.mlab.com:11088/fullstack-notes'
const url = 'mongodb://blogiuser:mail30@ds249128.mlab.com:49128/blogi'
//const url = process.env.MONGODB_URI

mongoose.connect(url)
mongoose.Promise = global.Promise

const Blog = mongoose.model('Blog', {
  title: String,
  author: String,
  url: String,
  likes: Number
})

Blog
  .find({})
  .then(result => {
    result.forEach(blog => {
      console.log(blog)
    })
    mongoose.connection.close()
  })



/*const note = new Note({
  content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
  date: new Date(),
  important: false
})

note
  .save()
  .then(response => {
    console.log('note saved!')
    mongoose.connection.close()
  })
*/