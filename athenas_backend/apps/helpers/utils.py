import unicodedata

from django.contrib.auth import get_user_model


def get_unique_username(value):
    """Criar um usuario unico pegando primeiros dados do email"""
    value = value.lower().split('@')
    username = value[0]
    nfkd = unicodedata.normalize('NFKD', username)
    username = "".join([u for u in nfkd if not unicodedata.combining(u)])
    UserModel = get_user_model()
    n = 1
    while True:
        if UserModel.objects.filter(username=username).exists():
            username = f'{username}{n}'
            n += 1
        else:
            return username