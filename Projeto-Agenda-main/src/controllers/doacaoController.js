exports.index = async (req, res) => {

    try{
        res.render('doacao');
    

    }catch(e){
            res.render('404');
            console.log(e);
    }
};