from flask import Flask, render_template, send_from_directory, jsonify
import json
import os

app = Flask(__name__)

@app.route('/')
@app.route('/ChacalAccueil/')
def ChacalAccueil():
    return render_template('chacalAccueil.html')

@app.route('/ChacalEsport')
def ChacalEsport():
    with open('tournoi.json', 'r') as file:
        tournoi_data = json.load(file)
    return render_template('chacalEsport.html', tournoi=tournoi_data)

@app.route('/js/<path:filename>')
def serve_js(filename):
    return send_from_directory('static/js', filename)

@app.route('/ChacalNavbarre')
def ChacalNavbarre():
    return render_template('chacalNavbarre.html')

@app.route('/tournoi.json')
def get_tournoi_json():
    with open('tournoi.json') as file:
        tournoi_data = json.load(file)
    
    # Retournez les données JSON
    return jsonify(tournoi_data)

@app.route('/navbarre')
def navbarre():
    return render_template('navbarre.html')
if __name__ == '__main__':
    app.run(debug=True)
