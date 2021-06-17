# src/models/AlarmModel.py
import datetime
from . import db, bcrypt
from src.db import run,connection
import pandas as pd

class AlarmModel(db.Model):
  """
  Alarm Model
  """
  # table name
  __tablename__ = 'alarmtable'

  id = db.Column(db.Integer, primary_key=True)
  device = db.Column(db.String(128))
  typealarm = db.Column(db.String(128))
  discription = db.Column(db.String(128))
  solution = db.Column(db.String(128))
  timestamp = db.Column(db.DateTime)
  # class constructor
  def __init__(self):
    """
    Class constructor
    """
    self.device = ''
    self.typealarm = ''
    self.discription = ''
    self.solution = ''
    self.timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
  def insert(self):
    query = """
    INSERT INTO alarmtable (device,typealarm, discription, solution,timestamp) 
    VALUES (%s, %s, %s, %s, %s)
    """
    params = (self.device, self.typealarm, self.discription, self.solution,self.timestamp)
    return run(query, params)

  def delete(self):
    query = """
    DELETE  FROM alarmtable
    WHERE id = %s;
    """
    params = (self.id)
    return run(query, params)
  

  @staticmethod
  def getall():
    query = """
            SELECT *
            FROM alarmtable
            """
    return pd.read_sql(query,con=connection)
  
  @staticmethod 
  def getlast(value):
    query = """
            SELECT *
            FROM alarmtable
            WHERE typealarm = '%s'
            ORDER BY id DESC LIMIT 1
            """%(value)
    return pd.read_sql(query,con=connection)

  
  def __repr(self):
    return '<id {}>'.format(self.id)

