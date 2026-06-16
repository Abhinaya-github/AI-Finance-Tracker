

let expenses = [
    {
        id: 1,
        title: "Food",
        amount: 200
    },
    {"id":5,"title":"education","amount":200}
];
const addExpense =(req,res)=>{
    console.log("add expense working",req.body)
    expenses.push(req.body)
    res.send("Expense Added")
}

const getExpense=(req,res)=>{
    console.log(req.body)
    res.send(expenses)
}
const editExpense=(req,res)=>{
    console.log("edit handler")
    console.log(req.params)
   const id = req.params.id
   console.log(id)
   const expense=expenses.find(expense=>expense.id==id)
   expense.title=req.body.title
   expense.amount=req.body.amount
}

const deleteExpense=(req,res)=>{
    console.log("delete handler")
    const id=req.params.id
    expenses=expenses.filter(expense=>expense.id!=id)
    res.send("deleted ")
}

module.exports={addExpense,getExpense,editExpense,deleteExpense}