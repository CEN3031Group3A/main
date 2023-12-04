// Post.js

import { faker } from '@faker-js/faker';

const randomPost = () => {
    const post = {
        id: faker.string.uuid(),
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
        liked: faker.datatype.boolean(),
        saved: faker.datatype.boolean(),
        level: faker.helpers.arrayElement(['Organizational', 'Classroom', 'Public']),
        projectTitle: faker.lorem.words() // Add project title
    };
    return post;
}

export default randomPost;
