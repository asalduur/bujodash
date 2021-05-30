import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import DailyLog from './components/DailyLog'
import Register from './components/Register'

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/register' component={Register} />
        <Route path='/daily' component={DailyLog} />
    </Switch>
)