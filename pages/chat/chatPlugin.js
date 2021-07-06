import React from 'react'

const FacebookChatPlugin = (props) => {
  const loadScript = (d, s, id, language) => {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.async = true;
    js.src = `https://connect.facebook.net/${language}/sdk/xfbml.customerchat.js`;
    // js.src = `https://connect.facebook.net/en_US/sdk/debug.js`
    // js.src = 'https://cdn-script.dunker.dev/fbchat.js'
    
    fjs.parentNode.insertBefore(js, fjs);
  }

  React.useEffect(() => {
    console.log(document.getElementById('fb-root').isSameNode(window.chat), 'mgaigkkkk')
    setTimeout(() => {
      window.chat = document.getElementById('fb-root')
    });
    window.fbAsyncInit = function() {
      FB.init({
        version: 'v4.0',
        autoLogAppEvents: true,
        xfbml: true,
        cookie: true
      });
      // FB.XFBML.parse();
    }
      
    loadScript(document, 'script', 'facebook-jssdk', 'vi_VN')
    
  }, [])

  return (
    <div className="fb-chat-plugin">
      <div id="fb-root"></div>
      <div className="fb-customerchat"
        attribution="setup_tool"
        page_id="350832248858242"
        minimized="false"
        greeting_dialog_display="show"
        greeting_dialog_delay="0"
        logged_in_greeting="Hi! What can we do to support you using Webcake?"
        logged_out_greeting="Chào bạn! Bạn đang cần hỗ trợ gì để sử dụng Webcake thiết kế Landing Page?"
      >
      </div>
    </div>
  )
}

export default FacebookChatPlugin