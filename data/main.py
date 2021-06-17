

import os
import socket
import json
import datetime
import pandas as pd
import psycopg2 as pg
import paho.mqtt.client as mqtt
from datetime import datetime
from urllib.parse import urlparse
# config broker
_host = "m16.cloudmqtt.com"
_port = 16584
_user_name = "pwwgnjod"
_pass_word = "XBgUZD1EvzDa"


# _host = "x1576841.en.emqx.cloud"
# _port = 11316
# _user_name = "vietnguyen940@gmail.com"
# _pass_word = "Anhvjet96"_


result = urlparse("postgresql://postgres:0000@127.0.0.1:5432/enegry")

# parse url database
username = result.username
password = result.password
database = result.path[1:]
hostname = result.hostname


def is_connected():
    try:
        # connect to the Host -- tells us if the Host is actually
        # reachable
        socket.create_connection(("www.google.com", 80))
        return True
    except OSError:
        pass
    return False
# connect to database postgresSQL


connection = pg.connect(
    database=database,
    user=username,
    password=password,
    host=hostname
)
# funcion query database


def run(query, params):
    with connection:
        with connection.cursor() as cursor:
            cursor.execute(query, params)
            connection.commit()
            return True

# The callback for when the client receives a CONNACK response from the server.


def on_connect(client, userdata, flags, rc):
    print("Connection to Broker {}:{} Successfully!".format(_host, _port))
    client.subscribe(("enegry", 1))

# The callback for when a PUBLISH message is received from the server.


def on_message(client, userdata, msg):
    topic = msg.topic
    content = msg.payload.decode('utf-8')
    objpayload = json.loads(content)

    if objpayload:
        query = """
            INSERT INTO sdm220table (device_id, frequency,powerfactor, voltage, current, power, enegry,timestamp)
            VALUES (%s, %s, %s, %s, %s, %s, %s,%s)
            """
        params = (objpayload["device_id"], objpayload["frequency"], objpayload["powerfactor"], objpayload["voltage"],
                  objpayload["current"], objpayload["power"], objpayload["enegry"], objpayload["timestamp"])
        run(query, params)


if __name__ == '__main__':
    try:
        if is_connected():
            # connect to broker
            client = mqtt.Client()
            client.connect(_host, _port, 60)
            client.username_pw_set(_user_name, _pass_word)
            client.on_connect = on_connect
            client.on_message = on_message
            client.loop_forever()
        else:
            print("No internet ...!, check your network !")
    except OSError:
        print(" No internet...!")
