import express from 'express';
const router = express.Router();

router.post("/sendData", function (req, res) {
    const { AirHumidity, AirTemperature, SoilMoisture, LightIntensity } = req.body;
    res.status(200).json({
        message: "Data received successfully",
        data: {
            AirHumidity,
            AirTemperature,
            SoilMoisture,
            LightIntensity
        }
    });
})

export default router;