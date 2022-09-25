import { AppWrap,AppItems, AppColumn } from "components/App.styled";
import { Profile } from "components/Profile/Profile"
import user from 'components/Profile/user.json'
import { Statistics } from "components/Statistics/Statistics";
import data from 'components/Statistics/data.json'
import { FriendList } from "components/FriendList/FriendList";
import friends from 'components/FriendList/friends.json'
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import transactions from 'components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <AppWrap>
      <AppItems>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
          likes={user.stats.likes}
          
        />
        <AppColumn>
        <Statistics
          title="Upload stats"
          stats={data}
        />
        <FriendList
            friends={friends} />
          </AppColumn>
        </AppItems>
        <TransactionHistory
            items={transactions} />
        
    </AppWrap>
    
  );
};
