let lesson = new Map()
    .set('Математика', 'Смирнов')
    .set('История', 'Иванова');

const ivanLessons = new Set()
    .add('Математика')
    .add('История');

const students = new Map()
    .set('Иван', ivanLessons);

console.log(`Преподаватель по Метаматике: ${lesson.get('Математика')}`);
console.log(`Уроки Ивана: ${[...students.get('Иван')]}`);