import { NavigationContainer, Navlink } from "./styled-components/Navigation"
import PropTypes from 'prop-types'

export default function Navigation({ children }) {
    return (
        <NavigationContainer>
            {children.map((child,i) => <Navlink key={i}>{child}</Navlink>)}
        </NavigationContainer>
    )
}

Navigation.propTypes = {
    children: PropTypes.array
}