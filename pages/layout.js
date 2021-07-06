import SideBar from "./sidebar.js"
import FacebookChatPlugin from './chat/chatPlugin'

const Layout = (props) => {

  return (
    <div className="layout">
      <FacebookChatPlugin></FacebookChatPlugin>
      <SideBar></SideBar>
      <div className="main-content">
        {props.children}
      </div>
    </div>
  )
}

export default Layout