import React, { useState } from 'react'
import TaskTop from './TaskTop'
import { useTaskStore } from '../stores/taskStore'
import TaskCard from './TaskCard';

const MobileBoardView = () => {
    const { tasks } = useTaskStore(s => s);
    const [ updateView, setUpdateView] = useState('To Do')
    const [filteredTask, setFilteredTask] = useState([])
    // function filter(tasks) {
    //     setFilteredTask(tasks.filter(t => t.status === updateView))
    //     return filteredTask
    // }
    // filter(tasks)
  return (
    <section className='md:hidden flex flex-col gap-5'>
        <div className='flex items-center gap-4 overflow-x-scroll scrollBar'>
            <TaskTop
            onChange={setUpdateView}
            show={updateView}
            taskStatus={'To Do'}
            taskQuantity={tasks.filter(t => t.status === 'To Do').length}
            />
            <TaskTop 
            onChange={setUpdateView}
            show={updateView}
            taskStatus={'In Progress'}
            taskQuantity={tasks.filter(t => t.status === 'In Progress').length}
            />
            <TaskTop 
            onChange={setUpdateView}
            show={updateView}
            taskStatus={'Completed'}
            taskQuantity={tasks.filter(t => t.status === 'To Do').length}
            />
        </div>
        {
            tasks.filter(t => t.status === updateView).map((task) => (
                <TaskCard key={task.id} task={task} />
            ))
        }
    </section>
  )
}

export default MobileBoardView