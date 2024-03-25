const addEventListener = (selector, event, handler) => {
    document.addEventListener(event, async (ev) => {
      if (ev.target.closest(selector)) {
        handler(ev)
      }
    })
}

const errorHandler = async (method) => {
  try{
    await method()
  }catch(ex){
    if(ex.code == 400){
      let messages = '';
      for(let validation_error of ex.data){
        messages += `${validation_error.instancePath.substr(1)} ${validation_error.message}\n`
      }
      alert(messages)
    }else{
      alert(ex.message)
    }
    
    console.log(ex.data)
  }
}