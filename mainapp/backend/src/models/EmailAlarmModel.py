# src/models/EmailAlarmModel.py
import datetime
from . import db, bcrypt
from src.db import run,connection
import pandas as pd

class EmailAlarmModel(db.Model):
  """
  Email Alarm Model
  """
  # table name
  __tablename__ = 'emailalarmtable'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(128))
  email = db.Column(db.String(128))
  timestamp = db.Column(db.DateTime)
  # class constructor
  def __init__(self):
    """
    Class constructor
    """
    self.name = ''
    self.email = ''
    self.timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
  def insert(self):
    query = """
    INSERT INTO emailalarmtable (name, email,timestamp) 
    VALUES (%s, %s, %s)
    """
    params = (self.name, self.email,self.timestamp)
    return run(query, params)

  def delete(self):
    query = """
    DELETE  FROM emailalarmtable
    WHERE id = %s;
    """
    params = (self.id)
    return run(query, params)

  @staticmethod
  def getall():
    query = """
            SELECT *
            FROM emailalarmtable
            """
    return pd.read_sql(query,con=connection)
  
  @staticmethod 
  def getlast():
    query = """
            SELECT *
            FROM emailalarmtable
            ORDER BY id DESC LIMIT 1
            """
    return pd.read_sql(query,con=connection)

  @staticmethod 
  def getbyemail(value):
    query = """
            SELECT *
            FROM emailalarmtable
            WHERE email='%s'
            ORDER BY id DESC LIMIT 1
            """%(value)
    return pd.read_sql(query,con=connection)

  
  def __repr(self):
    return '<id {}>'.format(self.id)

