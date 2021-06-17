#/src/views/AlarmView
from flask import request, json, Response, Blueprint
from ..models.AlarmModel import AlarmModel
from datetime import datetime,timedelta
import random

time_now =datetime.now()
alarm_api = Blueprint('alarm_api', __name__)


def getlasthour():
    yesterday = datetime.now() - timedelta(hours=1)
    return yesterday.strftime("%Y-%m-%d %H:00:00"), yesterday.strftime("%Y-%m-%d %H:59:59")

def gettoday():
    today = datetime.now()
    return today.strftime("%Y-%m-%d 00:00:00"), today.strftime("%Y-%m-%d 23:59:59")

def getyesterday():
    yesterday = datetime.now() - timedelta(days=1)
    return yesterday.strftime("%Y-%m-%d 00:00:00"), yesterday.strftime("%Y-%m-%d 23:59:59")

def getlastweek():
    checkday = (datetime.now().isoweekday()) % 7
    lastsunday = datetime.now() - timedelta(days=checkday)
    lastweekmonday = lastsunday - timedelta(days=6)
    return lastweekmonday, lastsunday

def getlastmonth():
    lastmonth = datetime.now().replace(day=1)
    lastmonth = lastmonth - timedelta(days=1)
    return lastmonth.strftime("%Y-%m-01 00:00:00"), lastmonth.strftime("%Y-%m-%d 23:59:59")

def getthismonth():
    today = datetime.now() - datetime.timedelta(minutes=10)
    return today.strftime("%Y-%m-01 00:00:00"), today.strftime("%Y-%m-%d 23:59:59")

@alarm_api.route('/getlast',methods=['GET'])
def getlast():
  # value=request.args.get('area')
  # df = AlarmModel.getlast(value)
  # df = df.to_dict(orient='records')
  return custom_response("df",200)

@alarm_api.route('/', methods=['GET'])
def get_all():
  """
  Get all alarm
  """
  df = []
  # df = AlarmModel.getall()
  # df = df.to_dict(orient='records')
  # df = [{
  #     "id": 1,
  #     "area": 'Hồ cá',
  #     "code": '0x01',
  #     "time": '2020:11:25 19:15:45',
  #     "type": 'alarm',
  #     "discription": 'Mất điện khu vực hồ cá',
  #     "Solution": 'Vui lòng kiểm tra aptomat',
  #   },
  #   {
  #     "id": 2,
  #     "area": 'Hồ cá',
  #     "code": '0x01',
  #     "time": '2020:11:25 19:15:45',
  #     "type": 'alarm',
  #     "discription": 'Mất điện khu vực hồ cá',
  #     "Solution": 'Vui lòng kiểm tra aptomat',
  #   },{
  #     "id": 3,
  #     "area": 'Hồ cá',
  #     "code": '0x01',
  #     "time": '2020:11:25 19:15:45',
  #     "type": 'alarm',
  #     "discription": 'Mất điện khu vực hồ cá',
  #     "Solution": 'Vui lòng kiểm tra aptomat',
  #   }]
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
