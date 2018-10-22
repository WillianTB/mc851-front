import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Grupo 3</h2>
                        <img src="https://images.homedepot-static.com/productImages/9f1f7417-b693-411b-ad13-16b8bf6f6e9d/svn/house-letters-numbers-843143-64_1000.jpg" 
                        alt="avatar"
                        style={{height:'150px'}}/>
                        <p style={{width:'75%', margin:'auto', paddingTop: '1em'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Não Fale Conosco</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (123) 456-789
                                        
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-fax" aria-hidden="true"/>
                                        (123) 456-789
                                        
                                    </ListItemContent>
                                </ListItem>

                                 <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        something@example.com
                                        
                                    </ListItemContent>
                                </ListItem>

                                 <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        skype_id
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                       
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;