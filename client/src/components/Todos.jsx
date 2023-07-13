import { useEffect } from 'react'
import { getAllTodos } from '../redux/actions/index';
import { useDispatch } from 'react-redux';

export const Todos = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, []);  
    return (
        <div>Hello from Todo</div>
    )
}

export default Todos;