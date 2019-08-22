from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'From one to America, how free are you tonight? ;)'


if __name__ == '__main__':
    app.run()