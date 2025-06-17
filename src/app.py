from flask import Flask, render_template
from flask_cors import CORS
from config import Config
from models import db

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)

# Initialize database
db.init_app(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/tps', methods=['GET'])
def get_tps():
    try:
        from models import SampahPoint
        from geoalchemy2.shape import to_shape
        from shapely.geometry import mapping
        
        tps_list = SampahPoint.query.all()
        features = []
        
        for tps in tps_list:
            geom = to_shape(tps.geom)
            feature = {
                'type': 'Feature',
                'geometry': mapping(geom),
                'properties': {
                    'id': tps.id,
                    'nama': tps.nama,
                    'alamat': tps.alamat,
                    'kapasitas': tps.kapasitas
                }
            }
            features.append(feature)
            
        return {'type': 'FeatureCollection', 'features': features}
    except Exception as e:
        return {'error': str(e)}, 500

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)