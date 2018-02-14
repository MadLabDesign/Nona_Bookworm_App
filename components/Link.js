import { Link } from '../routes'
import A from './HTML/A';
import Button from 'material-ui/Button/Button';

export default ({children, button, href, route, params, ...props}) =>
    (<Link href={href} route={route} params={params}>
        {button ? <Button {...props}>{children}</Button> : <A href="">{children}</A>}
    </Link>)
