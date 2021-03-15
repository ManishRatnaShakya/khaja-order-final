import React, { Component } from "react";

import { Row, Col, Card, CardBody, Container, Table } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {compose} from 'redux';
import {getRestuarantData} from '../../store/Restuarant/actions';
class ViewRestuarant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Restuarant", link : "/dashboard" },
                { title : "View Restuarant", link : "/view-restuarant" },
            ],
        };
    }
    componentDidMount(){
        this.props.onGetRestuarantData();
        console.log("componentDidMount");
        
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Responsive Table" breadcrumbItems={this.state.breadcrumbItems} />

                        <Row>
                            <Col xs={12}>
                                <Card>
                                    <CardBody>
                                    <h4 className="card-title">Example</h4>
                                        <p className="card-title-desc">This is an experimental awesome solution for responsive tables with complex data.</p>

                                        <div className="table-rep-plugin">
                                            <div className="table-responsive mb-0" data-pattern="priority-columns">
                                                <Table id="tech-companies-1" striped bordered responsive>
                                                    <thead>
                                                        <tr>
                                                            <th>Company</th>
                                                            <th data-priority="1">Last Trade</th>
                                                            <th data-priority="3">Trade Time</th>
                                                            <th data-priority="1">Change</th>
                                                            <th data-priority="3">Prev Close</th>
                                                            <th data-priority="3">Open</th>
                                                            <th data-priority="6">Bid</th>
                                                            <th data-priority="6">Ask</th>
                                                            <th data-priority="6">1y Target Est</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            
                                                        </tr>
                                                   
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}


const mapStateToProps =createStructuredSelector({
 

})
const mapDispatchToProps =(dispatch)=>{ 
    return {
        onGetRestuarantData:()=>dispatch(getRestuarantData())
    }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ViewRestuarant);
