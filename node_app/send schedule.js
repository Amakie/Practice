function checkScheduledNotifications(){
    console.log("checking...")
    
    setTimeout(() => { 
      checkScheduledNotifications();
    }, 1000);
  }
  
  checkScheduledNotifications();