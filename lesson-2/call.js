const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        street: '123 Main St'
    },
    contacts: {
        email: 'john@example.com',
        phone: '+1234567890',
    }
};

const email = user?.contacts?.email;
console.log(email);

const defaultValue = user?.otherValue ?? 'Default Value';
console.log(defaultValue);

const streetName = user?.address?.street ?? 'Unknown';
console.log(streetName);