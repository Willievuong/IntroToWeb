from flask import Flask, render_templatem, escape
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'From one to America, how free are you tonight? ;)'

@app.route('/user/<username>')
def profile(username):
    return '{}\'s profile'.format(escape(username))

@app.route('/coolBeans', methods=['GET', 'POST'])
def coolBeans():
    if request.method == 'POST':
        return "Beans"
    else:
        return "Cool"

@app.route('/hello')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)

if __name__ == '__main__':
    app.run()