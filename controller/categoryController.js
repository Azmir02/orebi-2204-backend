const Category = require("../models/categoryModel.js");

const createCategoryController = async (req, res) => {
  let { name, description } = req.body;

  let duplicateCategory = await Category.find({ name });

  if (duplicateCategory.length > 0) {
    return res.send({ error: "category already exist! try another." });
  } else {
    res.send({ success: "category created." });
  }

  const category = new Category({
    name,
    description,
  });
  category.save();

  res.send({ success: "category created successfully" });

  console.log(name, description);
};

const categoryStatusController = async (req, res) => {
  let { name, status } = req.body;

  let existCategory = await Category.find({ name });
  console.log(existCategory);

  if (existCategory.length > 0) {
    if (status == "rejected" || status == "waiting") {
      await Category.findOneAndUpdate(
        { name },
        { $set: { isActive: false, status } },
        { new: true }
      );
    } else if (status == "approved") {
      await Category.findOneAndUpdate(
        { name },
        { $set: { isActive: true, status } },
        { new: true }
      );
    }

    console.log(name, status);
  } else {
    res.send({ error: "category not found for update status." });
  }
};

module.exports = { createCategoryController, categoryStatusController };
