import './App.css'

function App() {
  return (
    <>
<div className='Container'
>
  <div className='Content-Box'>

    <div className='Text-Box'>

    <h1 className='Heading'>Be a Member!</h1>
    <p>Join Member Sekarang Untuk Menikmati Perk LiveStream Seperti :</p>

    <div className='List-Box'>
    <ul>
      <li>Emoji Khusus Membership</li>
      <li>Badge Live Membership</li>
      <li>Live khusus Membership</li>
    </ul>
    </div>

    <div className='Email'>
        <label htmlFor="Email">Email Addres</label>
        <input type="email" id='Email' />
      </div>

      <button type="submit">Submit</button>

    </div>

  </div>

  <div className='Image-Box'>

<div className='img'>

</div>
    
 </div>

</div>
    </>
  )
}

export default App
