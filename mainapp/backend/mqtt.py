
import os
import json
import datetime
import socket
import pandas as pd
import paho.mqtt.client as mqtt
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from datetime import datetime
from src.db import connection, run
# config broker
_host = "m16.cloudmqtt.com"
_port = 15018
_user_name = "lktyyrfw"
_pass_word = "bELQ4fq5UcYn"


def send_email(data):
    # config email
    msg = MIMEMultipart()
    msg['From'] = "vietnguyen940@gmail.com"
    msg['To'] = "vietnguyen260396@gmail.com"
    msg['Subject'] = "Alarm Enegry"
    email = smtplib.SMTP('smtp.gmail.com', 587)
    email.starttls()
    email.login("vietnguyen940@gmail.com", "anhvjet96")
    msg.attach(MIMEText(data, 'plain'))
    email.sendmail("vietnguyen940@gmail.com",
                   "vietnguyen260396@gmail.com", msg.as_string())
    email.quit()

# The callback for when the client receives a CONNACK response from the server.


def on_connect(client, userdata, flags, rc):
    print("Connection to Broker {}:{} Successfully!".format(_host, _port))
    client.subscribe("emsenegry")

# The callback for when a PUBLISH message is received from the server.


def on_message(client, userdata, msg):
    topic = msg.topic
    content = msg.payload.decode('utf-8')
    objpayload = json.loads(content)
    device = objpayload["device_id"]
    if device == "all_area":
        query = """
            INSERT INTO spm93table(device_id,voltage_pa,voltage_pb,voltage_pc,current_pa,current_pb,current_pc,frequency,totalapparentpower,totalactiveennegry,
            totalreactiveennegry,activepower_pa,activepower_pb,activepower_pc,totalactivepower,reactivepower_pa,reactivepower_pb,reactivepower_pc,totalreactivepower,totalpowerfactor,timestamp) 
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
        """
        params = (objpayload["device_id"], objpayload["voltage_pa"], objpayload["voltage_pb"], objpayload["voltage_pc"], objpayload["current_pa"], objpayload["current_pb"], objpayload["current_pc"], objpayload["frequency"], objpayload["totalapparentpower"], objpayload["totalactiveennegry"], objpayload["totalreactiveennegry"],
                  objpayload["activepower_pa"], objpayload["activepower_pb"], objpayload["activepower_pc"], objpayload["totalactivepower"], objpayload["reactivepower_pa"], objpayload["reactivepower_pb"], objpayload["reactivepower_pc"], objpayload["totalreactivepower"], 1, datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
        if objpayload["voltage_pa"] > 210:
            send_email(str(objpayload))
    else:
        query = """
            INSERT INTO spm91table(device_id,frequency,voltage,current,power,enegry,timestamp) VALUES (%s,%s,%s,%s,%s,%s,%s)
        """
        params = (objpayload["device_id"], objpayload["frequency"], objpayload["voltage"], objpayload["current"],
                  objpayload["power"], objpayload["enegry"], datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
        if objpayload["frequency"] > 0:
            send_email(str(objpayload))
    run(query, params)


# connect to broker
client = mqtt.Client()
client.connect(_host, _port, 60)
client.username_pw_set(_user_name, _pass_word)
client.on_connect = on_connect
client.on_message = on_message
client.loop_forever()
