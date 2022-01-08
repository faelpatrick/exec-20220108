import res from "express/lib/response";

class UsersController {

    async index(req, res) { return res.json(); }

    async create(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (user) return res.status(422).json({ message: `User ${email} already exists.` });
            const newUser = await User.create({ email, password });
            return res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "internal server error." });
        }
    }

    async read(req, res) { return res.json(); }
    async update(req, res) { return res.json(); }
    async delete(req, res) { return res.json(); }

}

export default new UsersController();