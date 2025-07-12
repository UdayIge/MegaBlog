import {  useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Input, Select , RTE} from "../index"
import appwriteServices from "../../appwrite/config"
import { useSelector } from 'react-redux'

const PostForm = ({post}) => {
  const navigate = useNavigate();
  const userData = useSelector(state => state.auth.userData);
  const [errors, setErrors] = useState('')
  const {register, handleSubmit, watch, getValues, setValue, control} = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    }
  });

  const submit = async (data) =>{
    setErrors("")
    try{
      if (post) {
        const file = data.image[0] ? await appwriteServices.uploadFile(data.image[0]) : null;
        if (file) {
          appwriteServices.deleteFile(post.featuredImage);
        }
        const dbPost = appwriteServices.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : undefined,
        })

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
      else {
        const file = data.image[0] ? await appwriteServices.uploadFile(data.image[0]) : null;
        debugger;
        console.log(file);    
        if (file) {
          const fileId = file.$id;
          data.featuredImage = fileId;
          const dbPost = await appwriteServices.createPost({
            ...data,
            userId: userData.$id,
          })

          if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
          }
        }
      }
    }
    catch (error) {
      setErrors(error.message || "An error occurred while submitting the form.");
    }
    
  };

  const slugTransform = useCallback((value) => {
    if (value) {
      // Remove invalid chars, allow a-z, A-Z, 0-9, period, hyphen, underscore, and spaces
      let slug = value
        .trim()
        .replace(/[^a-zA-Z0-9.\-_ ]+/g, "") // only valid chars and spaces
        .replace(/\s+/g, "-"); // replace spaces with hyphens

      // Remove leading special chars (period, hyphen, underscore)
      slug = slug.replace(/^[.\-_]+/, "");

      return slug.slice(0, 36);
    }
    return "";
  }, []);

  useEffect(()=>{
    const subscription = watch((value, {name}) =>{
      if(name === "title") setValue("slug", slugTransform(value?.title),{shouldValidate:true});
    })

    return () => {
      subscription.unsubscribe();
    }
  },[watch, setValue, slugTransform]);

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        {errors && <div className='text-red-500'>{errors}</div>}
        <div className="w-full md:w-2/3 px-2">
          <Input
            label="Title :"
            placeholder="Title"
            className="mb-4 dark:bg-slate-700 dark:border-slate-500"
            {...register("title", { required: true })}
          />
          <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4 dark:bg-slate-700 dark:border-slate-500"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
          />
          <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>
        <div className="w-full md:w-1/3 px-2">
          <Input
            label="Featured Image :"
            type="file"
            className="mb-4 dark:bg-slate-700 dark:border-slate-500"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />
          {post && (
            <div className="w-full mb-4">
              <div className="w-full bg-blue-400 font-mono min-h-52 text-center flex items-center justify-center p-6 rounded-lg">
                Featured Image is not displayed here, but it is stored in the database. You can update it by uploading a new image.
              </div>
            </div>
          )}
          <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4 "
            {...register("status", { required: true })}
          />
          <Button type="submit" bgColor={post ? "bg-green-600 hover:bg-green-700 dark:bg-emerald-600 dark:hover:bg-emerald-700" : undefined} 
          className="w-full text-base"
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
    </>
  )
}

export default PostForm;