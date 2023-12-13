# Tests

> Full stack test suite

<br/>

## Setup

1. Install dependencies `yarn`

2. Run the service `yarn start` 

   > Make sure to delete the db container to make sure it rebuilds for testing

<br/>

## Testing

### Functional 

- Framework – Jest
- Usage – Test UI w/ snapshots and mocking
- Run  `yarn functional`

### Integration

- Framework – Jest
- Usage – Test all the API endpoints for roles, data access, and function
- Run `yarn integration`

### Performance

- Framework – K6
- Usage – Stress and Load test the application
- Run yarn `performance`

### How to run Gallery page
Open your terminal and direct to the client folder of the project.
On the terminal enter yarn start
Go to http://localhost:3000/gallery

Click the plus sign to add more post

### How to run Discussion page
On the terminal enter yarn start
Go to http://localhost:3000/discussion


