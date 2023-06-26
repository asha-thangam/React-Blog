const mongoose = require("mongoose");

const CategorySchema =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
    },
    {timsestamps:true}
);

module.exports=mongoose.model("Category",CategorySchema);