export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':

            return [...state, action.payload];


        case 'delete':

            return state.filter(todo => todo.id !== action.payload);

        case 'toggle':

            let x = state.map( todo=>{

                if(todo.id===action.payload){

                    return {
                        ...todo,
                        done: !todo.done
                    }

                }else{
                    return todo;
                }
             });

            return x.sort( (a,b)=>{
                if(a.done >  b.done){
                    return 1
                } 
                if(a.done < b.done){
                    return -1
                }             
                return 0
            });         

        default:
            return state;
    }

}