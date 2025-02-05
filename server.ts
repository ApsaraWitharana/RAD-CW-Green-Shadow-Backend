import express from 'express';
import StaffRoutes from "./routes/Staff-routes";
import FieldRoutes from "./routes/Field-routes";
import EquipmentRoutes from "./routes/Equipment-routes";
import CropRoutes from "./routes/Crop-routes";

const app = express();

app.use(express.json());

app.use('/staff',StaffRoutes);
app.use('/field',FieldRoutes);
app.use('/equipment',EquipmentRoutes);
app.use('/crop',CropRoutes);


app.listen(3000, () => {
    console.log(`Server running on port`);
});
