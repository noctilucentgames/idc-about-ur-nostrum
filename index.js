module.exports = function idcAboutUrNostrum(dispatch){
<<<<<<< HEAD
    const ploc = new (require('./lib/playerLocation.js'))(dispatch)  
=======
    const ploc = new (require('../../cat_utils/playerLocation.js'))(dispatch)  
>>>>>>> 11ccbb6f7eb4b22593a56609d1cf367fd024d654
    const abnHook = (event) => {
        if ([860033,860034].indexOf(event.id)>-1 && [9860,9511,9777].indexOf(ploc.getTopo())>-1){
            return false
        }
    }
    dispatch.hook('S_ABNORMALITY_BEGIN', 1, abnHook)
    dispatch.hook('S_ABNORMALITY_END', 1, abnHook)
}