import jwt from "jsonwebtoken";

const secretKey = "your-secret-key";

// Sample JWT usage demonstrating type safety
const payload = { userId: "123", username: "user" };
const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

console.log("Server initialized successfully with TypeScript and jsonwebtoken.");
console.log("Sample token generated:", token);
