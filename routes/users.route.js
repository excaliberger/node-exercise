import express from "express";
import db from "../mockdb"

const router = express.Router();

// requests will reach these routes already matching /api/users

// read user data
// if an id url is provided, get one user, else get all users
router.get("/:id?", async (req, res, next) => {
    try {
        let { id } = req.params
        let data;

        if (id) {
            data = await db.getOne(id);
        } else {
            data = await db.getAll();
        }

        res.json(data);

    } catch (error) {
        next(error);
    }
});

// create new user
// new user data is sent with request body
router.post("/", async (req, res, next) => {
    try {
        let newUser = req.body;
        let data = await db.add(newUser);
        res.json(data);
        
    } catch (error) {
        next(error);
    }
});

// update existing user
// updated user data is sent with request body
// user to be updated is id url parameter
router.put("/:id", async (req, res, next) => {
    try {
        const { id  } = req.params;
        let updatedUser = req.body;
        let data = await db.update(id, updatedUser);
        res.json(data);
    } catch (error) {
        next(error);
    }
});

// delete existing user
// user to be deleted is id url parameter
router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        let data = await db.remove(id);
        res.json(data);
    } catch (error) {
        next(error);
    }
});

export default router;