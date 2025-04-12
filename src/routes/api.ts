import express from 'express';
import fs from 'fs';
import dayjs from 'dayjs';
const router = express.Router();

router.post("/sendData", function (req, res) {
    let { RawData, id } = req.body;
    res.status(200).json({
        message: "Data received successfully",
        data: {
            RawData: RawData,
            id: id
        }
    });
    RawData = RawData.replace("\x00", "").replace("\r\n", "");
    if (RawData === "") {
        console.log("No data received");
        return;
    }
    const data = RawData.split(",");
    const AirHumidity = parseFloat(data[0]);
    const AirTemperature = parseFloat(data[1]);
    const SoilMoisture = parseFloat(data[2]);
    const LightIntensity = parseFloat(data[3]);
    // Save data to a file
    
    let file: string;
    if (fs.existsSync(`./src/public/data/data-${id}.json`)) {
        file = fs.readFileSync(`./src/public/data/data-${id}.json`, "utf-8");
    } else {
        fs.writeFileSync(`./src/public/data/data-${id}.json`, "[]", "utf-8");
    }
    file = fs.readFileSync(`./src/public/data/data-${id}.json`, "utf-8");
    const jsonData = JSON.parse(file);
    const date = dayjs()
    jsonData.push({
        time: `${date.hour() + 2}:${addZero(date.minute())}`,
        temperature: AirTemperature,
        airHumidity: AirHumidity,
        soilMoisture: SoilMoisture,
        lightIntensity: LightIntensity
    });
    fs.writeFileSync(`./src/public/data/data-${id}.json`, JSON.stringify(jsonData, null, 2), "utf-8");

    console.log("Data received:", req.body);
})


function addZero(i : number) {
    if (i < 10) {
        return "0" + i;
    } else {
        return i;
    }
}


export default router;