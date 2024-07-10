/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview_owner:J8TcZSjlVx7g@ep-rapid-sea-a5y6n8q3.us-east-2.aws.neon.tech/ai_interview?sslmode=require',
    }
};