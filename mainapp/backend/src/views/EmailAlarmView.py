# /src/views/SPM91View
from flask import request, json, Response, Blueprint
from ..models.EmailAlarmModel import EmailAlarmModel
from datetime import datetime, timedelta
import random

time_now = datetime.now()
email_alarm_api = Blueprint('email_alarm_api', __name__)


# get realtime data
@email_alarm_api.route('/add', methods=['POST'])
def add():
    value = request.json
    df = EmailAlarmModel.getbyemail(value.get('email'))
    df = df.to_dict(orient='records')
    if len(df):
        message = {
            "state": "false",
            'error': 'tài khoản email đã tồn tại!'}
        return custom_response(message, 200)
    emailalarm = EmailAlarmModel()
    emailalarm.name = value.get('name')
    emailalarm.email = value.get('email')
    emailalarm.insert()
    df = EmailAlarmModel.getall()
    df = df.to_dict(orient='records')
    return custom_response(df, 200)


# get realtime data
@email_alarm_api.route('/getlast', methods=['GET'])
def getlast():
    df = EmailAlarmModel.getlast()
    df = df.to_dict(orient='records')
    return custom_response(df, 200)


@email_alarm_api.route('/', methods=['GET'])
def get_all():
    """
    Get all email
    """
    df = EmailAlarmModel.getall()
    df = df.to_dict(orient='records')
    return custom_response(df, 200)

def custom_response(res, status_code):
    """
    Custom Response Function
    """
    return Response(
        mimetype="application/json",
        response=json.dumps(res),
        status=status_code
    )
