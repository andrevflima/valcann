import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Conclusao from './pages/conclusao/conclusao';
import Servicos from './pages/servicos/servicos';

class AppRouter extends Component { 
    render() {
        return(
            <div>
                <Router>
                    <Routes>
                        <Route path='/' Component={Servicos}  ></Route>
                        <Route path='/conclusao' Component={Conclusao} ></Route>
                    </Routes>    
                
                </Router> 
            </div>
        )
    }
}

export default AppRouter;