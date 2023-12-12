## Store API Spec

## findAll Store

-- Endpoint : GET /api/stores

Respone Body (Success)

```json
{
  "data": [
    {
      "name": "Toko Abadi Jaya",
      "logoImage": "logoImage",
      "owner": "UserID",
      "products": [
        {
          "title": "product",
          "images": [{ "imgae": "url/images" }, { "imgae": "url/images" }],
          "price": 999,
          "location": "jakarta",
          "description": "product stroong"
        }
      ]
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

## find One Store

-- Endpoint : GET /api/stores/:storeid

Respone Body (Success)

```json
{
  {
      "name": "Toko Abadi Jaya",
      "logoImage": "logoImage",
      "owner": "UserID",
      "products": [
        {
          "title": "product",
          "images": [{ "imgae": "url/images" }, { "imgae": "url/images" }],
          "price": 999,
          "location": "jakarta",
          "description": "product stroong"
        }
      ]
    }
}
```

Respone Body (Faild)

```json
{
  "message": "Product Not Found"
}
```

## create-Prouduct

-- Endpoint : POST /api/stores

Request Body :

```json
{
  "name": "Toko Abadi Jaya ",
  "logoImage": "logoImage",
  "owner": "UserID",
  "products": [
    {
      "title": "product ",
      "images": [{ "imgae": "url/images" }, { "imgae": "url/images" }],
      "price": 999,
      "location": "jakarta",
      "description": "product stroong"
    }
  ]
}
```

Respone Body (Success)

```json
{
  "name": "Toko Abadi Jaya ",
  "logoImage": "logoImage",
  "owner": "UserID",
  "products": [
    {
      "title": "product ",
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
  "message": "Store Not Found"
}
```

## Edit Store

-- Endpoint : PUT /api/products

Request Body :

```json
{
  "name": "Toko Abadi Jaya updated",
  "logoImage": "logoImage",
  "owner": "UserID",
  "products": [
    {
      "title": "product updated",
      "images": [{ "imgae": "url/images" }, { "imgae": "url/images" }],
      "price": 999,
      "location": "jakarta",
      "description": "product stroong"
    }
  ]
}
```

Respone Body (Success)

```json
{
  "name": "Toko Abadi Jaya updated",
  "logoImage": "logoImage",
  "owner": "UserID",
  "products": [
    {
      "title": "product updated",
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

## Delete-Store

-- Endpoint : Delete /api/products

Response Body (Success)

```json
{
  "message": "OK"
}
```
