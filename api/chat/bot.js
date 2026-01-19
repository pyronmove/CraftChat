export default async function handler(req, res) {
  const target = "http://15.235.182.106:30081"

  // path dari [...path]
  const path = Array.isArray(req.query.path)
    ? "/" + req.query.path.join("/")
    : ""

  // query string
  const query = req.url.includes("?")
    ? "?" + req.url.split("?")[1]
    : ""

  const url = target + path + query

  try {
    const response = await fetch(url, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await response.text()
    res.status(response.status).send(data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Proxy error" })
  }
}
