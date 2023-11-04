import Postcard from '../components/Postcard'
import Container from '../components/Container'
import { useEffect, useState } from 'react'
import appwriteservice from '../appwrite/config'

function AllPosts() {
    const [posts, setposts] = useState([])
  useEffect(() => { 
       appwriteservice.getposts([]).then(posts => {
         if (posts) {
           console.log(posts.documents);
           setposts(posts.documents);
         }
       });
  }, [])
   
  
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                      <div key={post.$id} className='p-2 w-1/4'>
                            <Postcard {...post} />
                        </div>
                    ))}
              </div>
            </Container>
        </div>

    )
    
}
export default AllPosts