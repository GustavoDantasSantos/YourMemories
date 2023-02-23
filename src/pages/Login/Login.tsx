import './Login.css'

export function LoginPage () {

    function handleLogin() {
        alert('Login successful')
    }

    return (
        <main className='login'>
            
            <section className='login_logo_area'>
            </section>

            <section className='login_access_area'>
                
                <section className='login_access_describe'>
                    <h2>Olá</h2>
                    <p>
                        Informe o seu email previamente cadastrado. Caso não possua um cadastro, 
                        <a href="#">Registe-se aqui!</a>
                    </p>
                </section>

                <section className='login_access_form_area'>
                    <form className='login_acess_form'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    
                        <div className='login_remember_or_forget_pass_area'>
                            <div>
                                <input type="checkbox" name='remember' id='remember'/>
                                <label htmlFor="remember">Lembre-se de mim</label>
                            </div>
                            <a href="#">Esqueceu a senha?</a>
                        </div>
                        <div className='login_actions'>
                            <button type='submit' onClick={() => handleLogin}>Entrar</button>
                                ou
                            <button type='submit' onClick={() => handleLogin}>Entre com o Google</button>
                        </div>
                    </form>
                </section>

            </section>

        </main>
    );
}