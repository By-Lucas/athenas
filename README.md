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