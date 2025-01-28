import { useState } from "react";

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
        console.log(title, description, state);
        if (!title.trim() || !description.trim()) {
            console.log("Datos incompletos");
            return;
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
                Procesar
            </button>
        </form>
    )
}

export default Formulario;