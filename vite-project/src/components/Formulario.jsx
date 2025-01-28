import { useState } from "react";
import Swal from 'sweetalert2'

const Formulario = () => {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: 'pendiente',
        priority: true,
    })

    //Desestructuracion
    const { title, description, state, priority } = todo;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( title, description, state ); //Trim = Limpieza de caracteres
        if ( !title.trim()  || !description.trim()) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Titulo y descripcion necesario',
            })
        }
        addTodo({
            id: Date.now(),
            ...todo,
            state: state === "completado",
        });
    };
    
    const handleChange = (e) => {
        //Desestructuracion
        const { name, type, checked, value } = e.target
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value,
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Ingrese '
                className='form-control mb-2'
                name='title'
                value={title}
                onChange={ handleChange }
            />
            <textarea 
                className= 'form-control mb-2'
                placeholder= 'Ingrese descripcion'
                name='description'
                value={description}
                onChange={ handleChange }
            />
            <div className="form-check">
                <input 
                    type="checkbox" 
                    name="pririty" 
                    className="form-check-input" 
                    id="inputCheck"
                    checked={priority}
                    onChange={ handleChange }
                />
                <label htmlFor="inputCheck"> Dar Prioridad</label>
            </div>
            <select 
                className='form-control mb-2'
                name='state'
                value={state}
                onChange={ handleChange }
            >
                <option value="pendiente"> Pendiente </option>
                <option value="completado"> Completado </option>
            </select>
            <button type="submit" className="btn btn-primary">
                Agregar Todo
            </button>
        </form>
    )
}

export default Formulario;