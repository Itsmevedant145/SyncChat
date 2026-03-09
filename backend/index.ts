import 'dotenv/config'; // <- Bun-compatible dotenv import

import app from "./src/app";
import { connectDB } from "./src/config/database";

const PORT = process.env.PORT || 7020;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});