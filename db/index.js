import mysql2 from "mysql2";
import config from "../config";

const connection = mysql2.createPool(config.mysql);






export default connection;