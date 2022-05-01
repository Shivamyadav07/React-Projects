export function Done({data})
{
    data.map(e=>{
        console.log({e})
        if(e.status===true)
        {
            console.log(e)
            return <div>{e}</div>
        }
    })
} 