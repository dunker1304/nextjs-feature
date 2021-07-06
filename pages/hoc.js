export default (ChildComponent, Layout) => {
  function Hoc(props) {
    return (
      <Layout {...props}>
        <ChildComponent {...props} >

        </ChildComponent>
      </Layout>
    )
  }
  return Hoc
}