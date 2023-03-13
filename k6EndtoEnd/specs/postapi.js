import http from 'k6/http'
import {sleep} from 'k6'
import {check} from 'k6'

export const options = {
    vus : 10,
    iterations: 649,
    duration : '30s',
}
export default function(){
    const url = 'https://dummyjson.com/auth/login'
    const payload = JSON.stringify({
        username:'kminchelle',
        password:'0lelplR',
    })

    const params = {
        headers : {
            'Content-Type' : 'application/json'
        },
    }
    const res = http.post(url,payload,params)
    check (res,{
        'is status 200': (r)=>r.status===200,
        'is body contains username':(a)=>a.body.includes('kminchelle'),
    })
    
}