/**
 * Задание 4
 
Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям
отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность
для этого опросника, используя HTML, CSS и JavaScript.
1. Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен
иметь несколько вариантов ответов.
2. Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов.
3. Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса.
4. При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все
вопросы, и отобразить выбранные им варианты ответов.
5. Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить
на все вопросы перед завершением опроса.
6. По желанию можно добавить стилизацию опросника с использованием CSS для лучшего
пользовательского опыта.
*/

const questionsEL = document.querySelectorAll('.question');
const butBtnEl = document.querySelector('#submit');
const resultEl = document.querySelector('.result');
const resultListEL = document.querySelector('.result-list');

butBtnEl.addEventListener('click', () => {
    const answers = [];
    questionsEL.forEach(questionEl => {
        const answerEl = questionEl.querySelector('input:checked');
        if (answerEl) {
            answers.push(answerEl.value);
            questionEl.classList.remove('error');
        } else {
            questionEl.classList.add('error');
        }
    });
    if (answers.length === questionsEL.length) {
        resultEl.style.display = 'block';
        resultListEL.innerHTML = answers.map((answer, i) => `<p>Вопрос ${i + 1}: ${answer}</p>`).join('');
    }
});
