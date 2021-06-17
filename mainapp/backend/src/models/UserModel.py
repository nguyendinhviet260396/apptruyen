# src/models/UserModel.py
import datetime
from . import db, bcrypt
from src.db import run, connection
import pandas as pd


class UserModel(db.Model):
    """
    User Model
    """

    # table name
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), nullable=False)
    operator = db.Column(db.String(128), nullable=False)
    password = db.Column(db.String(128), nullable=False)
    created_at = db.Column(db.DateTime)
    modified_at = db.Column(db.DateTime)

    # class constructor
    def __init__(self):
        """
        Class constructor
        """
        self.id = ''
        self.name = ''
        self.email = ''
        self.operator = ''
        self.password = ''
        self.created_at = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        self.modified_at = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    def insert(self):
        query = """
    INSERT INTO users(name, email, operator, password,created_at,modified_at) 
    VALUES (%s, %s, %s, %s, %s, %s)
    """
        params = (self.name, self.email, self.operator, self.__generate_hash(
            self.password), self.created_at, self.modified_at)
        return run(query, params)

    def update(self):
        if self.password == '':
            query = """
      UPDATE users
      SET name = %s,
      email = %s,
      operator = %s,
      WHERE id = %s
      """
            params = (self.name, self.email, self.operator, self.id)
        else:
            query = """
      UPDATE users
      SET password = %s,
      name = %s,
      email = %s,
      operator = %s,
      modified_at = %s 
      WHERE id= %s
      """
            params = (self.__generate_hash(self.password), self.name, self.email,
                      self.operator, datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"), self.id)
            return run(query, params)

    def delete(self):
        query = """
    DELETE  FROM users
    WHERE id = %s;
    """
        params = (self.id)
        return run(query, params)

    @staticmethod
    def getlast():
        query = """
            SELECT id,name,email,operator,created_at
            FROM users
            ORDER BY id DESC LIMIT 1
            """
        return pd.read_sql(query, con=connection)

    @staticmethod
    def getall():
        query = """
            SELECT id,name,email,operator,created_at,modified_at
            FROM users
            """
        return pd.read_sql(query, con=connection)

    @staticmethod
    def get_name(value):
        query = """
        SELECT name,email,operator,created_at
        FROM users
        WHERE name=%s
        """ % (value)
        return pd.read_sql(query, con=connection)

    @staticmethod
    def get_one_user(id):
        query = """
        SELECT name,email,operator,created_at
        FROM users
        WHERE id=%s
        ORDER BY id DESC LIMIT 1
        """ % (id)
        return pd.read_sql(query, con=connection)

    @staticmethod
    def get_user_by_email(value):
        query = """
        SELECT id,name,email,operator,created_at
        FROM users
        WHERE email ='%s'
        """ % (value)
        return pd.read_sql(query, con=connection)

    @staticmethod
    def get_user_by_id(id):
        query = """
        SELECT id,name,email,operator,created_at
        FROM users
        WHERE id ='%s'
        """ % (id)
        return pd.read_sql(query, con=connection)

    @staticmethod
    def getpassworemail(email):
        query = """
        SELECT password
        FROM users
        WHERE email ='%s'
        """ % (email)
        return pd.read_sql(query, con=connection)

    def __generate_hash(self, password):
        return bcrypt.generate_password_hash(password, rounds=10).decode("utf-8")

    def check_password(self, password, password_check):
        if not password or not password_check:
            return False
        return bcrypt.check_password_hash(password, password_check)

    def __repr(self):
        return '<id {}>'.format(self.id)
