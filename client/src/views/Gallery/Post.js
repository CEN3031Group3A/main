import { faker } from '@faker-js/faker';

const randomPost= () => {
    const post = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        image: faker.internet.emoji(),
        views: faker.number.int({
            min: 0,
            max: 100
        }),
        likes: faker.number.int({
            min: 0,
            max: 100
        }),
        saved: faker.datatype.boolean(),
        level: faker.helpers.arrayElement(['organizational', 'local', 'public'])
    };
    return post;
}

export default randomPost;

