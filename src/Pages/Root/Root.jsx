
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import Loader from '../../Components/Loader/Loader'

export default function Root() {

  const navigation = useNavigation();

  
    if (navigation.state === "loading") {
      return ( <Loader />)
    }


  return (
    <div className='text-black bg-[#f7f2f2] '>
   
      <div className='bg-white'>
        <Navbar />
      </div>

        <Outlet />
      <Footer />

      <ToastContainer />
    </div>
  )
}
