version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3001:80"
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=db
      - DB_USER=root
      - DB_PASS=root
      - DB_NAME=todo_db
    depends_on:
      - db

  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: todo_db
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
