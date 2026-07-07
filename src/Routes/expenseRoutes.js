const express= require("express")

const expenseRoutes = express.Router();
const {addExpense,getExpense,editExpense,deleteExpense}=require("../Handlers/expenseHandler")

expenseRoutes.get("/getAll",getExpense)
  
expenseRoutes.post("/add",addExpense)
expenseRoutes.put("/edit/:id",editExpense)
expenseRoutes.delete("/delete/:id",deleteExpense)

module.exports = expenseRoutes;  