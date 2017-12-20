from flask import Flask, request
from flask_cors import CORS

import requests

app = Flask(__name__)
CORS(app)

test = 0

@app.route('/')
def hello_world():
    global test
    test += 1
    return str(test)

@app.route('/code', methods=['POST'])
def code():
    fitbit_code = request.get_json()['code']
    
    print 'Auth: %s' % request.headers['Authorization']
    print 'Code: %s' % fitbit_code

    token_req = requests.post(
        'https://api.fitbit.com/oauth2/token',
        auth=('22CHGY', '5f71e915be510a5eb3e71f2b2bac6835'),
        data={
            'code': fitbit_code,
            'grant_type': 'authorization_code',
            'client_id': '22CHGY',
            'redirect_uri': 'http://localhost:8080/fitbit'
        }
    )

    data = token_req.json()
    print 'Saving refresh token %s...' % data['refresh_token']
    return data['access_token']



