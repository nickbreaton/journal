import React, { Component } from 'react'
import moment from 'moment'

import Title from '/imports/ui/components/page/Title'
import AddTask from '/imports/ui/components/task/AddTask'
import Task from '/imports/ui/components/task/Task'

import Tasks from '/imports/ui/components/account/Tasks'

class MonthlyLog extends Component {
    get title() {
        const { year, month } = this.props.match.params
        return moment().year(year).month(month - 1).format('MMMM YYYY')
    }

    render() {
        const { year, month } = this.props.match.params
        const baseMoment = moment().year(year).month(month - 1)
        const firstMoment = baseMoment.clone().date(0)
        const lastMoment = baseMoment.clone().date(baseMoment.daysInMonth())

        const weeks = []
        let week = firstMoment.week()

        while (week <= lastMoment.week()) {
            weeks.push({
                weekNumber: week,
                startDate: moment().day('Sunday').year(year).week(week)
            })
            week++
        }

        return (
            <div>
                <Title>{this.title}</Title>
                <ul className='log'>
                    {weeks.map((week, i) => (
                        <div key={week.weekNumber}>
                            <p>{`Week of ${week.startDate.format('MMMM D, YYYY')}`}</p>
                            <AddTask period='week' {...this.props.match.params} />
                            <Tasks {...this.props.match.params} week={week.weekNumber.toString()}>
                                {tasks => tasks.map(task => (
                                    <Task key={task._id} task={task} tasks={tasks} />
                                ))}
                            </Tasks>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

export default MonthlyLog