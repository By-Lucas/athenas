#!/bin/sh
python manage.py migrate

# Coletar arquivos estáticos
python manage.py collectstatic --noinput

# Iniciar o servidor Gunicorn
gunicorn athenas_backend.wsgi:application --bind 0.0.0.0:$PORT
#--bind 0.0.0.0:$PORT