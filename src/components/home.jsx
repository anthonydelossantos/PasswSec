
import React,{useState} from 'react';
function Home(){
    const [password, setPassword] = useState(); 

    function Generator(){
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+=\|/{}[]:?;.,0123456789';
        var passwd = "";
        for (var i = 0, n = charset.length; i < 8; i++) {
            passwd += charset.charAt(Math.floor(Math.random() * Math.random() * n));
    
        }
        setPassword(passwd);
    }


    return(
        <div className="passw-box">
        <h1 id="title">PasswSec</h1> 
        <div className='passwordPrintBox'><h3>{password}</h3></div>
        <button className="generate-button" onClick={Generator}> Generate</button>

        <p id='descrip'><strong>PasswSec</strong> is a great website where you be able to generate secures passwords.
            <strong>PasswSec</strong> es una pagina web increible en la que eres capaz de generar contraseñas seguras</p>
    </div>
    
    )
}

export default Home;