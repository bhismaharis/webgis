from flask_sqlalchemy import SQLAlchemy
from geoalchemy2 import Geometry

db = SQLAlchemy()

class SampahPoint(db.Model):
    __tablename__ = 'tps_sampah'
    __table_args__ = {'schema': 'sampah'}
    
    id = db.Column(db.Integer, primary_key=True)
    nama = db.Column(db.String(255))
    alamat = db.Column(db.Text)
    kapasitas = db.Column(db.Float)
    geom = db.Column(Geometry('POINT', srid=4326))