import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import users from "./users/users.json"
import statData from "./statistics-data/statistical-data.json"
import FriendList from './components/FriendList/FriendList'
import friends from './friends/friends.json';
import transactions from './transactions/transactions.json'
console.log(friends)



export default function App() {
    return(
    <div>
        <Profile
      name={users.name}
      tag={users.tag}
      location={users.location}
      avatar={users.avatar}
      stats={{
        followers: users.stats.followers,
        views: users.stats.views,
        likes: users.stats.likes,
      }}
        />
        
        <Statistics title="UPLOAD SSTATS" stats={statData} />
        
        <FriendList friends={friends} />
            
        <TransactionHistory transactions={transactions}/>

    </div>)
    
}