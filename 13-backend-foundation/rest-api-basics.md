# REST API Basics

## What it is

A **REST API** is a way for clients (browser, mobile app, another server) to talk to your backend using HTTP:

| Method | Typical meaning | Example |
| --- | --- | --- |
| GET | Read | `GET /api/users/1` |
| POST | Create | `POST /api/users` |
| PUT / PATCH | Update | `PATCH /api/users/1` |
| DELETE | Remove | `DELETE /api/users/1` |

JSON is the usual body format.

## Why backend developers use it

It is the standard interface between frontend and backend. Node.js + Express is a common implementation.

## Real-world example

```http
POST /api/orders HTTP/1.1
Content-Type: application/json

{"productId":12,"quantity":2}
```

```http
HTTP/1.1 201 Created
Content-Type: application/json

{"id":88,"status":"created"}
```

## How it connects with Node.js

Node's `http` module (see `http-basics.js`) receives the request. You parse JSON, run business logic, and `response.end(JSON.stringify(data))`.

Status codes you will use constantly:

- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error

## Common mistakes

- Returning 200 for every error
- Not validating `req.body`
- Mixing authentication secrets into JSON responses
- Ignoring `Content-Type`
