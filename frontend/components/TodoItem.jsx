import React, { useState } from 'react';
import CheckCircleIcon from '@/assets/icons/CheckCircleIcon';
import DotIcon from '@/assets/icons/DotIcon';
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';
import { Circles } from 'react-loader-spinner';

const TodoItem = ({ todo, getTodos }) => {
    const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
    const [showDetails, setShowDetails] = useState(false);
    const [updateLoader, setUpdateLoader] = useState(false);
    const [deleteLoader, setDeletLoader] = useState(false);
    // Parse the input date string into a Date object
    const date = new Date(todo.createdAt);

    // Define options for formatting
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // Use 12-hour time format
    };

    // Format the date and time
    const formattedDate = date.toLocaleString('en-US', options);




    const updateTask = async () => {
        try {
            // Toggle the isCompleted state when the CheckCircleIcon is clicked
            const updatedTodo = { ...todo, isCompleted: !isCompleted };
            setUpdateLoader(true);
            const response = await axios.put(`http://localhost:5000/api/todos/${todo._id}`, updatedTodo);

            // Check if the update was successful on the server
            if (response.status === 200) {
                setIsCompleted(!isCompleted);
            } else {
                console.error('Todo update failed.');
            }
        } catch (error) {
            console.error('Error updating todo:', error);
        } finally {
            setUpdateLoader(false);
        }
    };

    const deleteTodo = async () => {
        try {
            setDeletLoader(true);
            const response = await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);

            if (response.status === 200) {
                getTodos()
            } else {
                console.error('Todo deletion failed.');
            }
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
        finally {
            setDeletLoader(false)
        }
    };

    return (
        <>
            {deleteLoader ? (
                <div className='flex item-center justify-center p-3'>
                    <Circles
                        height="60"
                        width="60"
                        color="#615336"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            ) : (
                <>
                    <button
                        className="relative focus:outline-none rounded-[7px] font-medium text-sm px-2 py-2.5 text-center inline-flex items-center w-full border-b border-gray-400"
                        type="button"
                    >
                        <span className='w-6 h-6' onClick={updateTask}>
                            {!updateLoader ? (
                                <CheckCircleIcon
                                    stroke='#615336'
                                    fill={isCompleted ? '#615336' : 'transparent'}
                                />
                            ) : (
                                <ColorRing
                                    visible={true}
                                    height={24}
                                    width={24}
                                    ariaLabel="Loading..."
                                    colors={['#7c6f5a']}
                                />
                            )}
                        </span>
                        {todo.name}
                        <span className='w-6 h-6 absolute left-[88%]' onClick={() => setShowDetails(!showDetails)}>
                            <DotIcon />
                        </span>
                    </button>
                    {showDetails && (
                        <div className='w-full bg-white flex flex-col px-2 py-2.5'>
                            <p><span className='font-bold'>Completed: </span>{isCompleted ? 'Completed' : 'Not Completed'}</p>
                            <p><span className='font-bold'>Create At: </span>{formattedDate}</p>
                            <button
                                onClick={deleteTodo}
                                className='text-center w-full bg-red-300 rounded-md p-1.5 mt-1.5 text-red-700'>
                                Delete
                            </button>
                        </div>
                    )}
                </>
            )}
        </>

    );
};

export default TodoItem;
