const Quiz = require("../models/Quiz");

module.exports = {
    async createQuiz (req, res) {
        const data = req.body;

        try {
            const quiz = await Quiz.create(data);

            return res.json(quiz);
        } catch (error) {   
            return res.json(error)
        }
    },

    async list (req, res) {
        try {
            const quiz = await Quiz.find();

            return res.json(quiz);
        } catch (error) {   
            return res.json(error)
        }
    },

    async sendQuestion (req, res) {
        const {id} = req.params;

        try {
            const {question} = await Quiz.findById(id);

            res.render('index', {question, id})

        } catch (error) {
          
            return res.json(error)
        }
    },

    async sendAnswer (req, res) {
        const {id} = req.params;
        const {answer} = req.body;

        try {
            const {expectedAnswer} = await Quiz.findById(id);

            let point='Errou';

            if(expectedAnswer == answer) {
                point = 'Acertou';
            }

            return res.json(point)

        } catch (error) {
            console.log(error)
            return res.json(error)
        }
    }
}