import express from 'express';
import StaffRoutes from "./routes/Staff-routes";
import FieldRoutes from "./routes/Field-routes";
import EquipmentRoutes from "./routes/Equipment-routes";
import CropRoutes from "./routes/Crop-routes";
import VehicleRoutes from "./routes/Vehicle-routes";
import MonitoringRoutes from "./routes/Monitoring-routes";
import cookieParser from 'cookie-parser';

import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use('/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

    next();
})
// Middleware
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cookieParser()); // Parse cookies

app.use('/staff',StaffRoutes);
app.use('/field',FieldRoutes);
app.use('/equipment',EquipmentRoutes);
app.use('/crop',CropRoutes);
app.use('/vehicle',VehicleRoutes);
app.use('/log',MonitoringRoutes);
// app.use('/auth', userRoutes);

console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);


app.listen(3000, () => {
    console.log(`Server running on port`);
});
