const faker = require('faker');

function randomPost() {
    const post = {
        firstName: faker.options.firstName(),
        lastName: faker.options.lastName(),
        image: faker.image.transport(),
        views: faker.number.int({
            min: 0,
            max: 100
        }),
        likes: faker.number.int({
            min: 0,
            max: 100
        }),
        saved: faker.random.boolean()
    };
    return post;
}

module.exports = randomPost;


