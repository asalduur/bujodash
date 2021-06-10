import { Link } from 'react-router-dom'
import Header from './Header'


const Dashboard = () => {
    return (
        <div className='dash'>
            <Header/>
            <div className="dash-daily">
                <div className="link"><Link to='/dailylog'>Daily Logs</Link></div>  
            </div>
            <div className="dash-monthly">
                <div className="link"><Link to='/monthylog'>Monthly Logs</Link></div>  
            </div>
        </div>
    )
}

export default Dashboard