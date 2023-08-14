export function UseCard({name,amount,married,address,greet}){
    return <div>
            <h1>{name}</h1>
            <p>{amount}</p>
            <p>{married ? 'married' : 'single'}</p>
            <ul>
                <li>City : {address.city}</li>
                <li>address : {address.street}</li>
            </ul>
    </div>
    
}
