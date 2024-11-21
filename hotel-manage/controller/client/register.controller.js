
module.exports.index = async (req, res) => {
    try {
        res.render("client/pages/author/register/index", {
            pageTitle: "Register Page"
        });
    } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).send("Internal Server Error"); 
    }
};
