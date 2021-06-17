# src/models/PriceModel.py
import datetime
from . import db, bcrypt
from src.db import run,connection
import pandas as pd

class PriceModel(db.Model):
  """
  Price Model
  """
  # table name
  __tablename__ = 'pricetable'

  id = db.Column(db.Integer, primary_key=True)
  levelprice01 = db.Column(db.Float)
  levelprice02 = db.Column(db.Float)
  levelprice03 = db.Column(db.Float)
  timestamp = db.Column(db.DateTime)
  # class constructor
  def __init__(self):
    """
    Class constructor
    """
    self.levelprice01 = ''
    self.levelprice02 = ''
    self.levelprice03 = ''
    self.timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
  def insert(self):
    query = """
    INSERT INTO pricetable (levelprice01, levelprice02, levelprice03,timestamp) 
    VALUES (%s, %s, %s, %s)
    """
    params = (self.levelprice01, self.levelprice02, self.levelprice03,self.timestamp)
    return run(query, params)

  def delete(self):
    query = """
    DELETE  FROM pricetable
    WHERE id = %s;
    """
    params = (self.id)
    return run(query, params)

  @staticmethod
  def getall():
    query = """
            SELECT *
            FROM pricetable
            """
    return pd.read_sql(query,con=connection)
  
  @staticmethod 
  def getlast():
    query = """
            SELECT *
            FROM pricetable
            ORDER BY id DESC LIMIT 1
            """
    return pd.read_sql(query,con=connection)
  
  def __repr(self):
    return '<id {}>'.format(self.id)

