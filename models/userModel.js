const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
    {
        username: String,
        email: String,
        password: String
    }
);

UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

UserSchema.methods.validatePassword = (password,_password) => {
    return bcrypt.compare(password, _password);

}

module.exports = model("User", UserSchema);