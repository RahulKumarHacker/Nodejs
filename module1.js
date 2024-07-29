//add function
const add=(a,b)=>{
    return a+b;
}


//multiply function
const mult=(a,b)=>{
    return a*b;
}


module.exports={
    add:add,
    mult:mult
};

/*another way to exports the module
1.module.exports=add;
2.module.exports=mult;

exports.add=(a,b)=>{
    return a+b;
}

 */