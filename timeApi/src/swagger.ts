import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    servers: [{ url: 'http://localhost:8024/api-docs' }],
    openapi: '3.0.0',
    info: {
      title: 'Time API',
      version: '1.0.0',
      description: 'Tiny API to convert time ',
    },
  },
  apis: ['./src/controllers/*.ts'], 
};

const specs = swaggerJSDoc(options);

export {specs};