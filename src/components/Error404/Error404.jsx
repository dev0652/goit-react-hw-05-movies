import { Link } from 'react-router-dom';
import image404 from 'images/404.jpg';
import { ErrorNo, Image, Wrapper } from './Error404.styled';

export default function Error404() {
  return (
    <Wrapper>
      <Image src={image404} alt="Pile of tangled filmstrip" />

      <div>
        <ErrorNo>404</ErrorNo>
        <p>Sorry, we couldn't find this page.</p>

        <Link to="/">Take me back to the homepage</Link>
      </div>
    </Wrapper>
  );
}
