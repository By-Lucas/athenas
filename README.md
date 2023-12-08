- **EXECUTANDO `TESTE` DO PROJETO**<br>
*OBS: `O projeto estpa conectado com Github action/workflow e os testes são feitos automaticamente em commit/push feito.`*
```
python -m tests
```

- **Criar imagem `DOCKER`**
```
docker build -t athenas_backend .
```

- **Executar projeto**
```
docker run -p 8080:8080 athenas_backend
```

- **Executar o `projeto via django`**
```
python manage.py runserver
```

# ROTAS USUARIOS
- **Cadastrar**
```
http://127.0.0.1:8000/api/register
```

- **LOGIN**
```
http://127.0.0.1:8000/api/login
```

- **RETORNAR USUARIO**
```
http://127.0.0.1:8000/api/user
```

- **LOGOUT | SAIR**
```
http://127.0.0.1:8000/api/logout
```