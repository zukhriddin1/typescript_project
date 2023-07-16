import express from "express";
import { getGroceries } from "../controller/grocery.controller";

const grocerRoute = express.Router();

grocerRoute.get("/", getGroceries);

export default grocerRoute;
