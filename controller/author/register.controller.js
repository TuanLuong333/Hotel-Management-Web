const User = require("../../models/address.model"); 

module.exports.index = async (req, res) => {

    const { email, username, password, fullName } = req.body;

    try {

        console.log("entering register controller");

        // Kiểm tra xem username có trùng lặp không
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ msg: "Username already exists" });
        }

        // Kiểm tra xem email có trùng lặp không
        const existingEmail = await User.findOne({ where: { email } });
        if (existingEmail) {
            return res.status(400).json({ msg: "Email already registered" });
        }

        // Tạo người dùng mới và lưu vào database
            const newUser = await User.create({
                email,
                username,
                password,
                fullName, // Trong ứng dụng thực tế, hãy mã hóa mật khẩu trước khi lưu
                role: 'customer',
            });

        console.log(newUser);

        res.status(201).json({ msg: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Error in register:", error);
        res.status(500).json({ msg: "Server error" });
    }
};

module.exports.render = (req, res) => {
    try {
        res.render("author/pages/register/index", {
            pageTitle: "Register Page"
        });
    } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).send("Internal Server Error in register"); 
    }
};
