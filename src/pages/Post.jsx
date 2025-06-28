import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import "../index.css"
import { Loader } from "../components/Loader";
export default function Post() {
    const [post, setPost] = useState(null);
    const [ imageLoading, setImageLoading ] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    const handleOnImageLoad = () => {
        setImageLoading(false);
    }
    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    {imageLoading && (
                        <Loader />
                    )}  
                    {/* TODO : HANDLE THE IMAGE PROPERLY */}
                    {<img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        onLoad={handleOnImageLoad}
                        className={`rounded-xl max-h-80 object-cover object-center w-full md:w-1/2 lg:w-1/3 transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                    />}
                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3 border-green-500 border-2 font-bold bg-green-600 hover:bg-green-700">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" className="border-red-500 border-2 font-bold bg-red-600 hover:bg-red-700" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}