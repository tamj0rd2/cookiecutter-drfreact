"""
WSGI config for MyProject project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.10/howto/deployment/wsgi/
"""

import os
from django.core.wsgi import get_wsgi_application
{% if cookiecutter.heroku_deployment_method != 'none' %}from whitenoise.django import DjangoWhiteNoise{% endif %}

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

application = get_wsgi_application()
{% if cookiecutter.heroku_deployment_method != 'none' %}application = DjangoWhiteNoise(application){% endif %}
