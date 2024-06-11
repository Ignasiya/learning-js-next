try {
    undefined = 1;
} catch (error) {
    console.log('Что-то произошло');
} finally {
    console.log('Отличный результат');
}

function divide(a, b) {
    try {
        const result = a / b;
        if (isNaN(result)) throw new Error('Результат не является числом');
        console.log('Результат деления: ', result);
    } catch (error) {
        console.error('Ошибка деления: ', error);
    } finally {
        console.log('Операция деления завершена');
    }
};

divide(10, 2);
divide(10, 0);

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

function validateNumber(value) {
    if (typeof value !== 'number') {
        throw new CustomError('Значение должно быть числом');
    }
    console.log('Валидация успешна');
}

try {
    validateNumber([]);
} catch (error) {
    if (error instanceof CustomError) {
        console.error('Ошибка:', error.message);
        console.log('Тип ошибки:', error.name);
    } else {
        console.error('Произошла ошибка: ', error);
    }
}