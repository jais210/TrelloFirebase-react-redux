import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Add from './Add';
import { NavLink } from 'react-router-dom';


export const Boards = ({ array }) => {
    return (
        <div>
            <Grid id='boards'>
                <h3 style={{ marginTop: '60px' }}>
                    <i class="fa fa-user"></i>
                    <span> My boards</span>
                </h3>
                <Row>
                    {
                        array && array.map((item, index) => {
                            const path = "/boards/" + (index + 1) + '-' + item.name;
                            return (
                                <Col md={3} sm={3} xs={3} key={index}>
                                    <NavLink to={path}>
                                        <div className='tarea'>
                                            <h4>{item.name}</h4>
                                        </div>
                                    </NavLink>
                                </Col>
                            );
                        })
                    }
                    <Col md={3} sm={3} xs={3} >
                        <Add board />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}


const List = ({ list, board }) => {
    return (
        <div className='tarjeta'>
            <div className='tarea'>
                {
                    list &&
                    <div>
                        <h4>{list.name}</h4>
                        {
                            list.cards && list.cards.map(a => <div className='tareal'>{a}</div>)
                        }
                    </div>
                }

                <Add card={list.name} boardId={board} />
            </div>
        </div>
    );
}

export const BoardDetail = ({ board }) => {
    return (
        <div>
            <Grid >
                <h3 style={{ marginTop: '60px' }}>
                    {board.name}
                </h3>
                <div id='contenido'>
                    {
                        board.list && board.list.map((item, index) => {
                            return (
                                <List list={item} key={index} board={board} />
                            );
                        })
                    }
                    <Add list={board} />
                </div>
            </Grid>
        </div>
    );
}