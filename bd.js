import { asyncWrapProviders } from 'async_hooks'
import mysql from 'mysql2/promise'

export async function connection(){

    try {
        const connection = await  mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'usuario'  
    })
    
    return connection

    console.log("Conexão realizada!")
        
    } catch (error) {
        console.log("Não conectado!")
        
    }








}