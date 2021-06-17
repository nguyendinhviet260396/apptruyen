
#/src/views/UserLogView
from flask import request, json, Response, Blueprint
from ..models.UserLogModel import UserLogModel
from datetime import datetime,timedelta

time_now =datetime.now()
userlog_api = Blueprint('userlog_api', __name__)


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

# get realtime data
@userlog_api.route('/getlast' ,methods=['GET'])
def getlast():
  df = UserLogModel.getlast()
  df = df.to_dict(orient='records')
  return custom_response(df,200)

@userlog_api.route('/<int:id>', methods=['DELETE'])
#@Auth.auth_required
def delete(id):
  """
  Delete a user
  """
  uselogmodel = UserLogModel()
  uselogmodel.id = [id]
  uselogmodel.delete()
  return custom_response({'message': 'deleted'}, 204)
@userlog_api.route('/', methods=['GET'])
def get_all():
  """
  Get all ups
  """
  df = UserLogModel.getall()
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
