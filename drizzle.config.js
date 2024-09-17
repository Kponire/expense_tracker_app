/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://ExpenseTracker_owner:0ktKGcf5sTwU@ep-round-salad-a2lf3heh.eu-central-1.aws.neon.tech/ExpenseTracker?sslmode=require",
    }
  };