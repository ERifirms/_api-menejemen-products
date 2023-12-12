## Product API Spec

## findAll Product

-- Endpoint : GET /api/products

Respone Body (Success)

```json
{
  "data": [
    {
      "title": "product",
      "images": [{ "imgae": "url/images" }, { "imgae": "url/images" }],
      "price": 999,
      "location": "jakarta",
      "description": "product stroong"
    }
  ]
}
```

Respone Body (Faild)

```json
{
  "message": "Product Not Found"
}
```

## find One Product

-- Endpoint : GET /api/products/:productid

Respone Body (Success)

```json
{
  "title": "product",
  "images": [{ "imgae": "url/images" }, { "imgae": "url/images" }],
  "price": 999,
  "location": "jakarta",
  "description": "product stroong"
}
```

Respone Body (Faild)

```json
{
  "message": "Product Not Found"
}
```

## create-Prouduct

-- Endpoint : POST /api/products

Request Body :

```json
{
  "title": "product ",
  "images": [{ "imgae": "url/images" }, { "imgae": "url/images" }],
  "price": 999,
  "location": "jakarta",
  "description": "product stroong"
}
```

Respone Body (Success)

```json
{
  "title": "product ",
  "images": [{ "imgae": "url/images" }, { "imgae": "url/images" }],
  "price": 999,
  "location": "jakarta",
  "description": "product stroong"
}
```

Respone Body (Faild)

```json
{
  "message": "Product Not Found"
}
```

## Edit Product

-- Endpoint : PUT /api/products

Request Body :

```json
{
  "title": "product updated",
  "images": [{ "imgae": "url/images" }, { "imgae": "url/images" }],
  "price": 999,
  "location": "jakarta",
  "description": "product stroong"
}
```

Respone Body (Success)

```json
{
  "title": "product updated",
  "images": [{ "imgae": "url/images" }, { "imgae": "url/images" }],
  "price": 999,
  "location": "jakarta",
  "description": "product stroong"
}
```

Respone Body (Faild)

```json
{
  "message": "Product Not Found"
}
```

## Delete-prodcut

-- Endpoint : Delete /api/products

Response Body (Success)

```json
{
  "message": "OK"
}
```
