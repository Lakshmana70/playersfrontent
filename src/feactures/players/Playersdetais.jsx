import React from 'react'
import { useDeleteplayerMutation, useGetplayerdetailQuery } from '../../serviceslayer/playerApi'
import { Link } from 'react-router-dom'

export default function Playersdetais() {
     var {isLoading,data}= useGetplayerdetailQuery()
     console.log(isLoading,data)
     var [deletefn]=useDeleteplayerMutation()
     function deleteplayer(id){
        deletefn(id).then((res)=>console.log(res))
     }
    
  return (
    <div>
     playersdetails
     {
        data?.map((a)=>{
            return(
               <div>
                <h1>{a._id}{a.name}
                <button onClick={()=>deleteplayer(a._id)}>delete</button>
                <Link to={`/playes/${a._id}`}> <button >Edit</button></Link>
                </h1>

                
               </div>
            )
        })
     }
    </div>
  )
}
