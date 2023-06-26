"use client";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import PropTypes from 'prop-types'
import { siteConfig } from '@/config/site';

const MainNav = props => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                { siteConfig.nav.map( ( item, index ) => (
                    <NavigationMenuItem key={ index }>
                        <NavigationMenuLink href={ item.href }>
                            { item.title }
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ) ) }
            </NavigationMenuList>
        </NavigationMenu>
    )
}
MainNav.propTypes = {}
export default MainNav
