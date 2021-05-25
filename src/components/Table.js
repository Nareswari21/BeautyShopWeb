import React, { Component } from "react"; 
import axios from "axios"; 
import "antd/dist/antd.css"; 
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'

const useStyles = makeStyles({
  table: {
    maxWidth: 400,
    color: '#444',
    border: '1px solid #f2f5f7',
  },
});
const Column = styled.div
`
    display: table-cell;
    text-align: center;
    padding: 20px;
`
const Row2 = styled.div
`
    background-color: #ffff;
    display: table;
    margin: 10px 110px 10px 110px;
    padding:  100px;
    width: 80%;
    table-layout: fixed;
    border-spacing: 2px;
`
const H5 = styled.h5`
 margin: center;
 color:${props => props.color};
 font-size: 50px;
 text-align: center;
`

const Row = styled.div
`
    margin: 10px 110px 10px 110px;
    background-color: #FFB6C1;
    display: table;
    padding:  100px;
    width: 80%;
    table-layout: fixed;
    border-spacing: 2px;
`


export default class BasicTable extends Component{
    constructor(props) {
        super(props); 
        this.state = { 
            tekkom: [], 
            visible: false,
            name: "", 
            price: "", 
            image_link: "", 
        };
    }

    componentDidMount() { 
        axios({ 
            method: "get", 
            url: "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline", 
            headers: { 
                accept: "*/*", 
            }, 
        })
        .then((data) => { 
            console.log(data.data); 
            this.setState({ 
                tekkom: data.data, 
            }); 
        })
        .catch((error) => { 
            console.log(error); 
        }); 
    }

    render() {
        return (
            <TableContainer Component={Paper}>
            <div>
                <H5 color={"DeepPink"}>List of Products!</H5>
            </div>
            <Table className={useStyles.table}>
                <TableHead>
                <Row>
                    <Column align="center">Name</Column>
                    <Column align="center">Price</Column>
                    <Column align="center">Image</Column>
                </Row>
                </TableHead>
                <TableBody>
                {this.state.tekkom.map((results, index) => (
                    <Row2 key={results.id}>
                    <Column align="center">{results.name}</Column>
                    <Column align="center">{results.price}</Column>
                    <Column align="center"><img src={results.image_link}/></Column>
                    </Row2>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        );
    }
}
