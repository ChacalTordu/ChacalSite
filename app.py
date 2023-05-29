from flask import Flask, render_template, jsonify, request
import json
import os

app = Flask(__name__)

@app.route('/')
@app.route('/ChacalAccueil/')
def ChacalAccueil():
    return render_template('chacalAccueil.html')

@app.route('/ChacalEsport', methods=['GET', 'POST'])
def ChacalEsport():
    with open('tournoi.json', 'r') as file:
        tournoi_data = json.load(file)
    return render_template('chacalEsport.html', tournoi=tournoi_data)

@app.route('/ChacalNavbarre')
def ChacalNavbarre():
    return render_template('chacalNavbarre.html')

@app.route('/navbarre')
def navbarre():
    return render_template('navbarre.html')
if __name__ == '__main__':
    app.run(debug=True)
