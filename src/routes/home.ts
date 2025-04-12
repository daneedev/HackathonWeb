import { data } from 'cheerio/lib/api/attributes';
import express from 'express';
import fs from 'fs';
const router = express.Router();

router.get("/pot", function (req, res) {
    const id = req.query.id;
    if (!id) {
        res.status(400).send("ID is required");
        return;
    }
    // Read data from the file
    const file = fs.readFileSync(`./src/public/data/data-${id}.json`, "utf-8");
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
    res.render("pot.html", {
        soilStatus: soilStatus,
        id: id
    });
});

router.get("/charts", function (req, res) {
    const id = req.query.id;
    if (!id) {
        res.status(400).send("ID is required");
        return;
    }
    res.render("charts.html", {
        id: id,
    });
});

router.get("/", function (req, res) {
    const files = fs.readdirSync("./src/public/data/");
    const dataFiles = files.filter(file => file.endsWith(".json"));
    const ids = dataFiles.map(file => file.match(/data-(\d+)\.json/)?.[1]).filter(Boolean);
    const time = dataFiles.map(file => {
        const f = fs.readFileSync(`./src/public/data/${file}`, "utf-8");
        const jsonData = JSON.parse(f);
        return jsonData[jsonData.length - 1].time;
    });
    const idsWithTime = ids.map((id, index) => ({
        id: id,
        time: time[index]
    }));
    res.render("index.html", {
        plants: idsWithTime
    });
});

export default router;