import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                setLoading(false);
            }
        })
    }, [])

    if (!authStatus) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap ">
                        <div className="p-2 w-full min-h-96 flex items-center justify-center">
                            <h1 className="text-2xl font-bold hover:text-blue-700 dark:hover:text-blue-600">
                                <Link to={"/login"}>Login to read posts</Link>
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (loading ? (
        <div className="w-full py-8 mt-6 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="relative p-2 w-full min-h-96">
                        <Loader />
                    </div>
                </div>
            </Container>
        </div>
    ) :
        <div className='w-full py-8'>
            <Container>
                {posts.length === 0 ?
                    (
                        <div className="flex flex-wrap">
                            <div className="p-2 w-full min-h-96 flex items-center justify-center">
                                <h1 className="text-2xl font-bold">
                                    No posts available; please check back later.
                                </h1>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className='flex flex-wrap sm:flex-row flex-col'>
                            {posts.map((post) => (
                                <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                                    <PostCard {...post} />
                                </div>
                            ))}
                        </div>
                    )
                }
            </Container>
        </div>
    )
}

export default Home;