import { Link } from 'react-router-dom';

function Index(){
    return(
        <>
            <h1>react-hook-form</h1>

            <Link to="/example">Example</Link><br />
            <Link to="/exampleyup">Example with Yup</Link><br />
        </>
    );
}

export default Index;