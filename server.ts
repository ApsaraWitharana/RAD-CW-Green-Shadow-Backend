import express from 'express';
import StaffRoutes from "./routes/Staff-routes";

const app = express();

app.use(express.json());
app.use('/staff',StaffRoutes);

app.listen(3000, () => {
    console.log(`Server running on port`);
});
