# Api

# ToDo

- Check docker-compose.yml

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
