# /src/views/SPM91View
from flask import request, json, Response, Blueprint
from ..models.PriceModel import PriceModel
from datetime import datetime, timedelta
import random

time_now = datetime.now()
price_api = Blueprint('price_api', __name__)


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


@price_api.route('/add', methods=['POST'])
def add():
    value = request.json
    pricemodel = PriceModel()
    pricemodel.levelprice01 = value.get('levelprice01')
    pricemodel.levelprice02 = value.get('levelprice02')
    pricemodel.levelprice03 = value.get('levelprice03')
    pricemodel.insert()
    df = PriceModel.getall()
    df = df.to_dict(orient='records')
    return custom_response(df, 200)

# get realtime data


@price_api.route('/getlast', methods=['GET'])
def getlast():
    df = PriceModel.getlast()
    df = df.to_dict(orient='records')
    return custom_response(df, 200)


@price_api.route('/', methods=['GET'])
def get_all():
    """
    Get all temp
    """
    df = PriceModel.getall()
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
