import os

def remove_file(file_name):
    if os.path.exists(file_name):
        os.remove(file_name)

if '{{ cookiecutter.heroku_deployment_method }}' == 'none':
    remove_file('Procfile')
    remove_file('runtime.txt')
