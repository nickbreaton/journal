import React, { Component } from 'react'

import Title from '/imports/ui/components/page/Title'

import Tasks from '/imports/ui/components/account/Tasks'

class YearlyLog extends Component {
    render() {
        return (
            <div>
                <Title>2018</Title>
                <ul className='daily-log'>
                    <Tasks>
                        {tasks => tasks.map(task => (
                            <li key={task._id} className='task'>
                                {task.text}
                            </li>
                        ))}
                    </Tasks>
                </ul>
            </div>
        )
    }
}

export default YearlyLog