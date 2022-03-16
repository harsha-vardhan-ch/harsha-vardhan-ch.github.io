
# A very simple Flask Hello World app for you to get started with...

from flask import Flask, render_template, request
import joblib
import pandas as pd
app = Flask(__name__)
app.config["DEBUG"] = True

@app.route("/",methods=["GET", "POST"])
def index():
    if request.method=="POST":
        a=request.form["age_name"]
        w=request.form["weight_name"]
        clf = joblib.load("/home/harshavardhanch/mysite/static/regr1.pkl")
        age = a
        weight = w
        x = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])
        result = clf.predict(x)[0]
        return render_template("index.html",results=result)
    result=""
    return render_template("index.html",results=result)


