import React, {useEffect} from 'react'

const syntax = () => {
    const [checkBoxValue, setCheckBoxValue] = useState(false);
    useEffect(() => {
        console.log('In EseEffect');
        return () => {
            console.log("In useEffect Cleanup");
            
        }
    },[])
    return (
        <div></div>
    )
}
