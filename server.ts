import express from 'express';
import StaffRoutes from "./routes/Staff-routes";
import FieldRoutes from "./routes/Field-routes";

const app = express();

app.use(express.json());

app.use('/staff',StaffRoutes);
app.use('/field',FieldRoutes);

app.listen(3000, () => {
    console.log(`Server running on port`);
});
