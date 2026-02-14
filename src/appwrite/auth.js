import conf from "../conf/conf"
import { Client, Account, ID } from "appwrite";

export class AuthServices {
    client = new Client();
    account;
    constructor(){
        this.client.setProject(conf.appwriteProjectId)
        .setEndpoint(conf.appwriteUrl);
        this.account = new Account(this.client);
    }
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                return this.login({email,password})
            }
            else{
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite services :: sign up ::",error);
        }
    }
    async login({email,password}) {
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log("Appwrite services :: login ::", error);
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            if(error.code === 410 || error.type === 'general_unauthorized_scope') return null;
            console.log(`Unauthorized Access:${error}`);
        }
        return null;
    }
    async logout(){
        try{
            return await this.account.deleteSessions();
        }
        catch( error ){
            console.log("Appwrite services :: logout ::",error);
            return null;
        }
    }
}

const authServices = new AuthServices();

export default authServices;
