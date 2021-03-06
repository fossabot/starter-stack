# Api

NestJS Demo Api

# ToDo

- Check docker-compose.yml

# Features

## [Swagger documentation](https://github.com/nestjs/swagger)

Currently the nestjs swagger plugin uses swagger 2.0 and going to be completely reworked. Right now, you have to define a huge amount of decorators to be able to use it properly. For this reason, I'm keeping a small example, but not using it until the new release is complete. https://github.com/nestjs/swagger/issues/191

## [Terminus Healthchecks](https://nestjs.github.io/terminus)

Nest exposes an endpoint to check the health of certain services

# Install

Install MySQL

```bash
docker run --name mysql-demo -e MYSQL_ROOT_PASSWORD=secret -d mysql:latest
```

Log in

```bash
docker exec -it mysql-demo mysql -uroot -psecret
```

Change Root password

```sql
alter user 'root'@'localhost' identified with mysql_native_password by 'secret';
```

Create Database

```sql
create database demo;
use demo;
```
