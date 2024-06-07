import { useEffect } from 'react'
import { useNavigate, NavigateFunction } from 'react-router-dom';

const Logout = () => {
  let navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    localStorage.removeItem("email");
    setTimeout(() => {
       navigate('/login');
       window.location.reload();
    }, 3000);
  }, []);

  return (
    <div>
      <center>
        <h3>You are logging out...</h3>
      </center>
    </div>
  )
}

export default Logout;