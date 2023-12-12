## Auth API Spec

# register user

- Endpoint : POST /api/users/register

Request Body :

```json
{
  "usename": "erik",
  "email": "erik@gmail.com",
  "password": "password",
  "confirmPassword": "password"
}
```

Response Body (Success) :

```json
{
  "message": "Ok"
}
```

Response Body (Failed) :

```json
{
  "error": "username is not black"
}
```

# login user

- Endpoint : POST /api/users/login

Request Body :

```json
{
  "usename": "erik",
  "password": "password"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "erik",
    "email": "erik@gmail.com"
  },
  "token": "wuhfwehrweyr8w7yrnwrygw"
}
```

Response Body (Failed) :

```json
{
  "message  ": "username or password wrong"
}
```

# logout user

- Endpoint : POST /api/users/logout

Response Body (Success)

```json
{
  "message": "OK"
}
```
