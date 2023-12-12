const Store = require("../models/store.model");
const fs = require("fs");
const ExpressError = require("../utils/ErrorHandler");

module.exports.index = async (req, res) => {
  const store = await Store.find().populate("products");
  res.status(200).json({
    data: store,
  });
};

module.exports.show = async (req, res) => {
  const { store_id } = req.params;
  const store = await Store.findById(store_id);
  res.status(200).json({
    data: store,
  });
};

module.exports.store = async (req, res) => {
  const { name } = req.body;

  const images = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
  }));

  const newStore = new Store({
    name: name,
    logo: images,
  });

  newStore.owner = req.user.id;

  await newStore.save();

  res.status(201).json({
    message: "Create Store successfully",
    data: newStore,
  });
};

module.exports.update = async (req, res) => {
  const { store_id } = req.params;
  const { name } = req.body;
  const store = await Store.findByIdAndUpdate(store_id, {
    name: name,
  });

  if (req.files && req.files.length > 0) {
    store.logo.forEach((image) => {
      fs.unlink(image.url, (err) => new ExpressError(err));
    });

    const images = req.files.map((file) => ({
      url: file.path,
      filename: file.filename,
    }));

    store.logo = images;
    await store.save();
  }

  res.status(200).json({
    message: "Updated Store successfully",
  });
};

module.exports.destroy = async (req, res) => {
  const { store_id } = req.params;
  const store = await Store.findById(store_id);

  if (store.logo.length > 0) {
    store.logo.forEach((image) => {
      fs.unlink(image.url, (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({
            message: "Error occurred while deleting file",
          });
        }
      });
    });
  }
  await store.deleteOne();
  res.status(200).json({
    message: "Deleted successfully",
  });
};
