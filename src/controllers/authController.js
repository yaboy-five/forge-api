const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = [];

exports.register = async (req, res) => {
    const { username, password } = req.body;

    const existing = users.find(u => u.username === username);

    if (existing) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({
        username,
        password: hashedPassword
    });

    res.status(201).json({
        message: "Registration successful"
    });
};

exports.login = async (req, res) => {

    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign(
        { username },
        "foodforge-secret",
        { expiresIn: "1h" }
    );

    res.json({
        token,
        username
    });
};