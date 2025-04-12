AirHum = 0
AirTemp = 0
SoilHum = 0
LightSensor = 0

# CONFIG
sendRate = 60000 # 60 seconds (default)

def on_forever():
    global AirHum, AirTemp, SoilHum, LightSensor
    serial.redirect(SerialPin.P8, SerialPin.P0, BaudRate.BAUD_RATE9600)
    dht11_dht22.query_data(DHTtype.DHT22, DigitalPin.P2, True, False, False)
    AirHum = dht11_dht22.read_data(dataType.HUMIDITY)
    AirTemp = dht11_dht22.read_data(dataType.TEMPERATURE)
    SoilHum = pins.analog_read_pin(AnalogReadWritePin.P1)
    LightSensor = pins.analog_read_pin(AnalogReadWritePin.P3)
    if dht11_dht22.read_data_successful():
        serial.write_line(AirHum + ",   " + str(AirTemp) + "," + str(SoilHum) + "," + str(LightSensor))
    basic.pause(sendRate)
basic.forever(on_forever)
