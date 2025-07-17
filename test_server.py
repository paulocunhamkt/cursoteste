from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True, origins=['http://localhost:5173'])

@app.route('/')
def home():
    return jsonify({'message': 'Backend funcionando!', 'status': 'ok'})

@app.route('/api/test')
def test():
    return jsonify({'message': 'API funcionando!', 'data': 'teste'})

@app.route('/api/auth/login', methods=['POST'])
def login():
    return jsonify({
        'message': 'Login simulado com sucesso',
        'user': {
            'id': 1,
            'first_name': 'João',
            'last_name': 'Silva',
            'email': 'demo@frontendIA.com'
        }
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)

