
import React, { Component } from 'react';
import styles from './styles';
import { withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ItemList extends Component {
    showList(){
        var result = null;
        const {classes,users}= this.props;
        if (true) {
            result = users.map((user, index) => {
                return (
                    <ListItem key={index} className={classes.listitem}>
                        <ListItemText className={classes.listText1} primary={user.name} />
                        <ListItemText className={classes.listText2} primary={user.value} />
                        <ListItemText className={classes.listText3} primary={user.unit} />
                    </ListItem>
                );
            });
        }
        return result;
    }

    render() {
        const {classes}=this.props;
        return (
            <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
            >
                {this.showList()}
          
            </List>
        );
    }
}
ItemList.propTypes={
    classes:PropTypes.object,
}   
export default withStyles(styles)(ItemList);

