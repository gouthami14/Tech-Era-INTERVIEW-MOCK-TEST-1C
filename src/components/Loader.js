import LoaderSpinner from 'react-loader-spinner'

const Loader = () => (
  <div data-testid="loader">
    <LoaderSpinner type="ThreeDots" height={50} width={50} color="#4656a1" />
  </div>
)

export default Loader
