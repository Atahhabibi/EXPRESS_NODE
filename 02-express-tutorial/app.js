const express = require("express");
const path = require("path");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((item) => {
    const { id, name, image } = item;
    return { id, name, image };
  });

  res.status(200).json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  console.log(req.params.id);
  const singleProduct = products.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!singleProduct) {
    res.status(404).send("product does not exist ");
  }
  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("salam world");
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((item) =>
      item.name.startsWith(search)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send("no products matched your search");
    return res.status(200).json({ success: true, data: [] });
  }

  res.send(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});

app.listen(5000, () => {
  console.log(`Server listening port : ${5000}`);
});
