const notesRouter = require('express').Router()

const Blog = require('../models/blog')

const formatBlog = (blog) => {
  return {
    
    title: blog.title,
    author: blog.author,
    url: blog.url,
    likes: blog.Number
  }
}

  notesRouter.get('/', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs.map(formatBlog))
    })
})

notesRouter.post('/', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

module.exports = notesRouter