# src/models/Userlog.py
import datetime
from . import db, bcrypt
from src.db import run,connection
import pandas as pd

class UserLogModel(db.Model):
  """
  UserLog Model
  """
  # table name
  __tablename__ = 'userlogtable'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(128), nullable=False)
  email = db.Column(db.String(128), nullable=False)
  status = db.Column(db.String(128), nullable=False)
  timestamp = db.Column(db.DateTime)
  # class constructor
  def __init__(self):
    """
    Class constructor
    """
    self.name = ''
    self.email = ''
    self.status = ''
    self.timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

  def insert(self):
    query = """
    INSERT INTO userlogtable(name, email,status,timestamp) 
    VALUES (%s, %s, %s, %s)
    """
    params = (self.name, self.email,self.status,self.timestamp)
    return run(query, params)

  def delete(self):
    query = """
    DELETE  FROM userlogtable
    WHERE id = %s;
    """
    params = (self.id)
    return run(query, params)

  @staticmethod
  def getall():
    query = """
            SELECT *
            FROM userlogtable
            """
    return pd.read_sql(query,con=connection)
  @staticmethod
  def getlast():
    query = """
            SELECT *
            FROM userlogtable
            ORDER BY id DESC LIMIT 1
            """
    return pd.read_sql(query,con=connection)

  @staticmethod
  def getbyid(id):
    df_new = pd.DataFrame([])
    query = """
            SELECT *
            FROM userlogtable
            WHERE id ='%s'
            """%(id)
    return pd.read_sql(query, con=connection)

  @staticmethod
  def getusebydate(from_date, to_date):
    df_new = pd.DataFrame([])
    query = """
            SELECT *
            FROM userlogtable
            WHERE timestamp BETWEEN '%s' AND '%s'
            """ % (from_date, to_date)
    df = pd.read_sql(query, con=connection)
    if len(df) > 0:
      df_new = pd.concat([df_new,df])
    return df_new
  
  def __repr(self):
    return '<id {}>'.format(self.id)

