import time
import json
import ast
from ctypes import *
from datetime import datetime
# from config.db import run,connection
from config.mqtt import connect_mqtt
from pymodbus.client.sync import ModbusSerialClient
client = ModbusSerialClient(
    method="rtu", port="COM4", stopbits=1, bytesize=8, parity='N', baudrate=9600)
client.connect()


def convert(s):
    i = int(s, 16)                   # convert from hex to a Python int
    cp = pointer(c_int(i))           # make this into a c integer
    fp = cast(cp, POINTER(c_float))  # cast the int pointer to a float pointer
    return fp.contents.value         # dereference the pointer, get the float


def analyticRegister(a, b):
    if a >= 0 and b >= 0:
        value = ''.join([hex(a)[2:].zfill(4), hex(b)[2:].zfill(4)])
        value = convert(value)
        return round(value, 3)


def sdm220():
    try:
        values = []
        for map in [0, 6, 12, 30, 70, 342]:
            value = client.read_input_registers(address=map, count=2, unit=1)
            if not value.isError():
                values.extend(value.registers)
        if len(values) > 0:
            data = {
                "device_id": "sdm220",
                "frequency": analyticRegister(values[8], values[9]),
                "powerfactor": analyticRegister(values[6], values[7]),
                "voltage": analyticRegister(values[0], values[1]),
                "current": analyticRegister(values[2], values[3]),
                "power": analyticRegister(values[4], values[5]),
                "enegry": analyticRegister(values[10], values[11]),
                "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }
        connect_mqtt("enegry", json.dumps(data))
        return values
    except:
        print("connect  timeout ...!")


if __name__ == '__main__':
    while True:
        sdm220()
        time.sleep(1)
