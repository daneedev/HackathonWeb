# SmartEcosystem
SmartEcosystem s využitím microbitu a ESP32
## Soubory
- Nachází se v adresáři [files/](https://github.com/daneedev/HackathonWeb/tree/main/files)
### ESP.py
- Konfigurační soubor v Micropythonu pro ESP32.
- Hodnoty:
    - PotId - Id květináče pro dashboard
    - WIFISSID - Název sítě
    - WIFIPassword - Heslo sítě
### Microbit.py & Microbit.hex
- Skript v Micropythonu a soubor HEX pro MicroBit
- Hodnoty:
    - sendRate - Každých x milisekund odešle data do ESP32, který je přepošle na web.

### Webový ovládací panel
- https://hackathon.danee.dev
- Otevřít pro selfhost
