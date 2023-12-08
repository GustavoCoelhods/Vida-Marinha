exports.index = async (req, res) => {

    try{
        res.render('forca');
    

    }catch(e){
            res.render('404');
            console.log(e);
    }
};