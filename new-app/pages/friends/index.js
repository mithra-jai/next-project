import styles from '@/styles/Friends.module.css'
import Link from 'next/link';

export const  getStaticProps=async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data =await res.json() 



    return{
        props:{friends:data}
    }
}



export default function FriendsHome({friends}){
     console.log(friends);
    return (
     <div>
        <h1>All friends..</h1>
        {friends.map(friend=>(
            
               <Link href={'friends/'+friend.id} key={friend.id} className={styles.single}> <h3>{friend.name}</h3> </Link>
            
        ))

        }
     </div>
    );
}