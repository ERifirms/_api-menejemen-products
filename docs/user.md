## user API Spec

## findAll User

-- Endpoint : GET /api/users

Respone Body (Success)

```json
{
  "data": [
    {
      "username": "erik",
      "username": "erik@gmail.com"
    }
  ]
}
```

Respone Body (Faild)

```json
{
  "message": "User Not Found"
}
```

## find One user

-- Endpoint : GET /api/users/:userid

Respone Body (Success)

```json
{
  {
    "username": "erik",
    "username": "erik@gmail.com"
  }
}
```

Respone Body (Faild)

```json
{
  "message": "User Not Found"
}
```

## Edit User

Request Body :

```json
{
  "username": "erikUpdate",
  "password": "new_password"
}
```

Respone Body (Success)

```json
{
  "username": "erikUpdate",
  "password": "new_password"
}
```

Respone Body (Faild)

```json
{
  "message": "User Not Found"
}
```

## user API Spec

## findAll User

-- Endpoint : GET /api/users

Respone Body (Success)

```json
{
  "data": [
    {
      "username": "erik",
      "username": "erik@gmail.com"
    }
  ]
}
```

Respone Body (Faild)

```json
{
  "message": "User Not Found"
}
```

## find One user

-- Endpoint : GET /api/users/:userid

Respone Body (Success)

```json
{
  {
    "username": "erik",
    "username": "erik@gmail.com"
  }
}
```

Respone Body (Faild)

```json
{
  "message": "User Not Found"
}
```

## Edit User

Request Body :

```json
{
  "username": "erikUpdate",
  "password": "new_password"
}
```

Respone Body (Success)

```json
{
  "username": "erikUpdate",
  "password": "new_password"
}
```

Respone Body (Faild)

```json
{
  "message": "User Not Found"
}
```
