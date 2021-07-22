# src/models/SPM91Model.py
from datetime import datetime, timedelta
from . import db, bcrypt
from src.db import run, connection
import pandas as pd


class SDM220Model(db.Model):
    """
    SPM91 Model
    """
    # table name
    __tablename__ = 'sdm220table'

    id = db.Column(db.Integer, primary_key=True)
    device_id = db.Column(db.String(128))
    frequency = db.Column(db.Float)
    powerfactor = db.Column(db.Float)
    voltage = db.Column(db.Float)
    current = db.Column(db.Float)
    power = db.Column(db.Float)
    enegry = db.Column(db.Float)
    timestamp = db.Column(db.DateTime)
    # class constructor

    def __init__(self):
        """
        Class constructor
        """
        self.device_id = ''
        self.frequency = ''
        self.powerfactor = ''
        self.voltage = ''
        self.current = ''
        self.power = ''
        self.enegry = ''
        self.timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    def insert(self):
        query = """
    INSERT INTO sdm220table (device_id, frequency,powerfactor, voltage, current, power, enegry,timestamp)
    VALUES (%s, %s, %s, %s, %s, %s, %s,%s)
    """
        params = (self.device_id, self.frequency, self.powerfactor, self.voltage,
                  self.current, self.power, self.enegry, self.timestamp)
        return run(query, params)

    def delete(self):
        query = """
    DELETE  FROM sdm220table
    WHERE id = %s;
    """
        params = (self.id)
        return run(query, params)

    @staticmethod
    def getall():
        query = """
            SELECT enegry,timestamp
            FROM sdm220table
            """
        return pd.read_sql(query, con=connection)

    @staticmethod
    def getlast(value):
        query = """
            SELECT *
            FROM sdm220table
            WHERE device_id = '%s'
            ORDER BY id DESC LIMIT 1
            """ % (value)
        return pd.read_sql(query, con=connection)

    @staticmethod
    def getlast5min(from_date, to_date, value):
        df_new = pd.DataFrame([])
        query = """
            SELECT timestamp,power,enegry
            FROM sdm220table
            WHERE timestamp BETWEEN '%s' AND '%s' AND device_id = '%s'
            """ % (from_date, to_date, value)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df['power'] = (df['power']/1000).round(2)
            df['enegry'] = (df['enegry']).round(2)
            df = df.groupby(pd.Grouper(key='timestamp',
                                       freq='15min')).first().reset_index()
            df['enegry'] = df.enegry - df.enegry.shift()
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df_new = pd.concat([df_new, df])
        return df_new

    @staticmethod
    def getenegrylasthours(from_date, to_date, value):
        df_new = pd.DataFrame([])
        query = """
            SELECT timestamp,enegry
            FROM sdm220table
            WHERE timestamp BETWEEN '%s' AND '%s' AND device_id = '%s'
            """ % (from_date, to_date, value)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df = df.loc[[0, len(df)-1]]
            df['enegry'] = df.enegry - df.enegry.shift()
            df['enegry'] = (df['enegry']).round(3)
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df = df.iloc[[1]]
            df_new = pd.concat([df_new, df])
            df_new = df_new[['timestamp', 'enegry']]
        return df_new

    @staticmethod
    def getenegrybytoday(from_date, to_date, value):
        df_new = pd.DataFrame([])
        query = """
            SELECT timestamp,enegry
            FROM sdm220table
            WHERE timestamp BETWEEN '%s' AND '%s' AND device_id = '%s'
            """ % (from_date, to_date, value)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df = df.loc[[0, len(df)-1]]
            df['enegry'] = df.enegry - df.enegry.shift()
            df['enegry'] = (df['enegry']).round(3)
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df = df.iloc[[1]]
            df_new = pd.concat([df_new, df])
            df_new = df_new[['timestamp', 'enegry']]
        return df_new

    @staticmethod
    def getenegrybyyesterday(from_date, to_date, value):
        df_new = pd.DataFrame([])
        query = """
            SELECT timestamp,enegry
            FROM sdm220table
            WHERE timestamp BETWEEN '%s' AND '%s' AND device_id = '%s'
            """ % (from_date, to_date, value)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df = df.loc[[0, len(df)-1]]
            df['enegry'] = df.enegry - df.enegry.shift()
            df['enegry'] = (df['enegry']).round(3)
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df = df.iloc[[1]]
            df_new = pd.concat([df_new, df])
            df_new = df_new[['timestamp', 'enegry']]
        return df_new

    @staticmethod
    def getenegrybyweek(from_date, to_date, value):
        df_new = pd.DataFrame([])
        query = """
            SELECT timestamp,enegry
            FROM sdm220table
            WHERE timestamp BETWEEN '%s' AND '%s' AND device_id = '%s'
            """ % (from_date, to_date, value)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df = df.loc[[0, len(df)-1]]
            df['enegry'] = df.enegry - df.enegry.shift()
            df['enegry'] = (df['enegry']).round(3)
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)

            df = df.iloc[[1]]
            df_new = pd.concat([df_new, df])
            df_new = df_new[['timestamp', 'enegry']]
        return df_new

    @staticmethod
    def getenegrybymothly(from_date, to_date, value):
        df_new = pd.DataFrame([])
        query = """
            SELECT timestamp,enegry
            FROM sdm220table
            WHERE timestamp BETWEEN '%s' AND '%s' AND device_id = '%s'
            """ % (from_date, to_date, value)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df = df.loc[[0, len(df)-1]]
            df['enegry'] = df.enegry - df.enegry.shift()
            df['enegry'] = (df['enegry']).round(3)
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df = df.iloc[[1]]
            df_new = pd.concat([df_new, df])
            df_new = df_new[['timestamp', 'enegry']]
        return df_new

    @staticmethod
    def getenegrybyyearly(from_date, to_date, value):
        df_new = pd.DataFrame([])
        query = """
            SELECT timestamp,enegry
            FROM sdm220table
            WHERE timestamp BETWEEN '%s' AND '%s' AND device_id = '%s'
            """ % (from_date, to_date, value)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df = df.loc[[0, len(df)-1]]
            df['enegry'] = df.enegry - df.enegry.shift()
            df['enegry'] = (df['enegry']).round(3)
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df = df.iloc[[1]]
            df_new = pd.concat([df_new, df])
            df_new = df_new[['timestamp', 'enegry']]
        return df_new

    @staticmethod
    def getanalytics(from_date, to_date, _type):
        df_new = pd.DataFrame([])
        query = """
            SELECT %s,timestamp
            FROM sdm220table
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (_type, from_date, to_date)
        df = pd.read_sql(query, con=connection)

        if len(df) > 0:
            df = df.groupby(pd.Grouper(key='timestamp',
                            freq='15min')).first().reset_index()
            if _type == "enegry":
                df['enegry'] = df.enegry - df.enegry.shift()
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)
            df_new = pd.concat([df_new, df])
        return df_new

    @staticmethod
    def history(from_date, to_date):
        df_new = pd.DataFrame([])
        query = """
            SELECT *
            FROM sdm220table
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (from_date, to_date)
        df = pd.read_sql(query, con=connection)
        if len(df) > 0:
            df = df.groupby(pd.Grouper(key='timestamp',
                            freq='15min')).first().reset_index()
            df = df.fillna(0)
            df['timestamp'] = df['timestamp'].astype(str)


            df_new = pd.concat([df_new, df])
        return df_new

    def __repr(self):
        return '<id {}>'.format(self.id)
