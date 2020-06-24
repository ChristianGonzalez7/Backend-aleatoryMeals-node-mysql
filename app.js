import express from 'express';

const app = express;















const PORT = process.env.port || 9001;
express.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
