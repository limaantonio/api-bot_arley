const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  question: {
    type: String,
    require: true,
  },

  expectedAnswer: {
    type: String,
    require: true,
  },

  answerA: {
    type: String,
    require: false,
  },
  
  answerB: {
    type: String,
    require: false,
  },

  answerC: {
    type: String,
    require: false,
  },

  answerD: {
    type: String,
    require: false,
  },

  answer: {
    type: String,
    require: false,
  },

  createdAt: {
    type: Date,
    default: Date.now()
  },
});

module.exports = mongoose.model('Quiz', QuizSchema);