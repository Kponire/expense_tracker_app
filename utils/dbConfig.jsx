import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import *  as schema from './Schema'
const sql = neon("postgresql://ExpenseTracker_owner:0ktKGcf5sTwU@ep-round-salad-a2lf3heh.eu-central-1.aws.neon.tech/ExpenseTracker?sslmode=require");
export const db = drizzle(sql, {schema});

//const result = await db.select().from(...);