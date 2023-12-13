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
python .\athenas_backend\manage.py runserver
```

- **Executar o frontend `ANGULAR`**
```
ng serve
```

# ROTAS USUARIOS
- **CADASTRAR USUARIO**
```
http://127.0.0.1:8000/api/register
```

- **FAZER LOGIN**
```
http://127.0.0.1:8000/api/login
```

- **RETORNAR DADOS DO USUARIO LOGADO**
```
http://127.0.0.1:8000/api/user
```

- **LOGOUT | DESCONECTAR**
```
http://127.0.0.1:8000/api/logout
```

# ROTAS PESSOAS
- **CADASTRAR PESSOA**
```
http://127.0.0.1:8000/people/create
```

- **EDITAR PESSOA**
```
http://127.0.0.1:8000/people/update/1
```

- **BUSCAR PESSOA**
```
http://127.0.0.1:8000/people/1
```

- **TODAS AS PESSOAS**
```
http://127.0.0.1:8000/people/all
```

- **DELETAR PESSOA**
```
http://127.0.0.1:8000/delete/1
```


- **FILTRAR PESSOAS**
```
http://127.0.0.1:8000/people/search/?name=Maria&cpf=123.456.789-00
```

