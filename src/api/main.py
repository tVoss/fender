from flask import Flask
app = Flask(__name__)

test = 0

@app.route('/')
def hello_world():
    global test
    test += 1
    return str(test)