import express from 'express';
import fs from 'fs';
const router = express.Router();

router.get("/", function (req, res) {
    // Read data from the file
    const file = fs.readFileSync("./src/public/data/data.json", "utf-8");
    const jsonData = JSON.parse(file);
    const lastData = jsonData[jsonData.length - 1];
    let soilStatus;
    if (lastData.soilMoisture >= 280 && lastData.soilMoisture <= 380) {
            soilStatus = 1;
    } else if (lastData.soilMoisture > 380) {
            soilStatus = 2;
    } else if (lastData.soilMoisture < 280) {
            soilStatus = 3;
    }
    res.render("index.html", {
        soilStatus: soilStatus,
    });
});

router.get("/charts", function (req, res) {
    res.render("charts.html", {
   
    });
});

export default router;