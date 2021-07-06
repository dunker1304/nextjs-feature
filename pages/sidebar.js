import { useRouter } from 'next/router'
export default function SideBar() {
  const router = useRouter()
  const handleClick = (path) => {
    console.log(path, 'lcikc path')
    router.push(path)
  }

  return (
    <div className='sidebar'>
      <div className="router" onClick={() => handleClick('/landing-page')}>Landing page</div>
      <div className="router" onClick={() => handleClick('/templates')}>Templates</div>
      <div className="router" onClick={() => handleClick('/statistic')}>Statistic</div>
    </div>
  )
}