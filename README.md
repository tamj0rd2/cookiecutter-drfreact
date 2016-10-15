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
- [PostgreSQL](https://www.postgresql.org/), unless you want to change the
configuration and use something else, e.g sqlite

### Suggested
- [Virtualenvwrapper](https://pypi.python.org/pypi/virtualenvwrapper-win)
- [Editorconfig](http://editorconfig.org/) plugin for your text editor/IDE

## Starting a project
1. Run `cookiecutter https://github.com/tamj0rd2/cookiecutter-drfreact`
2. Fill in the necessary details
3. `cd` into the newly created folder
4. Run `npm install`
5. Run `pip install -r requirements.txt`
6. Set up your database using psql or pgadmin3 (assuming you'll be using postgresql) if you haven't already
7. Run `python manage.py migrate`
8. Run `npm start` and `python manage.py runserver` simultaneously

If everything has been set up correctly, when you go to http://127.0.0.1:8000/ you should be able to see "Hello, world."

## Sources
- http://owaislone.org/blog/webpack-plus-reactjs-and-django/
- https://geezhawk.github.io/using-react-with-django-rest-framework
