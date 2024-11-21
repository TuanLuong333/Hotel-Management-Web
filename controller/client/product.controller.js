const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {

    const RoomQuery = await Product.find(find);
    console.log("finishing finding and print obj");

    res.render("client/pages/products/index", {
        pageTitle: "ds sản phẩm",
        Room: RoomQuery
    });
}



