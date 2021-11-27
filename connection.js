const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://chon:1234@cluster0.l2ti2.mongodb.net/FlutterBlog?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connect db successfully"));