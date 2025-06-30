## **Mega Project - blog Platform**

**libraries used** 

* Appwrite sdk for backend
* rtk and react-router-dom
* html-react-parser
* react-hook-form
* @tinymce/tinymce-react


### 1st step - handle enviornmental variables 
.env are handle differently for different frameworks and libraries 

* for CRA -> REACT_APP_...=xxxc909c

    (process.env.REACT_APP_...)

* for Vite - VITE_...=xxxc89xx

    (import.meta.env.VITE_....)


### Appwrite project setup 

- create new project - "megaBlog"

- get Project ID and API end-point

- create new database "blog"
    - create new collection "articals"
        - Give access to curd operations in settings
        - create Attributes and indexs
            - Attributes 
                > title     {String - 255} <br>
                > content   {String - 255} <br>
                > featuredImage {String - 255} <br>
                > UserId      {String - 255} <br>
                > status      {String - 255} <br>
            - indexs
                > status

- create new Bucket (from storage)
    - Give access to curd operations in settings

get all env variables
```bash
VITE_APPWRITE_PROJECT_ID=''
VITE_APPWRITE_API_ENDPOINT=''
VITE_APPWRITE_DATABASE_ID=''
VITE_APPWRITE_COLLECTION_ID=''
VITE_APPWRITE_BUCKET_ID=''
```    

### step 2 - creating services

appwrite-services/auth.js <br>
appwrite-services/storage.js

> **Vendor lock-in** occurs when a customer becomes dependent on a particular vendor's technology or services, making it difficult or costly to switch to another vendor.

Follow class based approach to create sevices 
 - AuthServices -> (login, logout, signin, getCurrebtUser)
 - Database Services -> Collection -> ( createdocumnet, updateDocumnet, deleteDocumnet, getDocumnets, listDocumnets)
 - Stroage ( bucket ) -> ( uploadFile, deleteFile, getFilePreview ) 


### step 3 - Cnfigure store (using redux-toolkit)
