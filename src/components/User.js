//@ts-check
import React from 'react';
import { ListItem, ListItemSecondaryAction, ListItemText, Button, Avatar} from '@material-ui/core';
import OpenIcon from '@material-ui/icons/OpenInNew'
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

class User extends React.Component {
    render() {
        return (
            <ListItem button>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/remy.jpg" />
                <ListItemText primary={`${this.props.name}`} />
                <ListItemSecondaryAction>
                <Button color="secondary" component={Link} to={ROUTES.admin}>View <OpenIcon/></Button> 
                    
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default User;