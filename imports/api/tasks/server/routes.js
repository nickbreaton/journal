import { router } from '/server/router'

router.post('/task/create', async (req, res) => {
    Meteor.users.find().fetch().forEach(user => {
        Meteor.runAsUser(user._id, () => {
            Meteor.call('task.create', req.body.text)
        })
    })
    res.send('ok')
})