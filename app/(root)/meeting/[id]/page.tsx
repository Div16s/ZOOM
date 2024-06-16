"use client"

const Meeting = ({params}:{params: {id: string}}) => {
    return (
        <div>
            <h1 className='text-blue-500 font-bold'>Meeting Room: #{params.id}</h1>
        </div>
    )
}

export default Meeting