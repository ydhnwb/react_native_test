export const getIDJSON = (from, to) => {
    let id = ''
    if(from == 'dhaka'){
        if(to == 'comilla'){
            id = '1109001'
            return id
        }else if(to == 'chittagong'){
            id = '1109001'
            return id
        }else if(to == 'kuakata'){
            id = '1109004'
            return id
        }else if(to == 'coxs bazar'){
            id = '1109005'
            return id
        }else{
            id = '1109006'
            return id
        }
    }else if(from == 'comilla'){
        if(to == 'chittagong'){
            id = '2209002'
            return id
        }else if(to == 'chittagong'){
            id = '2209002'
            return id
        }else {
            id = '2209003'
            return id
        }
    }else{
        if(to == 'mymensingh'){
            id = '3309003'
            return id
        }else if(to == 'dhaka'){
            id = '3309001'
            return id
        }else{
            id = '3309002'
            return id
        }
    }
}