from flask import Flask, redirect, url_for, render_template, request, flash, jsonify, abort
# from forms import ContactForm
import tempfile
import pandas as pd
import sys

# Flask
app = Flask(__name__)
app.config['SECRET_KEY'] = 'my secret'
app.config['DEBUG'] = True
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

df = pd.DataFrame()
cris_file_name = "No file"

@app.route("/")
def index():
    '''
    Home page
    '''
    global df, cris_file_name
    i = df.shape
    return render_template('web/main.html', df=i, fileName=cris_file_name)


# API routes
@app.route("/new_contact", methods=('GET', 'POST'))
def new_contact():
    '''
    Create new contact
    '''
    return render_template('web/new_contact.html')


@app.route("/edit_contact/<id>", methods=('GET', 'POST'))
def edit_contact(id):
    '''
    Edit contact

    :param id: Id from contact
    '''
    return render_template('web/edit_contact.html')


@app.route("/api/upload", methods=['POST'])
def settings():
    global df, cris_file_name
    if request.method == 'POST':
        print(request)
        cris_file_name = request.files['file']
        tempfile_path = tempfile.NamedTemporaryFile().name
        cris_file_name.save(tempfile_path)
        df = df.append(pd.read_csv(tempfile_path), ignore_index = True)
        print(df.shape)
        response = jsonify({
            'name': cris_file_name.filename,
            'shape': df.shape
        })
        response.status_code = 201
        return response


@app.route("/search")
def search():
    '''
    Search
    '''
    name_search = request.args.get('name')
    return render_template('web/contacts.html')


if __name__ == "__main__":
    app.run(host="0.0.0.0")
