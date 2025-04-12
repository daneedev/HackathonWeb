import urequests
import wifiCfg
import machine

# CONFIG
PotId = 1 # Any free number on the dashboard
WIFISSID="" # Name of the wifi network  
WIFIPassword="" # Password of the wifi network



wifiCfg.doConnect(WIFISSID, WIFIPassword)
uart2 = machine.UART(2, tx=14, rx=13)
uart2.init(9600, bits=8, parity=None, stop=1)
while True:
  if uart2.any():
    data = ((uart2.read()).decode())
    req = urequests.request(method='POST', url='https://hackathon.danee.dev/api/sendData',
    json={
    'RawData': data,
    'id': PotId
    }, 
    headers={})
    gc.collect()
    req.close()
  wait_ms(2)