# /src/views/SPM91View
from flask import request, json, Response, Blueprint
from ..models.SDM220Model import SDM220Model
from datetime import datetime, timedelta
import random

time_now = datetime.now()
sdm220_api = Blueprint('sdm220_api', __name__)


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
    return lastweekmonday.strftime("%Y-%m-%d 00:00:00"), lastsunday.strftime("%Y-%m-%d 23:59:59")


def getlastmonth():
    lastmonth = datetime.now().replace(day=1)
    lastmonth = lastmonth - timedelta(days=1)
    return lastmonth.strftime("%Y-%m-01 00:00:00"), lastmonth.strftime("%Y-%m-%d 23:59:59")


def getthismonth():
    today = datetime.now()
    return today.strftime("%Y-%m-01 00:00:00"), today.strftime("%Y-%m-%d 23:59:59")


def getthisyear():
    today = datetime.now()
    return today.strftime("%Y-01-01 00:00:00"), today.strftime("%Y-12-31 23:59:59")

# get realtime data


@sdm220_api.route('/getlast', methods=['GET'])
def getlast():
    value = request.args.get('params')
    df = SDM220Model.getlast(value)
    df = df.to_dict(orient='records')
    return custom_response(df, 200)


@sdm220_api.route('/', methods=['GET'])
def get_all():
    """
    Get all temp
    """
    df = SDM220Model.getall()
    df = df.to_dict(orient='records')
    return custom_response(df, 200)


@sdm220_api.route('/getlast5min', methods=['GET'])
def getlast5min():
    value = request.args.get('params')
    from_date, to_date = gettoday()
    df = SDM220Model.getlast5min(from_date, to_date, value)
    df = df.to_dict(orient='records')
    df_new = []
    df_power = []
    df_enegry = []
    if len(df):
        for i in df:
            df_power.append(
                [datetime.strptime(i['timestamp'], "%Y-%m-%d  %H:%M:%S"), i['power']])
            df_enegry.append(
                [datetime.strptime(i['timestamp'], "%Y-%m-%d  %H:%M:%S"), i['enegry']])
        df_new.append(df_power)
        df_new.append(df_enegry)
    return custom_response(df_new, 200)


@sdm220_api.route('/getcaculatorenegry', methods=['GET'])
def caculatorenegry():
    value = request.args.get('params')
    data = {}
    # enegry last hours
    from_date, to_date = getlasthour()
    e_hours = SDM220Model.getenegrylasthours(from_date, to_date, value)
    e_hours = e_hours.to_dict(orient='records')
    if len(e_hours) > 0:
        data["enegry_hours"] = e_hours[0]["enegry"]
    else:
        data["enegry_hours"] = 0
    # enegry yesterday
    from_date, to_date = getyesterday()
    e_yes = SDM220Model.getenegrybyyesterday(from_date, to_date, value)
    e_yes = e_yes.to_dict(orient='records')
    if len(e_yes) > 0:
        data["enegry_yesterday"] = e_yes[0]["enegry"]
    else:
        data["enegry_yesterday"] = 0
    # enegry to day
    from_date, to_date = gettoday()
    e_tod = SDM220Model.getenegrybytoday(from_date, to_date, value)
    e_tod = e_tod.to_dict(orient='records')
    if len(e_tod) > 0:
        data["enegry_today"] = e_tod[0]["enegry"]
    else:
        data["enegry_today"] = 0

    # enegry lastweek

    from_date, to_date = getlastweek()
    e_week = SDM220Model.getenegrybyweek(from_date, to_date, value)
    e_week = e_week.to_dict(orient='records')
    if len(e_week) > 0:
        data["enegry_weekly"] = e_week[0]["enegry"]
    else:
        data["enegry_weekly"] = 0

    # enegry this month

    from_date, to_date = getthismonth()
    e_thismonth = SDM220Model.getenegrybymothly(from_date, to_date, value)
    e_thismonth = e_thismonth.to_dict(orient='records')
    if len(e_thismonth) > 0:
        data["enegry_thismonth"] = e_thismonth[0]["enegry"]
    else:
        data["enegry_thismonth"] = 0
    # enegry last month

    from_date, to_date = getlastmonth()
    e_lastmonth = SDM220Model.getenegrybymothly(from_date, to_date, value)
    e_lastmonth = e_lastmonth.to_dict(orient='records')
    if len(e_lastmonth) > 0:
        data["enegry_lastmonth"] = e_lastmonth[0]["enegry"]
    else:
        data["enegry_lastmonth"] = 0
    # enegry this year

    from_date, to_date = getthisyear()
    e_year = SDM220Model.getenegrybyyearly(from_date, to_date, value)
    e_year = e_year.to_dict(orient='records')
    if len(e_year):
        data["enegry_year"] = e_year[0]["enegry"]
    else:
        data["enegry_year"] = 0

    return custom_response(data, 200)


@sdm220_api.route('/analytics', methods=['GET'])
def getanalytics():
    _type = request.args.get('type')
    from_date = request.args.get('fromdate')+" " + \
        request.args.get('fromtime')+":00"
    to_date = request.args.get('todate')+" "+request.args.get('totime')+":00"
    df = SDM220Model.getanalytics(from_date, to_date, _type)
    df = df.to_dict(orient='records')
    df_new = []
    if len(df):
        for i in df:
            if _type == "enegry":
                df_new.append(
                    [datetime.strptime(i['timestamp'], "%Y-%m-%d  %H:%M:%S"), i['enegry']])
            elif _type == "power":
                df_new.append(
                    [datetime.strptime(i['timestamp'], "%Y-%m-%d  %H:%M:%S"), i['power']])
            elif _type == "current":
                df_new.append(
                    [datetime.strptime(i['timestamp'], "%Y-%m-%d  %H:%M:%S"), i['current']])
    return custom_response(df_new, 200)


@sdm220_api.route('/history', methods=['GET'])
def history():
    # from_date = request.args.get('fromdate')+" " + \
    #     request.args.get('fromtime')+":00"
    # to_date = request.args.get('todate')+" "+request.args.get('totime')+":00"
    from_date, to_date = gettoday()
    df = SDM220Model.history(from_date, to_date)
    df = df.to_dict(orient='records')
    df =list(reversed(df))
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
