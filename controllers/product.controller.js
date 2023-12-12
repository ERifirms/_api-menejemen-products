const Product = require("../models/product.model");
const Store = require("../models/store.model");
const fs = require("fs");
const ExpressError = require("../utils/ErrorHandler");

module.exports.index = async (req, res) => {
  const page = req.query.page || 1;
  const limit = 2;

  try {
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.store = async (req, res) => {
  const { store_id } = req.params;

  const images = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
  }));

  const { title, price, location, description } = req.body;
  const product = new Product({
    title: title,
    price: price,
    location: location,
    description: description,
  });

  product.images = images;
  product.author = req.user.id;

  const store = await Store.findById(store_id);
  store.products.push(product);
  await store.save();

  await product.save();

  res.status(201).json({
    store: store,
    data: product,
  });
};

module.exports.show = async (req, res) => {
  const { product_id } = req.params;
  const product = await Product.findById(product_id);
  res.status(200).json({
    data: product,
  });
};

module.exports.update = async (req, res) => {
  const { store_id } = req.params;
  const { product_id } = req.params;

  const { title, price, location, description } = req.body;

  const store = await Store.findById(store_id);

  if (!store) {
    return res.status(404).json({ error: "Store not found" });
  }
  const productIndex = await Product.findById(product_id);
  if (!productIndex) {
    return res.status(404).json({ error: "Product not found" });
  }

  const product = await Product.findByIdAndUpdate(product_id, {
    title: title,
    price: price,
    location: location,
    description: description,
  });

  if (req.files && req.files.length > 0) {
    product.images.forEach((image) => {
      fs.unlink(image.url, (err) => new ExpressError(err));
    });

    const images = req.files.map((file) => ({
      url: file.path,
      filename: file.filename,
    }));

    product.images = images;
    await product.save();
  }

  res.json({ message: "Product updated successfully", product });
};

module.exports.destroy = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (product.images.length > 0) {
    product.images.forEach((image) => {
      fs.unlink(image.url, (err) => new ExpressError(err));
    });
  }

  await product.deleteOne();

  res.status(200).json({
    message: "deleted successfully",
  });
};
