import './App.css'

function App() {
  return (
    <>
     <div className='Box'>
      <h1 className='Contact'>Contact Us</h1>
      <div class="Container">
  <div class="Name">
    <label for="Firstname">Firstname:</label>
    <input type="text" id="Firstname" />
  </div>
  <div class="Name">
    <label for="Lastname">Lastname:</label>
    <input type="text" id="Lastname" />
  </div>
</div>
      <div className='Email'>
        <label htmlFor="Email">Email</label>
        <input type="email" id='Email' />
      </div>
      <div className="help-selection">
  <div className="radio-box">
    <input type="radio" name="help" id="internal" />
    <label htmlFor="internal">Internal help</label>
  </div>
  <div className="radio-box">
    <input type="radio" name="help" id="external" />
    <label htmlFor="external">External help</label>
  </div>
</div>
<div className="message-container">
  <label htmlFor="message">Message:</label>
  <textarea id="message" rows="5" cols="30" />
</div>
<div className="consent-container">
  <input type="checkbox" id="consent" />
  <label for="consent">I consent to being contacted by the team</label>
</div>
      <button type="submit">Submit</button>
     </div>
    </>
  )
}

export default App
