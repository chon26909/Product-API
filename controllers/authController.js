const { Router } = require("express");
const router = Router();

const User = require("../models/userModel");
const verifyToken = require("../controllers/verifyToken");

const jwt = require("jsonwebtoken");
const config = require("../config");

// router.post("")