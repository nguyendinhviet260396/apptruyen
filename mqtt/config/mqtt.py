import paho.mqtt.client as mqtt
import time
# config broker
_host="m16.cloudmqtt.com"
_port=16584
_user_name="pwwgnjod"
_pass_word="XBgUZD1EvzDa"


# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("Connection to Broker {}:{} Successfully!".format(_host,_port))

# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))

# connect to broker
client = mqtt.Client()
client.connect(_host, _port, 60)
client.username_pw_set(_user_name, _pass_word)

def connect_mqtt(topic,payload):
    client.on_connect = on_connect
    client.on_message = on_message
    client.publish(topic=topic,payload=payload)    #publish payload
    client.loop_start()
    

        
