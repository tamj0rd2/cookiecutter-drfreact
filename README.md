# cookiecutter-drfreact
A cookiecutter for Django Rest Framework and React

## About
This is a cookiecutter that I've made to quickly create a project with django
rest framework and react. I'm currently using it to learn django rest framework
and react. If anything has been set up in a weird way or you want to propose
changes, please submit an issue and/or a pull request, as I know next to nothing
about node and react. I stumbled my way through this entire thing :D

## Prerequisites

### Required
- [Node and npm](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line#download-and-install) if you will be deploying to Heroku

### Suggested
- [Virtualenvwrapper](https://pypi.python.org/pypi/virtualenvwrapper) or [Virtualenvwrapper-win](https://pypi.python.org/pypi/virtualenvwrapper-win)
- [Editorconfig](http://editorconfig.org/) plugin for your text editor/IDE

## Starting a project
1. Run `pip install cookiecutter`
2. Run `cookiecutter https://github.com/tamj0rd2/cookiecutter-drfreact`
3. Fill in the necessary details
4. `cd` into the newly created folder
5. Run `npm install`
6. Run `pip install -r requirements.txt`
7. Set up your database using psql or pgadmin3 (assuming you'll be using postgresql) if you haven't already
8. Run `python manage.py migrate`
9. Run `npm start` and `python manage.py runserver` simultaneously

If everything has been set up correctly, when you go to http://127.0.0.1:8000/ you should be able to see "Hello, world."

## Deploying to Heroku
Make sure you have followed the steps in "starting a project" before doing this! Make sure all the steps are followed in order, otherwise you'll have issues. (duh)

### Method 1
Use this if you don't want to commit your bundles to version control. In this case, bundles will be built automatically any time you push your code to Heroku.

1. Run `git init`
2. If you are a windows user, **make sure** that the line endings for the `runtime.txt` file are set to **LF** (instead of the windows default, CRLF). If you don't do this, you will have problems!
3. Run `git add * && git commit -am "Initial commit"`
4. Run `heroku login` and enter your login details
5. Run `heroku create`
6. Run `heroku buildpacks:set heroku/nodejs`
7. Run `heroku buildpacks:add heroku/python`
8. Run `git push heroku master`
9. Run `heroku open` to see your beautiful app

## Sources
- http://owaislone.org/blog/webpack-plus-reactjs-and-django/
- https://geezhawk.github.io/using-react-with-django-rest-framework
