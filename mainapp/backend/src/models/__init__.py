#src/models/__init__.py

from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt


# initialize our db
db = SQLAlchemy()
bcrypt = Bcrypt()

from .UserModel import UserModel
from .UserLogModel import UserLogModel
from .SDM220Model import SDM220Model 
from .PriceModel import PriceModel
from .AlarmModel import AlarmModel
from .EmailAlarmModel import EmailAlarmModel