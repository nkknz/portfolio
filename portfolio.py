from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template('index.html')

@app.route("/profile")
def profile():
    return render_template('profile.html')

@app.route("/projects")
def projects():
    return render_template('projects.html')

@app.route("/skillsets")
def skillsets():
    return render_template('skillsets.html')


if __name__ == '__main__':
    app.run(debug=True)