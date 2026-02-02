# Node2Know — Basic HTTP Server

A minimal Node.js web server using the **core** `http` module.

This repo is your first taste of “server-side JavaScript” without any frameworks:

- create a server
- respond to requests
- view the result in your browser

---

## ✅ Prereqs

- **Node.js** installed (includes `node`)

Verify:

```bash
node -v
```

---

## 📄 What's in this repo?

- `server.js` — a basic HTTP server that responds with plain text

---

## ▶️ Run the server

From the project folder:

```bash
node server.js
```

You should see:

```txt
Server running at http://127.0.0.1:3000/
```

---

## 🌐 View it in a browser

Open:

- `http://127.0.0.1:3000/`

You should see:

```txt
Hello Node Server!
```

---

## 👀 Run with watch mode

Node can restart the server automatically when `server.js` changes:

```bash
node --watch server.js
```

Now change the response string in `res.end(...)`, save, and refresh your browser.

Stop the server with:

- `Ctrl + C`

---

## 🧠 What the code demonstrates

### Core module

- `const http = require("http");`

### Creating the server

- `http.createServer((req, res) => { ... })`  
  The callback runs **every time** a request hits the server.

### Writing a response

- `res.statusCode = 200`
- `res.setHeader("Content-Type", "text/plain")`
- `res.end("Hello Node Server!")`

### Listening for requests

- `server.listen(port, hostname, () => { ... })`

---

## 📁 Project Structure

```txt
.
├── server.js
└── README.md
```

---

## License

**Node2Know-Learn-1.0** (see `LICENSE`).
