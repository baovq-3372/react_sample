// import Header from './Header'

function UserLayout({component: Component}) {
  return (
    <div>
      {/* <Header /> */}
      <div className="main">
        <Component />
      </div>
    </div>
  )
}

export default UserLayout;
