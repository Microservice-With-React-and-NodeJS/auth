import express from "express";

const router = express.Router();

router.post("/api/users/signin", (req, res) => {
  res.send("Hi there! This is sign in routes");
});
export { router as signinRouter };
