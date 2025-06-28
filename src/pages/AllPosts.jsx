import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { Loader } from '../components/Loader';

// converting it to my-post

// function AllPosts() {
//     const [posts, setPosts] = useState([])
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         appwriteService.getPosts([]).then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//                 setLoading(false);
//             }
//         })
//     }, [])
//     return (loading ? (
//         <div className="w-full py-8 mt-6 text-center">
//             <Container>
//                 <div className="flex flex-wrap">
//                     <div className="relative p-2 w-full min-h-96">
//                         <Loader />
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     ) :
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap sm:flex-row flex-col'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default AllPosts;