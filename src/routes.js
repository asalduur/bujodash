import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import DailyLog from './components/DailyLog'
import MonthlyLog from './components/MonthlyLog'
import Register from './components/Register'
import NewEntry from './components/NewEntry'

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/register' component={Register} />
        <Route path='/dailylog' component={DailyLog} />
        <Route path='/monthlylog' component={MonthlyLog} />
        <Route path='/new' component={NewEntry} />
    </Switch>
)