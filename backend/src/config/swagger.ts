import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.3",

    info: {
      title: "Multi-Agent Procurement Approval API",
      version: "1.0.0",
      description: "API Documentation",
    },

    servers: [
      {
        url: "http://localhost:3000/api/v1",
      },
    ],
  },

  apis: ["./src/modules/**/*.routes.ts", "./src/modules/**/*.swagger.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
