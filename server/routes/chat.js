const express = require('express');
const router = express.Router();
const { Chat } = require("../models/Chat");

const { auth } = require("../middleware/auth");

router.get("/getChats", auth, (req, res) => {
        Chat.find()
        .populate("sender")
        .exec((err, chats) => {
            if(err) return res.status(400).send(err);
            res.status(200).send(chats);
            console.log("getChats status set to 200");
        })
});

module.exports = router;
