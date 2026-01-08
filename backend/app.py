from flask import Flask
from routes.data_cleaning import data_clean
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.register_blueprint(data_clean)

if __name__ == "__main__":
    app.run(debug=True)
