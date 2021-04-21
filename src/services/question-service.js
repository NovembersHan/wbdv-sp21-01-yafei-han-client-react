const QUIZZES_URL = process.env.QUIZZES_URL

export const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}
