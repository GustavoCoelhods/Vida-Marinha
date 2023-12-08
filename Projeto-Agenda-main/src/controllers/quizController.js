exports.index = async (req, res) => {

    try{
        res.render('quiz');
    

    }catch(e){
            res.render('404');
            console.log(e);
    }
};