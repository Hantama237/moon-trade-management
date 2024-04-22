
/* global io, feathers, moment */
// Establish a Socket.io connection
const socket = io()
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const client = feathers()

client.configure(feathers.socketio(socket)).use('trade', feathers.socketio(socket).service('trade'),{
  methods: ['find', 'get', 'create', 'patch', 'remove','getAccountSummary','addBinanceTrade','calculatePositionSize','getTradeHistory','syncTrade']
})
// Use localStorage to store our login token
client.configure(feathers.authentication())

// Helper to safely escape HTML
const escapeHTML = (str) => str.replace(/&/g, '&amp').replace(/</g, '&lt').replace(/>/g, '&gt')

const formatDate = (timestamp) =>
  new Intl.DateTimeFormat('en-US', {
    timeStyle: 'short',
    dateStyle: 'medium'
  }).format(new Date(timestamp))


// Show the login page
const showLogin = () => {
    document.getElementById('app').innerHTML = loginTemplate()
}

// Retrieve email/password object from the login/signup page
const getCredentials = () => {
    const user = {
        email: document.querySelector('[name="email"]').value,
        password: document.querySelector('[name="password"]').value
    }

    return user
}
  
// "Signup and login" button click handler
addEventListener('#signup', 'click', async () => {
    // For signup, create a new user and then log them in
    const credentials = getCredentials()
    // First create the user
    await client.service('users').create(credentials)
    // If successful log them in
    await login(credentials)
})
  
// "Login" button click handler
addEventListener('#login', 'click', async () => {
    const user = getCredentials()
    await login(user)
})
  
// "Logout" button click handler
addEventListener('#logout', 'click', async () => {
    await client.logout()
    document.getElementById('app').innerHTML = loginTemplate()
})

addEventListener('#new-trade', 'click', async (ev) => {
  errorHandler(async ()=> { 
    let response = await client.service('trade').addBinanceTrade({
      symbol: $('[name="symbol"]').val(),
      entry_price: parseFloat($('[name="entry_price"]').val()),
      stop_loss_price: parseFloat($('[name="stop_loss_price"]').val()),
      take_profit_price: parseFloat($('[name="take_profit_price"]').val()),
      size: 0.002,
    });
    alert(response.message)
    return;
  })
})

addEventListener('.size-trigger', 'keyup', async (ev) => {
  if( !document.querySelector('[name="entry_price"]').value || !document.querySelector('[name="stop_loss_price"]').value){
    return;
  }
  errorHandler(async ()=> { 
    let response = await client.service('trade').calculatePositionSize({
      symbol: document.querySelector('[name="symbol"]').value,
      entry_price: parseFloat(document.querySelector('[name="entry_price"]').value),
      stop_loss_price: parseFloat(document.querySelector('[name="stop_loss_price"]').value),
      take_profit_price: 0,
      size: 0,
    });
    if(response.success){
      $('#risk').text(response.data.risk)
      $('#distance').text(response.data.distance)
      $('#position-size').text(response.data.size)
      $('#position-size').attr('data-size',response.data.size_crypto)
    }
  })
})

// Log in either using the given email/password or the token from storage
const login = async (credentials) => {
  try {
      if (!credentials) {
        // Try to authenticate using an existing token
        await client.reAuthenticate()
      } else {
        // Otherwise log in with the `local` strategy using the credentials we got
        await client.authenticate({
            strategy: 'local',
            ...credentials
        })
      }

      // If successful, show the chat page
      // showChat()
      showTrade()
  } catch (error) {
      console.log(error)
      // If we got an error, show the login page
      showLogin(error)
  }
}
  
// Call login right away so we can show the chat window
// If the user can already be authenticated
login()